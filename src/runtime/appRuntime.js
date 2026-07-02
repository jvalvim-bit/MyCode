import { TASKS_PT } from '../content/tasks.pt.js';
import { TASKS_EN } from '../content/tasks.en.js';
import { EXTRA_QUESTION_BANK_PT } from '../content/extraQuestions.pt.js';
import { EXTRA_QUESTION_BANK_EN } from '../content/extraQuestions.en.js';

/* ---- src/content/tasks.pt.js ---- */
// MyCode educational curriculum.
// Keep this file focused on lesson content only.

// TASKS_PT moved to ./content/*






/* ---- src/content/tasks.en.js ---- */
// MyCode educational curriculum.
// Keep this file focused on lesson content only.

// TASKS_EN moved to ./content/*






/* ---- src/content/extraQuestions.pt.js ---- */
// Auto-extracted from the original MyCode HTML.
// Keep this file focused on educational content only.

// EXTRA_QUESTION_BANK_PT moved to ./content/*


/* ---- src/content/extraQuestions.en.js ---- */
// Auto-extracted from the original MyCode HTML.
// Keep this file focused on educational content only.

// EXTRA_QUESTION_BANK_EN moved to ./content/*


/* ---- src/main.js ---- */
// MyCode runtime in single-file test mode. Content blocks are inlined above.

/* ============================================================
   MyCode — dados das tarefas
   Cada tarefa cobre 1 assunto só. Dentro dela, "layers" (blocos)
   sobem de dificuldade: basico -> basico -> intermediario -> intermediario -> avancado.
   Cada layer tem 1-2 steps. O primeiro step de uma tarefa é sempre "teach".
   Tarefas acumulam: a partir da tarefa 2, os exercícios podem cobrar
   conceitos de tarefas anteriores também.
   ============================================================ */


// TASKS_PT moved to ./content/tasks.pt.js

// TASKS_EN moved to ./content/tasks.en.js
let tasks = TASKS_PT;

(function(){

const STORAGE_KEY = 'codetrilha_progress_v3';
const XP_PER_LEVEL = 100;
const TASK_XP_REWARD = 50;
const PROJECT_XP_REWARD = 200;
const MAX_USER_LEVEL = 100;
const MAX_RANKED_RP = 2400;
const LEVEL_MAX_XP = (MAX_USER_LEVEL - 1) * XP_PER_LEVEL;
const LEVEL_LABEL = { basico: ['básico','basic'], intermediario: ['intermediário','intermediate'], avancado: ['avançado','advanced'] };
function getLevelLabel(level){ const pair = LEVEL_LABEL[level] || [level, level]; return txt(pair[0], pair[1]); }

/* ---------- state ---------- */
function loadState(){
  const defaults = { completed: {}, xp: 0, streak: 0, lastCompletionDate: null, taskScores: {}, attempts: {}, todayCompletions: {}, expandedTaskId: null, selectedModule: null, reviewDue: {}, weakTopics: {}, badges: {}, theme: 'dark', energy: 100, adminUnlocked: false, language: 'pt', studentName: '', selectedPathTaskId: null, lastDailyByteReviewAt: 0, equippedAchievements: [], achievementToastNotified: [] };
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw) return Object.assign(defaults, JSON.parse(raw));
  }catch(e){}
  return defaults;
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
let state = loadState();

function getRawUserXp(){ return Math.max(0, Number(state.xp || 0)); }
function getUserLevelFromXp(xp){
  const normalized = Math.max(0, Math.min(LEVEL_MAX_XP, Number(xp) || 0));
  return Math.min(MAX_USER_LEVEL, Math.max(1, Math.floor(normalized / XP_PER_LEVEL) + 1));
}
function getUserLevel(){ return state.adminUnlocked ? MAX_USER_LEVEL : getUserLevelFromXp(getRawUserXp()); }
function getDisplayUserXp(){ return state.adminUnlocked ? Math.max(getRawUserXp(), LEVEL_MAX_XP) : getRawUserXp(); }
function getUserLevelProgress(){
  if(state.adminUnlocked){ return { level:MAX_USER_LEVEL, current:XP_PER_LEVEL, needed:XP_PER_LEVEL, pct:100, remaining:0 }; }
  const raw = Math.min(getRawUserXp(), LEVEL_MAX_XP);
  const level = getUserLevelFromXp(raw);
  const current = level >= MAX_USER_LEVEL ? XP_PER_LEVEL : raw % XP_PER_LEVEL;
  const pct = level >= MAX_USER_LEVEL ? 100 : Math.round((current / XP_PER_LEVEL) * 100);
  return { level, current, needed:XP_PER_LEVEL, pct, remaining:Math.max(0, XP_PER_LEVEL - current) };
}
function addUserXp(amount){
  const oldXp = getRawUserXp();
  const nextXp = Math.max(0, Math.min(LEVEL_MAX_XP, oldXp + Math.max(0, Number(amount) || 0)));
  state.xp = nextXp;
  return { oldXp, newXp:nextXp, oldLevel:getUserLevelFromXp(oldXp), newLevel:getUserLevelFromXp(nextXp), gained:nextXp - oldXp };
}
function ensureAdminMaxProgress(){
  if(!state.adminUnlocked) return;
  state.xp = Math.max(getRawUserXp(), LEVEL_MAX_XP);
  try{
    const arena = loadArenaState();
    arena.rp = Math.max(Number(arena.rp || 0), MAX_RANKED_RP);
    arena.bestScore = Math.max(Number(arena.bestScore || 0), 150);
    saveArenaState(arena);
  }catch(err){}
}

function getLang(){ return state.language === 'en' ? 'en' : 'pt'; }
function txt(pt, en){ return getLang() === 'en' ? en : pt; }
function normalizeStudentName(value){
  return String(value || '').replace(/\s+/g, ' ').trim().slice(0, 24);
}
function getStudentName(){
  return normalizeStudentName(state.studentName) || txt('Aluno', 'Student');
}
function setStudentName(value){
  state.studentName = normalizeStudentName(value);
  saveState();
  renderProfileWidgets();
  try{ if(typeof renderWorldRankingCard === 'function') renderWorldRankingCard(); }catch(error){}
}
function syncLanguageData(){
  tasks = getLang() === 'en' ? TASKS_EN : TASKS_PT;
  document.documentElement.lang = getLang() === 'en' ? 'en' : 'pt-BR';
}
function setTextById(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = value;
}
function tMastery(key){
  const map={
    novo:['novo','new'], dominado:['dominado','mastered'], aprendido:['aprendido','learned'], revisar:['revisar','review'],
    'passou, mas revise':['passed, but review','passed, but review']
  };
  return (map[key] && txt(map[key][0], map[key][1])) || key;
}
function tDifficulty(key){
  const map={
    'iniciante absoluto':['iniciante absoluto','absolute beginner'], 'básico':['básico','basic'], 'intermediário':['intermediário','intermediate'], 'lógica aplicada':['lógica aplicada','applied logic'], 'desafio':['desafio','challenge']
  };
  return (map[key] && txt(map[key][0], map[key][1])) || key;
}
function tStepLabel(key){
  const map={
    'na prática':['na prática','in practice'], 'atenção':['atenção','attention'],
    'dica':['dica','tip'], 'nível':['nível','level']
  };
  return (map[key] && txt(map[key][0], map[key][1])) || key;
}
function applyLanguage(){
  syncLanguageData();

  setTextById('navModulesBtn', txt('Módulos', 'Modules'));
  setTextById('navReviewBtnTop', txt('Revisão', 'Review'));
  setTextById('navPracticeBtnTop', txt('Prática livre', 'Free practice'));
  setTextById('profileBtnTop', txt('Perfil', 'Profile'));
  setTextById('navResetBtnTop', txt('Limpar progresso', 'Clear progress'));

  const adminBtn = document.getElementById('adminUnlockBtnTop');
  if(adminBtn) adminBtn.textContent = state.adminUnlocked ? txt('Admin ✓', 'Admin ✓') : 'Admin';

  const brandBtn = document.getElementById('brandBtn');
  if(brandBtn) brandBtn.title = txt('Voltar para a página inicial', 'Back to home');

  const backBtn = document.getElementById('lessonFloatingBackBtn');
  if(backBtn){
    const s = backBtn.querySelector('span');
    if(s) s.textContent = txt('voltar ao painel', 'back to panel');
  }

  const langWrap = document.getElementById('languageSwitcher');
  if(langWrap) langWrap.setAttribute('aria-label', txt('Selecionar idioma', 'Select language'));
  const ptBtn = document.getElementById('langPtBtn');
  const enBtn = document.getElementById('langEnBtn');
  if(ptBtn && enBtn){
    ptBtn.classList.toggle('active', getLang() === 'pt');
    enBtn.classList.toggle('active', getLang() === 'en');
    ptBtn.title = txt('Português do Brasil', 'Brazilian Portuguese');
    enBtn.title = txt('Inglês', 'English');
    ptBtn.setAttribute('aria-label', txt('Português do Brasil', 'Brazilian Portuguese'));
    enBtn.setAttribute('aria-label', txt('Inglês', 'English'));
  }

  const themeBtn = document.getElementById('themeToggleTop');
  if(themeBtn){
    const light = state.theme === 'light';
    themeBtn.textContent = getLang() === 'en'
      ? (light ? 'Dark theme' : 'Light theme')
      : (light ? 'Tema escuro' : 'Tema claro');
  }

  updateLandingLanguage();
  updatePanelLanguage();
  updateSidebarLanguage();
}
function setLanguage(lang){
  state.language = lang === 'en' ? 'en' : 'pt';
  saveState();
  applyLanguage();

  if(typeof overlay !== 'undefined' && overlay.classList.contains('show')){
    closeLesson();
  }

  state.selectedModule = null;
  state.selectedPathTaskId = null;
  saveState();

  updateLandingLanguage();
  updatePanelLanguage();
  updateSidebarLanguage();

  if(pagePanel.classList.contains('active')){
    renderTaskGrid();
  }
}


function setHtmlBySelector(selector, value){
  const el = document.querySelector(selector);
  if(el) el.innerHTML = value;
}
function setTextBySelector(selector, value){
  const el = document.querySelector(selector);
  if(el) el.textContent = value;
}
function translateTopicLabel(topic){
  const pt = String(topic || '');
  const map = {
    'fundamentos':'fundamentos', 'variáveis':'variáveis', 'condições':'condições',
    'loops':'loops', 'arrays':'arrays', 'javascript':'JavaScript',
    'valores':'valores', 'funções':'funções', 'objetos':'objetos'
  };
  const en = {
    'fundamentos':'fundamentals', 'variáveis':'variables', 'condições':'conditions',
    'loops':'loops', 'arrays':'arrays', 'javascript':'JavaScript',
    'valores':'values', 'funções':'functions', 'objetos':'objects'
  };
  const key = map[pt] ? pt : pt.toLowerCase();
  return getLang() === 'en' ? (en[key] || pt) : (map[key] || pt);
}

function updatePanelLanguage(){
  document.title = txt('MyCode — aprenda a programar do zero', 'MyCode — learn to code from zero');

  const backHome = document.getElementById('backToLanding');
  if(backHome){
    const svg = backHome.querySelector('svg');
    backHome.innerHTML = (svg ? svg.outerHTML : '') + txt('voltar para a página inicial', 'back to home');
  }
  const resetBtn = document.getElementById('resetBtn');
  if(resetBtn) resetBtn.textContent = txt('Reiniciar progresso', 'Reset progress');

  const heroKicker = document.querySelector('.study-title-area .panel-eyebrow-clean');
  if(heroKicker) heroKicker.textContent = txt('painel de estudos · experiência guiada', 'study dashboard · guided experience');
  const heroTitle = document.querySelector('.study-title-area h1');
  if(heroTitle) heroTitle.textContent = txt('Painel de tarefas', 'Task dashboard');
  const heroText = document.querySelector('.study-title-area p');
  if(heroText) heroText.textContent = txt(
    'Selecione um módulo no topo, acompanhe o progresso geral e avance pelas tarefas em uma interface mais limpa, animada e focada no estudo.',
    'Select a module at the top, track overall progress, and move through tasks in a cleaner, animated, study-focused interface.'
  );
  const overallSpan = document.querySelector('.overall-card-top span');
  if(overallSpan) overallSpan.textContent = txt('progresso geral', 'overall progress');
  const activeDesc = document.getElementById('activeModuleDescription');
  if(activeDesc && !activeDesc.dataset.dynamic) activeDesc.textContent = txt('Selecione um módulo para ver a sequência de tarefas.', 'Select a module to see the task sequence.');

  document.querySelectorAll('img[alt="Byte, mascote do MyCode"], img[alt="Byte, MyCode mascot"]').forEach(img => {
    img.alt = txt('Byte, mascote do MyCode', 'Byte, MyCode mascot');
  });

  const closeLessonBtn = document.getElementById('closeLesson');
  if(closeLessonBtn) closeLessonBtn.setAttribute('aria-label', txt('Fechar', 'Close'));
  const backLessonBtn = document.getElementById('backLessonBtn');
  if(backLessonBtn){
    backLessonBtn.setAttribute('aria-label', txt('Voltar para o painel', 'Back to panel'));
    const s = backLessonBtn.querySelector('span');
    if(s) s.textContent = txt('voltar', 'back');
  }
  const floatingBackBtn = document.getElementById('lessonFloatingBackBtn');
  if(floatingBackBtn){
    floatingBackBtn.setAttribute('aria-label', txt('Voltar para o painel de tarefas', 'Back to the task dashboard'));
    const s = floatingBackBtn.querySelector('span');
    if(s) s.textContent = txt('voltar ao painel', 'back to panel');
  }

  const demoCode = document.querySelector('.demo-code .dc-str');
  if(demoCode) demoCode.textContent = txt('"oi"', '"hi"');
}

function updateSidebarLanguage(){
  setTextBySelector('.byte-side-clean .side-label-clean', txt('Byte recomenda', 'Byte recommends'));

  const adaptiveLabel = document.querySelector('.adaptive-side-card .side-label-clean');
  if(adaptiveLabel) adaptiveLabel.textContent = txt('trilha adaptativa', 'adaptive path');
  const adaptiveBtnStrong = document.querySelector('#adaptivePracticeBtn strong');
  const adaptiveBtnSmall = document.querySelector('#adaptivePracticeBtn small');
  if(adaptiveBtnStrong) adaptiveBtnStrong.textContent = txt('Treinar ponto fraco', 'Train weak point');
  if(adaptiveBtnSmall) adaptiveBtnSmall.textContent = txt('microtarefas guiadas', 'guided microtasks');

  const rankingLabel = document.querySelector('.world-ranking-card .side-label-clean');
  if(rankingLabel) rankingLabel.textContent = txt('ranking mundial', 'world ranking');
  const rankingTitle = document.getElementById('worldRankingTitle');
  if(rankingTitle) rankingTitle.textContent = txt('Top 10 devs de hoje', "Today's top 10 devs");
  const rankingBtnStrong = document.querySelector('#openWorldRankingBtn strong');
  const rankingBtnSmall = document.querySelector('#openWorldRankingBtn small');
  if(rankingBtnStrong) rankingBtnStrong.textContent = txt('Ver ranking completo', 'View full ranking');
  if(rankingBtnSmall) rankingBtnSmall.textContent = txt('classificação geral', 'full leaderboard');

  const profileLabel = document.querySelector('.profile-side-card .side-label-clean');
  if(profileLabel) profileLabel.textContent = txt('perfil do aluno', 'student profile');
  const profileSpans = document.querySelectorAll('.profile-mini-grid span');
  if(profileSpans[0]) profileSpans[0].textContent = txt('nível', 'level');
  if(profileSpans[1]) profileSpans[1].textContent = txt('tarefas', 'tasks');
  if(profileSpans[2]) profileSpans[2].textContent = txt('dominadas', 'mastered');
  if(profileSpans[3]) profileSpans[3].textContent = txt('revisões', 'reviews');

  const badgesLabel = document.querySelector('.badges-side-card .side-label-clean');
  if(badgesLabel) badgesLabel.textContent = txt('conquistas equipadas', 'equipped achievements');

  const dailyLabel = document.querySelector('.daily-clean .side-label-clean');
  if(dailyLabel) dailyLabel.textContent = txt('meta diária', 'daily goal');

  const certLabel = document.querySelector('.cert-clean .side-label-clean');
  if(certLabel) certLabel.textContent = txt('certificados', 'certificates');
}

function updateLandingLanguage(){
  const en = getLang() === 'en';

  setTextBySelector('.hero-copy .eyebrow', txt('trilha guiada de programação', 'guided programming path'));
  setHtmlBySelector('.hero-copy h1', txt(
    'Aprenda a <span class="glow">programar</span><br>do <span class="typewriter" id="typewriter">zero</span>',
    'Learn to <span class="glow">code</span><br>from <span class="typewriter" id="typewriter">zero</span>'
  ));
  window.mycodeTypewriterWords = en ? ['zero', 'logic', 'real code'] : ['zero', 'verdade', 'jeito certo'];

  setHtmlBySelector('.hero-sub', txt(
    'Uma jornada pensada para iniciantes reais: <strong>130 tarefas</strong> divididas em 13 módulos, começando pelo primeiro contato, evoluindo por variáveis, tipos, operadores, decisões, loops, listas, Python, JavaScript, DOM e APIs.',
    'A journey built for real beginners: <strong>130 tasks</strong> across 13 modules, starting from first contact and growing through variables, types, operators, decisions, loops, lists, Python, JavaScript, DOM, and APIs.'
  ));
  setHtmlBySelector('#startBtn', txt('comece agora', 'start now') + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>');
  setTextBySelector('#howBtn', txt('como funciona', 'how it works'));

  const micro = document.querySelectorAll('.hero-microstats .microstat');
  if(micro[0]) micro[0].innerHTML = '<span class="n">130</span> ' + txt('tarefas', 'tasks');
  if(micro[1]) micro[1].innerHTML = '<span class="n">13</span> ' + txt('módulos', 'modules');
  if(micro[2]) micro[2].innerHTML = '<span class="n">100%</span> ' + txt('guiado em português', 'guided in English');

  const features = document.querySelectorAll('.hero-feature');
  const f = en ? [
    ['Learn before answering', 'Each step teaches the concept, shows an example, and reinforces common mistakes.'],
    ['Type like a dev', 'Complete code and answer inside editor/terminal-style exercises.'],
    ['Pass with 4/7', 'Each task requires at least 4 correct answers out of 7 to unlock the next one.']
  ] : [
    ['Aprenda antes de responder', 'Cada fase ensina o conceito, mostra exemplo e reforça o erro comum.'],
    ['Digite como dev', 'Complete código e responda em editor/terminal, como em um ambiente de dev.'],
    ['Passe com 4/7', 'Cada tarefa exige no mínimo 4 acertos em 7 perguntas para liberar a próxima.']
  ];
  features.forEach((el, i) => {
    const strong = el.querySelector('strong');
    const span = el.querySelector('span');
    if(strong && f[i]) strong.textContent = f[i][0];
    if(span && f[i]) span.textContent = f[i][1];
  });

  setTextBySelector('.demo-bar-label', txt('módulo 3 · loops', 'module 3 · loops'));
  setTextBySelector('.demo-kicker', txt('rastreie o código', 'trace the code'));
  setHtmlBySelector('.demo-q', txt('Quantas vezes <span class="demo-hl">"oi"</span> é impresso?', 'How many times is <span class="demo-hl">"hi"</span> printed?'));
  const demoOpts = document.querySelectorAll('.demo-opt');
  if(demoOpts[0]) demoOpts[0].innerHTML = '<span class="demo-letter">A</span>' + txt('2 vezes', '2 times');
  if(demoOpts[1]) demoOpts[1].innerHTML = '<span class="demo-letter">B</span>' + txt('3 vezes', '3 times');
  if(demoOpts[2]) demoOpts[2].innerHTML = '<span class="demo-letter">C</span>' + txt('infinitas vezes', 'infinite times');

  const howSection = document.getElementById('howSection');
  if(howSection){
    howSection.querySelector('.section-eyebrow').textContent = txt('como funciona', 'how it works');
    howSection.querySelector('.section-title').textContent = txt('Como o aprendizado acontece', 'How learning happens');
    const howCards = howSection.querySelectorAll('.how-card');
    const hdata = en ? [
      ['You learn the concept from zero', 'Before answering, you get an explanation built for people who have never coded, with examples and simple language.'],
      ['You practice in short ramps', 'Questions start at the right level and only rise after the previous foundation has been reinforced.'],
      ['You learn with a clear goal', 'Besides XP and streak, each phase requires a minimum score to make sure you really understood.'],
      ['Everything connects', 'The next module reuses what you already mastered, creating a solid base instead of skipping steps.']
    ] : [
      ['Você aprende o conceito do zero', 'Antes de responder, você recebe uma explicação pensada para quem nunca programou, com exemplos e linguagem simples.'],
      ['Você pratica em rampas curtas', 'As perguntas começam no nível certo e só sobem quando o fundamento anterior já foi consolidado.'],
      ['Você aprende com meta clara', 'Além do XP e da sequência, cada fase exige um mínimo de acertos para garantir que você realmente entendeu.'],
      ['Tudo se conecta', 'O módulo seguinte reaproveita o que você já dominou, criando uma base sólida em vez de pular etapas.']
    ];
    howCards.forEach((card, i) => {
      const h = card.querySelector('h3');
      const p = card.querySelector('p');
      if(h && hdata[i]) h.textContent = hdata[i][0];
      if(p && hdata[i]) p.textContent = hdata[i][1];
    });
  }

  const whySection = document.querySelector('#howSection + .section');
  if(whySection){
    whySection.querySelector('.section-eyebrow').textContent = txt('por que assim', 'why this way');
    whySection.querySelector('.section-title').textContent = txt('Feito para quem começa do absoluto zero', 'Made for people starting from absolute zero');
    whySection.querySelector('.section-sub').textContent = txt(
      'A maior parte dos cursos acelera demais. Aqui, cada conceito só aparece quando o anterior já foi explicado, praticado e compreendido.',
      'Most courses move too fast. Here, each concept only appears after the previous one has been explained, practiced, and understood.'
    );
    const whyCards = whySection.querySelectorAll('.why-card');
    const w = en ? [
      ['One concept at a time', 'No dumping several topics at once. Each task works on one main focus and gradually builds student confidence.'],
      ['Ramp-based difficulty', 'Inside each task, difficulty rises in a ramp: first understand, then apply, then combine ideas.'],
      ['No rush, no deadline', 'Study at your own pace. Progress stays saved in the browser and the path continues where you stopped.']
    ] : [
      ['Um conceito por vez', 'Nada de despejar vários assuntos de uma vez. Cada tarefa trabalha um foco principal e vai aumentando a segurança do aluno.'],
      ['Dificuldade em rampa', 'Dentro da tarefa, a dificuldade sobe em rampa: primeiro entender, depois aplicar, depois combinar ideias.'],
      ['Sem pressa, sem prazo', 'Você pode estudar no seu tempo. O progresso fica salvo no navegador e a trilha continua de onde parou.']
    ];
    whyCards.forEach((card, i) => {
      const h = card.querySelector('h3');
      const p = card.querySelector('p');
      if(h && w[i]) h.textContent = w[i][0];
      if(p && w[i]) p.textContent = w[i][1];
    });
  }

  // Module section
  const moduleSection = document.querySelector('.module-section');
  if(moduleSection){
    moduleSection.querySelector('.section-eyebrow').textContent = txt('módulos da trilha', 'path modules');
    moduleSection.querySelector('.section-title').textContent = txt('Uma jornada em 13 módulos', 'A 13-module journey');
    moduleSection.querySelector('.section-sub').textContent = txt(
      'Primeiro você constrói a base, depois escreve JavaScript, entra em Python, cria interfaces com DOM, trabalha dados modernos e fecha com projetos assíncronos.',
      'First you build the foundation, then write JavaScript, enter Python, create DOM interfaces, work with modern data, and finish with async projects.'
    );
    const cards = moduleSection.querySelectorAll('.module-card');
    const moduleNames = [...new Set(tasks.map(t => t.module))];
    const data = moduleNames.map((moduleName, idx) => {
      const meta = getModuleMeta(moduleName);
      const moduleTasks = tasks.filter(t => t.module === moduleName);
      const projectTask = moduleTasks.find(t => t.project);
      return [
        txt('módulo ', 'module ') + String(idx + 1),
        moduleName,
        txt(meta.descriptionPt, meta.descriptionEn),
        [
          txt('10 tarefas progressivas', '10 progressive tasks'),
          txt(meta.tipPt, meta.tipEn),
          projectTask ? projectTask.title : txt('Projeto guiado', 'Guided project')
        ]
      ];
    });
    cards.forEach((card, i) => {
      if(!data[i]) return;
      card.querySelector('.module-chip').textContent = data[i][0];
      card.querySelector('h3').textContent = data[i][1];
      card.querySelector('p').textContent = data[i][2];
      card.querySelectorAll('li').forEach((li, j) => li.textContent = data[i][3][j]);
    });
  }

  const roadmapSection = document.querySelector('#roadmapList')?.closest('.section');
  if(roadmapSection){
    roadmapSection.querySelector('.section-eyebrow').textContent = txt('prévia da trilha', 'path preview');
    roadmapSection.querySelector('.section-title').textContent = txt('Veja só alguns exemplos da jornada', 'A preview of the learning journey');
    roadmapSection.querySelector('.section-sub').textContent = txt(
      'A trilha completa tem 130 tarefas, mas a landing mostra apenas uma amostra para destacar a progressão sem poluir a página.',
      'The full path has 130 tasks, but the landing page shows only a sample to highlight progression without clutter.'
    );
  }

  const faqSection = document.querySelector('#faqList')?.closest('.section');
  if(faqSection){
    faqSection.querySelector('.section-eyebrow').textContent = txt('perguntas frequentes', 'frequently asked questions');
    faqSection.querySelector('.section-title').textContent = txt('Antes de começar', 'Before you start');
    const faq = en ? [
      ['Do I need to know anything before starting?', 'No. The path is made for people who have never written a line of code. The first task starts with what a program, an instruction, and code reading are.'],
      ['Do I need to create an account?', 'No. Your progress, XP, and streak stay saved in this browser. If you clear browser data, the progress is lost.'],
      ['Does it use a specific programming language?', 'You start with logic and fundamentals, move into JavaScript, then study Python and advanced project modules with more confidence.'],
      ['What happens if I make many mistakes?', 'Each task has 3 lives and requires at least 4 correct answers out of 7. If you do not pass, you review and try again.']
    ] : [
      ['Preciso saber alguma coisa antes de começar?', 'Não. A trilha foi pensada para quem nunca escreveu uma linha de código. A primeira tarefa começa explicando o que é um programa, uma instrução e como ler código do zero.'],
      ['Preciso criar uma conta?', 'Não. Seu progresso, XP e sequência ficam salvos neste navegador, sem cadastro nem senha. Se limpar os dados do navegador, o progresso se perde.'],
      ['As tarefas usam uma linguagem de programação específica?', 'Você começa por lógica, depois Python e só então JavaScript, DOM e APIs. Assim cada sintaxe nova reaproveita uma ideia já entendida.'],
      ['O que acontece se eu errar muito?', 'Cada tarefa tem 3 vidas e exige pelo menos 4 acertos em 7 perguntas para passar. Se não alcançar isso, você revisa e tenta novamente.']
    ];
    document.querySelectorAll('#faqList .faq-item').forEach((item, i) => {
      const q = item.querySelector('.faq-q');
      const a = item.querySelector('.faq-a');
      if(q && faq[i]) q.innerHTML = faq[i][0] + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>';
      if(a && faq[i]) a.textContent = faq[i][1];
    });
  }

  setTextBySelector('.final-cta h2', txt('Pronto para começar pelo básico do básico?', 'Ready to start from the absolute basics?'));
  setTextBySelector('.final-cta p', txt('Comece pelo módulo 1 e avance no seu ritmo. Sem cadastro, sem pressão e com progressão realmente didática.', 'Start with module 1 and move at your own pace. No account, no pressure, and a truly guided progression.'));
  setHtmlBySelector('#startBtn2', txt('comece agora', 'start now') + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>');
  setTextBySelector('.site-footer', txt('feito para quem nunca escreveu uma linha de código', 'built for people who have never written a line of code'));

  renderLandingRoadmapPreview();
}

function renderLandingRoadmapPreview(){
  const roadmapList = document.getElementById('roadmapList');
  if(!roadmapList) return;
  roadmapList.innerHTML = '';

  const previewIds = [1, 4, 7, 11, 15, 20, 24, 30, 34, 40, 45, 50, 55, 60, 64, 70, 75, 80, 85, 90];
  const levelTagClass = { basico: 'basico', intermediario: 'intermediario', avancado: 'avancado' };
  const levels = getLang() === 'en'
    ? { basico:'beginner', intermediario:'intermediate', avancado:'advanced' }
    : { basico:'básico', intermediario:'intermediário', avancado:'avançado' };

  previewIds.forEach((id, idx) => {
    const task = tasks.find(t => t.id === id);
    if(!task) return;
    if(idx > 0){
      const connector = document.createElement('div');
      connector.className = 'roadmap-connector compact';
      roadmapList.appendChild(connector);
    }
    const topLevel = task.layers[task.layers.length - 1].level;
    const item = document.createElement('div');
    item.className = 'roadmap-item landing-preview-item';
    item.innerHTML =
      '<div class="roadmap-num">' + String(task.id).padStart(2,'0') + '</div>' +
      '<div class="roadmap-name">' + task.title + '<span>' + task.module + '</span></div>' +
      '<div class="roadmap-tag ' + levelTagClass[topLevel] + '">' + levels[topLevel] + '</div>';
    roadmapList.appendChild(item);
  });

  const more = document.createElement('div');
  more.className = 'roadmap-more-card';
  more.innerHTML =
    '<strong>' + txt('+' + Math.max(0, tasks.length - previewIds.length) + ' tarefas no painel completo', '+' + Math.max(0, tasks.length - previewIds.length) + ' tasks inside the full dashboard') + '</strong>' +
    '<span>' + txt('A landing mostra apenas uma amostra. O restante fica organizado no painel de estudos.', 'The landing page shows only a sample. The rest is organized in the study dashboard.') + '</span>';
  roadmapList.appendChild(more);

  setupReveal('.roadmap-item, .roadmap-more-card', 50);
}

function applyLanguageToVisibleUI(){
  updateLandingLanguage();
  updateSidebarLanguage();
  renderPanelWidgets();
}


/* ---------- flatten task.layers into a single steps[] list for the player ---------- */
function inferTopicFromTask(task){
  const txt = (task.title + ' ' + task.desc + ' ' + task.module + ' ' + (task.eyebrow || '')).toLowerCase();
  if(txt.includes('python') || txt.includes('def ') || txt.includes('print') || txt.includes('dicionário') || txt.includes('dictionary')) return 'python';
  if(txt.includes('array') || txt.includes('lista') || txt.includes('list')) return 'arrays';
  if(txt.includes('loop') || txt.includes('while') || txt.includes('for') || txt.includes('repet')) return 'loops';
  if(txt.includes('objeto') || txt.includes('object') || txt.includes('propriedade') || txt.includes('property')) return 'objetos';
  if(txt.includes('funç') || txt.includes('func') || txt.includes('function') || txt.includes('return')) return 'funções';
  if(txt.includes('cond') || txt.includes('if') || txt.includes('else') || txt.includes('compar') || txt.includes('decision') || txt.includes('decis')) return 'condições';
  if(txt.includes('vari') || txt.includes('variable')) return 'variáveis';
  if(txt.includes('valor') || txt.includes('value') || txt.includes('texto') || txt.includes('text') || txt.includes('número') || txt.includes('numero') || txt.includes('number') || txt.includes('string')) return 'valores';
  if(txt.includes('javascript') || txt.includes('console') || txt.includes('sintaxe') || task.module.includes('JavaScript')) return 'javascript';
  return 'fundamentos';
}


// EXTRA_QUESTION_BANK_PT moved to ./content/extraQuestions.pt.js

// EXTRA_QUESTION_BANK_EN moved to ./content/extraQuestions.en.js
function getExtraQuestionBank(){ return getLang() === 'en' ? EXTRA_QUESTION_BANK_EN : EXTRA_QUESTION_BANK_PT; }

function makeExtraQuestion(task, idx){
  const topic = inferTopicFromTask(task);
  const allBanks = getExtraQuestionBank();
  const bank = allBanks[topic] || allBanks.fundamentos;
  return Object.assign({}, bank[(idx - 1) % bank.length]);
}

function flattenSteps(task){
  const flat = [];
  let questionCount = 0;

  task.layers.forEach((layer, layerIdx) => {
    layer.steps.forEach(step => {
      if(step.type !== 'teach'){
        if(questionCount >= QUESTIONS_PER_LESSON) return;
        questionCount += 1;
      }
      flat.push(Object.assign({}, step, {
        level: layer.level,
        layerIdx,
        questionNumber: step.type === 'teach' ? null : questionCount,
        topic: step.topic || inferTopicFromTask(task)
      }));
    });
  });

  while(questionCount < QUESTIONS_PER_LESSON){
    questionCount += 1;
    flat.push(Object.assign(makeExtraQuestion(task, questionCount), {
      level: questionCount <= 4 ? 'basico' : 'intermediario',
      layerIdx: 99,
      questionNumber: questionCount,
      topic: inferTopicFromTask(task)
    }));
  }

  return flat;
}

/* =========================================================
   PAGE NAVIGATION
   ========================================================= */
const pageLanding = document.getElementById('pageLanding');
const pagePanel = document.getElementById('pagePanel');
const appStats = document.getElementById('appStats');

let pageTransitionLock = false;

function switchPage(fromPage, toPage, afterShow){
  if(pageTransitionLock) return;
  pageTransitionLock = true;

  fromPage.classList.add('page-leaving');

  setTimeout(() => {
    fromPage.classList.remove('active', 'page-leaving');
    toPage.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });

    if(typeof afterShow === 'function') afterShow();

    setTimeout(() => {
      pageTransitionLock = false;
    }, 70);
  }, 240);
}

function goToPanel(){
  const showPanel = () => {
    appStats.style.display = 'flex';
    const hero = document.getElementById('studyHeroClean');
    if(hero && window.__mycodePanelHeroShouldReset !== false){ hero.classList.remove('is-closed'); }
    window.__mycodePanelHeroShouldReset = false;
    renderTaskGrid();
    startByteTipRotation();
    if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();
    setTimeout(() => showDailyByteReview(false), 550);
  };

  if(pagePanel.classList.contains('active')){
    showPanel();
    return;
  }

  switchPage(pageLanding, pagePanel, showPanel);
}

function goToLanding(){
  const showLanding = () => {
    appStats.style.display = 'none';
    window.__mycodePanelHeroShouldReset = true;
    if(byteTipTimer){ clearInterval(byteTipTimer); byteTipTimer = null; }
    if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();
  };

  if(pageLanding.classList.contains('active')){
    showLanding();
    return;
  }

  switchPage(pagePanel, pageLanding, showLanding);
}

document.getElementById('startBtn').addEventListener('click', goToPanel);
document.getElementById('startBtn2').addEventListener('click', goToPanel);
document.getElementById('backToLanding').addEventListener('click', goToLanding);
document.getElementById('brandBtn').addEventListener('click', () => {
  if(typeof overlay !== 'undefined' && overlay.classList.contains('show')){
    closeLesson();
  }
  if(pagePanel.classList.contains('active')) goToLanding();
  else window.scrollTo({ top: 0, behavior: 'smooth' });
});

const startQuickBtn = document.getElementById('startQuickBtn');
if(startQuickBtn) startQuickBtn.addEventListener('click', goToPanel);

const backToLandingTop = document.getElementById('backToLandingTop');
if(backToLandingTop) backToLandingTop.addEventListener('click', goToLanding);

const panelHeroCloseBtn = document.getElementById('panelHeroCloseBtn');
if(panelHeroCloseBtn) panelHeroCloseBtn.addEventListener('click', () => {
  const hero = document.getElementById('studyHeroClean');
  if(hero) hero.classList.add('is-closed');
});

const navModulesBtn = document.getElementById('navModulesBtn');
if(navModulesBtn) navModulesBtn.addEventListener('click', () => {
  goToPanel();
  setTimeout(() => document.getElementById('moduleProgressBoard')?.scrollIntoView({behavior:'smooth', block:'start'}), 50);
});

const navReviewBtnTop = document.getElementById('navReviewBtnTop');
if(navReviewBtnTop) navReviewBtnTop.addEventListener('click', () => {
  goToPanel();
  setTimeout(() => startReview(), 70);
});

const navPracticeBtnTop = document.getElementById('navPracticeBtnTop');
if(navPracticeBtnTop) navPracticeBtnTop.addEventListener('click', () => {
  goToPanel();
  setTimeout(() => startFreePractice(), 70);
});

const navResetBtnTop = document.getElementById('navResetBtnTop');
if(navResetBtnTop) navResetBtnTop.addEventListener('click', () => {
  document.getElementById('resetBtn')?.click();
});

const langPtBtn = document.getElementById('langPtBtn');
const langEnBtn = document.getElementById('langEnBtn');
if(langPtBtn) langPtBtn.addEventListener('click', () => setLanguage('pt'));
if(langEnBtn) langEnBtn.addEventListener('click', () => setLanguage('en'));

const themeToggleTop = document.getElementById('themeToggleTop');
if(themeToggleTop) themeToggleTop.addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  saveState();
  applyTheme();
  const adminBtn = document.getElementById('adminUnlockBtnTop');
  if(adminBtn) adminBtn.textContent = state.adminUnlocked ? 'Admin ✓' : 'Admin';
});

const profileBtnTop = document.getElementById('profileBtnTop');
if(profileBtnTop) profileBtnTop.addEventListener('click', () => {
  goToPanel();
  setTimeout(() => document.querySelector('.profile-side-card')?.scrollIntoView({behavior:'smooth', block:'center'}), 80);
});

const adminUnlockBtnTop = document.getElementById('adminUnlockBtnTop');
if(adminUnlockBtnTop) adminUnlockBtnTop.addEventListener('click', () => {
  state.adminUnlocked = true;
  ensureAdminMaxProgress();
  saveState();
  adminUnlockBtnTop.textContent = 'Admin ✓';
  renderTopStats();
  renderProfileWidgets();
  renderAchievementsModal();
  goToPanel();
  renderArenaCard();
  renderTaskGrid();
});


/* =========================================================
   TASK GRID (panel)
   ========================================================= */
const taskGrid = document.getElementById('taskGrid');

const BYTE_IMAGE_SRC = './assets/byte.png';
const RANKED_IMAGE_SRC = './assets/generated/media-01-d7c0575841.webp';
const RANKED_VIDEO_SRC = './assets/ranked-video.mp4';

function getStepCoachTip(step){
  if(!step) return txt('Leia com calma. Primeiro entenda o enunciado, depois olhe o código.', 'Read calmly. First understand the prompt, then look at the code.');
  const q = String(step.q || '').toLowerCase();
  const hint = step.hint ? String(step.hint) : '';

  if(step.type === 'fill'){
    if(step.answer === '__ANY_TEXT__') return txt('Aqui a resposta é livre: escreva uma mensagem ou texto válido para completar o código.', 'Here the answer is open: write a message or valid text to complete the code.');
    if(hint) return hint;
    return txt('Olhe o espaço destacado e complete apenas a parte que falta na linha.', 'Look at the highlighted space and complete only the missing part of the line.');
  }

  if(step.type === 'text'){
    if(hint) return hint;
    return txt('Responda com a palavra principal do conceito. Não precisa escrever uma frase longa.', 'Answer with the main concept word. You do not need to write a long sentence.');
  }

  if(step.type === 'mc'){
    if(step.mode === 'sequence') return txt('Monte a linha com os blocos na ordem certa. Primeiro vem a palavra-chave, depois o nome, depois o sinal e o valor.', 'Build the line with the blocks in the correct order. First comes the keyword, then the name, then the equals sign, then the value.');
    if(step.codeTemplate) return txt('Toque no trecho que completa a lacuna. Observe se o valor precisa ser número, texto ou nome de variável.', 'Tap the fragment that completes the blank. Notice whether the value must be a number, text, or a variable name.');
    if(step.codeLines || step.code) return txt('Leia o código de cima para baixo. Depois toque na resposta que combina com o resultado.', 'Read the code from top to bottom. Then tap the answer that matches the result.');
    if(q.includes('string') || q.includes('texto')) return txt('Procure aspas. Em JavaScript, texto normalmente aparece entre aspas.', 'Look for quotation marks. In JavaScript, text usually appears inside quotes.');
    if(q.includes('variável') || q.includes('variavel') || q.includes('variable')) return txt('Procure o nome e o valor guardado. Variável é uma caixinha com nome.', 'Look for the name and the stored value. A variable is a named box.');
    if(q.includes('console.log')) return txt('console.log mostra no console o valor ou a mensagem que está dentro dos parênteses.', 'console.log shows in the console the value or message inside the parentheses.');
    if(q.includes('if') || q.includes('else') || q.includes('condição') || q.includes('condition')) return txt('Leia a condição como uma pergunta de verdadeiro ou falso.', 'Read the condition as a true-or-false question.');
    if(q.includes('array') || q.includes('lista') || q.includes('list')) return txt('Lembre que arrays começam no índice 0 em JavaScript.', 'Remember that arrays start at index 0 in JavaScript.');
    return txt('Elimine as opções que não seguem o conceito da tarefa. A resposta certa sempre respeita o código mostrado.', 'Eliminate the options that do not follow the task concept. The correct answer always matches the code shown.');
  }

  return txt('Leia o enunciado e rastreie o código linha por linha.', 'Read the prompt and trace the code line by line.');
}

function renderLessonByteCoach(step){
  const side = Math.random() > 0.5 ? 'side-right' : 'side-left';
  return '<div class="lesson-byte-coach ' + side + '">' +
    '<div class="lesson-byte-avatar"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
    '<div class="lesson-byte-bubble"><strong>' + txt('Byte dá a dica', 'Byte gives a tip') + '</strong><span>' + getStepCoachTip(step) + '</span></div>' +
  '</div>';
}

const BYTE_TIPS = [
  'Comece pela tarefa disponível mais antiga. A trilha foi pensada para construir uma base sem pular etapas.',
  'Se você passou com 4/7, avance, mas volte depois para revisar. Domínio real vem com repetição.',
  'Leia o enunciado antes de olhar as alternativas. Isso treina raciocínio, não só reconhecimento visual.',
  'Quando errar, tente explicar em voz alta por que a resposta certa funciona. Isso fixa muito mais.',
  'Em programação, ordem importa. Sempre pergunte: “o que acontece primeiro?”',
  'Variável é uma caixinha com nome. Procure sempre o nome e o valor guardado nela.',
  'Antes de escrever código, descreva o passo a passo em português simples.',
  'Use a prática livre quando quiser reforçar o conteúdo já liberado sem alterar sua progressão.',
  'Se uma tarefa está bloqueada, ela depende da anterior. Isso evita avançar sem base.',
  'O objetivo não é correr. É entender o suficiente para prever o que o código vai fazer.',
  'Ao estudar JavaScript, diferencie texto com aspas de número sem aspas. Esse detalhe evita muitos erros.',
  'Loops ficam mais fáceis quando você acompanha o contador volta por volta.'
];


const BYTE_TIPS_EN = [
  'Before writing code, describe the step by step in simple English.',
  'If you passed with 4/7, move on, but review later. Real mastery comes from repetition.',
  'Read the prompt before looking at the options. This trains reasoning, not guessing.',
  'When you get it wrong, explain out loud why the correct answer works.',
  'In programming, order matters. Ask: “what happens first?”',
  'A variable is a named box. Always look for the name and the stored value.',
  'Use free practice when you want to reinforce content without changing progression.',
  'If a task is locked, it depends on the previous one. This protects your foundation.',
  'The goal is not speed. It is understanding enough to predict what the code will do.',
  'In JavaScript, text with quotes is different from numbers without quotes.'
];

let byteTipIndex = 0;
let byteTipTimer = null;

function getCoachTip(){
  const list = getLang() === 'en' ? BYTE_TIPS_EN : BYTE_TIPS;
  return list[byteTipIndex % list.length];
}

function renderByteTip(nextTip){
  const byteCoachTip = document.getElementById('byteCoachTip');
  if(!byteCoachTip) return;
  byteCoachTip.classList.add('tip-changing');
  setTimeout(() => {
    byteCoachTip.textContent = nextTip;
    byteCoachTip.classList.remove('tip-changing');
  }, 220);
}

function startByteTipRotation(){
  const byteCoachTip = document.getElementById('byteCoachTip');
  if(!byteCoachTip) return;

  renderByteTip(getCoachTip());

  if(byteTipTimer) clearInterval(byteTipTimer);
  byteTipTimer = setInterval(() => {
    if(!pagePanel.classList.contains('active')) return;
    const list = getLang() === 'en' ? BYTE_TIPS_EN : BYTE_TIPS;
    byteTipIndex = (byteTipIndex + 1) % list.length;
    renderByteTip(getCoachTip());
  }, 3000);
}

function shouldShowDailyByteReview(){
  const now = Date.now();
  const last = Number(state.lastDailyByteReviewAt || 0);
  return !last || (now - last) >= 8 * 60 * 60 * 1000;
}

function getDailyByteMessages(){
  const weakKeys = Object.keys(state.weakTopics || {}).sort((a, b) => (state.weakTopics[b] || 0) - (state.weakTopics[a] || 0));
  const weak = weakKeys[0];
  const moduleName = state.selectedModule || (tasks[0] && tasks[0].module) || '';
  const reviewPt = weak
    ? 'Revise ' + weak + '. Esse tema apareceu nos seus erros recentes e merece uma passada rápida.'
    : 'Revise a base antes de avançar. A trilha funciona melhor quando cada passo fica claro.';
  const reviewEn = weak
    ? 'Review ' + weak + '. This topic appeared in your recent mistakes and deserves a quick pass.'
    : 'Review the foundation before moving on. The path works better when each step is clear.';
  return {
    title: txt('Olá, João Victor Alvim! 👋', 'Hello, João Victor Alvim! 👋'),
    intro: txt('Que tal revisar alguns pontos importantes hoje?', 'How about reviewing a few important points today?'),
    impact: txt('Pequenas revisões diárias fazem uma grande diferença na sua evolução.', 'Small daily reviews make a big difference in your progress.'),
    subtitle: txt('Aqui estão algumas coisas que podem te ajudar a ir ainda mais longe:', 'Here are a few things that can help you go even further:'),
    reviewTitle: txt('Revise conceitos básicos', 'Review core concepts'),
    reviewBody: txt(reviewPt, reviewEn),
    practiceTitle: txt('Pratique um pouco de código', 'Practice a little code'),
    practiceBody: txt('Pequenas práticas diárias geram grandes resultados.', 'Small daily practice creates big results.'),
    goalTitle: txt('Mantenha a consistência', 'Keep your consistency'),
    goalBody: txt('Estude um pouco a cada 8 horas e veja sua evolução decolar.', 'Study a little every 8 hours and watch your progress take off.'),
    button: txt('Entendi, vamos continuar!', 'Got it, let’s continue!'),
    next: txt('Próxima mensagem em 8h', 'Next message in 8h'),
    module: moduleName
  };
}

function ensureDailyByteModal(){
  let modal = document.getElementById('dailyByteModal');
  if(modal) return modal;
  modal = document.createElement('div');
  modal.id = 'dailyByteModal';
  modal.className = 'daily-byte-modal';
  modal.innerHTML = '<div class="daily-byte-card" role="dialog" aria-modal="true"><div class="daily-byte-progress"><span></span></div><div class="daily-byte-content" id="dailyByteContent"></div></div>';
  document.body.appendChild(modal);
  return modal;
}

function renderDailyBytePage(page){
  const modal = ensureDailyByteModal();
  const content = document.getElementById('dailyByteContent');
  const messages = getDailyByteMessages();
  const progress = modal.querySelector('.daily-byte-progress span');
  if(progress) progress.style.width = '28%';

  content.innerHTML =
    '<div class="daily-byte-dashboard">' +
      '<div class="daily-byte-hero">' +
        '<div class="daily-byte-bubble daily-welcome">' +
          '<p><strong>' + messages.title + '</strong></p>' +
          '<p>' + messages.intro + '</p>' +
          '<p>' + messages.impact.replace('grande diferença', '<em>grande diferença</em>').replace('big difference', '<em>big difference</em>') + '</p>' +
        '</div>' +
        '<div class="daily-byte-stage"><img class="daily-byte-mascot daily-main" src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
        '<p class="daily-byte-subtext">' + messages.subtitle + '</p>' +
      '</div>' +
      '<div class="daily-byte-actions">' +
        '<button type="button" class="daily-byte-tip-card review" data-daily-action="review"><span class="daily-byte-tip-icon">◌</span><span><strong class="daily-byte-tip-title">' + messages.reviewTitle + '</strong><p>' + messages.reviewBody + '</p></span><span class="daily-byte-chevron">›</span></button>' +
        '<button type="button" class="daily-byte-tip-card code" data-daily-action="practice"><span class="daily-byte-tip-icon">&lt;/&gt;</span><span><strong class="daily-byte-tip-title">' + messages.practiceTitle + '</strong><p>' + messages.practiceBody + '</p></span><span class="daily-byte-chevron">›</span></button>' +
        '<button type="button" class="daily-byte-tip-card goal" data-daily-action="goal"><span class="daily-byte-tip-icon">◎</span><span><strong class="daily-byte-tip-title">' + messages.goalTitle + '</strong><p>' + messages.goalBody + '</p></span><span class="daily-byte-chevron">›</span></button>' +
      '</div>' +
      '<button type="button" class="daily-byte-btn daily-continue" id="dailyByteCloseBtn">▣ ' + messages.button + '</button>' +
      '<div class="daily-byte-next-note">◷ ' + messages.next + '</div>' +
    '</div>';

  document.querySelectorAll('[data-daily-action]').forEach(btn => {
    btn.onclick = closeDailyByteReview;
  });
  document.getElementById('dailyByteCloseBtn').onclick = closeDailyByteReview;
}

function showDailyByteReview(force = false){
  if(!force && !shouldShowDailyByteReview()) return;
  const modal = ensureDailyByteModal();
  renderDailyBytePage(1);
  modal.classList.add('show');
  document.documentElement.classList.add('daily-byte-open');
  document.body.classList.add('daily-byte-open');
  if(!force){
    state.lastDailyByteReviewAt = Date.now();
    saveState();
  }
}

function closeDailyByteReview(){
  const modal = document.getElementById('dailyByteModal');
  if(modal) modal.classList.remove('show');
  document.documentElement.classList.remove('daily-byte-open');
  document.body.classList.remove('daily-byte-open');
}

function isUnlocked(taskId){
  if(state.adminUnlocked) return true;
  if(taskId === 1) return true;
  return !!state.completed[taskId - 1];
}

function bumpStat(el){
  el.classList.remove('bump');
  void el.offsetWidth;
  el.classList.add('bump');
}

function renderTopStats(){
  const streakEl = document.getElementById('streakCount');
  if(streakEl) streakEl.textContent = state.streak;
  const levelInfo = getUserLevelProgress();
  const xpCount = document.getElementById('xpCount');
  if(xpCount) xpCount.textContent = 'Lv. ' + levelInfo.level;
  const xpDetail = document.getElementById('xpDetail');
  if(xpDetail) xpDetail.textContent = levelInfo.current + '/' + levelInfo.needed + ' XP';
  const totalDone = Object.keys(state.completed).filter(k => tasks.some(t => String(t.id) === String(k))).length;
  const progressChip = document.getElementById('progressChip');
  if(progressChip) progressChip.textContent = totalDone + '/' + tasks.length;
}


function getTodayKey(){
  return new Date().toDateString();
}
function isFundamentalsModule(module){
  return module.includes('Fundamentos') || module.includes('Fundamentals');
}
function isIntroJsModule(module){
  return module.includes('Introdução') || module.includes('Introduction');
}
function getModuleIndex(module){
  const modules = [...new Set(tasks.map(t => t.module))];
  const idx = modules.indexOf(module);
  return idx >= 0 ? idx : 0;
}
function getModuleMeta(module){
  const metas = [
  {
    "icon": "01",
    "color": "#15D696",
    "descriptionPt": "Antes de aprender linguagem, você treina algoritmo, entrada, processamento, saída, variáveis, operadores, decisões, loops e coleções.",
    "descriptionEn": "Before learning a language, you train algorithms, input, processing, output, variables, operators, decisions, loops, and collections.",
    "tipPt": "Comece aqui: este módulo ensina a pensar como programador antes de qualquer linguagem.",
    "tipEn": "Start here: this module teaches how to think like a programmer before any language."
  },
  {
    "icon": "PY",
    "color": "#4CC9F0",
    "descriptionPt": "Primeiro contato com Python: terminal, print, aspas, números, variáveis, input, conversões e contas simples.",
    "descriptionEn": "First contact with Python: terminal, print, quotes, numbers, variables, input, conversions, and simple arithmetic.",
    "tipPt": "Python começa comparando ESCREVA com print para não pular a ponte da lógica.",
    "tipEn": "Python starts by comparing WRITE with print so the logic bridge is not skipped."
  },
  {
    "icon": "IF",
    "color": "#8BE36B",
    "descriptionPt": "Python começa a decidir e repetir: booleanos, comparações, if, else, elif, operadores lógicos, while, for e range.",
    "descriptionEn": "Python starts making decisions and repeating: booleans, comparisons, if, else, elif, logical operators, while, for, and range.",
    "tipPt": "Decida e repita só depois de dominar valor, variável, entrada e conversão.",
    "tipEn": "Decide and repeat only after mastering value, variable, input, and conversion."
  },
  {
    "icon": "LIST",
    "color": "#A7F070",
    "descriptionPt": "Python começa a organizar muitos dados: listas, índices, append, len, dicionários, listas de dicionários e f-string.",
    "descriptionEn": "Python starts organizing many values: lists, indexes, append, len, dictionaries, lists of dictionaries, and f-strings.",
    "tipPt": "Aqui você aprende a guardar muitos dados sem criar uma variável para cada item.",
    "tipEn": "Here you learn to store many values without creating one variable for each item."
  },
  {
    "icon": "DEF",
    "color": "#F77FBE",
    "descriptionPt": "Python fica mais organizado: def, parâmetros, return, escopo, composição simples, try/except e arquivos básicos.",
    "descriptionEn": "Python becomes more organized: def, parameters, return, simple scope, small composition, try/except, and basic files.",
    "tipPt": "Este módulo fecha a base Python organizando código em funções e tratando erros simples.",
    "tipEn": "This module closes the Python base by organizing code into functions and handling simple errors."
  },
  {
    "icon": "JS",
    "color": "#FFB627",
    "descriptionPt": "JavaScript aparece depois da lógica e do Python: console, console.log, let, const, texto, número, concatenação e template string.",
    "descriptionEn": "JavaScript comes after logic and Python: console, console.log, let, const, text, numbers, concatenation, and template strings.",
    "tipPt": "JavaScript entra depois de Python para comparar ideias já conhecidas com nova sintaxe.",
    "tipEn": "JavaScript comes after Python to compare known ideas with new syntax."
  },
  {
    "icon": "{}",
    "color": "#7A8CFF",
    "descriptionPt": "Aplicação da lógica em JavaScript: if, else, booleanos, arrays, índices, objetos, loops, funções e return.",
    "descriptionEn": "Applying logic in JavaScript: if, else, booleans, arrays, indexes, objects, loops, functions, and return.",
    "tipPt": "Use este módulo para aplicar a lógica em estruturas reais de JavaScript.",
    "tipEn": "Use this module to apply logic in real JavaScript structures."
  },
  {
    "icon": "DOM",
    "color": "#36D1DC",
    "descriptionPt": "A lógica vira tela: DOM, querySelector, textContent, classList, eventos, input.value, renderização e validação.",
    "descriptionEn": "Logic becomes an interface: DOM, querySelector, textContent, classList, events, input.value, rendering, and validation.",
    "tipPt": "Aqui a lógica começa a alterar elementos visuais na página.",
    "tipEn": "Here logic starts changing visual elements on the page."
  },
  {
    "icon": "API",
    "color": "#FF6B5B",
    "descriptionPt": "Dados e internet: map, filter, reduce, sort, desestruturação, spread, JSON, Promise, fetch, async/await e try/catch.",
    "descriptionEn": "Data and the internet: map, filter, reduce, sort, destructuring, spread, JSON, Promise, fetch, async/await, and try/catch.",
    "tipPt": "Este é o módulo mais avançado: pense em dados, tempo, erro e resposta da API.",
    "tipEn": "This is the most advanced module: think about data, time, error, and API response."
  }
];
  return metas[getModuleIndex(module)] || metas[0];
}
function getModuleColor(module){ return getModuleMeta(module).color; }
function getModuleIcon(module){ return getModuleMeta(module).icon; }
function getModuleDescription(module){
  const meta = getModuleMeta(module);
  return txt(meta.descriptionPt, meta.descriptionEn);
}
function getModuleTip(module){
  const meta = getModuleMeta(module);
  return txt(meta.tipPt, meta.tipEn);
}

function moduleTaskStats(module){
  const list = tasks.filter(t => t.module === module);
  const done = list.filter(t => !!state.completed[t.id]).length;
  return { list, done, total: list.length, pct: list.length ? Math.round(done / list.length * 100) : 0 };
}
function getScore(taskId){
  const raw = Number(state.taskScores && state.taskScores[taskId] ? state.taskScores[taskId] : 0);
  if(raw === 0 && state.completed && state.completed[taskId]) return PASSING_SCORE;
  return raw;
}
function getMastery(task){
  const score = getScore(task.id);
  if(!state.completed[task.id]) return { cls:'status-new', label:txt('novo','new'), detail:'0/' + QUESTIONS_PER_LESSON, color:'#5B9BFF' };
  if(score >= 7) return { cls:'mastery-dom', label:txt('dominado','mastered'), detail:'7/7', color:'#7DF9CC' };
  if(score >= 6) return { cls:'mastery-learned', label:txt('aprendido','learned'), detail:score + '/7', color:'#15D696' };
  return { cls:'mastery-review', label:txt('revisar','review'), detail:score + '/7', color:'#FFB627' };
}
function getDifficultyLabel(task){
  const moduleIdx = getModuleIndex(task.module) + 1;
  if(moduleIdx <= 1) return txt('iniciante absoluto','absolute beginner');
  if(moduleIdx <= 3) return txt('lógica aplicada','applied logic');
  if(moduleIdx <= 6) return txt('python progressivo','progressive Python');
  if(moduleIdx <= 8) return txt('projeto avançado','advanced project');
  return txt('desafio final','final challenge');
}
function getTaskPreview(task){
  const q = [];
  task.layers.forEach(layer => layer.steps.forEach(step => {
    if(step.type === 'teach' && q.length < 3) q.push(step.title.replace(/<[^>]*>/g,''));
  }));
  return q.length ? q.slice(0,3) : [task.eyebrow, txt('7 perguntas','7 questions'), txt('mín. 4 acertos','min. 4 correct')];
}
function isReviewDue(taskId){
  const due = state.reviewDue && state.reviewDue[taskId];
  if(!due) return false;
  return new Date(due).getTime() <= Date.now();
}
function getReviewTasks(){
  return tasks.filter(t => {
    const score = getScore(t.id);
    return state.completed[t.id] && (score < 5 || isReviewDue(t.id));
  });
}
function getAvailablePracticeQuestions(){
  const maxUnlocked = tasks.filter(t => isUnlocked(t.id)).map(t => t.id);
  const upto = maxUnlocked.length ? Math.max.apply(null, maxUnlocked) : 1;
  const pool = [];
  tasks.filter(t => t.id <= upto).forEach(t => {
    flattenSteps(t).forEach(s => { if(s.type !== 'teach') pool.push(Object.assign({}, s, { sourceTitle:t.title, sourceId:t.id })); });
  });
  return pool;
}
function shuffleArray(arr){
  return arr.map(v => [Math.random(), v]).sort((a,b) => a[0]-b[0]).map(x => x[1]);
}
function startFreePractice(){
  const pool = getAvailablePracticeQuestions();
  if(!pool.length){ openLesson(1); return; }
  activeTask = { id:'practice', title:txt('Prática livre', 'Free practice'), xp:0, module:txt('Prática', 'Practice'), practice:true };
  activeSteps = [
    { type:'teach', level:'basico', kicker:txt('prática livre', 'free practice'), title:txt('Questões aleatórias', 'Random questions'), body:txt('Você vai revisar perguntas de tarefas que já estão disponíveis. Esse modo não bloqueia progresso: serve para reforçar domínio.', 'You will review questions from tasks that are already available. This mode does not block progress: it exists to reinforce mastery.'), questionNumber:null },
    ...shuffleArray(pool).slice(0, QUESTIONS_PER_LESSON).map((s,i) => Object.assign({}, s, { questionNumber:i+1 }))
  ];
  stepIndex = 0;
  hearts = 3;
  lessonCorrect = 0;
  lessonAnswered = 0;
  heartsCount.textContent = hearts;
  overlay.classList.add('show');
  renderStep();
}
function startReview(){
  const review = getReviewTasks();
  if(review.length){ openLesson(review[0].id); return; }
  startFreePractice();
}

function getSelectedModule(){
  const modules = [...new Set(tasks.map(t => t.module))];
  if(state.selectedModule && modules.includes(state.selectedModule)) return state.selectedModule;
  const firstOpen = tasks.find(t => isUnlocked(t.id) && !state.completed[t.id]);
  state.selectedModule = firstOpen ? firstOpen.module : modules[0];
  saveState();
  return state.selectedModule;
}
function selectModuleCard(module, options = {}){
  if(!module) return;
  const modules = [...new Set(tasks.map(t => t.module))];
  if(!modules.includes(module)) return;

  const changed = state.selectedModule !== module;
  state.selectedModule = module;
  state.selectedPathTaskId = null;
  saveState();

  if(changed){
    renderTaskGrid();
  } else {
    renderPanelWidgets();
  }

  requestAnimationFrame(() => {
    const board = document.getElementById('moduleProgressBoard');
    const activeCard = board ? board.querySelector('.module-tab-clean.active') : null;
    if(activeCard){
      try{ activeCard.scrollIntoView({ behavior:'smooth', inline:'center', block:'nearest' }); }catch(err){}
    }
    if(options.scroll !== false){
      const workspace = document.querySelector('.tasks-workspace-clean');
      if(workspace){
        workspace.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    }
  });
}

function setupModuleTabsDrag(board){
  if(!board || board.dataset.dragReady === '1') return;
  board.dataset.dragReady = '1';
  let isDown = false;
  let startX = 0;
  let startY = 0;
  let startScrollLeft = 0;
  let moved = false;
  let pressedModule = null;

  function getModuleFromEvent(e){
    const target = e.target && e.target.closest ? e.target.closest('[data-module]') : null;
    return target ? target.getAttribute('data-module') : null;
  }

  board.addEventListener('pointerdown', (e) => {
    if(e.button !== undefined && e.button !== 0) return;
    isDown = true;
    moved = false;
    pressedModule = getModuleFromEvent(e);
    startX = e.clientX;
    startY = e.clientY;
    startScrollLeft = board.scrollLeft;
    board.dataset.dragStart = String(Date.now());
    board.classList.remove('dragging');
    try{ board.setPointerCapture(e.pointerId); }catch(err){}
  });

  board.addEventListener('pointermove', (e) => {
    if(!isDown) return;
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if(Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)){
      moved = true;
      board.classList.add('dragging');
    }
    if(moved){
      board.scrollLeft = startScrollLeft - dx;
      e.preventDefault();
    }
  });

  function finishDrag(e){
    if(!isDown) return;
    const moduleToOpen = pressedModule;
    isDown = false;
    pressedModule = null;
    board.classList.remove('dragging');
    delete board.dataset.dragStart;

    if(moved){
      board.dataset.justDragged = '1';
      setTimeout(() => { delete board.dataset.justDragged; }, 180);
    } else if(moduleToOpen){
      board.dataset.justSelected = '1';
      selectModuleCard(moduleToOpen, { scroll:true });
      setTimeout(() => { delete board.dataset.justSelected; }, 180);
    }

    try{ board.releasePointerCapture(e.pointerId); }catch(err){}
  }

  board.addEventListener('pointerup', finishDrag);
  board.addEventListener('pointercancel', (e) => {
    isDown = false;
    pressedModule = null;
    moved = false;
    board.classList.remove('dragging');
    delete board.dataset.dragStart;
    try{ board.releasePointerCapture(e.pointerId); }catch(err){}
  });
  board.addEventListener('mouseleave', (e) => {
    if(isDown){ finishDrag(e); }
  });

  board.addEventListener('click', (event) => {
    const btn = event.target && event.target.closest ? event.target.closest('[data-module]') : null;
    if(!btn) return;
    event.preventDefault();
    if(board.dataset.justDragged === '1' || board.dataset.justSelected === '1') return;
    selectModuleCard(btn.getAttribute('data-module'), { scroll:true });
  });

  board.addEventListener('wheel', (e) => {
    if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){
      board.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive:false });
}

function renderModuleProgressBoard(){
  const board = document.getElementById('moduleProgressBoard');
  if(!board) return;
  const selected = getSelectedModule();
  const modules = [...new Set(tasks.map(t => t.module))];
  board.innerHTML = modules.map((module, idx) => {
    const stats = moduleTaskStats(module);
    const color = getModuleColor(module);
    return '<button type="button" class="module-tab-clean ' + (module === selected ? 'active' : '') + '" data-module="' + module + '" style="--module-color:' + color + ';--pct:' + stats.pct + '%">' +
      '<div class="module-tab-orb"></div>' +
      '<div class="module-tab-top"><div class="module-tab-icon">' + getModuleIcon(module) + '</div><div class="module-tab-count">' + stats.done + '/' + stats.total + '</div></div>' +
      '<span class="module-tab-step">' + txt('módulo ', 'module ') + String(idx + 1).padStart(2, '0') + '</span>' +
      '<h3>' + module + '</h3>' +
      '<p>' + getModuleDescription(module) + '</p>' +
      '<div class="module-tab-bar"><div class="module-tab-fill"></div></div>' +
      '<div class="module-hover-tip"><strong>' + txt('arraste ou clique', 'drag or click') + '</strong>' + getModuleTip(module) + '</div>' +
    '</button>';
  }).join('');
  setupModuleTabsDrag(board);
}

function addDays(date, days){
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d.toISOString();
}
function scheduleReview(taskId, score){
  state.reviewDue = state.reviewDue || {};
  const days = score >= 7 ? 7 : (score >= 6 ? 3 : 1);
  state.reviewDue[taskId] = addDays(new Date(), days);
}
function registerWeakTopic(task, amount){
  const topic = inferTopicFromTask(task);
  state.weakTopics = state.weakTopics || {};
  state.weakTopics[topic] = Math.max(0, Number(state.weakTopics[topic] || 0) + amount);
}
function getWeakTopic(){
  const entries = Object.entries(state.weakTopics || {}).sort((a,b) => b[1] - a[1]);
  return entries.length && entries[0][1] > 0 ? entries[0][0] : null;
}

const ACHIEVEMENT_EQUIP_LIMIT = 5;

function getModuleNames(){ return [...new Set(tasks.map(t => t.module))]; }
function getModuleByPosition(position){ return getModuleNames()[position - 1] || ''; }
function tasksInModulePosition(position){
  const moduleName = getModuleByPosition(position);
  return tasks.filter(t => t.module === moduleName);
}
function completedTaskCount(){
  return Object.keys(state.completed || {}).filter(k => tasks.some(t => String(t.id) === String(k))).length;
}
function isTaskCompleted(taskId){ return !!(state.completed && state.completed[taskId]); }
function isTaskPerfect(taskId){ return isTaskCompleted(taskId) && getScore(taskId) >= QUESTIONS_PER_LESSON; }
function completedProjectCount(filterFn){
  return tasks.filter(t => t.project && isTaskCompleted(t.id) && (!filterFn || filterFn(t))).length;
}
function isModuleComplete(position){
  const list = tasksInModulePosition(position);
  return !!list.length && list.every(t => isTaskCompleted(t.id));
}
function isModulePerfect(position){
  const list = tasksInModulePosition(position);
  return !!list.length && list.every(t => isTaskPerfect(t.id));
}
function perfectModulesCount(){
  return getModuleNames().filter((_, idx) => isModulePerfect(idx + 1)).length;
}
function rangePositions(start, end){
  const arr = [];
  for(let i = start; i <= end; i++) arr.push(i);
  return arr;
}
function modulesPerfectInRange(start, end){
  return rangePositions(start, end).every(pos => isModulePerfect(pos));
}
function taskTextForAchievement(task){
  return [task.title, task.desc, task.module, task.eyebrow, (task.tips || []).join(' ')].join(' ').toLowerCase();
}
function matchingTasksByModuleAndTerms(positions, terms){
  const positionSet = new Set(positions);
  return tasks.filter(task => {
    const pos = getModuleNames().indexOf(task.module) + 1;
    if(!positionSet.has(pos)) return false;
    const text = taskTextForAchievement(task);
    return terms.some(term => text.includes(term));
  });
}
function allMatchingTasksPerfect(positions, terms){
  const list = matchingTasksByModuleAndTerms(positions, terms);
  return !!list.length && list.every(task => isTaskPerfect(task.id));
}
function allTasksPerfect(){
  return tasks.length > 0 && tasks.every(t => isTaskPerfect(t.id));
}
function ptEn(pt, en){ return getLang() === 'en' ? en : pt; }

const ACHIEVEMENT_DEFS = [
  { id:'first_step', icon:'first', title:{pt:'Primeiro passo', en:'First Step'}, req:{pt:'Complete sua primeira tarefa.', en:'Complete your first task.'}, test:function(){ return completedTaskCount() >= 1; } },
  { id:'perfect_one', icon:'perfect', title:{pt:'Perfeito', en:'Perfect'}, req:{pt:'Complete 1 tarefa sem errar nada.', en:'Complete 1 task without mistakes.'}, test:function(){ return tasks.some(t => isTaskPerfect(t.id)); } },
  { id:'master_programming', icon:'master', title:{pt:'Mestre da programação', en:'Programming Master'}, req:{pt:'Complete todos os módulos sem errar nada.', en:'Complete every module without mistakes.'}, test:function(){ return allTasksPerfect(); } },
  { id:'professional_programming', icon:'professional', title:{pt:'Profissional da programação', en:'Programming Professional'}, req:{pt:'Complete 3 módulos sem errar nada.', en:'Complete 3 modules without mistakes.'}, test:function(){ return perfectModulesCount() >= 3; } },
  { id:'programmer', icon:'programmer', title:{pt:'Programador', en:'Programmer'}, req:{pt:'Complete 2 módulos sem errar nada.', en:'Complete 2 modules without mistakes.'}, test:function(){ return perfectModulesCount() >= 2; } },
  { id:'junior', icon:'junior', title:{pt:'Junior', en:'Junior'}, req:{pt:'Complete o primeiro módulo sem errar nada.', en:'Complete the first module without mistakes.'}, test:function(){ return isModulePerfect(1); } },
  { id:'dev_python', icon:'python', title:{pt:'Dev Python', en:'Python Dev'}, req:{pt:'Complete todos os módulos Python sem errar nada.', en:'Complete every Python module without mistakes.'}, test:function(){ return modulesPerfectInRange(8,10); } },
  { id:'dev_javascript', icon:'javascript', title:{pt:'Dev JavaScript', en:'JavaScript Dev'}, req:{pt:'Complete todos os módulos JavaScript sem errar nada.', en:'Complete every JavaScript module without mistakes.'}, test:function(){ return modulesPerfectInRange(11,13); } },
  { id:'exemplar_dev', icon:'exemplar', title:{pt:'Dev Exemplar', en:'Exemplary Dev'}, req:{pt:'Complete metade de todas as tarefas totais do site.', en:'Complete half of all tasks in the site.'}, test:function(){ return completedTaskCount() >= Math.ceil(tasks.length / 2); } },
  { id:'coffee', icon:'coffee', title:{pt:'Cadê meu café?', en:'Where is my coffee?'}, req:{pt:'Complete 2 projetos finais.', en:'Complete 2 final projects.'}, test:function(){ return completedProjectCount() >= 2; } },
  { id:'hello_world', icon:'hello', title:{pt:'Hello World', en:'Hello World'}, req:{pt:'Complete o projeto do módulo 1.', en:'Complete the module 1 project.'}, test:function(){ return completedProjectCount(function(t){ return t.module === getModuleByPosition(1); }) >= 1; } },
  { id:'python_beginner', icon:'python_beginner', title:{pt:'Pythonista iniciante', en:'Beginner Pythonista'}, req:{pt:'Complete o módulo 8.', en:'Complete module 8.'}, test:function(){ return isModuleComplete(8); } },
  { id:'flow_control', icon:'flow', title:{pt:'Controle de fluxo', en:'Flow Control'}, req:{pt:'Complete o módulo 5.', en:'Complete module 5.'}, test:function(){ return isModuleComplete(5); } },
  { id:'data_collector', icon:'data', title:{pt:'Colecionador de dados', en:'Data Collector'}, req:{pt:'Complete o módulo 7.', en:'Complete module 7.'}, test:function(){ return isModuleComplete(7); } },
  { id:'function_master', icon:'function', title:{pt:'Função é comigo', en:'Functions Are Mine'}, req:{pt:'Complete o módulo 10.', en:'Complete module 10.'}, test:function(){ return isModuleComplete(10); } },
  { id:'terminal_dominated', icon:'terminal', title:{pt:'Terminal dominado?', en:'Terminal Dominated?'}, req:{pt:'Complete 3 projetos Python.', en:'Complete 3 Python projects.'}, test:function(){ return completedProjectCount(function(t){ const pos = getModuleNames().indexOf(t.module) + 1; return pos >= 8 && pos <= 10; }) >= 3; } },
  { id:'no_fear_if', icon:'ifshield', title:{pt:'Sem medo do if', en:'No Fear of if'}, req:{pt:'Acerte todas as questões de condições em Python.', en:'Master every Python condition task.'}, test:function(){ return allMatchingTasksPerfect([3], ['if','else','elif','condi','boolean','compar']); } },
  { id:'no_infinite_loop', icon:'loop', title:{pt:'Loop infinito? Nunca', en:'Infinite Loop? Never'}, req:{pt:'Acerte todas as questões de while, for e range.', en:'Master every while, for, and range task.'}, test:function(){ return allMatchingTasksPerfect([3], ['while','for','range','loop','laço','repeti']); } },
  { id:'list_in_hand', icon:'list', title:{pt:'Lista na mão', en:'List in Hand'}, req:{pt:'Acerte todas as questões de listas.', en:'Master every list task.'}, test:function(){ return allMatchingTasksPerfect([4], ['lista','list','append','len','índice','indice','index']); } }
];

function getAchievementById(id){ return ACHIEVEMENT_DEFS.find(a => a.id === id); }
function achievementTitle(a){ return a ? ptEn(a.title.pt, a.title.en) : ''; }
function achievementReq(a){ return a ? ptEn(a.req.pt, a.req.en) : ''; }
function isAchievementUnlocked(a){
  if(!a) return false;
  if(state.adminUnlocked) return true;
  try{ return !!a.test(); }catch(err){ return false; }
}

function getUnlockedAchievementIdsForToast(){
  return ACHIEVEMENT_DEFS.filter(isAchievementUnlocked).map(a => a.id);
}
function normalizeAchievementToastNotified(){
  state.achievementToastNotified = Array.isArray(state.achievementToastNotified) ? state.achievementToastNotified : [];
  return state.achievementToastNotified;
}
function ensureAchievementToastStack(){
  let stack = document.getElementById('achievementToastStack');
  if(stack) return stack;
  stack = document.createElement('div');
  stack.id = 'achievementToastStack';
  stack.className = 'achievement-toast-stack';
  document.body.appendChild(stack);
  return stack;
}
function playAchievementUnlockSound(){
  try{
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if(!AudioCtx) return;
    const ctx = window.__mycodeAchievementAudioCtx || new AudioCtx();
    window.__mycodeAchievementAudioCtx = ctx;
    if(ctx.state === 'suspended') ctx.resume().catch(() => {});
    const now = ctx.currentTime;
    const master = ctx.createGain();
    master.gain.setValueAtTime(0.0001, now);
    master.gain.exponentialRampToValueAtTime(0.13, now + 0.03);
    master.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);
    master.connect(ctx.destination);
    [523.25, 659.25, 783.99].forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = idx === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.055);
      gain.gain.setValueAtTime(0.0001, now + idx * 0.055);
      gain.gain.exponentialRampToValueAtTime(0.55, now + idx * 0.055 + 0.025);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.62 + idx * 0.03);
      osc.connect(gain);
      gain.connect(master);
      osc.start(now + idx * 0.055);
      osc.stop(now + 0.78);
    });
  }catch(err){}
}
function showAchievementUnlockToast(achievement, index){
  if(!achievement) return;
  const stack = ensureAchievementToastStack();
  const toast = document.createElement('div');
  toast.className = 'achievement-steam-toast';
  toast.style.animationDelay = (index * 0.22) + 's, ' + (5.4 + index * 0.22) + 's';
  toast.innerHTML =
    '<div class="achievement-toast-icon">' + achievementPixelIcon(achievement.icon) + '</div>' +
    '<div class="achievement-toast-copy">' +
      '<div class="achievement-toast-kicker">' + txt('conquista desbloqueada', 'achievement unlocked') + '</div>' +
      '<div class="achievement-toast-title">' + escapeHtml(achievementTitle(achievement)) + '</div>' +
      '<div class="achievement-toast-req">' + escapeHtml(achievementReq(achievement)) + '</div>' +
    '</div>' +
    '<button type="button" class="achievement-toast-close" aria-label="' + txt('Fechar', 'Close') + '">×</button>';
  stack.appendChild(toast);
  const close = toast.querySelector('.achievement-toast-close');
  if(close) close.addEventListener('click', () => toast.remove());
  setTimeout(() => toast.remove(), 6600 + index * 250);
}
function notifyNewAchievementUnlocks(beforeIds){
  const before = new Set(beforeIds || []);
  const notified = new Set(normalizeAchievementToastNotified());
  const newlyUnlocked = getUnlockedAchievementIdsForToast()
    .filter(id => !before.has(id) && !notified.has(id))
    .map(getAchievementById)
    .filter(Boolean);
  if(!newlyUnlocked.length) return;
  newlyUnlocked.forEach((ach, idx) => {
    state.achievementToastNotified.push(ach.id);
    showAchievementUnlockToast(ach, idx);
  });
  saveState();
  playAchievementUnlockSound();
}

function showProgressMilestoneToast(kind, title, message, iconHtml, index){
  const stack = ensureAchievementToastStack();
  const toast = document.createElement('div');
  toast.className = 'achievement-steam-toast progress-steam-toast ' + (kind === 'rank' ? 'rank-up' : (kind === 'level' ? 'level-up' : 'module-complete'));
  const offset = Number(index || 0) * 0.22;
  toast.style.animationDelay = offset + 's, ' + (5.4 + offset) + 's';
  toast.innerHTML =
    '<div class="achievement-toast-icon">' + (iconHtml || '<div class="milestone-icon">✓</div>') + '</div>' +
    '<div class="achievement-toast-copy">' +
      '<div class="achievement-toast-kicker">' + (kind === 'rank' ? txt('ranked atualizado', 'rank updated') : (kind === 'level' ? txt('level up', 'level up') : txt('módulo concluído', 'module completed'))) + '</div>' +
      '<div class="achievement-toast-title">' + escapeHtml(title) + '</div>' +
      '<div class="achievement-toast-req">' + escapeHtml(message) + '</div>' +
    '</div>' +
    '<button type="button" class="achievement-toast-close" aria-label="' + txt('Fechar', 'Close') + '">×</button>';
  stack.appendChild(toast);
  const close = toast.querySelector('.achievement-toast-close');
  if(close) close.addEventListener('click', () => toast.remove());
  setTimeout(() => toast.remove(), 6600 + offset * 1000 + 250);
  playAchievementUnlockSound();
}
function normalizeModuleToastNotified(){
  state.moduleToastNotified = Array.isArray(state.moduleToastNotified) ? state.moduleToastNotified : [];
  return state.moduleToastNotified;
}
function notifyCompletedModules(){
  if(state.adminUnlocked) return;
  const notified = new Set(normalizeModuleToastNotified());
  const modules = getModuleNames ? getModuleNames() : [...new Set(tasks.map(t => t.module))];
  const newly = [];
  modules.forEach((moduleName, idx) => {
    const list = tasks.filter(t => t.module === moduleName);
    if(list.length && list.every(t => !!state.completed[t.id]) && !notified.has(moduleName)){
      state.moduleToastNotified.push(moduleName);
      newly.push({moduleName, idx});
    }
  });
  if(!newly.length) return;
  newly.forEach((item, i) => {
    showProgressMilestoneToast(
      'module',
      item.moduleName,
      txt('Você concluiu todas as tarefas deste módulo.', 'You completed every task in this module.'),
      '<div class="milestone-icon">' + escapeHtml(String(item.idx + 1).padStart(2,'0')) + '</div>',
      i
    );
  });
  saveState();
}
function notifyRankUp(oldRp, newRp){
  const oldKey = arenaLeagueKey(Number(oldRp) || 0);
  const newKey = arenaLeagueKey(Number(newRp) || 0);
  if(oldKey === newKey) return;
  showProgressMilestoneToast(
    'rank',
    arenaLeague(newRp),
    txt('Você subiu de liga no Ranked local.', 'You ranked up in local Ranked.'),
    arenaRankPixelArt(newKey),
    0
  );
}
function levelToastIcon(level){
  return '<div class="level-up-icon"><span>LV</span><strong>' + escapeHtml(String(level)) + '</strong></div>';
}
function notifyLevelUps(oldXp, newXp){
  if(state.adminUnlocked) return;
  const oldLevel = getUserLevelFromXp(oldXp);
  const newLevel = getUserLevelFromXp(newXp);
  if(newLevel <= oldLevel) return;
  const gained = newLevel - oldLevel;
  showProgressMilestoneToast(
    'level',
    txt('Nível ', 'Level ') + newLevel,
    gained > 1
      ? txt('Você evoluiu ' + gained + ' níveis com esta conclusão.', 'You advanced ' + gained + ' levels with this completion.')
      : txt('Você subiu de nível. Cada 100 XP aumenta seu level.', 'You leveled up. Every 100 XP increases your level.'),
    levelToastIcon(newLevel),
    0
  );
}

function calculateBadges(){
  return ACHIEVEMENT_DEFS.filter(isAchievementUnlocked).map(a => [a.id, achievementReq(a)]);
}
function normalizeEquippedAchievements(){
  state.equippedAchievements = Array.isArray(state.equippedAchievements) ? state.equippedAchievements : [];
  const seen = new Set();
  state.equippedAchievements = state.equippedAchievements.filter(id => {
    const ach = getAchievementById(id);
    if(!ach || seen.has(id) || !isAchievementUnlocked(ach)) return false;
    seen.add(id);
    return true;
  }).slice(0, ACHIEVEMENT_EQUIP_LIMIT);
  return state.equippedAchievements;
}
function showAchievementLimitNote(){
  const note = document.getElementById('achievementLimitNote');
  if(note){
    note.classList.add('show');
    setTimeout(() => note.classList.remove('show'), 2600);
  }
}
function toggleAchievementEquip(id){
  const ach = getAchievementById(id);
  if(!ach || !isAchievementUnlocked(ach)) return;
  const equipped = normalizeEquippedAchievements();
  const idx = equipped.indexOf(id);
  if(idx >= 0){
    equipped.splice(idx, 1);
  } else {
    if(equipped.length >= ACHIEVEMENT_EQUIP_LIMIT){
      showAchievementLimitNote();
      return;
    }
    equipped.push(id);
  }
  state.equippedAchievements = equipped;
  saveState();
  renderProfileWidgets();
  renderAchievementsModal();
}
const ACHIEVEMENT_IMAGE_MAP = {
  first: './assets/generated/inline-fa7b1a7375.png',
  perfect: './assets/generated/media-02-d8f7888a8d.png',
  master: './assets/generated/media-03-711f45323b.png',
  professional: './assets/generated/inline-418f88112a.png',
  programmer: './assets/generated/media-04-cd5ded9ea9.png',
  junior: './assets/generated/media-05-d3e8b4787b.png',
  python: './assets/generated/media-06-8e61fc8a7b.png',
  javascript: './assets/generated/inline-b07ee82c5f.png',
  exemplar: './assets/generated/media-07-04aedacefe.png',
  coffee: './assets/generated/media-08-e82528940b.png',
  hello: './assets/generated/media-09-7bccc2baa0.png',
  python_beginner: './assets/generated/inline-a538e3c921.png',
  flow: './assets/generated/inline-5094730d69.png',
  data: './assets/generated/inline-db3050b637.png',
  function: './assets/generated/media-10-4bfa73d782.png',
  terminal: './assets/generated/media-11-3e1369413a.png',
  ifshield: './assets/generated/media-12-2a0a915600.png',
  loop: './assets/generated/media-13-65ecc646d7.png',
  list: './assets/generated/media-14-3ae317fada.png',
  star: './assets/generated/media-02-d8f7888a8d.png'
};

function achievementPixelIcon(kind){
  const src = ACHIEVEMENT_IMAGE_MAP[kind] || ACHIEVEMENT_IMAGE_MAP.star;
  return '<span class="achievement-pixel-icon achievement-image-icon" aria-hidden="true"><img src="' + src + '" alt="" loading="lazy" draggable="false"></span>';
}
function renderEquippedSlots(){
  const equipped = normalizeEquippedAchievements();
  let html = '';
  for(let i = 0; i < ACHIEVEMENT_EQUIP_LIMIT; i++){
    const id = equipped[i];
    const ach = getAchievementById(id);
    if(ach){
      html += '<button type="button" class="equipped-achievement-slot" data-achievement-open="1" title="' + escapeHtml(achievementTitle(ach)) + '">' + achievementPixelIcon(ach.icon) + '</button>';
    } else {
      html += '<button type="button" class="equipped-achievement-slot empty" data-achievement-open="1" title="' + txt('Equipar conquista', 'Equip achievement') + '"></button>';
    }
  }
  return html;
}
function renderProfileWidgets(){
  const completedCount = completedTaskCount();
  const dominated = tasks.filter(t => state.completed[t.id] && getScore(t.id) >= 7).length;
  const review = getReviewTasks().length;
  const xp = document.getElementById('profileXP');
  const done = document.getElementById('profileDone');
  const dom = document.getElementById('profileDominated');
  const weak = document.getElementById('profileWeak');
  if(xp) xp.textContent = getUserLevel();
  if(done) done.textContent = completedCount + '/' + tasks.length;
  if(dom) dom.textContent = dominated;
  if(weak) weak.textContent = review;
  const badgeList = document.getElementById('badgeList');
  if(badgeList){
    const levelInfo = getUserLevelProgress();
    const unlockedCount = ACHIEVEMENT_DEFS.filter(isAchievementUnlocked).length;
    const equipped = normalizeEquippedAchievements();
    const nextText = levelInfo.level >= MAX_USER_LEVEL
      ? txt('nível máximo alcançado', 'max level reached')
      : txt(levelInfo.remaining + ' XP para o próximo level', levelInfo.remaining + ' XP to next level');
    const studentName = getStudentName();
    badgeList.innerHTML =
      '<div class="student-profile-panel">' +
        '<div class="student-profile-hero">' +
          '<div class="student-avatar-orb"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"><span>Lv ' + levelInfo.level + '</span></div>' +
          '<div class="student-profile-copy"><div class="student-profile-kicker">' + txt('perfil do aluno', 'student profile') + '</div><div class="student-profile-name" id="studentProfileName">' + escapeHtml(studentName) + '</div><strong>' + txt('Level ', 'Level ') + levelInfo.level + '</strong><p>' + nextText + '</p></div>' +
        '</div>' +
        '<form class="student-name-editor" id="studentNameForm">' +
          '<label for="studentNicknameInput">' + txt('nome ou nickname', 'name or nickname') + '</label>' +
          '<div class="student-name-row"><input id="studentNicknameInput" name="studentNicknameInput" type="text" maxlength="24" autocomplete="off" value="' + escapeHtml(studentName) + '" placeholder="' + escapeHtml(txt('Seu nome no MyCode', 'Your MyCode name')) + '"><button type="submit" id="saveStudentNicknameBtn">' + txt('Salvar', 'Save') + '</button></div>' +
        '</form>' +
        '<div class="student-level-console">' +
          '<div class="student-level-row"><span>XP</span><strong>' + levelInfo.current + '/' + levelInfo.needed + '</strong></div>' +
          '<div class="level-side-bar premium-level-bar"><i style="width:' + levelInfo.pct + '%"></i></div>' +
          '<div class="student-level-meta"><span>' + txt('cada tarefa: +50 XP', 'each task: +50 XP') + '</span><span>' + txt('projeto: +2 levels', 'project: +2 levels') + '</span></div>' +
        '</div>' +
        '<div class="student-profile-stats">' +
          '<div><strong>' + completedCount + '/' + tasks.length + '</strong><span>' + txt('tarefas', 'tasks') + '</span></div>' +
          '<div><strong>' + dominated + '</strong><span>' + txt('dominadas', 'mastered') + '</span></div>' +
          '<div><strong>' + review + '</strong><span>' + txt('revisões', 'reviews') + '</span></div>' +
        '</div>' +
        '<div class="achievement-summary-row premium-achievement-row"><div><strong>' + txt('Conquistas equipadas', 'Equipped achievements') + '</strong><small>' + txt('Até 5 aparecem no seu perfil do painel.', 'Up to 5 appear on your dashboard profile.') + '</small></div><span class="achievement-count-pill">' + equipped.length + '/' + ACHIEVEMENT_EQUIP_LIMIT + '</span></div>' +
        '<div class="equipped-achievement-grid premium-equipped-grid">' + renderEquippedSlots() + '</div>' +
        '<button type="button" class="achievement-manage-btn premium-manage-btn" id="openAchievementsBtn">' + txt('Gerenciar perfil e conquistas', 'Manage profile achievements') + ' · ' + unlockedCount + '/' + ACHIEVEMENT_DEFS.length + '</button>' +
      '</div>';
    badgeList.querySelectorAll('[data-achievement-open]').forEach(btn => btn.addEventListener('click', showAchievementsModal));
    const studentNameForm = document.getElementById('studentNameForm');
    const studentNameInput = document.getElementById('studentNicknameInput');
    if(studentNameForm){
      studentNameForm.addEventListener('submit', event => {
        event.preventDefault();
        setStudentName(studentNameInput ? studentNameInput.value : '');
      });
    }
    const manageBtn = document.getElementById('openAchievementsBtn');
    if(manageBtn) manageBtn.addEventListener('click', showAchievementsModal);
  }
}
function ensureAchievementsModal(){
  let modal = document.getElementById('achievementsModal');
  if(modal) return modal;
  modal = document.createElement('div');
  modal.id = 'achievementsModal';
  modal.className = 'achievement-modal-backdrop';
  modal.innerHTML = '<div class="achievement-modal" role="dialog" aria-modal="true" aria-labelledby="achievementModalTitle"><div class="achievement-modal-head"><div><div class="achievement-modal-eyebrow">' + txt('galeria de conquistas', 'achievement gallery') + '</div><h2 class="achievement-modal-title" id="achievementModalTitle">' + txt('Escolha suas conquistas do painel', 'Choose your dashboard achievements') + '</h2><p class="achievement-modal-sub">' + txt('Conquistas desbloqueadas podem ser equipadas no painel. O modo Admin libera todas, mas o limite continua sendo 5 equipadas.', 'Unlocked achievements can be equipped on the dashboard. Admin mode unlocks them all, but the equipped limit remains 5.') + '</p><div class="achievement-limit-note" id="achievementLimitNote">' + txt('Você já equipou 5 conquistas. Remova uma antes de adicionar outra.', 'You already equipped 5 achievements. Remove one before adding another.') + '</div></div><button class="achievement-modal-close" type="button" id="closeAchievementsModal">×</button></div><div class="achievement-equipped-bar"><div><strong id="achievementEquippedTitle"></strong><br><span id="achievementEquippedSub"></span></div><div class="achievement-equipped-mini" id="achievementEquippedMini"></div></div><div class="achievement-grid-modal" id="achievementGridModal"></div></div>';
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if(e.target === modal) closeAchievementsModal(); });
  modal.querySelector('#closeAchievementsModal').addEventListener('click', closeAchievementsModal);
  return modal;
}
function renderAchievementsModal(){
  const modal = ensureAchievementsModal();
  const equipped = normalizeEquippedAchievements();
  const mini = modal.querySelector('#achievementEquippedMini');
  const grid = modal.querySelector('#achievementGridModal');
  const title = modal.querySelector('#achievementEquippedTitle');
  const sub = modal.querySelector('#achievementEquippedSub');
  if(title) title.textContent = txt('Equipadas no painel: ', 'Equipped on dashboard: ') + equipped.length + '/' + ACHIEVEMENT_EQUIP_LIMIT;
  if(sub) sub.textContent = txt('Clique em uma conquista desbloqueada para equipar ou remover.', 'Click an unlocked achievement to equip or remove it.');
  if(mini){
    mini.innerHTML = '';
    for(let i = 0; i < ACHIEVEMENT_EQUIP_LIMIT; i++){
      const ach = getAchievementById(equipped[i]);
      mini.innerHTML += '<div class="mini-slot">' + (ach ? achievementPixelIcon(ach.icon) : '') + '</div>';
    }
  }
  if(grid){
    grid.innerHTML = ACHIEVEMENT_DEFS.map(ach => {
      const unlocked = isAchievementUnlocked(ach);
      const isEquipped = equipped.includes(ach.id);
      const stateLabel = isEquipped ? txt('equipada', 'equipped') : (unlocked ? txt('liberada', 'unlocked') : txt('bloqueada', 'locked'));
      const buttonLabel = isEquipped ? txt('Remover do painel', 'Remove from dashboard') : (unlocked ? txt('Equipar', 'Equip') : txt('Bloqueada', 'Locked'));
      return '<article class="achievement-card ' + (unlocked ? 'unlocked' : 'locked') + (isEquipped ? ' equipped' : '') + '">' +
        achievementPixelIcon(ach.icon) +
        '<div class="achievement-card-body"><div class="achievement-card-top"><h3>' + escapeHtml(achievementTitle(ach)) + '</h3><span class="achievement-state-pill">' + stateLabel + '</span></div>' +
        '<p>' + escapeHtml(achievementReq(ach)) + '</p>' +
        '<button type="button" data-achievement-id="' + ach.id + '" ' + (!unlocked ? 'disabled' : '') + '>' + buttonLabel + '</button></div>' +
      '</article>';
    }).join('');
    grid.querySelectorAll('[data-achievement-id]').forEach(btn => {
      btn.addEventListener('click', () => toggleAchievementEquip(btn.getAttribute('data-achievement-id')));
    });
  }
}
function showAchievementsModal(){
  renderAchievementsModal();
  ensureAchievementsModal().classList.add('show');
}
function closeAchievementsModal(){
  const modal = document.getElementById('achievementsModal');
  if(modal) modal.classList.remove('show');
}
function translateBadgeTitle(v){
  const ach = getAchievementById(v);
  return ach ? achievementTitle(ach) : v;
}
function translateBadgeSub(v){ return v; }

function renderAdaptiveCard(){
  const topic = getWeakTopic();
  const title = document.getElementById('adaptiveTitle');
  const text = document.getElementById('adaptiveText');
  if(!title || !text) return;
  if(topic){
    title.textContent = txt('Reforce: ', 'Reinforce: ') + translateTopicLabel(topic);
    text.textContent = txt('O sistema detectou dificuldade nesse tema. Faça uma microprática antes de seguir.', 'The system detected difficulty with this topic. Do a micro-practice before continuing.');
  } else {
    title.textContent = txt('Nenhum reforço pendente', 'No reinforcement pending');
    text.textContent = txt('Quando o aluno errar muito, o MyCode recomenda microtarefas antes de avançar.', 'When the student struggles, MyCode recommends microtasks before moving on.');
  }
}
function startThemePractice(theme){
  const pool = [];
  tasks.forEach(t => {
    const taskTopic = inferTopicFromTask(t);
    if(theme === 'fundamentos' && !(t.module.includes('Fundamentos') || t.module.includes('Fundamentals'))) return;
    if(theme === 'javascript' && !t.module.includes('JavaScript')) return;
    if(theme === 'variaveis' && taskTopic !== 'variáveis') return;
    if(theme === 'condicoes' && taskTopic !== 'condições') return;
    if(theme === 'loops' && taskTopic !== 'loops') return;
    if(theme === 'arrays' && taskTopic !== 'arrays') return;
    flattenSteps(t).forEach(s => { if(s.type !== 'teach') pool.push(Object.assign({}, s, { sourceTitle:t.title, sourceId:t.id })); });
  });
  if(!pool.length){ startFreePractice(); return; }
  activeTask = { id:'theme-' + theme, title:txt('Prática: ', 'Practice: ') + translateTopicLabel(theme), xp:0, module:txt('Prática', 'Practice'), practice:true };
  activeSteps = [
    { type:'teach', level:'basico', kicker:txt('prática por tema', 'practice by topic'), title:txt('Prática: ', 'Practice: ') + translateTopicLabel(theme), body:txt('Você vai responder perguntas focadas neste tema. Esse modo reforça conteúdo e não altera bloqueios da trilha.', 'You will answer questions focused on this topic. This mode reinforces content and does not change path locks.'), questionNumber:null },
    ...shuffleArray(pool).slice(0, QUESTIONS_PER_LESSON).map((s,i) => Object.assign({}, s, { questionNumber:i+1 }))
  ];
  stepIndex = 0;
  hearts = 3;
  lessonCorrect = 0;
  lessonAnswered = 0;
  heartsCount.textContent = hearts;
  overlay.classList.add('show');
  renderStep();
}
function startAdaptivePractice(){
  const topic = getWeakTopic();
  if(topic){
    const map = { 'variáveis':'variaveis', 'condições':'condicoes', 'loops':'loops', 'arrays':'arrays', 'javascript':'javascript' };
    startThemePractice(map[topic] || 'fundamentos');
  } else {
    startFreePractice();
  }
}
function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.theme || 'dark');
  const btn = document.getElementById('themeToggleTop');
  if(btn){
    const light = state.theme === 'light';
    btn.textContent = getLang() === 'en'
      ? (light ? 'Dark theme' : 'Light theme')
      : (light ? 'Tema escuro' : 'Tema claro');
  }
}


/* V43 — funções locais seguras do painel/ranking.
   Ficam dentro do app para não depender de escopo global pós-IIFE. */
function getWorldRankingPlayersLocal(){
  return [
    {name:'NinaScript', league:'Diamante', score:149, rp:2410},
    {name:'ByteKnight', league:'Diamante', score:147, rp:2360},
    {name:'ArrayMage', league:'Platina', score:143, rp:1985},
    {name:'LoopZero', league:'Platina', score:139, rp:1850},
    {name:'PythonFox', league:'Ouro', score:132, rp:1490},
    {name:'ConsoleKid', league:'Ouro', score:128, rp:1375},
    {name:'DevLua', league:'Ouro', score:121, rp:1290},
    {name:'StackHero', league:'Prata', score:116, rp:980},
    {name:'BugHunter', league:'Prata', score:109, rp:840},
    {name:getStudentName(), league:'Bronze', score:102, rp:620},
    {name:'CodeRafa', league:'Bronze', score:98, rp:510},
    {name:'MilaDOM', league:'Bronze', score:92, rp:470},
    {name:'FetchNinja', league:'Bronze', score:87, rp:420},
    {name:'IfMaster', league:'Bronze', score:83, rp:390},
    {name:'ReturnLeo', league:'Bronze', score:76, rp:330}
  ];
}
function worldRankingLeagueNameLocal(league){
  const map = {
    'Diamante': 'Diamond',
    'Platina': 'Platinum',
    'Ouro': 'Gold',
    'Prata': 'Silver',
    'Bronze': 'Bronze'
  };
  return txt(String(league || ''), map[String(league || '')] || String(league || ''));
}
function worldRankingRowsLocal(limit){
  return getWorldRankingPlayersLocal().slice(0, limit || 10).map((item, idx) =>
    '<div class="world-rank-row">' +
      '<div class="world-rank-pos">#' + (idx + 1) + '</div>' +
      '<div><div class="world-rank-name">' + escapeHtml(item.name) + '</div>' +
      '<span class="world-rank-meta">' + escapeHtml(worldRankingLeagueNameLocal(item.league)) + ' · ' + item.rp + ' RP</span></div>' +
      '<div class="world-rank-score">' + item.score + ' pts</div>' +
    '</div>'
  ).join('');
}
/* Removed duplicate earlier renderWorldRankingCard during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier showWorldRankingModal during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier closeWorldRankingModal during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier updateTopbarVisibility during ES module refactor. Final definition is kept later. */
document.addEventListener('click', function(event){
  const btn = event.target && event.target.closest ? event.target.closest('#openWorldRankingBtn') : null;
  if(btn){ event.preventDefault(); showWorldRankingModal(); }
});

function renderPanelWidgets(){
  renderModuleProgressBoard();
  const selected = getSelectedModule();
  const stats = moduleTaskStats(selected);
  const title = document.getElementById('activeModuleTitle');
  const desc = document.getElementById('activeModuleDescription');
  const ratio = document.getElementById('activeModuleRatio');
  const pct = document.getElementById('activeModulePercent');
  const kicker = document.getElementById('activeModuleKicker');
  if(title) title.textContent = selected;
  if(desc){ desc.textContent = getModuleDescription(selected); desc.dataset.dynamic = '1'; }
  if(ratio) ratio.textContent = stats.done + '/' + stats.total;
  if(pct) pct.textContent = stats.pct + txt('% completo', '% complete');
  if(kicker) kicker.textContent = getModuleIcon(selected) + ' · ' + txt('módulo selecionado', 'selected module');

  const today = getTodayKey();
  const todays = Number(state.todayCompletions && state.todayCompletions[today] ? state.todayCompletions[today] : 0);
  const goal = Math.min(2, todays);
  const goalRing = document.getElementById('goalRing');
  if(goalRing) goalRing.style.setProperty('--goal', (goal / 2 * 100) + '%');
  const goalRingText = document.getElementById('goalRingText');
  if(goalRingText) goalRingText.textContent = goal + '/2';
  const dailyGoalText = document.getElementById('dailyGoalText');
  if(dailyGoalText) dailyGoalText.textContent = goal >= 2 ? txt('Meta batida hoje', 'Daily goal completed') : txt('Conclua ', 'Complete ') + (2 - goal) + txt(' tarefa(s) hoje', ' task(s) today');
  const byteCoachTip = document.getElementById('byteCoachTip');
  if(byteCoachTip && !byteTipTimer) renderByteTip(getCoachTip());
  const reviewCountLabel = document.getElementById('reviewCountLabel');
  const reviewCount = getReviewTasks().length;
  if(reviewCountLabel) reviewCountLabel.textContent = reviewCount ? reviewCount + txt(' tarefa(s) precisam de reforço', ' task(s) need reinforcement') : txt('sem revisões pendentes', 'no pending reviews');
  const certificatesLabel = document.getElementById('certificatesLabel');
  if(certificatesLabel){
    const modules = [...new Set(tasks.map(t => t.module))];
    const certs = modules.filter(m => moduleTaskStats(m).done === moduleTaskStats(m).total).length;
    certificatesLabel.textContent = certs + '/' + modules.length + txt(' liberados', ' unlocked');
  }
  renderProfileWidgets();
  renderAdaptiveCard();
  if(typeof renderArenaCard === 'function') renderArenaCard();
  try{ if(typeof renderWorldRankingCard === 'function') renderWorldRankingCard(); }catch(error){}
  try{ if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility(); }catch(error){}
  applyTheme();
  updatePanelLanguage();
}

function renderTaskGrid(){
  taskGrid.innerHTML = '';
  try {
    renderPanelWidgets();
  } catch(error) {
    console.error('renderPanelWidgets falhou, mas a trilha continuará renderizando:', error);
  }

  const selectedModule = getSelectedModule();
  const visibleTasks = tasks.filter(t => t.module === selectedModule);
  const currentTask = visibleTasks.find(t => isUnlocked(t.id) && !state.completed[t.id]);

  if(state.selectedPathTaskId && !visibleTasks.some(t => t.id === state.selectedPathTaskId && isUnlocked(t.id))){
    state.selectedPathTaskId = null;
    saveState();
  }

  const selectedTask = state.selectedPathTaskId
    ? visibleTasks.find(t => t.id === state.selectedPathTaskId)
    : null;

  const path = document.createElement('div');
  path.className = 'knowledge-path enhanced-path';
  path.innerHTML = '<div class="path-aura aura-one"></div><div class="path-aura aura-two"></div><div class="path-aura aura-three"></div><div class="path-runner"></div><div class="path-runner second"></div>';

  const title = document.createElement('div');
  title.className = 'knowledge-path-title';
  title.innerHTML =
    '<div class="kp-line"></div>' +
    '<span>' + txt('Trilha de conhecimento', 'Knowledge path') + '</span>' +
    '<div class="kp-line"></div>';
  path.appendChild(title);

  const confirm = document.createElement('div');
  confirm.className = 'path-selection-card' + (selectedTask ? ' show' : '');
  if(selectedTask){
    const mastery = getMastery(selectedTask);
    confirm.innerHTML =
      '<div class="selection-byte-dot"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
      '<div class="selection-copy">' +
        '<span>' + txt('tarefa selecionada', 'selected task') + '</span>' +
        '<strong>' + String(selectedTask.id).padStart(2, '0') + ' · ' + selectedTask.title + '</strong>' +
        '<small>' + (selectedTask.project ? txt('Projeto no editor com correção automática.', 'Project editor with automatic review.') : txt('7 perguntas · mínimo 4 acertos.', '7 questions · minimum 4 correct.')) + '</small>' +
      '</div>' +
      '<div class="selection-actions">' +
        '<button type="button" class="selection-start" id="selectionStartBtn">' + txt('iniciar', 'start') + '</button>' +
        '<button type="button" class="selection-cancel" id="selectionCancelBtn">' + txt('cancelar', 'cancel') + '</button>' +
      '</div>';
  } else {
    confirm.innerHTML =
      '<div class="selection-byte-dot"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
      '<div class="selection-copy">' +
        '<span>' + txt('selecione uma tarefa', 'select a task') + '</span>' +
        '<strong>' + txt('Clique em um nó da trilha para confirmar antes de começar.', 'Click a path node to confirm before starting.') + '</strong>' +
        '<small>' + txt('A tarefa escolhida ficará pulsando.', 'The selected task will pulse.') + '</small>' +
      '</div>';
  }
  // O card de confirmação não fica mais fixo no topo da trilha.
  // Ele será movido dinamicamente para perto da tarefa selecionada.

  function renderSelectionCard(task){
    const selected = task || null;
    selectedTaskRef = selected;
    confirm.className = 'path-selection-card' + (selected ? ' show' : '');
    if(selected){
      confirm.innerHTML =
        '<div class="selection-byte-dot"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
        '<div class="selection-copy">' +
          '<span>' + txt('tarefa selecionada', 'selected task') + '</span>' +
          '<strong>' + String(selected.id).padStart(2, '0') + ' · ' + selected.title + '</strong>' +
          '<small>' + (selected.project ? txt('Projeto no editor com correção automática.', 'Project editor with automatic review.') : txt('7 perguntas · mínimo 4 acertos.', '7 questions · minimum 4 correct.')) + '</small>' +
        '</div>' +
        '<div class="selection-actions">' +
          '<button type="button" class="selection-start" id="selectionStartBtn">' + txt('iniciar', 'start') + '</button>' +
          '<button type="button" class="selection-cancel" id="selectionCancelBtn">' + txt('cancelar', 'cancel') + '</button>' +
        '</div>';
    } else {
      confirm.innerHTML =
        '<div class="selection-byte-dot"><img src="' + BYTE_IMAGE_SRC + '" alt="Byte"></div>' +
        '<div class="selection-copy">' +
          '<span>' + txt('selecione uma tarefa', 'select a task') + '</span>' +
          '<strong>' + txt('Clique em um nó da trilha para confirmar antes de começar.', 'Click a path node to confirm before starting.') + '</strong>' +
          '<small>' + txt('A tarefa escolhida ficará destacada antes de abrir.', 'The selected task will be highlighted before opening.') + '</small>' +
        '</div>';
    }

    path.querySelectorAll('.path-row').forEach(row => {
      const isRowSelected = selected && String(row.dataset.taskId) === String(selected.id);
      row.classList.toggle('selected', !!isRowSelected);
      const rowCallout = row.querySelector('.path-callout');
      if(rowCallout){
        rowCallout.textContent = isRowSelected ? txt('SELECIONADA', 'SELECTED') : (row.dataset.defaultCallout || rowCallout.textContent);
      }
    });

    const selectedRow = selected ? path.querySelector('.path-row[data-task-id="' + String(selected.id) + '"]') : null;
    if(selectedRow){
      confirm.classList.add('attached-to-task');
      selectedRow.insertAdjacentElement('afterend', confirm);
    } else {
      confirm.classList.remove('attached-to-task');
      title.insertAdjacentElement('afterend', confirm);
    }

    const start = document.getElementById('selectionStartBtn');
    if(start && selected){
      start.addEventListener('click', () => openLesson(selected.id));
    }
    const cancel = document.getElementById('selectionCancelBtn');
    if(cancel){
      cancel.addEventListener('click', () => {
        state.selectedPathTaskId = null;
        saveState();
        renderSelectionCard(null);
      });
    }
  }

  let selectedTaskRef = selectedTask;

  visibleTasks.forEach((task, idx) => {
    const done = !!state.completed[task.id];
    const unlocked = isUnlocked(task.id);
    const mastery = getMastery(task);
    const isCurrent = currentTask && currentTask.id === task.id;
    const isSelected = selectedTask ? selectedTask.id === task.id : isCurrent;
    const isProject = !!task.project || task.id % 10 === 0;

    const row = document.createElement('div');
    row.className =
      'path-row ' +
      (idx % 2 === 0 ? 'left' : 'right') +
      (done ? ' done' : '') +
      (unlocked ? ' unlocked' : ' locked') +
      (isCurrent ? ' current' : '') +
      (isSelected ? ' selected' : '') +
      (isProject ? ' project' : '');
    row.style.setProperty('--status-color', unlocked ? mastery.color : '#536372');
    row.dataset.taskId = String(task.id);

    const connector = document.createElement('div');
    connector.className = 'path-connector';
    row.appendChild(connector);

    const nodeWrap = document.createElement('div');
    nodeWrap.className = 'path-node-wrap';

    const callout = document.createElement('div');
    callout.className = 'path-callout';
    if(isSelected && unlocked){
      callout.textContent = txt('SELECIONADA', 'SELECTED');
    } else if(isCurrent){
      callout.textContent = done ? txt('REVISAR', 'REVIEW') : txt('COMEÇAR', 'START');
    } else if(done){
      callout.textContent = mastery.label.toUpperCase();
    } else if(unlocked){
      callout.textContent = txt('DISPONÍVEL', 'AVAILABLE');
    } else {
      callout.textContent = txt('BLOQUEADO', 'LOCKED');
    }

    row.dataset.defaultCallout = callout.textContent;

    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'path-node ' + (isProject ? 'project-node' : '');
    node.setAttribute('aria-label', task.title);

    if(isProject){
      node.innerHTML = done
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M8 21h8M12 17v4"/><path d="M7 4h10v5a5 5 0 01-10 0V4z"/><path d="M5 6H3a3 3 0 003 3h1M19 6h2a3 3 0 01-3 3h-1"/></svg>'
        : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="4" y="8" width="16" height="11" rx="2"/><path d="M8 8V6a4 4 0 018 0v2"/><path d="M12 12v3"/></svg>';
    } else if(done){
      node.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.7"><path d="M20 6L9 17l-5-5"/></svg>';
    } else if(unlocked){
      node.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.1 6.7.9-4.8 4.7 1.1 6.6L12 17.2 6.1 20.3l1.1-6.6L2.4 9l6.7-.9L12 2z"/></svg>';
    } else {
      node.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>';
    }

    const info = document.createElement('div');
    info.className = 'path-info-card';
    info.innerHTML =
      '<strong>' + String(task.id).padStart(2, '0') + ' · ' + task.title + '</strong>' +
      '<span>' + task.desc + '</span>' +
      '<small>' + (task.project ? txt('projeto no editor · correção automática', 'project editor · automatic review') : txt('7 perguntas · mínimo 4 acertos', '7 questions · minimum 4 correct')) + '</small>';

    nodeWrap.appendChild(callout);
    nodeWrap.appendChild(node);
    nodeWrap.appendChild(info);
    row.appendChild(nodeWrap);

    if(unlocked){
      node.addEventListener('click', () => {
        state.selectedPathTaskId = task.id;
        saveState();
        renderSelectionCard(task);
      });
      node.tabIndex = 0;
    } else {
      node.disabled = true;
    }

    path.appendChild(row);
  });

  taskGrid.appendChild(path);

  renderSelectionCard(selectedTaskRef);

  const totalDone = Object.keys(state.completed).filter(k => tasks.some(t => String(t.id) === String(k))).length;
  const overallFill = document.getElementById('overallFill');
  if(overallFill) overallFill.style.width = (totalDone / tasks.length * 100) + '%';
  const overallLabel = document.getElementById('overallLabel');
  if(overallLabel) overallLabel.textContent = totalDone + '/' + tasks.length + txt(' concluídas', ' completed');
  const selectedSummary = document.getElementById('selectedSummary');
  if(selectedSummary) selectedSummary.textContent = totalDone + '/' + tasks.length + txt(' tarefas concluídas', ' tasks completed');
  renderTopStats();
  if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();
}

document.getElementById('resetBtn').addEventListener('click', () => {
  if(confirm(txt('Isso vai apagar todo o seu progresso, XP e sequência. Tem certeza?', 'This will erase all your progress, XP, and streak. Are you sure?'))){
    localStorage.removeItem(STORAGE_KEY);
    if(typeof ARENA_STORAGE_KEY !== 'undefined') localStorage.removeItem(ARENA_STORAGE_KEY);
    state = loadState();
    renderTaskGrid();
  }
});


const reviewBtn = document.getElementById('reviewBtn');
if(reviewBtn) reviewBtn.addEventListener('click', startReview);
const practiceBtn = document.getElementById('practiceBtn');
if(practiceBtn) practiceBtn.addEventListener('click', startFreePractice);

document.querySelectorAll('[data-theme]').forEach(btn => {
  btn.addEventListener('click', () => startThemePractice(btn.dataset.theme));
});
const adaptivePracticeBtn = document.getElementById('adaptivePracticeBtn');
if(adaptivePracticeBtn) adaptivePracticeBtn.addEventListener('click', startAdaptivePractice);

/* =========================================================
   LESSON PLAYER (overlay)
   ========================================================= */
const overlay = document.getElementById('overlay');
const lessonInner = document.getElementById('lessonInner');
const stepDotsEl = document.getElementById('stepDots');
const checkBtn = document.getElementById('checkBtn');
const heartsCount = document.getElementById('heartsCount');
const heartsWrap = document.getElementById('heartsWrap');
const toastEl = document.getElementById('toast');

let activeTask = null;
let activeSteps = [];
let stepIndex = 0;
let hearts = 3;
let selectedOption = null;
let selectedSequence = [];
const QUESTIONS_PER_LESSON = 7;
const PASSING_SCORE = 4;
let lessonCorrect = 0;
let lessonAnswered = 0;

function escapeHtml(str){
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getExerciseTaskLabel(){
  return txt('TAREFA ', 'TASK ') + activeTask.id + ' · ' + activeTask.title.toUpperCase();
}

function getExerciseStreakLabel(){
  if(state.streak && state.streak > 0){
    return getLang() === 'en'
      ? 'streak of ' + state.streak + (state.streak === 1 ? ' day' : ' days')
      : 'sequência de ' + state.streak + (state.streak === 1 ? ' dia' : ' dias');
  }
  return txt('comece sua sequência', 'start your streak');
}


function getLessonQuestionTotal(){
  return activeSteps.filter(step => step.type !== 'teach').length;
}

function renderTeachDeepDive(){
  const items = (activeTask && activeTask.tips && activeTask.tips.length >= 2)
    ? activeTask.tips
    : [txt('Leia o código linha por linha e explique para si mesmo o que cada parte faz.', 'Read the code line by line and explain to yourself what each part does.'), txt('Antes de responder, tente prever o resultado sem executar. Isso treina raciocínio de programação.', 'Before answering, try to predict the result without running it. This trains programming reasoning.')];
  return '<div class="teach-deep-dive">' +
    '<div class="teach-tip"><div class="tt-label">' + txt('na prática', 'in practice') + '</div><p>' + items[0] + '</p></div>' +
    '<div class="teach-tip"><div class="tt-label">' + txt('atenção', 'attention') + '</div><p>' + items[1] + '</p></div>' +
  '</div>';
}



function stepHasProgrammingCode(step){
  if(!step || step.type === 'teach') return false;
  return Boolean(step.codeLines || step.codeTemplate || step.code || step.type === 'fill' || step.type === 'text');
}

function getCodeConceptForStep(step){
  const source = [
    step.q || '',
    step.hint || '',
    step.explain || '',
    Array.isArray(step.codeLines) ? step.codeLines.join('\n') : '',
    Array.isArray(step.codeTemplate) ? step.codeTemplate.join('\n') : '',
    step.code || '',
    step.answer || ''
  ].join(' ').toLowerCase();

  const concepts = [
    {
      test: /algoritmo|algorithm|pseudoc[oó]digo|pseudocode|portugol|visualg|fluxograma|flowchart|decomposi|decomposition|abstraç|abstrac|entrada|input|sa[ií]da|output|processamento|processing/,
      ptTitle: 'Conceito cobrado: lógica, algoritmo e representação',
      enTitle: 'Concept checked: logic, algorithm, and representation',
      ptBody: 'Antes de escrever em Python ou JavaScript, você precisa entender a solução como uma sequência de passos. Algoritmo é essa sequência finita; entrada é o dado que chega; processamento é a regra aplicada; saída é o resultado. Fluxograma desenha esse caminho com caixas e setas, e pseudocódigo/Portugol descreve a lógica em uma linguagem mais próxima do português.',
      enBody: 'Before writing Python or JavaScript, you need to understand the solution as a sequence of steps. An algorithm is that finite sequence; input is the data that arrives; processing is the rule applied; output is the result. A flowchart draws this path with boxes and arrows, and pseudocode describes the logic in a language closer to natural language.'
    },
    {
      test: /async|await|promise|fetch|api|json|try\s*\{|catch|loading|localstorage/,
      ptTitle: 'Conceito cobrado: código assíncrono, APIs e JSON',
      enTitle: 'Concept checked: asynchronous code, APIs, and JSON',
      ptBody: 'Quando o código depende de uma resposta externa, como uma API, ele não termina imediatamente. <code>Promise</code>, <code>async</code>, <code>await</code>, <code>fetch</code>, <code>JSON</code> e <code>try/catch</code> servem para esperar a resposta, tratar erros e transformar os dados recebidos em algo que o programa consiga usar.',
      enBody: 'When code depends on an external response, such as an API, it does not finish immediately. <code>Promise</code>, <code>async</code>, <code>await</code>, <code>fetch</code>, <code>JSON</code>, and <code>try/catch</code> help wait for the response, handle errors, and turn received data into something the program can use.'
    },
    {
      test: /queryselector|addeventlistener|innerhtml|textcontent|classlist|dom|document\.|evento|event/,
      ptTitle: 'Conceito cobrado: DOM, seleção e eventos',
      enTitle: 'Concept checked: DOM, selection, and events',
      ptBody: 'O DOM é a representação da página dentro do JavaScript. Com <code>document.querySelector</code> você encontra elementos; com <code>textContent</code>, <code>innerHTML</code> ou <code>classList</code> você altera a tela; com <code>addEventListener</code> você reage a ações do usuário, como cliques e digitação.',
      enBody: 'The DOM is the page represented inside JavaScript. With <code>document.querySelector</code> you find elements; with <code>textContent</code>, <code>innerHTML</code>, or <code>classList</code> you change the screen; with <code>addEventListener</code> you react to user actions such as clicks and typing.'
    },
    {
      test: /map\s*\(|filter\s*\(|reduce\s*\(|sort\s*\(|spread|\.\.\.|destructur|encadeamento|chaining/,
      ptTitle: 'Conceito cobrado: métodos modernos de arrays',
      enTitle: 'Concept checked: modern array methods',
      ptBody: '<code>map</code>, <code>filter</code>, <code>reduce</code> e <code>sort</code> são formas de transformar coleções sem escrever tudo manualmente. Antes de responder, identifique se a questão quer transformar itens, filtrar itens, acumular um valor, ordenar dados ou copiar/espalhar valores com <code>...</code>.',
      enBody: '<code>map</code>, <code>filter</code>, <code>reduce</code>, and <code>sort</code> are ways to transform collections without writing every step manually. Before answering, identify whether the question wants to transform items, filter items, accumulate a value, sort data, or copy/spread values with <code>...</code>.'
    },
    {
      test: /def\s+|function\s+|função|funcao|arrow|=>|parâmetro|parametro|parameter/,
      ptTitle: 'Conceito cobrado: funções e parâmetros',
      enTitle: 'Concept checked: functions and parameters',
      ptBody: 'Uma função guarda um conjunto de instruções para reutilizar depois. Em Python usamos <code>def</code>; em JavaScript podemos usar <code>function</code> ou <code>=&gt;</code>. Parâmetros são valores que entram na função; o corpo processa esses valores; e a chamada executa a função.',
      enBody: 'A function stores a set of instructions so you can reuse them later. In Python we use <code>def</code>; in JavaScript we can use <code>function</code> or <code>=&gt;</code>. Parameters are values that enter the function; the body processes them; and the call runs the function.'
    },
    {
      test: /return\b|retorna|devolver|devolve/,
      ptTitle: 'Conceito cobrado: return',
      enTitle: 'Concept checked: return',
      ptBody: '<code>return</code> envia um valor para fora da função. Ele não é a mesma coisa que <code>print</code> ou <code>console.log</code>: imprimir apenas mostra na tela; retornar permite que outra parte do programa use o resultado em contas, condições ou novas chamadas.',
      enBody: '<code>return</code> sends a value out of a function. It is not the same as <code>print</code> or <code>console.log</code>: printing only displays something; returning lets another part of the program use the result in calculations, conditions, or new calls.'
    },
    {
      test: /input\s*\(|entrada|usuário|usuario|user input|prompt\s*\(/,
      ptTitle: 'Conceito cobrado: entrada de dados',
      enTitle: 'Concept checked: user input',
      ptBody: 'Entrada de dados é quando o programa recebe uma informação do usuário. Em Python, <code>input()</code> sempre devolve texto, mesmo quando a pessoa digita números; por isso, quando a questão pede cálculo, normalmente será necessário converter com <code>int()</code> ou <code>float()</code>.',
      enBody: 'User input is when the program receives information from the user. In Python, <code>input()</code> always returns text, even when the person types numbers; so when the question asks for a calculation, you usually need to convert with <code>int()</code> or <code>float()</code>.'
    },
    {
      test: /int\s*\(|float\s*\(|número|numero|number|converter|conversão|conversion/,
      ptTitle: 'Conceito cobrado: texto, número e conversão',
      enTitle: 'Concept checked: text, number, and conversion',
      ptBody: 'Programas tratam texto e número de formas diferentes. <code>"10"</code> é texto; <code>10</code> é número. Para somar, comparar ou calcular corretamente, o valor precisa estar no tipo certo; por isso usamos conversões como <code>int()</code>, <code>float()</code>, <code>Number()</code> ou <code>String()</code>.',
      enBody: 'Programs treat text and numbers differently. <code>"10"</code> is text; <code>10</code> is a number. To add, compare, or calculate correctly, the value must be in the right type; that is why we use conversions such as <code>int()</code>, <code>float()</code>, <code>Number()</code>, or <code>String()</code>.'
    },
    {
      test: /for\s+|while\s+|loop|loops|range\s*\(|contador|contador|iteration|iterar|percorrer/,
      ptTitle: 'Conceito cobrado: loops e repetição',
      enTitle: 'Concept checked: loops and repetition',
      ptBody: 'Loop é uma repetição controlada. <code>for</code> costuma percorrer uma sequência ou repetir um número definido de vezes; <code>while</code> repete enquanto uma condição for verdadeira. Para acertar, acompanhe o contador volta por volta e observe quando a repetição para.',
      enBody: 'A loop is controlled repetition. <code>for</code> usually goes through a sequence or repeats a defined number of times; <code>while</code> repeats while a condition is true. To answer correctly, track the counter turn by turn and notice when the repetition stops.'
    },
    {
      test: /if\s+|else\b|elif\b|condiç|condic|condition|verdadeiro|falso|true|false|>=|<=|==|!=|>|</,
      ptTitle: 'Conceito cobrado: condições e booleanos',
      enTitle: 'Concept checked: conditions and booleans',
      ptBody: 'Condições fazem o programa escolher caminhos. Uma comparação como <code>idade &gt;= 18</code> gera um valor booleano: <code>True</code>/<code>False</code> em Python ou <code>true</code>/<code>false</code> em JavaScript. O bloco do <code>if</code> só executa quando a condição é verdadeira.',
      enBody: 'Conditions make the program choose paths. A comparison such as <code>age &gt;= 18</code> creates a boolean value: <code>True</code>/<code>False</code> in Python or <code>true</code>/<code>false</code> in JavaScript. The <code>if</code> block only runs when the condition is true.'
    },
    {
      test: /lista|list|array|arrays|\[\]|\.push|append\s*\(|len\s*\(|length/,
      ptTitle: 'Conceito cobrado: listas e arrays',
      enTitle: 'Concept checked: lists and arrays',
      ptBody: 'Listas em Python e arrays em JavaScript guardam vários valores em uma única estrutura. Você pode acessar itens por posição, adicionar elementos com <code>append</code> ou <code>push</code>, medir tamanho com <code>len</code> ou <code>length</code> e percorrer tudo com um loop.',
      enBody: 'Python lists and JavaScript arrays store multiple values in one structure. You can access items by position, add elements with <code>append</code> or <code>push</code>, measure size with <code>len</code> or <code>length</code>, and go through everything with a loop.'
    },
    {
      test: /dicionário|dicionario|dictionary|dict|objeto|object|\{\}|chave|key|valor|value/,
      ptTitle: 'Conceito cobrado: objetos, dicionários e chave/valor',
      enTitle: 'Concept checked: objects, dictionaries, and key/value',
      ptBody: 'Objetos em JavaScript e dicionários em Python organizam dados por pares de chave e valor. A chave funciona como um nome para encontrar a informação; o valor é o dado guardado. Esse formato é comum para representar usuários, produtos, tarefas e respostas de APIs.',
      enBody: 'JavaScript objects and Python dictionaries organize data as key/value pairs. The key works like a name used to find the information; the value is the stored data. This format is common for representing users, products, tasks, and API responses.'
    },
    {
      test: /print\s*\(|console\.log|mostrar|saída|saida|output|terminal/,
      ptTitle: 'Conceito cobrado: saída no terminal',
      enTitle: 'Concept checked: terminal output',
      ptBody: 'Saída é aquilo que o programa mostra para a pessoa. Em Python usamos <code>print()</code>; em JavaScript usamos <code>console.log()</code>. A questão geralmente cobra a ordem de execução: leia de cima para baixo e veja exatamente o que será exibido.',
      enBody: 'Output is what the program shows to the person. In Python we use <code>print()</code>; in JavaScript we use <code>console.log()</code>. The question usually checks execution order: read from top to bottom and see exactly what will be displayed.'
    },
    {
      test: /const\s+|let\s+|variável|variavel|variable|atribui|assignment|=/,
      ptTitle: 'Conceito cobrado: variáveis e atribuição',
      enTitle: 'Concept checked: variables and assignment',
      ptBody: 'Variável é um nome que guarda um valor para usar depois. Em Python basta escrever <code>nome = valor</code>; em JavaScript usamos <code>const</code> ou <code>let</code>. O sinal <code>=</code> não compara: ele atribui, ou seja, coloca o valor dentro daquele nome.',
      enBody: 'A variable is a name that stores a value for later use. In Python you write <code>name = value</code>; in JavaScript you use <code>const</code> or <code>let</code>. The <code>=</code> sign does not compare: it assigns, meaning it puts the value into that name.'
    },
    {
      test: /\+|-|\*|\/|operador|operator|soma|subtra|multiplica|divide|módulo|modulo|%/,
      ptTitle: 'Conceito cobrado: operadores',
      enTitle: 'Concept checked: operators',
      ptBody: 'Operadores são símbolos que executam ações com valores. <code>+</code> soma números ou junta textos, <code>-</code> subtrai, <code>*</code> multiplica, <code>/</code> divide e <code>%</code> pega o resto. O tipo do valor muda o comportamento do operador.',
      enBody: 'Operators are symbols that perform actions with values. <code>+</code> adds numbers or joins text, <code>-</code> subtracts, <code>*</code> multiplies, <code>/</code> divides, and <code>%</code> gets the remainder. The value type changes how the operator behaves.'
    }
  ];

  const found = concepts.find(item => item.test.test(source));
  if(found){
    return { title: txt(found.ptTitle, found.enTitle), body: txt(found.ptBody, found.enBody) };
  }
  return {
    title: txt('Conceito cobrado: leitura de código passo a passo', 'Concept checked: reading code step by step'),
    body: txt('Antes de responder, leia o código de cima para baixo. Identifique primeiro quais valores entram, depois quais regras alteram esses valores e, por fim, qual resultado será mostrado, retornado ou salvo.', 'Before answering, read the code from top to bottom. First identify which values enter, then which rules change those values, and finally what result will be displayed, returned, or stored.')
  };
}

function getCodeConceptHtml(step){
  if(!stepHasProgrammingCode(step)) return '';
  const concept = getCodeConceptForStep(step);
  return '<div class="code-concept-box">' +
    '<div class="code-concept-kicker">' + txt('conceito antes do código', 'concept before coding') + '</div>' +
    '<h4 class="code-concept-title">' + concept.title + '</h4>' +
    '<p class="code-concept-body">' + concept.body + '</p>' +
  '</div>';
}

function renderExerciseShell(step, innerHtml){
  const conceptHtml = getCodeConceptHtml(step);
  return '<div class="exercise-shell">' +
    '<div class="exercise-window">' +
      '<div class="exercise-xp-float"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.4 5.7 21l2.3-7.2L2 9.2h7.6z"/></svg>+' + TASK_XP_REWARD + ' xp</div>' +
      '<div class="exercise-topbar"><span class="demo-dot d-coral"></span><span class="demo-dot d-amber"></span><span class="demo-dot d-mint"></span><span class="exercise-toplabel">' + getExerciseTaskLabel() + '</span></div>' +
      '<div class="exercise-progress-pill" id="lessonScorePill">' + step.questionNumber + '/' + getLessonQuestionTotal() + ' · <span class="lesson-pass-note">' + txt('mín. ', 'min. ') + PASSING_SCORE + ' ' + txt('acertos', 'correct') + '</span></div>' +
      '<div class="exercise-card-body">' +
        '<div class="exercise-kicker-card">' + step.kicker + '</div>' +
        conceptHtml +
        '<div class="exercise-q-card">' + step.q.replace(/\n/g, '<br>') + '</div>' +
        innerHtml +
      '</div>' +
      '<div class="exercise-streak-float"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c2 4-3 6-3 10a3 3 0 006 0c0-1-.5-2-1-3 2 1 3 3 3 5a5 5 0 01-10 0c0-4 3-6 5-12z"/></svg>' + getExerciseStreakLabel() + '</div>' +
    '</div>' +
    renderLessonByteCoach(step) +
  '</div>';
}

function renderDevLineWithSlots(line, slotFactory){
  let localSlot = 0;
  const parts = String(line || '').split('___');
  return parts.map((part, idx) => {
    const highlighted = arenaTokenizeLine(part);
    if(idx >= parts.length - 1) return highlighted;
    return highlighted + (typeof slotFactory === 'function' ? slotFactory(localSlot++) : String(slotFactory || ''));
  }).join('');
}

function renderDevStaticWorkbench(lines, slotFactory, terminalText, title){
  const safeLines = Array.isArray(lines) && lines.length ? lines : [''];
  let globalSlot = 0;
  const gutter = safeLines.map((_, idx) => '<span>' + String(idx + 1).padStart(2, '0') + '</span>').join('');
  const codeLines = safeLines.map((line) => {
    const htmlLine = renderDevLineWithSlots(line, () => {
      const current = globalSlot++;
      return typeof slotFactory === 'function' ? slotFactory(current) : String(slotFactory || '');
    });
    return '<div class="dev-static-line">' + htmlLine + '</div>';
  }).join('');

  return '<div class="code-workbench dev-editor-shell question-dev-editor">' +
    '<div class="arena-editor-bar"><span>' + (title || ('mycode/editor · ' + txt('exercício prático', 'practice exercise'))) + '</span><span>dev ui</span></div>' +
    '<div class="dev-static-code"><div class="dev-static-gutter" aria-hidden="true">' + gutter + '</div><div class="dev-static-lines">' + codeLines + '</div></div>' +
    '<div class="dev-terminal-row"><span class="terminal-prompt">mycode&gt;</span><span>' + terminalText + '</span><span class="terminal-caret">▌</span></div>' +
  '</div>';
}

function renderCodeWorkbench(lines, inputHtml, terminalText){
  return renderDevStaticWorkbench(lines, inputHtml, terminalText, 'mycode/editor · ' + txt('exercício prático', 'practice exercise'));
}

function renderAnswerTerminal(step){
  return '<div class="answer-terminal dev-editor-shell dev-answer-terminal">' +
    '<div class="arena-editor-bar"><span>mycode/cmd · ' + txt('resposta curta', 'short answer') + '</span><span>terminal</span></div>' +
    '<div class="dev-terminal-row"><span class="terminal-prompt">' + txt('resposta', 'answer') + '&gt;</span><input type="text" class="text-input" id="fillInput" autocomplete="off" spellcheck="false" placeholder="' + txt('digite aqui', 'type here') + '"><span class="terminal-caret">▌</span></div>' +
  '</div>';
}

function isFlexibleTextValue(value){
  const v = String(value || '').trim();
  return v.length > 0 && v !== '___';
}
function isFlexibleTextFill(step){
  const text = ((step.q || '') + ' ' + ((step.codeTemplate || []).join(' ')) + ' ' + (step.answer || '')).toLowerCase();
  return step.type === 'fill' && (step.answer === '__ANY_TEXT__' || text.includes('texto válido') || text.includes('texto valido') || text.includes('qualquer texto') || text.includes('valid text') || text.includes('any text'));
}

function answerMatches(value, accepted, loose){
  const normalize = (v) => String(v).trim().replace(/\s+/g, ' ');
  const val = normalize(value);
  if(loose){
    const low = val.toLowerCase();
    return accepted.some(ans => normalize(ans).toLowerCase() === low);
  }
  return accepted.some(ans => normalize(ans) === val);
}

function renderStepDots(){
  stepDotsEl.innerHTML = '';
  activeSteps.forEach((s, i) => {
    const d = document.createElement('div');
    d.className = 'step-dot' + (s.type === 'teach' ? ' teach' : '');
    if(i < stepIndex) d.classList.add('done');
    else if(i === stepIndex) d.classList.add('current');
    d.innerHTML = '<div class="fill"></div>';
    stepDotsEl.appendChild(d);
  });
}

function openLesson(taskId){
  activeTask = tasks.find(t => t.id === taskId);
  stepIndex = 0;
  hearts = 3;
  lessonCorrect = 0;
  lessonAnswered = 0;
  heartsCount.textContent = hearts;
  overlay.classList.add('show');
  document.body.classList.add('lesson-open');
  if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();

  if(activeTask && activeTask.project){
    activeSteps = [];
    if(heartsWrap) heartsWrap.style.display = 'none';
    renderProjectEditor(activeTask);
    return;
  }

  if(heartsWrap) heartsWrap.style.display = 'flex';
  activeSteps = flattenSteps(activeTask);
  renderStep();
}
function closeLesson(){
  overlay.classList.remove('show');
  document.body.classList.remove('lesson-open');
  lessonInner.classList.remove('project-mode');
  if(heartsWrap) heartsWrap.style.display = 'flex';
  activeTask = null;
  if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();
}


function normalizeProjectCode(code){
  return String(code || '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/.*$/gm, '')
    .trim();
}

function hasWord(code, word){
  return new RegExp('\\b' + word + '\\b').test(code);
}

function validateProject(task, code){
  const raw = String(code || '');
  const c = normalizeProjectCode(raw);
  const errors = [];
  const suggestions = [];
  const kind = task && task.project ? task.project.kind : '';



  function earlyProjectResult(ok, errors, suggestions){
    if(ok && suggestions.length === 0){
      suggestions.push(txt('Ótimo. Seu código atende aos requisitos deste projeto inicial.', 'Great. Your code meets this starter project requirements.'));
    }
    return { passed: ok && errors.length === 0, errors, suggestions };
  }

  if(kind === 'helloWorld'){
    if(!/\bmessage\s*=/.test(c)) errors.push(txt('Crie uma variável chamada message.', 'Create a variable named message.'));
    if(!/Hello\s*World/i.test(c)) errors.push(txt('Guarde ou mostre o texto Hello World.', 'Store or display the text Hello World.'));
    if(!/console\.log\s*\(\s*message\s*\)/.test(c) && !/console\.log\s*\(\s*["']Hello\s*World["']\s*\)/i.test(c)) errors.push(txt('Use console.log para mostrar a mensagem.', 'Use console.log to display the message.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'memoryBoxes'){
    if(!/\bconst\s+name\s*=/.test(c)) errors.push(txt('Crie name usando const.', 'Create name using const.'));
    if(!/\blet\s+level\s*=/.test(c)) errors.push(txt('Crie level usando let.', 'Create level using let.'));
    if((c.match(/console\.log\s*\(/g) || []).length < 2) errors.push(txt('Mostre name e level com console.log.', 'Display name and level with console.log.'));
    if(/\bvar\s+/.test(c)) suggestions.push(txt('Evite var: prefira const ou let.', 'Avoid var: prefer const or let.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'typeInspector'){
    if(!/\bconst\s+\w+\s*=\s*["']/.test(c)) errors.push(txt('Crie pelo menos uma string com aspas.', 'Create at least one quoted string.'));
    if(!/\bconst\s+\w+\s*=\s*\d+(\.\d+)?/.test(c)) errors.push(txt('Crie pelo menos um number sem aspas.', 'Create at least one number without quotes.'));
    if(!/\bconst\s+\w+\s*=\s*(true|false)/.test(c)) errors.push(txt('Crie pelo menos um booleano true ou false.', 'Create at least one boolean true or false.'));
    if((c.match(/console\.log\s*\(/g) || []).length < 3) errors.push(txt('Use console.log pelo menos três vezes.', 'Use console.log at least three times.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'simpleCalculator'){
    if(!/function\s+add\s*\(/.test(c)) errors.push(txt('Crie uma function chamada add.', 'Create a function named add.'));
    if(!/return\s+[^;\n]*\+[^;\n]*/.test(c)) errors.push(txt('Use return com + para devolver a soma.', 'Use return with + to return the sum.'));
    if(!/console\.log\s*\(/.test(c)) errors.push(txt('Mostre o resultado com console.log.', 'Display the result with console.log.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'decisionPath'){
    if(!/\bconst\s+grade\s*=/.test(c)) errors.push(txt('Crie uma variável chamada grade.', 'Create a variable named grade.'));
    if(!/if\s*\([^)]*grade\s*>=\s*7[^)]*\)/.test(c)) errors.push(txt('Use if com grade >= 7.', 'Use if with grade >= 7.'));
    if(!/else\s*\{/.test(c)) errors.push(txt('Use else para o caminho alternativo.', 'Use else for the alternative path.'));
    if(!/console\.log\s*\(/.test(c)) errors.push(txt('Mostre o resultado com console.log.', 'Display the result with console.log.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'loopCounter'){
    if(!/\b(counter|contador)\s*=/.test(c)) errors.push(txt('Crie uma variável de controle chamada counter ou contador.', 'Create a control variable named counter or contador.'));
    if(!/(while\s*\(|for\s*\()/.test(c)) errors.push(txt('Use while ou for para repetir.', 'Use while or for to repeat.'));
    if(!/console\.log\s*\(/.test(c)) errors.push(txt('Mostre os números com console.log.', 'Display the numbers with console.log.'));
    if(/while\s*\(/.test(c) && !/(counter|contador)\s*=\s*(counter|contador)\s*\+\s*1/.test(c)) suggestions.push(txt('Se usar while, atualize o contador para evitar loop infinito.', 'If using while, update the counter to avoid an infinite loop.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  if(kind === 'listBasics'){
    if(!/\b(grades|notas)\s*=\s*\[/.test(c)) errors.push(txt('Crie um array chamado grades ou notas.', 'Create an array named grades or notas.'));
    if(!/(for\s*\(|for\s+const\s+\w+\s+of)/.test(c)) errors.push(txt('Use for para percorrer o array.', 'Use for to loop through the array.'));
    if(!/if\s*\([^)]*>=\s*7[^)]*\)/.test(c)) errors.push(txt('Use if para verificar valores >= 7.', 'Use if to check values >= 7.'));
    if(!/console\.log\s*\(/.test(c)) errors.push(txt('Mostre os aprovados com console.log.', 'Display approved values with console.log.'));
    return earlyProjectResult(errors.length === 0, errors, suggestions);
  }

  const isPythonProject = task && task.project && task.project.language === 'python';

  if(isPythonProject){
    if(/console\.log\s*\(|\bconst\s+|\blet\s+|function\s+\w+\s*\(/.test(c)){
      errors.push(txt('Este projeto é de Python. Use def, return e print em vez de const, let, function ou console.log.', 'This is a Python project. Use def, return, and print instead of const, let, function, or console.log.'));
    }
    if(!/\bprint\s*\(/.test(c)) errors.push(txt('Use print(...) para mostrar o resultado.', 'Use print(...) to display the result.'));

    if(kind === 'pythonProfileCard'){
      if(!/\bname\s*=/.test(c)) errors.push(txt('Crie uma variável chamada name.', 'Create a variable named name.'));
      if(!/\btopic\s*=/.test(c)) errors.push(txt('Crie uma variável chamada topic.', 'Create a variable named topic.'));
      if(!/\bgoal\s*=/.test(c)) errors.push(txt('Crie uma variável chamada goal.', 'Create a variable named goal.'));
      if((c.match(/\bprint\s*\(/g) || []).length < 3) errors.push(txt('Use print pelo menos três vezes para montar o cartão.', 'Use print at least three times to build the card.'));
    } else if(kind === 'pythonCounterLoop'){
      if(!/\b(number|counter)\s*=/.test(c)) errors.push(txt('Crie uma variável de controle chamada number ou counter.', 'Create a control variable named number or counter.'));
      if(!/(while\s+[^:]+:|for\s+\w+\s+in\s+range\s*\()/.test(c)) errors.push(txt('Use while ou for com range para repetir.', 'Use while or for with range to repeat.'));
      if(!/if\s+[^:]*%\s*2\s*==\s*0\s*:/.test(c)) errors.push(txt('Use if para verificar se o número é par com % 2 == 0.', 'Use if to check whether the number is even with % 2 == 0.'));
      if(!/print\s*\(/.test(c)) errors.push(txt('Use print para mostrar os números pares.', 'Use print to display the even numbers.'));
      if(/while\s+/.test(c) && !/(number|counter)\s*=\s*(number|counter)\s*\+\s*1/.test(c)) suggestions.push(txt('Se usar while, atualize o contador para evitar loop infinito.', 'If you use while, update the counter to avoid an infinite loop.'));
    } else {
      if(!/\bdef\s+[a-zA-Z_]\w*\s*\(/.test(c)) errors.push(txt('Crie uma função com def.', 'Create a function with def.'));
      if(!/\breturn\b/.test(c)) errors.push(txt('Use return dentro da função.', 'Use return inside the function.'));
    }

    if(kind === 'pythonCalculator'){
      if(!/\b(number_a|numberA|a)\b/.test(c) || !/\b(number_b|numberB|b)\b/.test(c)) suggestions.push(txt('Use duas variáveis numéricas antes de chamar a função.', 'Use two numeric variables before calling the function.'));
      if(!/return\s+[^\n]*\+[^\n]*/.test(c)) errors.push(txt('A função precisa devolver uma soma com +.', 'The function must return a sum using +.'));
      if(!/\b(add|sum_numbers|sum_values|calculate)\s*\([^\)]*,[^\)]*\)/.test(c)) errors.push(txt('Chame a função com dois valores, por exemplo add(number_a, number_b).', 'Call the function with two values, for example add(number_a, number_b).'));
    }

    if(kind === 'pythonGradeAnalyzer'){
      if(!/\bstudents\s*=\s*\[/.test(c)) errors.push(txt('Crie uma lista chamada students.', 'Create a list named students.'));
      if(!/["']name["']\s*:/.test(c) || !/["']grade["']\s*:/.test(c)) errors.push(txt('Cada aluno deve ter name e grade.', 'Each student must have name and grade.'));
      if(!/for\s+\w+\s+in\s+students\s*:/.test(c)) errors.push(txt('Use for para percorrer students.', 'Use for to loop through students.'));
      if(!/if\s+[^\n]*grade[^\n]*>=\s*7\s*:/.test(c)) errors.push(txt('Use if para verificar grade >= 7.', 'Use if to check grade >= 7.'));
      if(!/print\s*\([^\)]*name[^\)]*\)/.test(c)) errors.push(txt('Use print para mostrar o name dos aprovados.', 'Use print to display approved student names.'));
    }

    if(kind === 'pythonStudyReport'){
      if(!/\btasks\s*=\s*\[/.test(c)) errors.push(txt('Crie uma lista chamada tasks.', 'Create a list named tasks.'));
      if(!/def\s+(build_report|make_report)\s*\(/.test(c)) errors.push(txt('Crie uma função chamada build_report ou make_report.', 'Create a function named build_report or make_report.'));
      if(!/\.join\s*\(/.test(c)) errors.push(txt('Use join para montar o texto final.', 'Use join to build the final text.'));
      if(!/print\s*\(\s*(build_report|make_report)\s*\(/.test(c)) errors.push(txt('Mostre o relatório chamando a função dentro de print.', 'Display the report by calling the function inside print.'));
    }

    if(raw.length < 40){
      errors.push(txt('Escreva o código completo, não apenas uma linha.', 'Write the full code, not just one line.'));
    }
    if(errors.length === 0 && suggestions.length === 0){
      suggestions.push(txt('Ótimo. Seu código Python atende aos requisitos do projeto.', 'Great. Your Python code meets the project requirements.'));
    }
    return { passed: errors.length === 0, errors, suggestions };
  }

  if(/System\.out\.println|public\s+class|static\s+void\s+main/.test(c)){
    errors.push(txt('Use JavaScript, não Java. Troque System.out.println por console.log e remova public class/main.', 'Use JavaScript, not Java. Replace System.out.println with console.log and remove public class/main.'));
  }

  if(!/\b(const|let)\s+[a-zA-Z_$][\w$]*/.test(c)){
    errors.push(txt('Use const ou let para criar variáveis.', 'Use const or let to create variables.'));
  }

  if(!/console\.log\s*\(/.test(c) && !/\brender\s*\(/.test(c)){
    errors.push(txt('Use console.log(...) ou uma function render para mostrar o resultado.', 'Use console.log(...) or a render function to show the result.'));
  }

  if(/\bvar\s+/.test(c)){
    suggestions.push(txt('Prefira const ou let em vez de var.', 'Prefer const or let instead of var.'));
  }

  if(kind === 'calculator'){
    if(!/function\s+(add|sum|calculate|calculateTotal)\s*\(/.test(c) && !/(const|let)\s+(add|sum|calculate|calculateTotal)\s*=\s*\(/.test(c)){
      errors.push(txt('Crie uma function com nome em inglês, como add, sum ou calculate.', 'Create a function with an English name, such as add, sum, or calculate.'));
    }
    if(!/return\s+[^;]*\+[^;]*;?/.test(c)){
      errors.push(txt('Dentro da function, use return para devolver a soma.', 'Inside the function, use return to return the sum.'));
    }
    if(!/\b(add|sum|calculate|calculateTotal)\s*\([^)]*,[^)]*\)/.test(c)){
      errors.push(txt('Chame a function com dois valores, por exemplo add(numberA, numberB).', 'Call the function with two values, for example add(numberA, numberB).'));
    }
  }


  if(kind === 'jsReceiptBasics'){
    if(!/\bproduct\s*=/.test(c)) errors.push(txt('Crie uma variável chamada product.', 'Create a variable named product.'));
    if(!/\bprice\s*=/.test(c)) errors.push(txt('Crie uma variável chamada price.', 'Create a variable named price.'));
    if(!/\bquantity\s*=/.test(c)) errors.push(txt('Crie uma variável chamada quantity.', 'Create a variable named quantity.'));
    if(!/\btotal\s*=\s*[^;\n]*price[^;\n]*\*[^;\n]*quantity/.test(c) && !/\btotal\s*=\s*[^;\n]*quantity[^;\n]*\*[^;\n]*price/.test(c)) errors.push(txt('Calcule total multiplicando price por quantity.', 'Calculate total by multiplying price by quantity.'));
    if((c.match(/console\.log\s*\(/g) || []).length < 2) errors.push(txt('Use console.log pelo menos duas vezes para mostrar produto e total.', 'Use console.log at least twice to display product and total.'));
  }

  if(kind === 'approvedStudents'){
    if(!/\bstudents\s*=\s*\[/.test(c)) errors.push(txt('Crie um array chamado students.', 'Create an array named students.'));
    if(!/name\s*:/.test(c) || !/grade\s*:/.test(c)) errors.push(txt('Cada object de student deve ter name e grade.', 'Each student object must have name and grade.'));
    if(!/for\s*\(/.test(c)) errors.push(txt('Use for para percorrer o array students.', 'Use for to iterate through the students array.'));
    if(!/if\s*\([^)]*grade\s*>=\s*7[^)]*\)/.test(c)) errors.push(txt('Use if para verificar se grade >= 7.', 'Use if to check whether grade >= 7.'));
    if(!/console\.log\s*\([^)]*name[^)]*\)/.test(c)) errors.push(txt('Use console.log para mostrar o name do aluno aprovado.', 'Use console.log to show the name of the approved student.'));
    if(!/students\s*\[\s*i\s*\]/.test(c)) suggestions.push(txt('Use students[i] dentro do for para acessar o student atual.', 'Use students[i] inside the for loop to access the current student.'));
  }

  if(kind === 'todoList'){
    if(!/\b(tasks|todoItems)\s*=\s*\[/.test(c)) errors.push(txt('Crie um array chamado tasks ou todoItems.', 'Create an array named tasks or todoItems.'));
    if(!/function\s+render\s*\(/.test(c) && !/(const|let)\s+render\s*=/.test(c)) errors.push(txt('Crie uma function chamada render.', 'Create a function named render.'));
    if(!/\.addEventListener\s*\(\s*['\"](click|submit)['\"]/.test(c)) errors.push(txt('Use addEventListener com click ou submit.', 'Use addEventListener with click or submit.'));
    if(!/\.value/.test(c)) errors.push(txt('Leia o valor digitado com input.value.', 'Read the typed value with input.value.'));
    if(!/(forEach|map|for\s*\()/.test(c)) errors.push(txt('Percorra a lista com forEach, map ou for.', 'Loop through the list with forEach, map, or for.'));
    if(!/(textContent|innerHTML|insertAdjacentHTML)/.test(c)) errors.push(txt('Renderize os itens usando textContent, innerHTML ou insertAdjacentHTML.', 'Render items using textContent, innerHTML, or insertAdjacentHTML.'));
  }

  if(kind === 'expenseSummary'){
    if(!/\bexpenses\s*=\s*\[/.test(c)) errors.push(txt('Crie um array chamado expenses.', 'Create an array named expenses.'));
    if(!/amount\s*:/.test(c) || !/category\s*:/.test(c)) errors.push(txt('Cada despesa deve ter amount e category.', 'Each expense must have amount and category.'));
    if(!/\.filter\s*\(/.test(c)) errors.push(txt('Use filter para selecionar as despesas pagas.', 'Use filter to select paid expenses.'));
    if(!/\.reduce\s*\(/.test(c)) errors.push(txt('Use reduce para calcular o total.', 'Use reduce to calculate the total.'));
    if(!/paid\s*:|\.paid/.test(c)) errors.push(txt('Inclua a propriedade paid para saber se a despesa foi paga.', 'Include the paid property to know whether the expense was paid.'));
  }

  if(kind === 'asyncDashboard'){
    if(!/async\s+function\s+\w+\s*\(/.test(c) && !/(const|let)\s+\w+\s*=\s*async\s*\(/.test(c)) errors.push(txt('Crie uma async function para carregar os dados.', 'Create an async function to load the data.'));
    if(!/\bawait\b/.test(c)) errors.push(txt('Use await para aguardar Promise.resolve ou fetch.', 'Use await to wait for Promise.resolve or fetch.'));
    if(!/(Promise\.resolve|fetch\s*\()/.test(c)) errors.push(txt('Use Promise.resolve para simular dados ou fetch para buscar dados.', 'Use Promise.resolve to simulate data or fetch to request data.'));
    if(!/try\s*\{[\s\S]*\}\s*catch\s*\(/.test(c)) errors.push(txt('Use try/catch para tratar erro.', 'Use try/catch for error handling.'));
    if(!/\busers\b/.test(c)) errors.push(txt('Trabalhe com uma lista chamada users.', 'Work with a list named users.'));
    if(!/(forEach|map|for\s*\()/.test(c)) errors.push(txt('Percorra os usuários com forEach, map ou for.', 'Loop through users with forEach, map, or for.'));
  }

  if(raw.length < 40){
    errors.push(txt('Escreva o código completo, não apenas uma linha.', 'Write the full code, not just one line.'));
  }

  if(errors.length === 0 && suggestions.length === 0){
    suggestions.push(txt('Ótimo. Seu código atende aos requisitos do projeto.', 'Great. Your code meets the project requirements.'));
  }

  return { passed: errors.length === 0, errors, suggestions };
}


function renderTokenChoiceExercise(step){
  const options = Array.isArray(step.options) ? step.options : [];
  const promptText = step.tapInstruction || txt('Toque na resposta correta abaixo.', 'Tap the correct answer below.');
  let html = '';

  if(step.mode === 'sequence'){
    const seq = Array.isArray(step.correctSequence) ? step.correctSequence : [];
    const blankLine = step.sequenceTemplate || (Array(seq.length).fill('___').join(' ') + ';');
    const renderedLine = String(blankLine).replace(/___/g, '<button type="button" class="code-slot" data-slot="__slot__"></button>');
    let slotIndex = 0;
    const lineWithSlots = renderedLine.replace(/data-slot="__slot__"/g, () => 'data-slot="' + (slotIndex++) + '"');
    html += '<div class="tap-instruction"><span class="tap-info">i</span>' + promptText + '</div>';
    html += renderDevStaticWorkbench([blankLine], () => '<button type="button" class="code-slot" data-slot="' + (slotIndex++) + '"></button>', '', 'script.js · ' + txt('monte a linha', 'build the line'));
    html += '<div class="token-bank" id="tokenBank">';
    options.forEach((opt, i) => {
      html += '<button type="button" class="code-token-option" data-idx="' + i + '">' + escapeHtml(opt) + '</button>';
    });
    html += '</div><button type="button" class="sequence-reset" id="sequenceResetBtn">' + txt('limpar blocos', 'clear blocks') + '</button>';
    return html;
  }

  if(step.codeTemplate){
    const inputHtml = '<span class="choice-blank single-choice-slot" id="singleChoiceSlot">___</span>';
    html += renderCodeWorkbench(step.codeTemplate, inputHtml, promptText);
  } else if(step.codeLines){
    html += renderCodeWorkbench(step.codeLines, '', promptText);
    html += '<div class="single-choice-console"><span class="terminal-prompt">resposta&gt;</span><span class="single-choice-slot" id="singleChoiceSlot">' + txt('toque em uma opção', 'tap an option') + '</span></div>';
  } else if(step.code){
    html += '<div class="code-block">' + step.code + '</div>';
    html += '<div class="single-choice-console"><span class="terminal-prompt">resposta&gt;</span><span class="single-choice-slot" id="singleChoiceSlot">' + txt('toque em uma opção', 'tap an option') + '</span></div>';
  } else {
    html += '<div class="single-choice-console large"><span class="terminal-prompt">resposta&gt;</span><span class="single-choice-slot" id="singleChoiceSlot">' + txt('toque em uma opção', 'tap an option') + '</span></div>';
  }

  html += '<div class="tap-instruction compact"><span class="tap-info">i</span>' + promptText + '</div>';
  html += '<div class="opt-list tap-option-grid single-choice-bank" id="optList">';
  options.forEach((opt, i) => {
    html += '<button class="opt tap-option code-token-option single-choice-token" data-idx="' + i + '"><span>' + opt + '</span></button>';
  });
  html += '</div>';
  return html;
}

function wireSequenceExercise(step){
  selectedSequence = [];
  const sequenceLength = Array.isArray(step.correctSequence) ? step.correctSequence.length : 0;
  const slots = Array.from(document.querySelectorAll('.code-slot'));
  const tokens = Array.from(document.querySelectorAll('.code-token-option'));
  const reset = document.getElementById('sequenceResetBtn');

  function syncSequenceUI(){
    slots.forEach((slot, i) => {
      const value = selectedSequence[i];
      slot.textContent = value || '';
      slot.classList.toggle('filled', Boolean(value));
    });
    tokens.forEach(token => {
      const idx = Number(token.dataset.idx);
      const value = step.options && step.options[idx];
      token.disabled = selectedSequence.includes(value);
    });
    checkBtn.disabled = selectedSequence.length !== sequenceLength;
  }

  tokens.forEach(token => {
    token.addEventListener('click', () => {
      const idx = Number(token.dataset.idx);
      const value = step.options && step.options[idx];
      if(!value || selectedSequence.length >= sequenceLength) return;
      selectedSequence.push(value);
      syncSequenceUI();
    });
  });

  slots.forEach((slot, i) => {
    slot.addEventListener('click', () => {
      if(i >= selectedSequence.length) return;
      selectedSequence.splice(i, 1);
      syncSequenceUI();
    });
  });

  if(reset){
    reset.addEventListener('click', () => {
      selectedSequence = [];
      syncSequenceUI();
    });
  }

  syncSequenceUI();
}


/* =========================================================
   FILL QUESTIONS AS TOKEN-BUILDING EXERCISES
   ========================================================= */
function countFillBlanks(step){
  const lines = Array.isArray(step && step.codeTemplate) ? step.codeTemplate : [];
  return lines.reduce((total, line) => total + ((String(line).match(/___/g) || []).length), 0);
}

function splitAnswerIntoTokens(answer, blankCount){
  const raw = String(answer || '').trim();
  if(!raw || raw === '__ANY_TEXT__') return ['"texto"'];
  if(blankCount > 1){
    const spaced = raw.split(/\s+/).filter(Boolean);
    if(spaced.length === blankCount) return spaced;
    if(spaced.length > 1 && spaced.length <= blankCount) return spaced;
  }
  return [raw];
}

function getFillCorrectSequence(step){
  if(step && Array.isArray(step.correctSequence) && step.correctSequence.length) return step.correctSequence.slice();
  if(step && Array.isArray(step.answerSequence) && step.answerSequence.length) return step.answerSequence.slice();
  const blanks = Math.max(1, countFillBlanks(step));
  const tokens = splitAnswerIntoTokens(step && step.answer, blanks);
  if(tokens.length === 1 && blanks > 1 && tokens[0] !== '"texto"') return Array(blanks).fill(tokens[0]);
  return tokens.slice(0, blanks);
}

function getTokenDistractorPool(step, correctTokens){
  const source = getStepSourceText(step).toLowerCase();
  const pool = [];
  function add(values){ values.forEach(v => pool.push(String(v))); }

  if(source.includes('python') || source.includes('print') || source.includes('def') || source.includes('range')){
    add(['print', 'input', 'int', 'float', 'str', 'True', 'False', 'if', 'else', 'elif', 'for', 'while', 'range', 'len', 'append', 'return', 'def', ':', 'and', 'or', 'not']);
  }
  if(source.includes('javascript') || source.includes('console') || source.includes('const') || source.includes('let') || source.includes('dom')){
    add(['const', 'let', 'var', 'console.log', 'true', 'false', 'if', 'else', 'for', 'while', 'function', 'return', 'document', 'querySelector', 'textContent', 'addEventListener']);
  }
  if(source.includes('número') || source.includes('numero') || source.includes('number') || source.includes('inteiro') || source.includes('decimal')){
    add(['5', '10', '0', '1.5', '99.90', '"5"', '"10"', 'texto']);
  }
  if(source.includes('texto') || source.includes('string') || source.includes('aspas') || source.includes('quotes')){
    add(['"texto"', '"Olá"', '"Ana"', 'texto', 'Ana', '5', '"5"']);
  }
  if(source.includes('variável') || source.includes('variavel') || source.includes('variable')){
    add(['nome', 'idade', 'valor', 'total', 'numberOfLikes', 'preco', 'resultado', '"nome"', '"valor"']);
  }
  if(source.includes('operador') || source.includes('soma') || source.includes('divisão') || source.includes('divisao') || source.includes('maior') || source.includes('menor') || source.includes('compar')){
    add(['+', '-', '*', '/', '>', '<', '>=', '<=', '==', '===', '!=', '!==', '=']);
  }
  if(source.includes('lista') || source.includes('array') || source.includes('vetor') || source.includes('matriz')){
    add(['lista', 'array', 'append', 'push', 'len', 'length', '[0]', '[1]', 'items']);
  }
  if(source.includes('algoritmo') || source.includes('pseudocódigo') || source.includes('portugol') || source.includes('fluxograma')){
    add(['passos', 'entrada', 'processamento', 'saída', 'inicio', 'fim', 'decisão', 'repetição', 'verdadeiro', 'falso']);
  }

  add(['=', '==', '===', '+', '-', '*', '/', '(', ')', ':', ';', '"texto"', '5', 'true', 'false', 'True', 'False', 'passos', 'valor']);
  return pool.filter(v => v && !correctTokens.includes(v));
}

function makeTokenOptionsForFill(step){
  const correct = getFillCorrectSequence(step);
  const existing = Array.isArray(step && step.tokenOptions) ? step.tokenOptions : [];
  const pool = existing.length ? existing.slice() : getTokenDistractorPool(step, correct);
  const needed = Math.max(4, correct.length + 3);
  const options = correct.map(token => String(token)).filter(Boolean);
  pool.forEach(token => {
    const value = String(token);
    if(value && !options.includes(value)) options.push(value);
  });
  while(options.length < needed){
    const fallback = ['const', 'let', '=', '5', '"5"', 'nome', 'valor', 'print', 'console.log', 'if', 'else', 'return'][options.length % 12];
    if(!options.includes(fallback)) options.push(fallback);
    else options.push(fallback + options.length);
  }
  // Keep the correct tokens, but rotate the final list so the answer is not always first.
  const rotationSeed = String((step && step.q) || '').length + correct.join('').length;
  const compact = options.slice(0, Math.max(needed, Math.min(options.length, correct.length + 5)));
  return compact.map((_, idx) => compact[(idx + rotationSeed) % compact.length]);
}

function renderFillTokenExercise(step){
  const lines = Array.isArray(step.codeTemplate) && step.codeTemplate.length ? step.codeTemplate : ['___'];
  const promptText = step.tapInstruction || txt('Toque nos blocos abaixo para preencher a parte destacada.', 'Tap the blocks below to fill the highlighted part.');
  let slotIndex = 0;
  const codeLines = lines.map((line, idx) => {
    const escaped = escapeHtml(line);
    const withSlots = escaped.replace(/___/g, () => '<button type="button" class="code-slot fill-code-slot" data-slot="' + (slotIndex++) + '"></button>');
    return '<div class="code-line"><span class="line-no">' + String(idx + 1).padStart(2, '0') + '</span><span>' + withSlots + '</span></div>';
  }).join('');

  const options = makeTokenOptionsForFill(step);
  let html = '';
  html += '<div class="tap-instruction"><span class="tap-info">i</span>' + promptText + '</div>';
  slotIndex = 0;
  html += renderDevStaticWorkbench(lines, () => '<button type="button" class="code-slot fill-code-slot" data-slot="' + (slotIndex++) + '"></button>', txt('escolha os blocos na ordem correta', 'choose the blocks in the correct order'), 'script.js · ' + txt('complete tocando nos blocos', 'complete by tapping blocks'));
  html += '<div class="token-bank fill-token-bank" id="fillTokenBank">';
  options.forEach((opt, i) => {
    html += '<button type="button" class="code-token-option fill-token-option" data-idx="' + i + '">' + escapeHtml(opt) + '</button>';
  });
  html += '</div><button type="button" class="sequence-reset" id="fillSequenceResetBtn">' + txt('limpar blocos', 'clear blocks') + '</button>';
  if(step.hint) html += '<div class="typing-hint">' + txt('dica', 'tip') + ': ' + step.hint + '</div>';
  return html;
}

function wireFillTokenExercise(step){
  selectedSequence = [];
  const expected = getFillCorrectSequence(step);
  const sequenceLength = expected.length;
  const slots = Array.from(document.querySelectorAll('.fill-code-slot'));
  const tokens = Array.from(document.querySelectorAll('.fill-token-option'));
  const reset = document.getElementById('fillSequenceResetBtn');

  function syncFillUI(){
    slots.forEach((slot, i) => {
      const value = selectedSequence[i];
      slot.textContent = value || '';
      slot.classList.toggle('filled', Boolean(value));
      slot.classList.remove('correct', 'wrong');
    });
    tokens.forEach(token => {
      const value = token.textContent.trim();
      const usedCount = selectedSequence.filter(v => v === value).length;
      const availableCount = tokens.filter(t => t.textContent.trim() === value).length;
      token.disabled = usedCount >= availableCount;
    });
    checkBtn.disabled = selectedSequence.length !== sequenceLength;
  }

  tokens.forEach(token => {
    token.addEventListener('click', () => {
      const value = token.textContent.trim();
      if(!value || selectedSequence.length >= sequenceLength) return;
      selectedSequence.push(value);
      syncFillUI();
    });
  });

  slots.forEach((slot, i) => {
    slot.addEventListener('click', () => {
      if(i >= selectedSequence.length) return;
      selectedSequence.splice(i, 1);
      syncFillUI();
    });
  });

  if(reset){
    reset.addEventListener('click', () => {
      selectedSequence = [];
      syncFillUI();
    });
  }

  syncFillUI();
}

function renderProjectEditor(task){
  lessonInner.classList.add('project-mode');
  stepDotsEl.innerHTML = '<div class="step-dot current"><div class="fill"></div></div>';
  const total = tasks.length;
  const done = Object.keys(state.completed || {}).filter(k => tasks.some(t => String(t.id) === String(k))).length;
  const project = task.project;
  const isPythonProject = project && project.language === 'python';

  lessonInner.innerHTML =
    '<div class="project-terminal-shell">' +
      '<div class="project-terminal-head">' +
        '<div>' +
          '<span class="project-kicker">' + txt('editor de projeto · tarefa ', 'project editor · task ') + task.id + '</span>' +
          '<h2>' + project.title + '</h2>' +
          '<p>' + project.brief + '</p>' +
        '</div>' +
        '<div class="project-score-pill">' + done + '/' + total + ' ' + txt('concluídas', 'completed') + '</div>' +
      '</div>' +
      '<div class="project-terminal-layout">' +
        '<aside class="project-requirements">' +
          '<div class="project-mini-title">' + txt('Requisitos', 'Requirements') + '</div>' +
          '<ul>' + project.requirements.map(item => '<li>' + item + '</li>').join('') + '</ul>' +
          '<div class="project-mini-title mt">' + txt('Lembrete', 'Reminder') + '</div>' +
          '<p class="project-note">' + (isPythonProject ? txt('A explicação fica em português, mas os termos da linguagem Python continuam em inglês: <code>def</code>, <code>return</code>, <code>print</code>, <code>for</code>, <code>if</code>.', 'The explanation stays in English here, and Python language terms also remain in English: <code>def</code>, <code>return</code>, <code>print</code>, <code>for</code>, <code>if</code>.') : txt('A explicação fica em português, mas os termos da linguagem continuam em inglês: <code>const</code>, <code>let</code>, <code>function</code>, <code>return</code>, <code>console.log</code>.', 'The explanation stays in English here, and the programming language terms also remain in English: <code>const</code>, <code>let</code>, <code>function</code>, <code>return</code>, <code>console.log</code>.')) + '</p>' +
          '<button class="btn ghost project-solution-btn" id="showProjectSolutionBtn" type="button">' + txt('ver solução depois', 'see solution later') + '</button>' +
        '</aside>' +
        '<div class="project-ide">' +
          '<div class="arena-editor-shell dev-editor-shell project-dev-shell" id="projectEditorShell">' +
            '<div class="arena-editor-bar"><span>mycode/project.' + (isPythonProject ? 'py' : 'js') + ' · ' + txt('código completo', 'complete code') + '</span><span>' + (isPythonProject ? 'python' : 'javascript') + '</span></div>' +
            '<div class="arena-code-editor project-code-editor" id="projectCodeEditor">' +
              '<div class="arena-code-gutter" id="projectCodeGutter" aria-hidden="true"></div>' +
              '<div class="arena-code-stage" id="projectCodeStage">' +
                '<div class="arena-active-line" id="projectActiveLine" aria-hidden="true"></div>' +
                '<pre class="arena-code-highlight" id="projectCodeHighlight" aria-hidden="true"><code></code></pre>' +
                '<textarea id="projectCodeInput" class="arena-code-input project-code-input" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off"></textarea>' +
              '</div>' +
            '</div>' +
            '<div class="project-console dev-terminal-row" id="projectConsole"><span class="terminal-prompt">mycode&gt;</span> ' + (isPythonProject ? txt('Escreva o código Python completo e clique em Enviar projeto.', 'Write the complete Python code and click Send project.') : txt('Escreva o código JavaScript completo e clique em Enviar projeto.', 'Write the complete JavaScript code and click Send project.')) + '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="feedback-box project-feedback" id="feedbackBox"></div>';

  const input = document.getElementById('projectCodeInput');
  input.value = project.starter;
  initializeDevCodeEditor({inputId:'projectCodeInput', highlightId:'projectCodeHighlight', gutterId:'projectCodeGutter', activeId:'projectActiveLine', shellId:'projectEditorShell'});
  input.focus();

  const solutionBtn = document.getElementById('showProjectSolutionBtn');
  solutionBtn.addEventListener('click', () => {
    const consoleBox = document.getElementById('projectConsole');
    consoleBox.innerHTML = '<span class="terminal-prompt">' + txt('solução', 'solution') + '&gt;</span><pre>' + escapeHtml(project.solution) + '</pre>';
  });

  checkBtn.textContent = txt('enviar projeto', 'send project');
  checkBtn.className = 'btn primary';
  checkBtn.disabled = false;
  checkBtn.onclick = () => handleProjectSubmit(task);
}

function handleProjectSubmit(task){
  const input = document.getElementById('projectCodeInput');
  const fb = document.getElementById('feedbackBox');
  const consoleBox = document.getElementById('projectConsole');
  const result = validateProject(task, input.value);

  fb.className = 'feedback-box project-feedback show ' + (result.passed ? 'ok' : 'bad');

  if(result.passed){
    const achievementBefore = getUnlockedAchievementIdsForToast();
    const wasAlreadyDone = !!state.completed[task.id];
    state.completed[task.id] = true;
    state.taskScores = state.taskScores || {};
    state.taskScores[task.id] = QUESTIONS_PER_LESSON;
    scheduleReview(task.id, QUESTIONS_PER_LESSON);

    const levelBeforeXp = getRawUserXp();
    let rewardInfo = { oldXp:levelBeforeXp, newXp:levelBeforeXp, gained:0 };
    if(!wasAlreadyDone){
      rewardInfo = addUserXp(PROJECT_XP_REWARD);
      state.todayCompletions = state.todayCompletions || {};
      const todayKey = getTodayKey();
      state.todayCompletions[todayKey] = Number(state.todayCompletions[todayKey] || 0) + 1;
      updateStreak();
    }

    saveState();
    notifyNewAchievementUnlocks(achievementBefore);
    if(!wasAlreadyDone) notifyLevelUps(levelBeforeXp, rewardInfo.newXp);
    notifyCompletedModules();

    fb.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6L9 17l-5-5"/></svg>' +
      '<span><strong>' + txt('Projeto aprovado.', 'Project approved.') + '</strong><br>' + (task.project && task.project.language === 'python' ? txt('Seu código usa os conceitos Python pedidos para iniciantes.', 'Your code uses the beginner Python concepts requested.') : txt('Seu código usa os conceitos JavaScript pedidos para iniciantes.', 'Your code uses the beginner JavaScript concepts requested.')) + '<br>' +
      result.suggestions.map(s => '• ' + s).join('<br>') + '</span>';

    consoleBox.innerHTML = '<span class="terminal-prompt">mycode&gt;</span> ' + txt('Projeto aprovado.', 'Project approved.') + ' +' + (wasAlreadyDone ? 0 : PROJECT_XP_REWARD) + ' XP';

    checkBtn.textContent = txt('voltar ao painel', 'back to panel');
    checkBtn.onclick = () => {
      closeLesson();
      renderTaskGrid();
      showStreakToast();
    };
  } else {
    if(task && !task.practice) registerWeakTopic(task, 1);
    saveState();

    fb.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v5M12 16h.01"/></svg>' +
      '<span><strong>' + txt('Revise antes de enviar novamente.', 'Review before sending again.') + '</strong><br>' +
      result.errors.map(e => '• ' + e).join('<br>') +
      (result.suggestions.length ? '<br><br><strong>' + txt('Sugestões:', 'Suggestions:') + '</strong><br>' + result.suggestions.map(s => '• ' + s).join('<br>') : '') +
      '</span>';

    consoleBox.innerHTML = '<span class="terminal-prompt">mycode&gt;</span> ' + txt('Encontrei ', 'I found ') + result.errors.length + txt(' ponto(s) para corrigir. Ajuste o código e envie novamente.', ' issue(s) to fix. Adjust the code and send it again.');
  }
}

function renderStep(){
  selectedOption = null;
  checkBtn.disabled = false;
  checkBtn.className = 'btn primary';

  if(stepIndex >= activeSteps.length){
    renderComplete();
    return;
  }

  renderStepDots();

  const step = activeSteps[stepIndex];
  let html = '';
  const levelBadge = '<div class="layer-badge ' + step.level + '">' + txt('nível ', 'level ') + getLevelLabel(step.level) + '</div>';

  if(step.type === 'teach'){
    html += '<div class="teach-shell">';
    html += levelBadge;
    html += '<div class="teach-kicker"><span class="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></span>' + step.kicker + '</div>';
    html += '<div class="teach-title">' + step.title + '</div>';
    html += '<div class="teach-body">' + step.body + '</div>';
    html += renderTeachDeepDive();
    html += '</div>';
    checkBtn.textContent = txt('entendi, continuar','got it, continue');
    checkBtn.disabled = false;
  } else {
    checkBtn.textContent = txt('verificar','check');
    checkBtn.disabled = true;
    let exerciseInner = '';

    if(step.type === 'mc'){
      exerciseInner += renderTokenChoiceExercise(step);
    } else if(step.type === 'fill'){
      exerciseInner += renderFillTokenExercise(step);
    } else if(step.type === 'text'){
      exerciseInner += renderAnswerTerminal(step);
      exerciseInner += '<div class="typing-hint">' + txt('dica', 'tip') + ': ' + step.hint + '</div>';
    }

    html += renderExerciseShell(step, exerciseInner);
  }

  html += '<div class="feedback-box" id="feedbackBox"></div>';

  lessonInner.innerHTML = html;
  lessonInner.classList.toggle('dev-editor-lesson', !!lessonInner.querySelector('.question-dev-editor, .dev-answer-terminal'));
  lessonInner.classList.remove('enter');
  void lessonInner.offsetWidth;
  lessonInner.classList.add('enter');

  if(step.type === 'mc'){
    selectedOption = null;
    selectedSequence = [];
    if(step.mode === 'sequence'){
      wireSequenceExercise(step);
    } else {
      document.querySelectorAll('.opt').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.opt').forEach(b => b.classList.remove('picked-pending'));
          btn.classList.add('picked-pending');
          selectedOption = parseInt(btn.dataset.idx);
          const slot = document.getElementById('singleChoiceSlot');
          if(slot){
            slot.textContent = btn.textContent.trim();
            slot.classList.add('filled');
            slot.classList.remove('correct', 'wrong');
          }
          checkBtn.disabled = false;
        });
      });
    }
  } else if(step.type === 'fill'){
    wireFillTokenExercise(step);
  } else if(step.type === 'text'){
    const input = document.getElementById('fillInput');
    input.addEventListener('input', () => { checkBtn.disabled = input.value.trim().length === 0; });
    input.focus();
    input.addEventListener('keydown', (e) => { if(e.key === 'Enter' && !checkBtn.disabled) checkBtn.click(); });
  }

  checkBtn.onclick = step.type === 'teach' ? (() => { stepIndex++; renderStep(); }) : handleCheckClick;
}


function getAnswerLetter(index){
  const letters = ['A','B','C','D'];
  return Number.isInteger(index) && letters[index] ? letters[index] : '';
}

function getStepSourceText(step){
  return [
    step && step.q ? step.q : '',
    step && step.hint ? step.hint : '',
    step && step.explain ? step.explain : '',
    step && Array.isArray(step.codeLines) ? step.codeLines.join('\n') : '',
    step && Array.isArray(step.codeTemplate) ? step.codeTemplate.join('\n') : '',
    step && step.code ? step.code : '',
    step && step.answer ? step.answer : '',
    step && Array.isArray(step.options) ? step.options.join(' ') : ''
  ].join(' ');
}

function getStepCodePreview(step){
  if(!step) return '';
  let lines = [];
  if(Array.isArray(step.codeLines)) lines = step.codeLines.slice();
  else if(Array.isArray(step.codeTemplate)) lines = step.codeTemplate.map(line => String(line).replace('___', step.answer || '___'));
  else if(step.code) lines = String(step.code).split('\n');
  return lines.map(line => String(line).trim()).filter(Boolean).slice(0, 4).join(' · ');
}

function getCorrectAnswerLabel(step){
  if(!step) return '';
  if(step.type === 'mc'){
    if(step.mode === 'sequence') return (step.correctSequence || []).join(' ');
    return step.options && step.options[step.correct] ? step.options[step.correct] : '';
  }
  if(step.type === 'fill') return getFillCorrectSequence(step).join(' ');
  return step.answer || '';
}

function getUserAnswerLabel(step, selectedValue){
  if(!step) return '';
  if(step.type === 'mc'){
    if(step.mode === 'sequence') return Array.isArray(selectedValue) && selectedValue.length ? selectedValue.join(' ') : txt('nenhum bloco', 'no block');
    const idx = Number(selectedValue);
    if(!Number.isInteger(idx) || idx < 0) return txt('nenhuma opção', 'no option');
    return step.options && step.options[idx] ? step.options[idx] : '';
  }
  if(Array.isArray(selectedValue)) return selectedValue.length ? selectedValue.join(' ') : txt('em branco', 'blank');
  return String(selectedValue || '').trim() || txt('em branco', 'blank');
}

function cleanStepExplain(textValue){
  const raw = String(textValue || '').trim();
  if(!raw) return '';
  const lower = raw.toLowerCase();
  const genericPatterns = [
    'a primeira opção corresponde',
    'a alternativa correta é',
    'revise o conceito',
    'resposta comentada',
    'chosen option',
    'first option corresponds',
    'correct alternative'
  ];
  if(genericPatterns.some(p => lower.includes(p))) return '';
  return raw;
}

function identifyFeedbackTopic(step){
  const source = getStepSourceText(step).toLowerCase();
  const codePreview = getStepCodePreview(step).toLowerCase();
  const combined = source + ' ' + codePreview;
  const topics = [
    {
      key: 'strictDifferent',
      test: /!==|diferente estrito|strict not equal|not strictly equal/,
      ptLabel: 'comparação estrita de diferença',
      enLabel: 'strict inequality comparison',
      ptBody: 'Aqui o ponto não é apenas “ser diferente”. Em JavaScript, <code>!==</code> verifica se os valores são diferentes considerando também o tipo. Por isso <code>5 !== "5"</code> é verdadeiro: visualmente parecem o mesmo número, mas um é número e o outro é texto. Quando a questão fala em diferente estrito, ela está cobrando exatamente essa atenção ao tipo do dado.',
      enBody: 'The point here is not only “being different.” In JavaScript, <code>!==</code> checks difference while also considering the type. That is why <code>5 !== "5"</code> is true: visually they look like the same number, but one is a number and the other is text. When the question asks about strict inequality, it is checking that attention to data type.'
    },
    {
      key: 'strictEqual',
      test: /===|igual estrito|strict equal|strict equality/,
      ptLabel: 'igualdade estrita',
      enLabel: 'strict equality',
      ptBody: 'A igualdade estrita <code>===</code> compara duas coisas ao mesmo tempo: o valor e o tipo. Isso evita respostas enganosas, como tratar <code>10</code> e <code>"10"</code> como se fossem idênticos. Quando aparecer <code>===</code>, leia a comparação perguntando: “o conteúdo é igual e o tipo também é igual?”. Só se as duas respostas forem sim, o resultado será verdadeiro.',
      enBody: 'Strict equality <code>===</code> compares two things at the same time: value and type. This avoids misleading answers, such as treating <code>10</code> and <code>"10"</code> as identical. When you see <code>===</code>, read the comparison as: “is the content equal and is the type also equal?” Only if both answers are yes will the result be true.'
    },
    {
      key: 'looseCompare',
      test: /==|!=|igualdade solta|comparação solta|loose equality|loose comparison/,
      ptLabel: 'comparação não estrita',
      enLabel: 'loose comparison',
      ptBody: 'Comparações com <code>==</code> ou <code>!=</code> são chamadas de não estritas porque o JavaScript pode tentar converter os valores antes de comparar. Isso pode gerar resultados que parecem estranhos no começo. A pergunta quer que você diferencie esse comportamento da comparação estrita: primeiro veja o operador, depois pense se o tipo dos valores também está sendo levado em conta.',
      enBody: 'Comparisons with <code>==</code> or <code>!=</code> are called loose because JavaScript may try to convert values before comparing. This can create results that feel strange at first. The question wants you to separate this behavior from strict comparison: first identify the operator, then decide whether the value type is also being considered.'
    },
    {
      key: 'terminalOutput',
      test: /print\s*\(|console\.log|saída|saida|output|terminal|mostrar|exibir/,
      ptLabel: 'saída no terminal',
      enLabel: 'terminal output',
      ptBody: 'Essa questão está perguntando o que o programa mostra para a pessoa. Em Python isso costuma aparecer com <code>print()</code>; em JavaScript, com <code>console.log()</code>. O caminho seguro é ler o código de cima para baixo: veja qual valor foi guardado antes, depois observe qual nome ou expressão foi colocado dentro dos parênteses. O terminal só exibe aquilo que chegou ali naquele momento.',
      enBody: 'This question asks what the program shows to the person. In Python this usually appears with <code>print()</code>; in JavaScript, with <code>console.log()</code>. The safe path is to read the code from top to bottom: first see which value was stored, then notice which name or expression was placed inside the parentheses. The terminal displays only what reached that point at that moment.'
    },
    {
      key: 'inputConversion',
      test: /input\s*\(|prompt\s*\(|int\s*\(|float\s*\(|number\s*\(|converter|conversão|conversion|entrada/,
      ptLabel: 'entrada e conversão de dados',
      enLabel: 'input and data conversion',
      ptBody: 'Quando o usuário digita algo, o programa normalmente recebe texto. Em Python, <code>input()</code> sempre devolve texto; em JavaScript, <code>prompt()</code> também. Se a questão envolve soma, idade, quantidade ou comparação numérica, o detalhe principal é converter antes de calcular. Sem essa conversão, o programa pode juntar textos em vez de somar números ou comparar de forma incorreta.',
      enBody: 'When the user types something, the program usually receives text. In Python, <code>input()</code> always returns text; in JavaScript, <code>prompt()</code> does too. If the question involves sums, age, quantity, or numeric comparison, the key detail is converting before calculating. Without that conversion, the program may join text instead of adding numbers or compare incorrectly.'
    },
    {
      key: 'condition',
      test: /\bif\b|\belse\b|\belif\b|condiç|condic|condition|true|false|verdadeiro|falso|>=|<=|>|</,
      ptLabel: 'condição e tomada de decisão',
      enLabel: 'condition and decision-making',
      ptBody: 'Uma condição é uma pergunta que o código faz para decidir qual caminho seguir. O bloco do <code>if</code> só roda quando a comparação vira verdadeiro. Para resolver, separe em três partes: qual valor está sendo analisado, qual comparação foi feita e qual bloco pertence a cada resultado. Em Python, a indentação mostra o que está dentro do <code>if</code>; em JavaScript, normalmente as chaves fazem esse papel.',
      enBody: 'A condition is a question the code asks to decide which path to follow. The <code>if</code> block runs only when the comparison becomes true. To solve it, split it into three parts: which value is being analyzed, which comparison was made, and which block belongs to each result. In Python, indentation shows what is inside the <code>if</code>; in JavaScript, braces usually do that job.'
    },
    {
      key: 'loop',
      test: /\bfor\b|\bwhile\b|range\s*\(|loop|repeti|contador|iteration|iterar|percorrer/,
      ptLabel: 'repetição com loops',
      enLabel: 'loop repetition',
      ptBody: 'Loop existe para repetir uma ação sem copiar a mesma linha várias vezes. Em um <code>for</code>, observe qual sequência está sendo percorrida; em um <code>while</code>, observe qual condição mantém a repetição viva. O erro mais comum é olhar só para a primeira volta. A resposta certa depende do que acontece em todas as voltas e do momento exato em que o contador muda ou a repetição para.',
      enBody: 'A loop exists to repeat an action without copying the same line many times. In a <code>for</code>, notice which sequence is being traversed; in a <code>while</code>, notice which condition keeps the repetition alive. The most common mistake is looking only at the first pass. The correct answer depends on what happens in every pass and on the exact moment the counter changes or the repetition stops.'
    },
    {
      key: 'arrayMethods',
      test: /map\s*\(|filter\s*\(|reduce\s*\(|sort\s*\(|spread|\.\.\.|array|arrays|lista|listas|append\s*\(|push\s*\(|len\s*\(|length/,
      ptLabel: 'coleções, listas e arrays',
      enLabel: 'collections, lists, and arrays',
      ptBody: 'Listas e arrays guardam vários valores em uma única estrutura. A pergunta geralmente quer saber se você reconhece a ação feita sobre a coleção: acessar uma posição, medir tamanho, adicionar item, filtrar, transformar ou acumular. Antes de escolher a resposta, localize a coleção, veja qual método ou operação foi aplicado e acompanhe o resultado final da coleção depois dessa operação.',
      enBody: 'Lists and arrays store multiple values in one structure. The question usually asks whether you recognize the action being performed on the collection: accessing a position, measuring length, adding an item, filtering, transforming, or accumulating. Before choosing an answer, locate the collection, see which method or operation was applied, and track the final result after that operation.'
    },
    {
      key: 'functionReturn',
      test: /\bdef\b|function\s+|=>|return\b|função|funcao|parâmetro|parametro|parameter/,
      ptLabel: 'funções, parâmetros e retorno',
      enLabel: 'functions, parameters, and return',
      ptBody: 'Função é um bloco de código que pode ser chamado quando necessário. Parâmetros são os valores que entram nela; <code>return</code> é o valor que sai dela para ser usado em outra parte do programa. Não confunda <code>return</code> com <code>print</code> ou <code>console.log</code>: imprimir mostra, retornar entrega um resultado para o código continuar trabalhando.',
      enBody: 'A function is a block of code that can be called when needed. Parameters are the values that enter it; <code>return</code> is the value that leaves it so another part of the program can use it. Do not confuse <code>return</code> with <code>print</code> or <code>console.log</code>: printing displays something, returning hands a result back to the code.'
    },
    {
      key: 'objectDict',
      test: /dicionário|dicionario|dictionary|dict|objeto|object|\{|\}|chave|key|valor|value/,
      ptLabel: 'dados em chave e valor',
      enLabel: 'key/value data',
      ptBody: 'Objetos e dicionários organizam informações por nome. A chave identifica o dado; o valor é a informação guardada ali. Esse formato aparece quando queremos representar uma pessoa, um produto, uma tarefa ou uma resposta de API. Para acertar, procure primeiro a chave que está sendo acessada e depois veja qual valor está associado a ela naquele objeto.',
      enBody: 'Objects and dictionaries organize information by name. The key identifies the data; the value is the information stored there. This format appears when we want to represent a person, a product, a task, or an API response. To answer correctly, first find the key being accessed and then see which value is associated with it in that object.'
    },
    {
      key: 'dom',
      test: /queryselector|addeventlistener|innerhtml|textcontent|classlist|document\.|dom|evento|event|click/,
      ptLabel: 'DOM e interação na página',
      enLabel: 'DOM and page interaction',
      ptBody: 'O DOM é a página vista pelo JavaScript. Seletores encontram elementos, eventos avisam que algo aconteceu e propriedades como <code>textContent</code>, <code>innerHTML</code> ou <code>classList</code> alteram o que aparece na tela. A pergunta não quer só o nome do comando: ela quer que você perceba a sequência selecionar → reagir → alterar.',
      enBody: 'The DOM is the page as JavaScript sees it. Selectors find elements, events tell the code that something happened, and properties such as <code>textContent</code>, <code>innerHTML</code>, or <code>classList</code> change what appears on the screen. The question is not only asking for the command name: it wants you to notice the sequence select → react → change.'
    },
    {
      key: 'asyncApi',
      test: /async|await|promise|fetch|api|json|try\s*\{|catch|loading|localstorage/,
      ptLabel: 'código assíncrono e APIs',
      enLabel: 'asynchronous code and APIs',
      ptBody: 'Código assíncrono aparece quando uma resposta pode demorar, como ao buscar dados em uma API. <code>fetch</code> inicia a busca, <code>await</code> espera o resultado, <code>JSON</code> transforma a resposta em dados utilizáveis e <code>try/catch</code> protege contra falhas. A questão geralmente cobra a ordem desse fluxo, não apenas a tradução de uma palavra.',
      enBody: 'Asynchronous code appears when a response may take time, such as when fetching data from an API. <code>fetch</code> starts the request, <code>await</code> waits for the result, <code>JSON</code> turns the response into usable data, and <code>try/catch</code> protects against failures. The question usually checks the order of that flow, not just the translation of one word.'
    },
    {
      key: 'variableAssignment',
      test: /const\s+|let\s+|variável|variavel|variable|atribui|assignment|=/,
      ptLabel: 'variáveis e atribuição',
      enLabel: 'variables and assignment',
      ptBody: 'Variável é um nome que aponta para um valor. O sinal <code>=</code> não significa “igual” no sentido matemático; ele guarda o valor dentro daquele nome. Depois disso, quando o nome aparece em outra linha, o programa substitui mentalmente pelo valor guardado. Essa leitura simples resolve muitas questões de início: nome → valor guardado → uso posterior.',
      enBody: 'A variable is a name that points to a value. The <code>=</code> sign does not mean “equal” in the mathematical sense; it stores the value inside that name. After that, when the name appears on another line, the program mentally replaces it with the stored value. This simple reading solves many beginner questions: name → stored value → later use.'
    }
  ];
  return topics.find(topic => topic.test.test(combined)) || {
    key: 'codeReading',
    ptLabel: 'leitura de código passo a passo',
    enLabel: 'step-by-step code reading',
    ptBody: 'O objetivo desta questão é treinar leitura de código. Em vez de tentar adivinhar pela alternativa, leia o enunciado e o código como uma pequena história: primeiro aparecem os dados, depois uma regra age sobre esses dados e, no fim, algo é mostrado, retornado ou escolhido. Quando você segue essa ordem, a resposta deixa de parecer chute e passa a ser consequência do código.',
    enBody: 'The goal of this question is to train code reading. Instead of guessing from the options, read the prompt and the code like a small story: first the data appears, then a rule acts on that data, and finally something is displayed, returned, or chosen. When you follow that order, the answer stops feeling like a guess and becomes a consequence of the code.'
  };
}

function buildNaturalFeedback(step, isCorrect, selectedValue){
  const topic = identifyFeedbackTopic(step);
  const correctLabel = getCorrectAnswerLabel(step);
  const userLabel = getUserAnswerLabel(step, selectedValue);
  const codePreview = getStepCodePreview(step);
  const taskTitle = activeTask && activeTask.title ? activeTask.title : txt('esta tarefa', 'this task');
  const cleaned = cleanStepExplain(step && step.explain);
  const concept = getCodeConceptForStep(step);
  const title = isCorrect ? txt('Você leu a questão do jeito certo', 'You read the question the right way') : txt('Vamos destravar este erro', 'Let’s unpack this mistake');

  const intro = isCorrect
    ? txt(
        'Você acertou porque identificou o ponto central da questão antes de olhar só para as alternativas. Aqui, o detalhe cobrado era ' + topic.ptLabel + ', dentro da tarefa “' + taskTitle + '”.',
        'You got it right because you identified the central point of the question before looking only at the options. Here, the detail being checked was ' + topic.enLabel + ', inside the task “' + taskTitle + '”.'
      )
    : txt(
        'O erro não significa que você “não sabe programar”; ele mostra exatamente qual detalhe passou despercebido. Nesta questão, o ponto cobrado era ' + topic.ptLabel + ', dentro da tarefa “' + taskTitle + '”.',
        'The mistake does not mean you “cannot code”; it shows exactly which detail slipped by. In this question, the point being checked was ' + topic.enLabel + ', inside the task “' + taskTitle + '”.'
      );

  const codePart = codePreview
    ? txt(
        'No trecho <code>' + escapeHtml(codePreview) + '</code>, não basta reconhecer palavras soltas: você precisa acompanhar o valor que entra, a regra aplicada e o resultado produzido.',
        'In the snippet <code>' + escapeHtml(codePreview) + '</code>, recognizing isolated words is not enough: you need to track the value that enters, the rule that is applied, and the result that is produced.'
      )
    : txt(
        'Mesmo sem um bloco grande de código, a lógica é a mesma: o enunciado dá uma regra, as alternativas tentam nomear essa regra, e a correta é a que respeita exatamente o que foi pedido.',
        'Even without a large code block, the logic is the same: the prompt gives a rule, the options try to name that rule, and the correct one is the option that matches exactly what was asked.'
      );

  const answerPart = isCorrect
    ? txt(
        'A resposta correta é <strong>' + escapeHtml(correctLabel) + '</strong>. Ela funciona porque combina com o comportamento real do código, não apenas com uma palavra parecida. Guarde esse critério: alternativa boa é aquela que explica o que o programa realmente faz.',
        'The correct answer is <strong>' + escapeHtml(correctLabel) + '</strong>. It works because it matches the real behavior of the code, not just a similar-looking word. Keep this rule: a good option explains what the program actually does.'
      )
    : txt(
        'Você marcou <strong>' + escapeHtml(userLabel) + '</strong>, mas a resposta correta é <strong>' + escapeHtml(correctLabel) + '</strong>. A diferença está no detalhe técnico que muda o resultado. Quando duas alternativas parecem próximas, volte ao operador, ao comando ou ao valor usado no código e pergunte: “isso descreve exatamente o que aconteceu?”.',
        'You chose <strong>' + escapeHtml(userLabel) + '</strong>, but the correct answer is <strong>' + escapeHtml(correctLabel) + '</strong>. The difference is the technical detail that changes the result. When two options look close, go back to the operator, command, or value used in the code and ask: “does this describe exactly what happened?”.'
      );

  const extra = cleaned
    ? txt(
        'Comentário específico desta questão: ' + escapeHtml(cleaned),
        'Specific note for this question: ' + escapeHtml(cleaned)
      )
    : txt(
        'Uma boa forma de revisar é reescrever a questão em voz alta com suas palavras. Por exemplo: “o programa recebe tal valor, aplica tal regra e por isso chega a tal saída”. Se essa frase não bater com a alternativa escolhida, a alternativa provavelmente está tentando te levar por associação, não por lógica.',
        'A good way to review is to rewrite the question out loud in your own words. For example: “the program receives this value, applies this rule, and therefore reaches this output.” If that sentence does not match the option you chose, the option is probably relying on association, not logic.'
      );

  let body = '<p>' + intro + '</p>' +
    '<p>' + txt(topic.ptBody, topic.enBody) + '</p>' +
    '<p>' + codePart + '</p>' +
    '<p>' + answerPart + '</p>' +
    '<p>' + extra + '</p>';

  const plainLength = body.replace(/<[^>]+>/g, '').length;
  if(plainLength < 350){
    body += '<p>' + txt(
      'Antes de continuar, faça uma checagem simples: localize o comando principal, diga qual dado ele recebe e explique qual efeito ele causa. Esse hábito evita respostas por memorização e ajuda você a entender o código como uma sequência de decisões pequenas.',
      'Before continuing, do a simple check: locate the main command, say which data it receives, and explain what effect it causes. This habit prevents memorized answers and helps you understand code as a sequence of small decisions.'
    ) + '</p>';
  }

  return {
    title,
    eyebrow: isCorrect ? txt('resposta entendida', 'answer understood') : txt('correção guiada', 'guided correction'),
    icon: isCorrect ? '✓' : '!',
    ok: isCorrect,
    conceptTitle: concept.title,
    conceptBody: concept.body,
    body
  };
}

function ensureAnswerModal(){
  let modal = document.getElementById('answerFeedbackModal');
  if(modal) return modal;
  const style = document.createElement('style');
  style.id = 'answerFeedbackModalStyle';
  style.textContent = `
    .answer-feedback-backdrop{
      position:fixed; inset:0; z-index:300; display:none; align-items:center; justify-content:center;
      padding:28px; background:rgba(3,6,10,.72); backdrop-filter:blur(16px) saturate(120%);
    }
    .answer-feedback-backdrop.show{ display:flex; animation:fadeIn .18s ease both; }
    .answer-feedback-modal{
      width:min(720px, calc(100vw - 32px)); max-height:min(86vh, 760px); overflow:auto;
      border-radius:28px; background:linear-gradient(180deg, rgba(31,40,52,.98), rgba(16,22,31,.98));
      border:1px solid rgba(255,255,255,.10); box-shadow:0 32px 90px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.045);
      padding:26px; color:var(--text); transform-origin:center; animation:answerModalIn .24s cubic-bezier(.2,.8,.2,1) both;
    }
    .answer-feedback-modal.ok{ border-color:rgba(21,214,150,.26); }
    .answer-feedback-modal.bad{ border-color:rgba(255,107,91,.32); }
    .answer-modal-head{ display:grid; grid-template-columns:52px 1fr; gap:16px; align-items:center; margin-bottom:18px; }
    .answer-modal-icon{ width:52px; height:52px; border-radius:18px; display:grid; place-items:center; font-family:var(--font-display); font-size:24px; font-weight:900; }
    .answer-feedback-modal.ok .answer-modal-icon{ color:var(--mint); background:rgba(21,214,150,.12); border:1px solid rgba(21,214,150,.24); }
    .answer-feedback-modal.bad .answer-modal-icon{ color:#FF8A7F; background:rgba(255,107,91,.12); border:1px solid rgba(255,107,91,.24); }
    .answer-modal-eyebrow{ font-family:var(--font-mono); font-size:11px; font-weight:900; letter-spacing:.13em; text-transform:uppercase; color:var(--mint); margin-bottom:5px; }
    .answer-feedback-modal.bad .answer-modal-eyebrow{ color:#FF9A90; }
    .answer-modal-title{ margin:0; font-family:var(--font-display); font-size:25px; line-height:1.12; letter-spacing:-.02em; }
    .answer-modal-concept{ margin:0 0 16px; padding:14px 15px; border-radius:18px; background:rgba(255,255,255,.045); border:1px solid rgba(255,255,255,.075); }
    .answer-modal-concept strong{ display:block; color:var(--mint); font-family:var(--font-mono); font-size:11px; letter-spacing:.1em; text-transform:uppercase; margin-bottom:8px; }
    .answer-modal-concept span{ display:block; color:#BBC7D5; font-size:13.5px; line-height:1.62; }
    .answer-modal-body{ color:#C8D2DF; line-height:1.68; font-size:14.5px; }
    .answer-modal-body p{ margin:0 0 13px; }
    .answer-modal-body strong{ color:#F1F5FA; }
    .answer-modal-body code, .answer-modal-concept code{ color:#7DF9CC; background:rgba(21,214,150,.09); border:1px solid rgba(21,214,150,.15); border-radius:7px; padding:1px 5px; font-family:var(--font-mono); font-size:.92em; }
    .answer-modal-actions{ display:flex; justify-content:flex-end; margin-top:20px; }
    .answer-modal-continue{ min-width:210px; border:none; border-radius:999px; padding:14px 22px; font-family:var(--font-display); font-weight:800; color:#061D16; background:linear-gradient(135deg, #17E5A2, #7DF9CC); }
    .answer-feedback-modal.bad .answer-modal-continue{ color:#2F0805; background:linear-gradient(135deg, #FF6B5B, #FF958B); }
    @keyframes answerModalIn{ from{ opacity:0; transform:translateY(18px) scale(.975); } to{ opacity:1; transform:translateY(0) scale(1); } }
    @media(max-width:640px){ .answer-feedback-backdrop{ padding:16px; align-items:flex-end; } .answer-feedback-modal{ border-radius:24px; padding:20px; max-height:88vh; } .answer-modal-title{ font-size:22px; } .answer-modal-head{ grid-template-columns:44px 1fr; } .answer-modal-icon{ width:44px; height:44px; border-radius:15px; } .answer-modal-continue{ width:100%; } }
  `;
  document.head.appendChild(style);
  modal = document.createElement('div');
  modal.id = 'answerFeedbackModal';
  modal.className = 'answer-feedback-backdrop';
  modal.innerHTML = '<div class="answer-feedback-modal" role="dialog" aria-modal="true" aria-labelledby="answerModalTitle"><div class="answer-modal-content"></div></div>';
  document.body.appendChild(modal);
  return modal;
}

function closeAnswerFeedbackModal(){
  const modal = document.getElementById('answerFeedbackModal');
  if(modal) modal.classList.remove('show');
}

function showAnswerFeedbackModal(step, isCorrect, selectedValue, options){
  const modal = ensureAnswerModal();
  const card = modal.querySelector('.answer-feedback-modal');
  const content = modal.querySelector('.answer-modal-content');
  const info = buildNaturalFeedback(step, isCorrect, selectedValue);
  card.classList.toggle('ok', isCorrect);
  card.classList.toggle('bad', !isCorrect);
  const buttonLabel = options && options.buttonLabel ? options.buttonLabel : txt('continuar', 'continue');
  content.innerHTML =
    '<div class="answer-modal-head">' +
      '<div class="answer-modal-icon">' + info.icon + '</div>' +
      '<div><div class="answer-modal-eyebrow">' + info.eyebrow + '</div><h3 class="answer-modal-title" id="answerModalTitle">' + info.title + '</h3></div>' +
    '</div>' +
    '<div class="answer-modal-concept"><strong>' + txt('ponto cobrado', 'checked point') + '</strong><span><b>' + info.conceptTitle + '</b><br>' + info.conceptBody + '</span></div>' +
    '<div class="answer-modal-body">' + info.body + '</div>' +
    '<div class="answer-modal-actions"><button class="answer-modal-continue" type="button" id="answerModalContinueBtn">' + buttonLabel + '</button></div>';
  modal.classList.add('show');
  const btn = document.getElementById('answerModalContinueBtn');
  if(btn){
    btn.focus();
    btn.onclick = () => {
      closeAnswerFeedbackModal();
      stepIndex++;
      renderStep();
    };
  }
}

function getWrongFeedback(step){
  return buildNaturalFeedback(step, false, selectedOption).body;
}

function handleCheckClick(){
  const step = activeSteps[stepIndex];
  let isCorrect = false;
  let selectedValueForFeedback = selectedOption;

  if(step.type === 'mc'){
    if(step.mode === 'sequence'){
      const expected = Array.isArray(step.correctSequence) ? step.correctSequence : [];
      isCorrect = selectedSequence.length === expected.length && expected.every((value, index) => selectedSequence[index] === value);
      selectedValueForFeedback = selectedSequence.slice();
      document.querySelectorAll('.code-slot').forEach((slot, i) => {
        slot.disabled = true;
        const ok = expected[i] === selectedSequence[i];
        slot.classList.add(ok ? 'correct' : 'wrong');
      });
      document.querySelectorAll('.code-token-option').forEach(btn => { btn.disabled = true; });
    } else {
      isCorrect = selectedOption === step.correct;
      selectedValueForFeedback = selectedOption;
      const list = document.getElementById('optList');
      if(list) list.classList.add('answer-checked');
      document.querySelectorAll('.opt').forEach((btn, i) => {
        btn.disabled = true;
        btn.style.display = 'inline-flex';
        btn.style.visibility = 'visible';
        btn.classList.remove('picked-pending');
        if(i === step.correct){
          btn.classList.add('correct', 'is-reviewed');
        } else if(i === selectedOption){
          btn.classList.add('wrong', 'is-reviewed');
        }
      });
      const slot = document.getElementById('singleChoiceSlot');
      if(slot){
        slot.classList.remove('filled');
        slot.classList.add(isCorrect ? 'correct' : 'wrong');
      }
    }
  } else if(step.type === 'fill'){
    const expected = getFillCorrectSequence(step);
    selectedValueForFeedback = selectedSequence.slice();
    isCorrect = selectedSequence.length === expected.length && expected.every((value, index) => selectedSequence[index] === value);
    document.querySelectorAll('.fill-code-slot').forEach((slot, i) => {
      slot.disabled = true;
      const ok = expected[i] === selectedSequence[i];
      slot.classList.add(ok ? 'correct' : 'wrong');
      if(!ok && expected[i]) slot.textContent = expected[i];
    });
    document.querySelectorAll('.fill-token-option').forEach(btn => { btn.disabled = true; });
  } else if(step.type === 'text'){
    const input = document.getElementById('fillInput');
    const val = input.value.trim();
    selectedValueForFeedback = val;
    const accepted = [step.answer, ...(step.altAnswers || [])];
    isCorrect = answerMatches(val, accepted, step.loose === true);
    input.disabled = true;
    input.classList.add(isCorrect ? 'correct' : 'wrong');
    if(!isCorrect) input.value = step.answer;
  }

  lessonAnswered += 1;
  if(isCorrect) lessonCorrect += 1;

  const scorePill = document.getElementById('lessonScorePill');
  if(scorePill){
    scorePill.innerHTML = txt('acertos ', 'correct ') + lessonCorrect + '/' + getLessonQuestionTotal() + ' · <span class="lesson-pass-note">' + txt('mín. ', 'min. ') + PASSING_SCORE + '</span>'; 
  }

  const fb = document.getElementById('feedbackBox');
  if(fb){
    fb.className = 'feedback-box';
    fb.innerHTML = '';
    fb.style.display = 'none';
  }

  if(!isCorrect){
    hearts = Math.max(0, hearts - 1);
    state.energy = Math.max(0, Number(state.energy || 100) - 5);
    if(activeTask && !activeTask.practice) registerWeakTopic(activeTask, 1);
    saveState();
    heartsCount.textContent = hearts;
    heartsWrap.classList.remove('lose');
    void heartsWrap.offsetWidth;
    heartsWrap.classList.add('lose');
  }

  const isLastStep = stepIndex === activeSteps.length - 1;
  const dangerContinue = hearts === 0 && lessonCorrect < PASSING_SCORE;
  const nextLabel = dangerContinue
    ? txt('continuar mesmo assim', 'continue anyway')
    : (isLastStep ? txt('ver resultado', 'see result') : txt('continuar', 'continue'));

  checkBtn.textContent = nextLabel;
  checkBtn.className = dangerContinue ? 'btn danger' : 'btn primary';
  checkBtn.onclick = () => { closeAnswerFeedbackModal(); stepIndex++; renderStep(); };
  checkBtn.disabled = false;

  showAnswerFeedbackModal(step, isCorrect, selectedValueForFeedback, { buttonLabel: nextLabel });
}

function spawnConfetti(container){
  const colors = ['#15D696', '#FFB627', '#5B9BFF', '#FF6B5B'];
  for(let i = 0; i < 26; i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = (Math.random() * 100) + '%';
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = (Math.random() * 0.4) + 's';
    piece.style.animationDuration = (1.8 + Math.random() * 1) + 's';
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    container.appendChild(piece);
  }
}

function updateStreak(){
  const today = new Date().toDateString();
  if(state.lastCompletionDate === today) return;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if(state.lastCompletionDate === yesterday.toDateString()){
    state.streak += 1;
  } else {
    state.streak = 1;
  }
  state.lastCompletionDate = today;
}

function showStreakToast(){
  toastEl.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2c2 4-3 6-3 10a3 3 0 006 0c0-1-.5-2-1-3 2 1 3 3 3 5a5 5 0 01-10 0c0-4 3-6 5-12z"/></svg><span>' + (getLang()==='en' ? ('streak of ' + state.streak + ' day' + (state.streak===1 ? '' : 's') + ' — keep it up!') : ('sequência de ' + state.streak + ' dia' + (state.streak===1 ? '' : 's') + ' — continue assim!')) + '</span>';
  toastEl.classList.add('show');
  setTimeout(() => toastEl.classList.remove('show'), 3200);
}

function renderComplete(){
  const totalQuestions = getLessonQuestionTotal();
  const passed = lessonCorrect >= PASSING_SCORE;

  stepDotsEl.querySelectorAll('.step-dot').forEach(d => d.classList.add('done'));

  if(!passed){
    if(activeTask && !activeTask.practice) registerWeakTopic(activeTask, 2);
    const failTitle = activeTask.practice ? txt('Continue praticando', 'Keep practicing') : txt('Quase lá — revisão recomendada', 'Almost there — review recommended');
    const failText = activeTask.practice
      ? txt('Você acertou <strong>' + lessonCorrect + ' de ' + totalQuestions + '</strong>. A prática livre não bloqueia progresso; tente uma nova rodada para reforçar.', 'You got <strong>' + lessonCorrect + ' out of ' + totalQuestions + '</strong>. Free practice does not block progress; try another round to reinforce.')
      : txt('Você acertou <strong>' + lessonCorrect + ' de ' + totalQuestions + '</strong>. Para passar, precisa de pelo menos <strong>' + PASSING_SCORE + ' de ' + QUESTIONS_PER_LESSON + '</strong>. O sistema marcou este tema como ponto de reforço.', 'You got <strong>' + lessonCorrect + ' out of ' + totalQuestions + '</strong>. To pass, you need at least <strong>' + PASSING_SCORE + ' out of ' + QUESTIONS_PER_LESSON + '</strong>. The system marked this topic for reinforcement.');
    saveState();
    lessonInner.innerHTML =
      '<div class="result-screen" id="resultScreen">' +
        '<div class="result-badge" style="background:var(--coral-bg);border-color:#6b2a22;color:var(--coral)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 9v4M12 17h.01"/><circle cx="12" cy="12" r="10"/></svg></div>' +
        '<h2>' + failTitle + '</h2>' +
        '<p>' + failText + '</p>' +
        '<div class="result-stats">' +
          '<div class="result-stat"><div class="num">' + lessonCorrect + '/' + totalQuestions + '</div><div class="lbl">' + txt('acertos','correct') + '</div></div>' +
          '<div class="result-stat"><div class="num">' + PASSING_SCORE + '/' + QUESTIONS_PER_LESSON + '</div><div class="lbl">' + txt('mínimo','minimum') + '</div></div>' +
          '<div class="result-stat"><div class="num">-5</div><div class="lbl">' + txt('energia por erro','energy per mistake') + '</div></div>' +
        '</div>' +
      '</div>';
    checkBtn.textContent = activeTask.practice ? txt('nova prática','new practice') : txt('tentar novamente','try again');
    checkBtn.className = 'btn danger';
    checkBtn.disabled = false;
    checkBtn.onclick = () => activeTask.practice ? startFreePractice() : openLesson(activeTask.id);
    return;
  }

  if(activeTask.practice){
    lessonInner.innerHTML =
      '<div class="result-screen" id="resultScreen">' +
        '<div class="result-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg></div>' +
        '<h2>' + txt('Prática concluída', 'Practice completed') + '</h2>' +
        '<p>' + txt('Você acertou <strong>' + lessonCorrect + ' de ' + totalQuestions + '</strong>. Esse modo reforça conteúdo e não altera bloqueios da trilha.', 'You got <strong>' + lessonCorrect + ' out of ' + totalQuestions + '</strong>. This mode reinforces content and does not change path locks.') + '</p>' +
        '<div class="result-stats">' +
          '<div class="result-stat"><div class="num">' + lessonCorrect + '/' + totalQuestions + '</div><div class="lbl">' + txt('acertos','correct') + '</div></div>' +
          '<div class="result-stat"><div class="num">' + txt('livre','free') + '</div><div class="lbl">' + txt('modo','mode') + '</div></div>' +
        '</div>' +
      '</div>';
    checkBtn.textContent = txt('voltar ao painel', 'back to panel');
    checkBtn.className = 'btn primary';
    checkBtn.disabled = false;
    checkBtn.onclick = () => { closeLesson(); renderTaskGrid(); };
    return;
  }

  const achievementBefore = getUnlockedAchievementIdsForToast();
  const wasAlreadyDone = !!state.completed[activeTask.id];
  const levelBeforeXp = getRawUserXp();
  const rewardInfo = wasAlreadyDone ? { oldXp:levelBeforeXp, newXp:levelBeforeXp, gained:0 } : addUserXp(TASK_XP_REWARD);
  const earnedXp = rewardInfo.gained;

  state.taskScores = state.taskScores || {};
  state.attempts = state.attempts || {};
  state.taskScores[activeTask.id] = Math.max(Number(state.taskScores[activeTask.id] || 0), lessonCorrect);
  state.attempts[activeTask.id] = Number(state.attempts[activeTask.id] || 0) + 1;
  scheduleReview(activeTask.id, lessonCorrect);
  if(lessonCorrect < 6) registerWeakTopic(activeTask, 1);

  if(!wasAlreadyDone){
    state.completed[activeTask.id] = true;
    state.todayCompletions = state.todayCompletions || {};
    const todayKey = getTodayKey();
    state.todayCompletions[todayKey] = Number(state.todayCompletions[todayKey] || 0) + 1;
    updateStreak();
  }
  saveState();
  notifyNewAchievementUnlocks(achievementBefore);
  if(!wasAlreadyDone) notifyLevelUps(levelBeforeXp, rewardInfo.newXp);
  notifyCompletedModules();

  const masteryLabel = lessonCorrect >= 7 ? txt('dominado','mastered') : (lessonCorrect >= 6 ? txt('aprendido','learned') : txt('passou, mas revise','passed, but review'));
  const reviewNote = lessonCorrect >= 7 ? txt('Revisão espaçada em 7 dias.', 'Spaced review in 7 days.') : (lessonCorrect >= 6 ? txt('Revisão espaçada em 3 dias.', 'Spaced review in 3 days.') : txt('Revisão recomendada amanhã.', 'Review recommended tomorrow.'));

  lessonInner.innerHTML =
    '<div class="result-screen" id="resultScreen">' +
      '<div class="result-badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l2.4 7.2H22l-6 4.6 2.3 7.2L12 16.4 5.7 21l2.3-7.2L2 9.2h7.6z"/></svg></div>' +
      '<h2>' + txt('Tarefa ', 'Task ') + activeTask.id + ' ' + txt('concluída!', 'completed!') + '</h2>' +
      '<p>' + txt('Você acertou <strong>' + lessonCorrect + ' de ' + totalQuestions + '</strong> em "' + activeTask.title + '". Status: <strong>' + masteryLabel + '</strong>. ' + reviewNote, 'You got <strong>' + lessonCorrect + ' out of ' + totalQuestions + '</strong> in "' + activeTask.title + '". Status: <strong>' + masteryLabel + '</strong>. ' + reviewNote) + '</p>' +
      '<div class="result-stats">' +
        '<div class="result-stat"><div class="num">+' + earnedXp + '</div><div class="lbl">' + txt('xp ganho','xp earned') + '</div></div>' +
        '<div class="result-stat"><div class="num">' + lessonCorrect + '/' + totalQuestions + '</div><div class="lbl">' + txt('acertos','correct') + '</div></div>' +
        '<div class="result-stat"><div class="num">' + masteryLabel + '</div><div class="lbl">' + txt('domínio','mastery') + '</div></div>' +
      '</div>' +
    '</div>';

  spawnConfetti(document.getElementById('resultScreen'));

  checkBtn.textContent = txt('voltar ao painel', 'back to panel');
  checkBtn.className = 'btn primary';
  checkBtn.disabled = false;
  checkBtn.onclick = () => {
    closeLesson();
    state.expandedTaskId = activeTask ? activeTask.id : null;
    saveState();
    renderTaskGrid();
    if(!wasAlreadyDone){
      bumpStat(document.getElementById('xpStat'));
      bumpStat(document.getElementById('streakStat'));
      showStreakToast();
    }
  };
}

document.getElementById('closeLesson').addEventListener('click', closeLesson);
const lessonFloatingBackBtn = document.getElementById('lessonFloatingBackBtn');
if(lessonFloatingBackBtn) lessonFloatingBackBtn.addEventListener('click', () => {
  closeLesson();
  renderTaskGrid();
});
document.getElementById('backLessonBtn').addEventListener('click', () => {
  closeLesson();
  renderTaskGrid();
});

/* =========================================================
   LANDING INTERACTIONS
   ========================================================= */
document.getElementById('scrollCue').addEventListener('click', () => {
  document.getElementById('howSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
});
document.getElementById('howBtn').addEventListener('click', () => {
  document.getElementById('howSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

/* scroll-reveal for cards/items across the landing */
function setupReveal(selector, staggerMs){
  const els = document.querySelectorAll(selector);
  if(!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if(entry.isIntersecting){
        setTimeout(() => entry.target.classList.add('in-view'), i * (staggerMs || 90));
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
}
setupReveal('.how-card', 90);
setupReveal('.why-card', 120);
setupReveal('.roadmap-item', 60);
setupReveal('.faq-item', 70);

/* roadmap preview list */
renderLandingRoadmapPreview();

/* FAQ accordion */
document.querySelectorAll('.faq-item').forEach(item => {
  const q = item.querySelector('.faq-q');
  q.addEventListener('click', () => {
    const wasOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if(!wasOpen) item.classList.add('open');
  });
});

/* hero typewriter cycling through a few words */
(function typewriter(){
  const el = document.getElementById('typewriter');
  if(!el) return;
  const words = window.mycodeTypewriterWords || (getLang() === 'en' ? ['zero', 'logic', 'real code'] : ['zero', 'verdade', 'jeito certo']);
  let wi = 0, ci = 0, deleting = false;

  function tick(){
    const word = words[wi];
    if(!deleting){
      ci++;
      el.textContent = word.slice(0, ci);
      if(ci === word.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      ci--;
      el.textContent = word.slice(0, ci);
      if(ci === 0){
        deleting = false;
        wi = (wi + 1) % words.length;
      }
    }
    setTimeout(tick, deleting ? 45 : 85);
  }
  el.textContent = '';
  setTimeout(tick, 600);
})();

/* tiny looping demo in the hero card */
(function loopDemo(){
  const opts = [document.getElementById('demoOpt0'), document.getElementById('demoOpt1'), document.getElementById('demoOpt2')];
  if(!opts[0]) return;
  let cycle = 0;
  function tick(){
    opts.forEach(o => o.classList.remove('is-correct'));
    if(cycle % 2 === 1){ opts[1].classList.add('is-correct'); }
    cycle++;
  }
  tick();
  setInterval(tick, 1700);
})();



/* =========================================================
   CERTIFICATES PAGE + ADMIN UNLOCK PDF CERTIFICATES
   ========================================================= */
let pageCertificates = null;

function getModuleOrderList(){
  return [...new Set(tasks.map(t => t.module))];
}

function isCertificateUnlocked(moduleName){
  if(state.adminUnlocked) return true;
  const stats = moduleTaskStats(moduleName);
  return stats.total > 0 && stats.done === stats.total;
}

function certificateUnlockedCount(){
  return getModuleOrderList().filter(isCertificateUnlocked).length;
}

function certificatePalette(index){
  const colors = ['#15D696', '#FFB627', '#5B9BFF', '#39D7E5', '#C792EA', '#FF6B5B'];
  return colors[index % colors.length];
}

function certificateModuleNumber(moduleName){
  const modules = getModuleOrderList();
  return modules.indexOf(moduleName) + 1;
}

function ensureCertificatesPage(){
  pageCertificates = document.getElementById('pageCertificates');
  if(pageCertificates) return pageCertificates;

  pageCertificates = document.createElement('div');
  pageCertificates.className = 'page';
  pageCertificates.id = 'pageCertificates';
  pageCertificates.innerHTML =
    '<section class="cert-page-shell">' +
      '<button class="cert-back-btn" id="certBackToPanel" type="button">← <span></span></button>' +
      '<div class="cert-hero">' +
        '<div>' +
          '<div class="cert-kicker" id="certPageKicker"></div>' +
          '<h1 id="certPageTitle"></h1>' +
          '<p id="certPageText"></p>' +
        '</div>' +
        '<div class="cert-total-card">' +
          '<span id="certTotalLabel"></span>' +
          '<strong id="certTotalValue">0/9</strong>' +
        '</div>' +
      '</div>' +
      '<div class="cert-grid" id="certGrid"></div>' +
    '</section>';

  if(pagePanel && pagePanel.parentNode){
    pagePanel.parentNode.insertBefore(pageCertificates, pagePanel.nextSibling);
  } else {
    document.body.insertBefore(pageCertificates, document.getElementById('toast'));
  }

  document.getElementById('certBackToPanel')?.addEventListener('click', () => goToPanel());
  return pageCertificates;
}

function updateCertificateSummary(){
  const card = document.getElementById('certificatesCard');
  if(card){
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', txt('Abrir certificados', 'Open certificates'));
  }

  const certificatesLabel = document.getElementById('certificatesLabel');
  if(certificatesLabel){
    const total = getModuleOrderList().length;
    const unlocked = certificateUnlockedCount();
    certificatesLabel.innerHTML = unlocked + '/' + total + txt(' liberados', ' unlocked') + '<span class="cert-open-hint">' + txt('Clique para abrir e baixar', 'Click to open and download') + '</span>';
  }
}

function renderCertificatesPage(){
  ensureCertificatesPage();

  const modules = getModuleOrderList();
  const unlocked = certificateUnlockedCount();
  const total = modules.length;

  const backSpan = document.querySelector('#certBackToPanel span');
  if(backSpan) backSpan.textContent = txt('voltar ao painel', 'back to dashboard');

  const kicker = document.getElementById('certPageKicker');
  const title = document.getElementById('certPageTitle');
  const text = document.getElementById('certPageText');
  const totalLabel = document.getElementById('certTotalLabel');
  const totalValue = document.getElementById('certTotalValue');
  const grid = document.getElementById('certGrid');

  if(kicker) kicker.textContent = txt('certificados mycode', 'mycode certificates');
  if(title) title.textContent = txt('Certificados de conclusão', 'Completion certificates');
  if(text) text.textContent = txt(
    'Cada módulo possui um certificado próprio. Ao concluir um módulo — ou ao liberar tudo como admin — o certificado fica disponível para baixar em PDF.',
    'Each module has its own certificate. Complete a module — or unlock everything as admin — and the certificate becomes available as a PDF download.'
  );
  if(totalLabel) totalLabel.textContent = txt('certificados liberados', 'unlocked certificates');
  if(totalValue) totalValue.textContent = unlocked + '/' + total;

  if(!grid) return;
  grid.innerHTML = modules.map((moduleName, idx) => {
    const moduleIdx = idx + 1;
    const stats = moduleTaskStats(moduleName);
    const moduleUnlocked = isCertificateUnlocked(moduleName);
    const meta = getModuleMeta(moduleName);
    const certTheme = getCertificateTheme(moduleName);
    const color = certificatePalette(idx);
    const pct = stats.total ? Math.round((stats.done / stats.total) * 100) : 0;
    const safeModuleName = moduleName.replace(/"/g, '&quot;');
    return '<button type="button" class="certificate-card ' + (moduleUnlocked ? 'unlocked' : 'locked') + '" data-module="' + safeModuleName + '" style="--cert-color:' + color + '" ' + (moduleUnlocked ? '' : 'disabled') + '>' +
      '<div class="cert-glass-layer"></div>' +
      '<div class="cert-card-top cert-card-top-v2">' +
        '<div class="cert-index-badge"><span>Module</span><strong>' + String(moduleIdx).padStart(2, '0') + '</strong></div>' +
        '<div class="cert-status-pill"><span class="cert-status-dot"></span>' + (moduleUnlocked ? txt('baixar pdf', 'download pdf') : txt('bloqueado', 'locked')) + '</div>' +
      '</div>' +
      '<div class="cert-card-art">' +
        '<div class="cert-mini-sheet">' +
          '<span class="cert-mini-line l1"></span>' +
          '<span class="cert-mini-line l2"></span>' +
          '<span class="cert-mini-line l3"></span>' +
          '<span class="cert-mini-ribbon"></span>' +
        '</div>' +
        '<div class="cert-seal"><span>★</span></div>' +
      '</div>' +
      '<div class="cert-card-body cert-card-body-v2">' +
        '<small>MYCODE CERTIFICATE</small>' +
        '<h3>' + certTheme.title + '</h3>' +
        '<p>' + (moduleUnlocked ? txt('Certificado liberado. Clique para baixar o PDF com a arte oficial do módulo.', 'Certificate unlocked. Click to download the official module PDF artwork.') : txt('Finalize todas as tarefas deste módulo para ativar o certificado.', 'Finish every task in this module to activate the certificate.')) + '</p>' +
      '</div>' +
      '<div class="cert-progress-area">' +
        '<div class="cert-progress-bar"><span style="width:' + pct + '%"></span></div>' +
        '<div class="cert-progress-meta"><span>' + stats.done + '/' + stats.total + txt(' tarefas', ' tasks') + '</span><span>' + pct + '%</span></div>' +
      '</div>' +
      '<div class="cert-card-footer cert-card-footer-v2">' +
        '<span>' + (moduleUnlocked ? txt('liberado', 'unlocked') : txt('em progresso', 'in progress')) + '</span>' +
        '<span class="cert-download-note">' + (moduleUnlocked ? txt('PDF pronto', 'PDF ready') : txt('pendente', 'pending')) + '</span>' +
      '</div>' +
    '</button>';
  }).join('');

  grid.querySelectorAll('.certificate-card.unlocked').forEach(card => {
    card.addEventListener('click', () => {
      const moduleName = card.dataset.module;
      downloadCertificatePdf(moduleName);
    });
  });
}

function goToCertificates(){
  ensureCertificatesPage();
  const showCertificates = () => {
    if(appStats) appStats.style.display = 'flex';
    renderCertificatesPage();
    updateCertificateSummary();
  };

  if(pageCertificates.classList.contains('active')){
    showCertificates();
    return;
  }

  const activePage = document.querySelector('.page.active') || pagePanel || pageLanding;
  switchPage(activePage, pageCertificates, showCertificates);
}

const __originalGoToPanelForCertificates = goToPanel;
goToPanel = function(){
  ensureCertificatesPage();
  const showPanel = () => {
    if(appStats) appStats.style.display = 'flex';
    renderTaskGrid();
    startByteTipRotation();
    if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility();
    setTimeout(() => showDailyByteReview(false), 550);
  };
  if(pageCertificates.classList.contains('active')){
    switchPage(pageCertificates, pagePanel, showPanel);
    return;
  }
  __originalGoToPanelForCertificates();
};

const __originalGoToLandingForCertificates = goToLanding;
goToLanding = function(){
  ensureCertificatesPage();
  const showLanding = () => {
    if(appStats) appStats.style.display = 'none';
    if(byteTipTimer){ clearInterval(byteTipTimer); byteTipTimer = null; }
  };
  if(pageCertificates.classList.contains('active')){
    switchPage(pageCertificates, pageLanding, showLanding);
    return;
  }
  __originalGoToLandingForCertificates();
};

const __originalRenderPanelWidgetsForCertificates = renderPanelWidgets;
renderPanelWidgets = function(){
  __originalRenderPanelWidgetsForCertificates();
  updateCertificateSummary();
};

const __originalApplyLanguageForCertificates = applyLanguage;
applyLanguage = function(){
  __originalApplyLanguageForCertificates();
  updateCertificateSummary();
  if(pageCertificates && pageCertificates.classList.contains('active')) renderCertificatesPage();
};

function asciiPdfText(value){
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[–—]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[^\x20-\x7E]/g, '');
}

function pdfEscape(value){
  return asciiPdfText(value).replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
}

function pdfText(x, y, size, text, font){
  return 'BT /' + (font || 'F1') + ' ' + size + ' Tf ' + x + ' ' + y + ' Td (' + pdfEscape(text) + ') Tj ET\n';
}

function pdfHexToRgb(hex){
  const clean = String(hex || '#15D696').replace('#','');
  const value = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean.padEnd(6, '0').slice(0,6);
  const n = parseInt(value, 16);
  return {
    r: ((n >> 16) & 255) / 255,
    g: ((n >> 8) & 255) / 255,
    b: (n & 255) / 255
  };
}
function pdfNum(n){ return Number(n).toFixed(3).replace(/0+$/,'').replace(/\.$/,''); }
function pdfFill(hex){ const c = pdfHexToRgb(hex); return pdfNum(c.r) + ' ' + pdfNum(c.g) + ' ' + pdfNum(c.b) + ' rg\n'; }
function pdfStroke(hex){ const c = pdfHexToRgb(hex); return pdfNum(c.r) + ' ' + pdfNum(c.g) + ' ' + pdfNum(c.b) + ' RG\n'; }
function pdfLineWidth(width){ return pdfNum(width || 1) + ' w\n'; }
function pdfRect(x, y, w, h, mode){ return pdfNum(x) + ' ' + pdfNum(y) + ' ' + pdfNum(w) + ' ' + pdfNum(h) + ' re ' + (mode || 'f') + '\n'; }
function pdfLine(x1, y1, x2, y2){ return pdfNum(x1) + ' ' + pdfNum(y1) + ' m ' + pdfNum(x2) + ' ' + pdfNum(y2) + ' l S\n'; }
function pdfCircle(cx, cy, r, mode){
  const k = 0.5522847498;
  const c = r * k;
  return [
    pdfNum(cx + r) + ' ' + pdfNum(cy) + ' m',
    pdfNum(cx + r) + ' ' + pdfNum(cy + c) + ' ' + pdfNum(cx + c) + ' ' + pdfNum(cy + r) + ' ' + pdfNum(cx) + ' ' + pdfNum(cy + r) + ' c',
    pdfNum(cx - c) + ' ' + pdfNum(cy + r) + ' ' + pdfNum(cx - r) + ' ' + pdfNum(cy + c) + ' ' + pdfNum(cx - r) + ' ' + pdfNum(cy) + ' c',
    pdfNum(cx - r) + ' ' + pdfNum(cy - c) + ' ' + pdfNum(cx - c) + ' ' + pdfNum(cy - r) + ' ' + pdfNum(cx) + ' ' + pdfNum(cy - r) + ' c',
    pdfNum(cx + c) + ' ' + pdfNum(cy - r) + ' ' + pdfNum(cx + r) + ' ' + pdfNum(cy - c) + ' ' + pdfNum(cx + r) + ' ' + pdfNum(cy) + ' c ' + (mode || 'f')
  ].join('\n') + '\n';
}
function pdfApproxWidth(text, size, bold){ return asciiPdfText(text).length * size * (bold ? 0.58 : 0.52); }
function pdfTextCentered(xCenter, y, size, text, font){
  const isBold = (font || 'F1') === 'F2';
  const x = xCenter - pdfApproxWidth(text, size, isBold) / 2;
  return pdfText(x, y, size, text, font || 'F1');
}
function pdfTextRight(xRight, y, size, text, font){
  const isBold = (font || 'F1') === 'F2';
  const x = xRight - pdfApproxWidth(text, size, isBold);
  return pdfText(x, y, size, text, font || 'F1');
}
function pdfParagraph(x, y, size, text, font, maxChars, lineGap){
  const words = asciiPdfText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = '';
  words.forEach(word => {
    const test = current ? current + ' ' + word : word;
    if(test.length > maxChars && current){
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  });
  if(current) lines.push(current);
  return lines.map((line, idx) => pdfText(x, y - (idx * (lineGap || size + 5)), size, line, font || 'F1')).join('');
}
function getCertificateTheme(moduleName){
  const idx = Math.max(0, certificateModuleNumber(moduleName) - 1);
  const themes = [
    { title:'Programming Fundamentals', ribbon:'FOUNDATION CERTIFICATE', subtitle:'Algorithms, variables, comparisons, and decision making.', credential:'Foundation Path', icon:'01', accent:'#15D696', dark:'#0A1D18', code:['let idea = true;', 'if (practice) grow();', 'return logic;'] },
    { title:'JavaScript Introduction', ribbon:'JAVASCRIPT STARTER CERTIFICATE', subtitle:'Console, syntax, types, operators, conditions, and functions.', credential:'JavaScript Starter', icon:'JS', accent:'#FFB627', dark:'#241A08', code:['const name = "student";', 'console.log(name);', 'function learn() {}'] },
    { title:'JavaScript Logic', ribbon:'LOGIC BUILDER CERTIFICATE', subtitle:'Loops, arrays, objects, accumulators, filters, and debugging.', credential:'Logic Builder', icon:'{}', accent:'#7A8CFF', dark:'#131A35', code:['for (const item of list) {}', 'array.filter(test);', 'debugger;'] },
    { title:'Python From Zero', ribbon:'PYTHON STARTER CERTIFICATE', subtitle:'Terminal output, text, numbers, variables, input, conversion, comparisons, and first decisions.', credential:'Python Starter', icon:'PY', accent:'#4CC9F0', dark:'#071D2A', code:['name = "student"', 'print(name)', 'if age >= 18:', '  print("ready")'] },
    { title:'Python Collections and Logic', ribbon:'PYTHON DATA LOGIC CERTIFICATE', subtitle:'Lists, indexes, len, for, while, dictionaries, comprehensions, filters, and grade summaries.', credential:'Python Data Logic', icon:'LIST', accent:'#8BE36B', dark:'#10240A', code:['students = []', 'for item in items:', 'passed = [x for x in data if x]'] },
    { title:'Python Automation and Files', ribbon:'PYTHON AUTOMATION CERTIFICATE', subtitle:'Imports, datetime, files, try/except, JSON, terminal scripts, functions, and reports.', credential:'Python Automation', icon:'AUTO', accent:'#F77FBE', dark:'#2B0C1F', code:['import json', 'with open("report.txt", "w") as file:', 'try: run(); except Exception: pass'] },
    { title:'DOM and Interfaces', ribbon:'INTERFACE MAKER CERTIFICATE', subtitle:'DOM selection, events, inputs, validation, state, and list interfaces.', credential:'Interface Maker', icon:'DOM', accent:'#36D1DC', dark:'#0A2228', code:['document.querySelector("button")', 'button.addEventListener("click", run)', 'element.classList.add("active")'] },
    { title:'Modern JavaScript Data', ribbon:'DATA TRANSFORMER CERTIFICATE', subtitle:'Map, filter, reduce, destructuring, spread, sort, and data summaries.', credential:'Data Transformer', icon:'DATA', accent:'#C792EA', dark:'#241431', code:['items.map(toView)', 'total = values.reduce(sum, 0)', 'const { id, name } = user'] },
    { title:'Async Projects and APIs', ribbon:'ASYNC PROJECTS CERTIFICATE', subtitle:'JSON, Promise, async/await, fetch, try/catch, loading, and persistence.', credential:'Async Builder', icon:'API', accent:'#FF6B5B', dark:'#2A1010', code:['const data = await fetch(url)', 'try { await load(); } catch (err) {}', 'localStorage.setItem("app", state)'] }
  ];
  return themes[idx] || themes[0];
}
function certificateId(moduleNumber, dateKey){
  return 'MYC-CERT-M' + String(moduleNumber).padStart(2, '0') + '-' + dateKey;
}

function drawRoundedRectPath(ctx, x, y, w, h, r){
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.quadraticCurveTo(x + w, y + h, x + w - radius, y + h);
  ctx.lineTo(x + radius, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}
function drawRoundRect(ctx, x, y, w, h, r, fill, stroke, lineWidth){
  drawRoundedRectPath(ctx, x, y, w, h, r);
  if(fill){ ctx.fillStyle = fill; ctx.fill(); }
  if(stroke){ ctx.lineWidth = lineWidth || 1; ctx.strokeStyle = stroke; ctx.stroke(); }
}
function hexToRgbCanvas(hex){
  const clean = String(hex || '#15D696').replace('#', '').trim();
  const full = clean.length === 3 ? clean.split('').map(c => c + c).join('') : clean.padEnd(6, '0').slice(0, 6);
  const n = parseInt(full, 16) || 0;
  return { r:(n >> 16) & 255, g:(n >> 8) & 255, b:n & 255 };
}
function rgba(hex, alpha){
  const c = hexToRgbCanvas(hex);
  return 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + alpha + ')';
}
function lightenHex(hex, amount){
  const c = hexToRgbCanvas(hex);
  const mix = v => Math.max(0, Math.min(255, Math.round(v + (255 - v) * amount)));
  return 'rgb(' + mix(c.r) + ',' + mix(c.g) + ',' + mix(c.b) + ')';
}
function darkenHex(hex, amount){
  const c = hexToRgbCanvas(hex);
  const mix = v => Math.max(0, Math.min(255, Math.round(v * (1 - amount))));
  return 'rgb(' + mix(c.r) + ',' + mix(c.g) + ',' + mix(c.b) + ')';
}
function drawCenteredText(ctx, text, x, y, font, color, tracking){
  const value = asciiPdfText(text);
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'alphabetic';
  if(!tracking){
    ctx.textAlign = 'center';
    ctx.fillText(value, x, y);
  } else {
    const chars = value.split('');
    const width = chars.reduce((sum, ch) => sum + ctx.measureText(ch).width, 0) + tracking * (chars.length - 1);
    let cursor = x - width / 2;
    ctx.textAlign = 'left';
    chars.forEach(ch => {
      ctx.fillText(ch, cursor, y);
      cursor += ctx.measureText(ch).width + tracking;
    });
  }
  ctx.restore();
}
function drawLeftTrackedText(ctx, text, x, y, font, color, tracking){
  const value = asciiPdfText(text);
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textBaseline = 'alphabetic';
  ctx.textAlign = 'left';
  let cursor = x;
  value.split('').forEach(ch => {
    ctx.fillText(ch, cursor, y);
    cursor += ctx.measureText(ch).width + (tracking || 0);
  });
  ctx.restore();
}
function drawWrappedCenteredText(ctx, text, x, y, maxWidth, lineHeight, font, color){
  const words = asciiPdfText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  ctx.save();
  ctx.font = font;
  words.forEach(word => {
    const test = line ? line + ' ' + word : word;
    if(ctx.measureText(test).width > maxWidth && line){
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  });
  if(line) lines.push(line);
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = color;
  lines.forEach((l, idx) => ctx.fillText(l, x, y + idx * lineHeight));
  ctx.restore();
}
function drawQrMock(ctx, x, y, size, seed, accent){
  ctx.save();
  drawRoundRect(ctx, x, y, size, size, 8, '#EEF6FF', null, 0);
  const pad = size * 0.10;
  const cell = (size - pad * 2) / 13;
  function finder(cx, cy){
    ctx.fillStyle = '#0B1018'; ctx.fillRect(cx, cy, cell * 4, cell * 4);
    ctx.fillStyle = '#EEF6FF'; ctx.fillRect(cx + cell, cy + cell, cell * 2, cell * 2);
    ctx.fillStyle = accent; ctx.fillRect(cx + cell * 1.5, cy + cell * 1.5, cell, cell);
  }
  finder(x + pad, y + pad);
  finder(x + size - pad - cell * 4, y + pad);
  finder(x + pad, y + size - pad - cell * 4);
  let hash = 0;
  String(seed).split('').forEach(ch => { hash = (hash * 31 + ch.charCodeAt(0)) >>> 0; });
  for(let row = 0; row < 13; row++){
    for(let col = 0; col < 13; col++){
      const inFinder = (col < 4 && row < 4) || (col > 8 && row < 4) || (col < 4 && row > 8);
      if(inFinder) continue;
      const bit = ((hash + row * 17 + col * 29 + row * col * 7) % 5) < 2;
      if(bit){
        ctx.fillStyle = (row + col) % 7 === 0 ? accent : '#0B1018';
        ctx.fillRect(x + pad + col * cell, y + pad + row * cell, Math.ceil(cell * 0.82), Math.ceil(cell * 0.82));
      }
    }
  }
  ctx.restore();
}
function drawCertificateBadge(ctx, x, y, r, accent, label, moduleNumber){
  ctx.save();
  ctx.translate(x, y);
  for(let i = 0; i < 28; i++){
    ctx.rotate(Math.PI * 2 / 28);
    ctx.fillStyle = i % 2 ? darkenHex('#F7C95C', 0.18) : '#F7D56C';
    ctx.beginPath();
    ctx.moveTo(0, -r - 17);
    ctx.lineTo(9, -r + 2);
    ctx.lineTo(-9, -r + 2);
    ctx.closePath();
    ctx.fill();
  }
  const gold = ctx.createRadialGradient(-24, -26, 8, 0, 0, r + 18);
  gold.addColorStop(0, '#FFF2B6');
  gold.addColorStop(0.46, '#E6B94F');
  gold.addColorStop(1, '#9D7228');
  ctx.fillStyle = gold;
  ctx.beginPath(); ctx.arc(0, 0, r + 4, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = '#0A0F18';
  ctx.beginPath(); ctx.arc(0, 0, r - 6, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = accent; ctx.lineWidth = 3;
  ctx.beginPath(); ctx.arc(0, 0, r - 16, 0, Math.PI * 2); ctx.stroke();
  ctx.strokeStyle = '#D7B15C'; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.arc(0, 0, r - 29, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = accent;
  ctx.font = '700 42px Inter, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(label, 0, -8);
  ctx.fillStyle = '#F9E7A3';
  ctx.font = '800 15px Inter, Arial, sans-serif';
  ctx.fillText('MYCODE CERTIFIED', 0, 28);
  ctx.fillStyle = '#AEB8C8';
  ctx.font = '800 12px JetBrains Mono, monospace';
  ctx.fillText('MODULE ' + String(moduleNumber).padStart(2, '0'), 0, 48);
  ctx.restore();
}
function drawCertificateCanvas(moduleName){
  const moduleNumber = certificateModuleNumber(moduleName);
  const theme = getCertificateTheme(moduleName);
  const now = new Date();
  const date = now.toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' });
  const dateKey = String(now.getFullYear()) + String(now.getMonth() + 1).padStart(2, '0') + String(now.getDate()).padStart(2, '0');
  const id = certificateId(moduleNumber, dateKey);
  const accent = theme.accent || certificatePalette(moduleNumber - 1);
  const lightAccent = lightenHex(accent, 0.45);
  const canvas = document.createElement('canvas');
  canvas.width = 1920;
  canvas.height = 1080;
  const ctx = canvas.getContext('2d');

  const bg = ctx.createLinearGradient(0, 0, 1920, 1080);
  bg.addColorStop(0, '#05070C');
  bg.addColorStop(0.52, '#0A1018');
  bg.addColorStop(1, '#030508');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, 1920, 1080);

  const glowOne = ctx.createRadialGradient(1520, 360, 20, 1520, 360, 760);
  glowOne.addColorStop(0, rgba(accent, 0.30));
  glowOne.addColorStop(0.36, rgba(accent, 0.10));
  glowOne.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowOne;
  ctx.fillRect(0, 0, 1920, 1080);

  const glowTwo = ctx.createRadialGradient(260, 890, 20, 260, 890, 620);
  glowTwo.addColorStop(0, 'rgba(91,155,255,0.18)');
  glowTwo.addColorStop(0.48, 'rgba(91,155,255,0.05)');
  glowTwo.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = glowTwo;
  ctx.fillRect(0, 0, 1920, 1080);

  /* Fine code/grid texture */
  ctx.save();
  ctx.globalAlpha = 0.09;
  ctx.strokeStyle = '#8AA1B7';
  ctx.lineWidth = 1;
  for(let x = 90; x < 1830; x += 72){
    ctx.beginPath(); ctx.moveTo(x, 100); ctx.lineTo(x, 980); ctx.stroke();
  }
  for(let y = 120; y < 960; y += 72){
    ctx.beginPath(); ctx.moveTo(100, y); ctx.lineTo(1820, y); ctx.stroke();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.12;
  ctx.fillStyle = accent;
  for(let i = 0; i < 140; i++){
    const x = 980 + Math.sin(i * 1.7) * 470 + (i % 9) * 20;
    const y = 230 + i * 5.3;
    const size = 2 + (i % 5);
    ctx.beginPath(); ctx.arc(x, y, size, 0, Math.PI * 2); ctx.fill();
  }
  ctx.restore();

  ctx.save();
  ctx.globalAlpha = 0.11;
  ctx.font = '500 24px JetBrains Mono, Consolas, monospace';
  ctx.fillStyle = accent;
  const codeLines = (theme.code || []).concat(['const progress = true;', 'return certificate;', 'keepBuilding();']);
  codeLines.forEach((line, idx) => ctx.fillText(line, 105, 280 + idx * 58));
  ctx.restore();

  /* Premium border system */
  drawRoundRect(ctx, 46, 44, 1828, 992, 28, null, rgba(accent, 0.95), 5);
  drawRoundRect(ctx, 68, 66, 1784, 948, 20, null, '#DAB85F', 2);
  drawRoundRect(ctx, 88, 86, 1744, 908, 14, null, 'rgba(255,255,255,0.22)', 1.2);
  ctx.strokeStyle = rgba(accent, 0.50);
  ctx.lineWidth = 1.4;
  ctx.beginPath(); ctx.moveTo(116, 930); ctx.lineTo(1804, 930); ctx.stroke();

  /* Corner ornaments */
  ctx.strokeStyle = accent;
  ctx.lineWidth = 6;
  [[70,70,1,1],[1850,70,-1,1],[70,1010,1,-1],[1850,1010,-1,-1]].forEach(([x,y,sx,sy]) => {
    ctx.save(); ctx.translate(x,y); ctx.scale(sx,sy);
    ctx.beginPath(); ctx.moveTo(0,54); ctx.quadraticCurveTo(54,54,54,0); ctx.stroke();
    ctx.restore();
  });

  /* Header */
  ctx.save();
  ctx.translate(150, 160);
  ctx.fillStyle = accent;
  ctx.font = '900 54px Inter, Arial, sans-serif';
  ctx.fillText('</>', 0, 0);
  ctx.fillStyle = '#F4F8FF';
  ctx.font = '900 44px Inter, Arial, sans-serif';
  ctx.fillText('MYCODE', 92, -3);
  drawLeftTrackedText(ctx, 'COMPLETION CREDENTIAL', 0, 52, '800 16px JetBrains Mono, Consolas, monospace', '#91A0B5', 3);
  ctx.restore();

  drawCertificateBadge(ctx, 1610, 215, 86, accent, theme.icon, moduleNumber);

  /* Main content */
  drawCenteredText(ctx, 'CERTIFICATE', 960, 250, '700 105px Georgia, Times New Roman, serif', '#F7FAFF', 4);
  drawCenteredText(ctx, 'OF COMPLETION', 960, 318, '800 32px JetBrains Mono, Consolas, monospace', accent, 12);
  ctx.strokeStyle = accent;
  ctx.lineWidth = 3;
  ctx.beginPath(); ctx.moveTo(600, 302); ctx.lineTo(725, 302); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(1195, 302); ctx.lineTo(1320, 302); ctx.stroke();

  drawCenteredText(ctx, 'This certificate is proudly presented to', 960, 425, '600 24px Inter, Arial, sans-serif', '#CBD3DE', 2.2);
  drawCenteredText(ctx, 'MyCode Student', 960, 535, '400 92px Brush Script MT, Segoe Script, cursive', '#F6D675', 0);
  const nameLine = ctx.createLinearGradient(520, 560, 1400, 560);
  nameLine.addColorStop(0, '#AD8740');
  nameLine.addColorStop(0.5, accent);
  nameLine.addColorStop(1, '#AD8740');
  ctx.strokeStyle = nameLine;
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(520, 573); ctx.lineTo(1400, 573); ctx.stroke();

  drawWrappedCenteredText(
    ctx,
    'for successfully completing all lessons, challenges, and the final project of',
    960,
    645,
    900,
    34,
    '500 28px Inter, Arial, sans-serif',
    '#DCE2EA'
  );
  drawCenteredText(ctx, theme.title.toUpperCase(), 960, 720, '900 45px Inter, Arial, sans-serif', accent, 8);
  ctx.fillStyle = accent;
  ctx.font = '900 30px JetBrains Mono, Consolas, monospace';
  ctx.textAlign = 'center';
  ctx.fillText('</>', 960, 765);
  ctx.strokeStyle = rgba(accent, 0.72);
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(560, 754); ctx.lineTo(880, 754); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(1040, 754); ctx.lineTo(1360, 754); ctx.stroke();
  drawWrappedCenteredText(ctx, theme.subtitle + ' The learner demonstrated focus, consistency, and practical problem-solving.', 960, 828, 980, 31, '500 26px Inter, Arial, sans-serif', '#B8C3D2');

  /* Signature + details */
  ctx.strokeStyle = 'rgba(220,230,245,0.45)';
  ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(250, 910); ctx.lineTo(620, 910); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(1300, 910); ctx.lineTo(1648, 910); ctx.stroke();
  ctx.fillStyle = '#F7FAFF';
  ctx.font = '400 38px Brush Script MT, Segoe Script, cursive';
  ctx.textAlign = 'left';
  ctx.fillText('MyCode Team', 310, 884);
  ctx.fillText(date, 1370, 884);
  drawCenteredText(ctx, 'MYCODE TEAM', 435, 948, '800 19px Inter, Arial, sans-serif', accent, 0);
  drawCenteredText(ctx, 'COURSE INSTRUCTORS', 435, 978, '700 17px JetBrains Mono, Consolas, monospace', '#A9B6C8', 1.2);
  drawCenteredText(ctx, 'DATE OF COMPLETION', 1474, 948, '800 17px JetBrains Mono, Consolas, monospace', accent, 1.8);

  /* Bottom credential plate */
  ctx.save();
  drawRoundedRectPath(ctx, 650, 940, 620, 72, 14);
  const plate = ctx.createLinearGradient(650, 940, 1270, 1012);
  plate.addColorStop(0, 'rgba(255,255,255,0.04)');
  plate.addColorStop(1, rgba(accent, 0.08));
  ctx.fillStyle = plate;
  ctx.fill();
  ctx.strokeStyle = rgba(accent, 0.72);
  ctx.lineWidth = 2;
  ctx.stroke();
  drawCenteredText(ctx, 'CERTIFICATE ID: ' + id, 960, 984, '700 22px JetBrains Mono, Consolas, monospace', '#DDE6F2', 1.2);
  ctx.restore();

  drawQrMock(ctx, 1660, 896, 96, id, accent);
  ctx.fillStyle = accent;
  ctx.font = '900 16px JetBrains Mono, Consolas, monospace';
  ctx.textAlign = 'left';
  ctx.fillText('VERIFY', 1770, 930);
  ctx.fillStyle = '#B9C4D3';
  ctx.font = '600 15px Inter, Arial, sans-serif';
  ctx.fillText('mycode.dev/verify', 1770, 957);

  return { canvas, id, theme, moduleNumber, date };
}
function dataUrlToBytes(dataUrl){
  const base64 = String(dataUrl).split(',')[1] || '';
  const raw = atob(base64);
  const bytes = new Uint8Array(raw.length);
  for(let i = 0; i < raw.length; i++) bytes[i] = raw.charCodeAt(i);
  return bytes;
}
function asciiBytes(value){
  return new TextEncoder().encode(String(value));
}
function concatBytes(parts){
  const total = parts.reduce((sum, part) => sum + part.length, 0);
  const out = new Uint8Array(total);
  let offset = 0;
  parts.forEach(part => { out.set(part, offset); offset += part.length; });
  return out;
}
function buildPdfFromJpeg(jpegBytes, width, height){
  const parts = [];
  const offsets = [0];
  let cursor = 0;
  function push(part){
    const bytes = part instanceof Uint8Array ? part : asciiBytes(part);
    parts.push(bytes);
    cursor += bytes.length;
  }
  function startObj(){ offsets.push(cursor); }
  push('%PDF-1.4\n');
  startObj(); push('1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj\n');
  startObj(); push('2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj\n');
  startObj(); push('3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 842 595] /Resources << /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >> endobj\n');
  startObj();
  push('4 0 obj << /Type /XObject /Subtype /Image /Width ' + width + ' /Height ' + height + ' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ' + jpegBytes.length + ' >> stream\n');
  push(jpegBytes);
  push('\nendstream endobj\n');
  const content = 'q\n842 0 0 595 0 0 cm\n/Im0 Do\nQ\n';
  startObj(); push('5 0 obj << /Length ' + content.length + ' >> stream\n' + content + 'endstream endobj\n');
  const xrefStart = cursor;
  push('xref\n0 6\n');
  push('0000000000 65535 f \n');
  offsets.slice(1).forEach(offset => push(String(offset).padStart(10, '0') + ' 00000 n \n'));
  push('trailer << /Size 6 /Root 1 0 R >>\nstartxref\n' + xrefStart + '\n%%EOF');
  return concatBytes(parts);
}
function buildCertificatePdf(moduleName){
  const render = drawCertificateCanvas(moduleName);
  const jpegDataUrl = render.canvas.toDataURL('image/jpeg', 0.96);
  const jpegBytes = dataUrlToBytes(jpegDataUrl);
  return buildPdfFromJpeg(jpegBytes, render.canvas.width, render.canvas.height);
}

function downloadCertificatePdf(moduleName){
  if(!isCertificateUnlocked(moduleName)) return;
  const pdfBytes = buildCertificatePdf(moduleName);
  const blob = new Blob([pdfBytes], { type:'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const moduleNumber = certificateModuleNumber(moduleName);
  const fileName = 'mycode-certificate-module-' + String(moduleNumber).padStart(2, '0') + '-' + getCertificateTheme(moduleName).title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.pdf';
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 800);
}

function wireCertificateEntryPoints(){
  const card = document.getElementById('certificatesCard');
  if(card && !card.dataset.certWired){
    card.dataset.certWired = 'true';
    card.addEventListener('click', goToCertificates);
    card.addEventListener('keydown', (ev) => {
      if(ev.key === 'Enter' || ev.key === ' '){
        ev.preventDefault();
        goToCertificates();
      }
    });
  }

  const brand = document.getElementById('brandBtn');
  if(brand && !brand.dataset.certBrandWired){
    brand.dataset.certBrandWired = 'true';
    brand.addEventListener('click', (ev) => {
      ensureCertificatesPage();
      if(pageCertificates.classList.contains('active')){
        ev.preventDefault();
        ev.stopImmediatePropagation();
        goToLanding();
      }
    }, true);
  }

  if(adminUnlockBtnTop && !adminUnlockBtnTop.dataset.certAdminWired){
    adminUnlockBtnTop.dataset.certAdminWired = 'true';
    adminUnlockBtnTop.addEventListener('click', () => {
      state.adminUnlocked = true;
      ensureAdminMaxProgress();
      saveState();
      updateCertificateSummary();
      if(pageCertificates && pageCertificates.classList.contains('active')) renderCertificatesPage();
      const adminBtn = document.getElementById('adminUnlockBtnTop');
      if(adminBtn) adminBtn.textContent = 'Admin ✓';
      renderTopStats();
      renderProfileWidgets();
      renderAchievementsModal();
      renderArenaCard();
    });
  }
}

ensureCertificatesPage();
wireCertificateEntryPoints();
updateCertificateSummary();



/* =========================================================
   ARENA DIÁRIA LOCAL — sem backend, ranking pessoal
   ========================================================= */
const ARENA_STORAGE_KEY = 'mycode_arena_local_v1';
const DAILY_ARENA_CHALLENGES = [
  {
    "day_id": "arena_001",
    "language": "javascript",
    "tier": "bronze",
    "titlePt": "Somador de compras",
    "titleEn": "Purchase adder",
    "concepts": [
      "return",
      "números",
      "parâmetros"
    ],
    "instructionsPt": "Complete a função para receber dois preços e retornar a soma. A ideia é treinar retorno simples, sem console.log.",
    "instructionsEn": "Complete the function to receive two prices and return the sum. This trains a simple return, without console.log.",
    "time_limit_seconds": 180,
    "function_name": "somarCompras",
    "starter_code": "function somarCompras(precoA, precoB) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          10,
          5
        ],
        "expected_output": 15
      },
      {
        "input": [
          2,
          8
        ],
        "expected_output": 10
      }
    ],
    "validation_tests": [
      {
        "input": [
          10,
          5
        ],
        "expected_output": 15
      },
      {
        "input": [
          2,
          8
        ],
        "expected_output": 10
      },
      {
        "input": [
          0,
          12
        ],
        "expected_output": 12
      },
      {
        "input": [
          7.5,
          2.5
        ],
        "expected_output": 10
      }
    ],
    "reference_solution": "return precoA + precoB;",
    "explanationPt": "A função recebe dois valores por parâmetro. Para resolver, some precoA com precoB e devolva o resultado usando return.",
    "explanationEn": "The function receives two values as parameters. Add precoA and precoB and return the result."
  },
  {
    "day_id": "arena_002",
    "language": "javascript",
    "tier": "bronze",
    "titlePt": "Dobro de um número",
    "titleEn": "Double a number",
    "concepts": [
      "multiplicação",
      "return",
      "números"
    ],
    "instructionsPt": "Complete a função para retornar o dobro do número recebido.",
    "instructionsEn": "Complete the function to return double the received number.",
    "time_limit_seconds": 180,
    "function_name": "dobro",
    "starter_code": "function dobro(numero) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          4
        ],
        "expected_output": 8
      }
    ],
    "validation_tests": [
      {
        "input": [
          4
        ],
        "expected_output": 8
      },
      {
        "input": [
          0
        ],
        "expected_output": 0
      },
      {
        "input": [
          9
        ],
        "expected_output": 18
      },
      {
        "input": [
          2.5
        ],
        "expected_output": 5
      }
    ],
    "reference_solution": "return numero * 2;",
    "explanationPt": "Dobrar é multiplicar por 2. O retorno precisa ser o valor calculado, não um texto.",
    "explanationEn": "Doubling means multiplying by 2. The return must be the calculated value, not text."
  },
  {
    "day_id": "arena_003",
    "language": "javascript",
    "tier": "bronze",
    "titlePt": "Maior de idade",
    "titleEn": "Adult age check",
    "concepts": [
      "if",
      "booleano",
      "comparação"
    ],
    "instructionsPt": "Complete a função para retornar true quando a idade for 18 ou mais, e false nos demais casos.",
    "instructionsEn": "Complete the function to return true when age is 18 or above, and false otherwise.",
    "time_limit_seconds": 180,
    "function_name": "maiorDeIdade",
    "starter_code": "function maiorDeIdade(idade) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          18
        ],
        "expected_output": true
      }
    ],
    "validation_tests": [
      {
        "input": [
          18
        ],
        "expected_output": true
      },
      {
        "input": [
          17
        ],
        "expected_output": false
      },
      {
        "input": [
          30
        ],
        "expected_output": true
      },
      {
        "input": [
          0
        ],
        "expected_output": false
      }
    ],
    "reference_solution": "return idade >= 18;",
    "explanationPt": "A comparação idade >= 18 já gera um booleano. Você pode retornar essa comparação diretamente.",
    "explanationEn": "The comparison idade >= 18 already creates a boolean. You can return that comparison directly."
  },
  {
    "day_id": "arena_004",
    "language": "javascript",
    "tier": "bronze",
    "titlePt": "Aprovado ou reprovado",
    "titleEn": "Passed or failed",
    "concepts": [
      "if",
      "else",
      "strings"
    ],
    "instructionsPt": "Retorne \"aprovado\" se a nota for maior ou igual a 7. Caso contrário, retorne \"reprovado\".",
    "instructionsEn": "Return \"aprovado\" if the grade is 7 or above. Otherwise, return \"reprovado\".",
    "time_limit_seconds": 180,
    "function_name": "resultadoAluno",
    "starter_code": "function resultadoAluno(nota) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          8
        ],
        "expected_output": "aprovado"
      }
    ],
    "validation_tests": [
      {
        "input": [
          8
        ],
        "expected_output": "aprovado"
      },
      {
        "input": [
          7
        ],
        "expected_output": "aprovado"
      },
      {
        "input": [
          6.9
        ],
        "expected_output": "reprovado"
      },
      {
        "input": [
          0
        ],
        "expected_output": "reprovado"
      }
    ],
    "reference_solution": "if (nota >= 7) {\n  return \"aprovado\";\n}\nreturn \"reprovado\";",
    "explanationPt": "A regra inclui nota 7. Por isso a comparação correta usa >=, não apenas >.",
    "explanationEn": "The rule includes grade 7. That is why the correct comparison uses >=, not only >."
  },
  {
    "day_id": "arena_005",
    "language": "javascript",
    "tier": "prata",
    "titlePt": "Contar números pares",
    "titleEn": "Count even numbers",
    "concepts": [
      "for",
      "arrays",
      "%"
    ],
    "instructionsPt": "Receba uma lista de números e retorne quantos deles são pares.",
    "instructionsEn": "Receive a list of numbers and return how many of them are even.",
    "time_limit_seconds": 180,
    "function_name": "contarPares",
    "starter_code": "function contarPares(numeros) {\n  let total = 0;\n  // escreva seu código abaixo\n\n  return total;\n}",
    "visible_examples": [
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected_output": 2
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected_output": 2
      },
      {
        "input": [
          [
            2,
            4,
            6
          ]
        ],
        "expected_output": 3
      },
      {
        "input": [
          [
            1,
            3,
            5
          ]
        ],
        "expected_output": 0
      },
      {
        "input": [
          [
            0,
            10,
            11
          ]
        ],
        "expected_output": 2
      }
    ],
    "reference_solution": "for (const numero of numeros) {\n  if (numero % 2 === 0) {\n    total++;\n  }\n}",
    "explanationPt": "O operador % mostra o resto da divisão. Se numero % 2 é 0, o número é par.",
    "explanationEn": "The % operator gives the division remainder. If number % 2 is 0, the number is even."
  },
  {
    "day_id": "arena_006",
    "language": "javascript",
    "tier": "prata",
    "titlePt": "Somar uma lista",
    "titleEn": "Sum a list",
    "concepts": [
      "for",
      "arrays",
      "acumulador"
    ],
    "instructionsPt": "Receba uma lista de valores e retorne a soma total.",
    "instructionsEn": "Receive a list of values and return the total sum.",
    "time_limit_seconds": 180,
    "function_name": "somarLista",
    "starter_code": "function somarLista(valores) {\n  let total = 0;\n  // escreva seu código abaixo\n\n  return total;\n}",
    "visible_examples": [
      {
        "input": [
          [
            5,
            5,
            10
          ]
        ],
        "expected_output": 20
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            5,
            5,
            10
          ]
        ],
        "expected_output": 20
      },
      {
        "input": [
          []
        ],
        "expected_output": 0
      },
      {
        "input": [
          [
            1,
            2,
            3,
            4
          ]
        ],
        "expected_output": 10
      },
      {
        "input": [
          [
            -5,
            10
          ]
        ],
        "expected_output": 5
      }
    ],
    "reference_solution": "for (const valor of valores) {\n  total += valor;\n}",
    "explanationPt": "Use uma variável acumuladora. A cada item da lista, some o valor no total.",
    "explanationEn": "Use an accumulator variable. For each list item, add the value to total."
  },
  {
    "day_id": "arena_007",
    "language": "javascript",
    "tier": "prata",
    "titlePt": "Filtrar aprovados",
    "titleEn": "Filter passing grades",
    "concepts": [
      "arrays",
      "if",
      "push"
    ],
    "instructionsPt": "Receba notas e retorne uma nova lista apenas com as notas maiores ou iguais a 7.",
    "instructionsEn": "Receive grades and return a new list containing only grades greater than or equal to 7.",
    "time_limit_seconds": 180,
    "function_name": "filtrarAprovados",
    "starter_code": "function filtrarAprovados(notas) {\n  const aprovados = [];\n  // escreva seu código abaixo\n\n  return aprovados;\n}",
    "visible_examples": [
      {
        "input": [
          [
            5,
            7,
            9
          ]
        ],
        "expected_output": [
          7,
          9
        ]
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            5,
            7,
            9
          ]
        ],
        "expected_output": [
          7,
          9
        ]
      },
      {
        "input": [
          [
            10,
            3,
            8,
            6
          ]
        ],
        "expected_output": [
          10,
          8
        ]
      },
      {
        "input": [
          [
            1,
            2,
            3
          ]
        ],
        "expected_output": []
      },
      {
        "input": [
          [
            7
          ]
        ],
        "expected_output": [
          7
        ]
      }
    ],
    "reference_solution": "for (const nota of notas) {\n  if (nota >= 7) {\n    aprovados.push(nota);\n  }\n}",
    "explanationPt": "Percorra as notas. Quando uma nota cumprir a regra, coloque-a na nova lista com push.",
    "explanationEn": "Loop through the grades. When a grade matches the rule, add it to the new list with push."
  },
  {
    "day_id": "arena_008",
    "language": "javascript",
    "tier": "ouro",
    "titlePt": "Formatar nomes",
    "titleEn": "Format names",
    "concepts": [
      "strings",
      "map",
      "toUpperCase"
    ],
    "instructionsPt": "Receba uma lista de nomes e retorne todos em letras maiúsculas.",
    "instructionsEn": "Receive a list of names and return them all in uppercase.",
    "time_limit_seconds": 180,
    "function_name": "formatarNomes",
    "starter_code": "function formatarNomes(nomes) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          [
            "ana",
            "joao"
          ]
        ],
        "expected_output": [
          "ANA",
          "JOAO"
        ]
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            "ana",
            "joao"
          ]
        ],
        "expected_output": [
          "ANA",
          "JOAO"
        ]
      },
      {
        "input": [
          [
            "Byte"
          ]
        ],
        "expected_output": [
          "BYTE"
        ]
      },
      {
        "input": [
          []
        ],
        "expected_output": []
      },
      {
        "input": [
          [
            "js",
            "python"
          ]
        ],
        "expected_output": [
          "JS",
          "PYTHON"
        ]
      }
    ],
    "reference_solution": "return nomes.map(nome => nome.toUpperCase());",
    "explanationPt": "Cada nome é uma string. toUpperCase transforma o texto, e map cria uma nova lista transformada.",
    "explanationEn": "Each name is a string. toUpperCase transforms the text, and map creates a transformed new list."
  },
  {
    "day_id": "arena_009",
    "language": "javascript",
    "tier": "ouro",
    "titlePt": "Total do carrinho",
    "titleEn": "Cart total",
    "concepts": [
      "objetos",
      "arrays",
      "reduce"
    ],
    "instructionsPt": "Receba itens de carrinho e retorne a soma dos preços.",
    "instructionsEn": "Receive cart items and return the sum of their prices.",
    "time_limit_seconds": 180,
    "function_name": "totalCarrinho",
    "starter_code": "function totalCarrinho(itens) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          [
            {
              "nome": "Livro",
              "preco": 20
            },
            {
              "nome": "Caneta",
              "preco": 5
            }
          ]
        ],
        "expected_output": 25
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            {
              "nome": "Livro",
              "preco": 20
            },
            {
              "nome": "Caneta",
              "preco": 5
            }
          ]
        ],
        "expected_output": 25
      },
      {
        "input": [
          []
        ],
        "expected_output": 0
      },
      {
        "input": [
          [
            {
              "nome": "A",
              "preco": 10
            },
            {
              "nome": "B",
              "preco": 10
            },
            {
              "nome": "C",
              "preco": 1
            }
          ]
        ],
        "expected_output": 21
      }
    ],
    "reference_solution": "return itens.reduce((total, item) => total + item.preco, 0);",
    "explanationPt": "Cada item tem uma propriedade preco. Some essa propriedade em um acumulador começando em 0.",
    "explanationEn": "Each item has a preco property. Add that property into an accumulator starting at 0."
  },
  {
    "day_id": "arena_010",
    "language": "javascript",
    "tier": "ouro",
    "titlePt": "Buscar usuário ativo",
    "titleEn": "Find active user",
    "concepts": [
      "objetos",
      "find",
      "booleano"
    ],
    "instructionsPt": "Receba uma lista de usuários e retorne o nome do primeiro usuário ativo. Se não existir, retorne \"ninguém\".",
    "instructionsEn": "Receive a list of users and return the name of the first active user. If none exists, return \"ninguém\".",
    "time_limit_seconds": 180,
    "function_name": "primeiroAtivo",
    "starter_code": "function primeiroAtivo(usuarios) {\n  // escreva seu código abaixo\n\n}",
    "visible_examples": [
      {
        "input": [
          [
            {
              "nome": "Ana",
              "ativo": false
            },
            {
              "nome": "Bia",
              "ativo": true
            }
          ]
        ],
        "expected_output": "Bia"
      }
    ],
    "validation_tests": [
      {
        "input": [
          [
            {
              "nome": "Ana",
              "ativo": false
            },
            {
              "nome": "Bia",
              "ativo": true
            }
          ]
        ],
        "expected_output": "Bia"
      },
      {
        "input": [
          [
            {
              "nome": "Leo",
              "ativo": false
            }
          ]
        ],
        "expected_output": "ninguém"
      },
      {
        "input": [
          [
            {
              "nome": "Max",
              "ativo": true
            },
            {
              "nome": "Lia",
              "ativo": true
            }
          ]
        ],
        "expected_output": "Max"
      }
    ],
    "reference_solution": "const usuario = usuarios.find(user => user.ativo);\nreturn usuario ? usuario.nome : \"ninguém\";",
    "explanationPt": "find procura o primeiro item que passa no teste. Depois, é preciso tratar o caso em que nenhum usuário ativo existe.",
    "explanationEn": "find looks for the first item that passes the test. Then you must handle the case where no active user exists."
  }
];
let arenaSession = null;
let arenaTimerId = null;
function arenaDefaultState(){ return { history: [], attempts: {}, rp: 0, bestScore: 0, streak: 0, lastPlayedDate: null }; }
function loadArenaState(){ try{ const raw=localStorage.getItem(ARENA_STORAGE_KEY); const data = raw ? Object.assign(arenaDefaultState(), JSON.parse(raw)) : arenaDefaultState(); if(state && state.adminUnlocked){ data.rp = Math.max(Number(data.rp || 0), MAX_RANKED_RP); data.bestScore = Math.max(Number(data.bestScore || 0), 150); } return data; }catch(e){} const fallback = arenaDefaultState(); if(state && state.adminUnlocked){ fallback.rp = MAX_RANKED_RP; fallback.bestScore = 150; } return fallback; }
function saveArenaState(data){ localStorage.setItem(ARENA_STORAGE_KEY, JSON.stringify(data)); }
function arenaDateKey(date=new Date()){ const y=date.getFullYear(); const m=String(date.getMonth()+1).padStart(2,'0'); const d=String(date.getDate()).padStart(2,'0'); return y+'-'+m+'-'+d; }
function arenaYesterdayKey(){ const d=new Date(); d.setDate(d.getDate()-1); return arenaDateKey(d); }
function arenaHashDate(key){ let hash=0; for(let i=0;i<key.length;i++) hash=((hash<<5)-hash+key.charCodeAt(i))|0; return Math.abs(hash); }
function getDailyArenaChallenge(dateKey=arenaDateKey()){ return DAILY_ARENA_CHALLENGES[arenaHashDate(dateKey)%DAILY_ARENA_CHALLENGES.length]; }
function arenaChallengeTitle(challenge){ return getLang()==='en'?challenge.titleEn:challenge.titlePt; }
function arenaChallengeInstructions(challenge){ return getLang()==='en'?challenge.instructionsEn:challenge.instructionsPt; }
function arenaChallengeExplanation(challenge){ return getLang()==='en'?challenge.explanationEn:challenge.explanationPt; }
function arenaLeague(rp){ if(rp>=2000)return txt('Diamante','Diamond'); if(rp>=1500)return txt('Platina','Platinum'); if(rp>=1000)return txt('Ouro','Gold'); if(rp>=500)return txt('Prata','Silver'); return txt('Bronze','Bronze'); }
function arenaLeagueKey(rp){ rp=Number(rp)||0; if(rp>=2000)return 'diamond'; if(rp>=1500)return 'platinum'; if(rp>=1000)return 'gold'; if(rp>=500)return 'silver'; return 'bronze'; }
function arenaRankPixelArt(key){
  const cfg={
    bronze:{name:'B',label:'BRONZE',a:'#5C321E',b:'#B56B3E',c:'#F2A86F',d:'#2A1710',glow:'rgba(242,168,111,.38)'},
    silver:{name:'S',label:'SILVER',a:'#516173',b:'#AFC2D8',c:'#F6FBFF',d:'#1D2733',glow:'rgba(216,228,242,.34)'},
    gold:{name:'G',label:'GOLD',a:'#7C5208',b:'#FFB627',c:'#FFF0A3',d:'#302000',glow:'rgba(255,214,106,.42)'},
    platinum:{name:'P',label:'PLATINUM',a:'#086B73',b:'#55F2E8',c:'#EFFFFC',d:'#032D33',glow:'rgba(125,255,242,.40)'},
    diamond:{name:'D',label:'DIAMOND',a:'#173C9A',b:'#51C9FF',c:'#F3FCFF',d:'#071747',glow:'rgba(114,214,255,.46)'}
  }[key]||{name:'B',label:'BRONZE',a:'#5C321E',b:'#B56B3E',c:'#F2A86F',d:'#2A1710',glow:'rgba(242,168,111,.38)'};
  const px=[];
  const add=(x,y,w,h,fill,op)=>px.push('<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" fill="'+fill+'"'+(op?' opacity="'+op+'"':'')+'/>');
  // crisp futuristic pixel crest, wider than the old badge so the rank feels like an emblem.
  [[26,2,20,4,cfg.c],[18,6,36,4,cfg.b],[12,10,48,6,cfg.b],[8,16,56,10,cfg.a],[6,26,60,14,cfg.a],[10,40,52,10,cfg.b],[16,50,40,8,cfg.d],[24,58,24,6,cfg.d]].forEach(p=>add(p[0],p[1],p[2],p[3],p[4]));
  // hard contour
  [[22,2,4,4],[46,2,4,4],[14,6,4,4],[54,6,4,4],[8,10,4,6],[60,10,4,6],[4,18,4,22],[66,18,4,22],[10,44,6,6],[58,44,6,6],[16,54,8,4],[50,54,8,4],[24,62,4,4],[46,62,4,4]].forEach(p=>add(p[0],p[1],p[2],p[3],cfg.d));
  // inner plate and shine
  add(20,18,32,28,'rgba(0,0,0,.30)');
  add(24,20,24,6,cfg.d,.55); add(24,42,24,5,cfg.d,.45);
  add(18,12,12,4,cfg.c,.90); add(14,18,10,4,cfg.c,.70); add(46,14,10,4,cfg.c,.62);
  add(30,25,14,4,cfg.c,.95); add(30,36,14,4,cfg.c,.95);
  add(34,29,6,7,cfg.c,.95);
  return '<span class="rank-pixel-icon rank-pixel-'+key+'" aria-hidden="true"><svg viewBox="0 0 72 70" shape-rendering="crispEdges" focusable="false"><filter id="rankGlow_'+key+'"><feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="'+cfg.b+'" flood-opacity="0.58"/></filter><g filter="url(#rankGlow_'+key+')">'+px.join('')+'</g><text x="36" y="37" text-anchor="middle" font-size="15" font-family="monospace" font-weight="900" fill="'+cfg.c+'">'+cfg.name+'</text></svg></span>';
}
function arenaLeagueBadge(rp){ const key=arenaLeagueKey(rp); return '<span class="ranked-league-badge ranked-league-'+key+'">'+arenaRankPixelArt(key)+'<strong>'+arenaLeague(rp)+'</strong></span>'; }

function arenaFormatSeconds(seconds){ const s=Math.max(0,Math.ceil(seconds)); return Math.floor(s/60)+':'+String(s%60).padStart(2,'0'); }
function arenaEscape(value){ return escapeHtml(String(value==null?'':value)); }
function arenaOutputValue(value){ try{return JSON.stringify(value);}catch(e){return String(value);} }
function arenaCalculateScore(passed,total,elapsed,timedOut){ if(timedOut||!total)return{score:0,precision:0,speedBonus:0}; const precision=passed/total; const base=precision*100; const speedBonus=precision===1?Math.max(0,((180-Math.min(elapsed,180))/180)*50):0; return{score:Math.max(0,Math.round(base+speedBonus)),precision,speedBonus:Math.round(speedBonus)}; }
function arenaRpForPrecision(precision){ if(precision>=1)return 30; if(precision>=.7)return 15; if(precision>=.4)return 5; return 0; }
function revealRankedCardFromTopbar(){
  const today = arenaDateKey();
  const hiddenKey = 'mycode_arena_entry_hidden_date';
  localStorage.removeItem(hiddenKey);
  const reveal = () => {
    renderArenaCard();
    const card = document.getElementById('arenaEntryCard');
    if(card){
      card.classList.remove('is-hidden');
      card.scrollIntoView({ behavior:'smooth', block:'center' });
      card.classList.remove('ranked-card-attention');
      void card.offsetWidth;
      card.classList.add('ranked-card-attention');
      setTimeout(() => card.classList.remove('ranked-card-attention'), 1300);
    }
  };
  if(!pagePanel.classList.contains('active')){
    goToPanel();
    setTimeout(reveal, 220);
  } else {
    reveal();
  }
}
function ensureArenaNav(){
  const btn=document.getElementById('navArenaBtnTop');
  if(btn){
    btn.textContent='Ranked';
    btn.setAttribute('aria-label', txt('Abrir card Ranked', 'Open Ranked card'));
    if(!btn.dataset.arenaWired){
      btn.dataset.arenaWired='true';
      btn.addEventListener('click', revealRankedCardFromTopbar);
    }
  }
}
function renderArenaCard(){
  ensureArenaNav();
  const hero=document.querySelector('#pagePanel .study-hero-clean');
  if(!hero)return;
  let card=document.getElementById('arenaEntryCard');
  const today=arenaDateKey();
  const hiddenKey='mycode_arena_entry_hidden_date';
  if(localStorage.getItem(hiddenKey)===today){
    if(card) card.remove();
    return;
  }
  if(!card){
    card=document.createElement('section');
    card.id='arenaEntryCard';
    card.className='arena-entry-card';
    hero.insertAdjacentElement('afterend',card);
  }
  const data=loadArenaState();
  const challenge=getDailyArenaChallenge(today);
  const attempt=data.attempts[today];
  const best=data.bestScore||0;
  const status=attempt
    ? txt('Tentativa de hoje registrada. Você ainda pode treinar sem mexer na pontuação.','Today\'s attempt is saved. You can still train without changing the score.')
    : txt('O Byte separou um desafio prático para hoje. Resolva dentro do tempo e tente superar seu próprio recorde.','Byte prepared a practical challenge for today. Solve it in time and try to beat your own record.');
  card.classList.add('ranked-card');
  card.innerHTML='<button type="button" class="arena-entry-close" id="dismissArenaEntryBtn" aria-label="'+txt('Fechar Arena Ranked','Close Ranked Arena')+'">×</button><div class="arena-entry-inner"><div class="arena-ranked-token ranked-video-token"><video class="arena-ranked-video" src="'+RANKED_VIDEO_SRC+'" autoplay muted loop playsinline preload="auto" aria-label="Ranked"></video></div><div class="arena-entry-copy"><div class="arena-ranked-stamp"><b>R</b> '+txt('ranked diário local','local daily ranked')+'</div><h3 class="ranked-title"><span>Ranked</span> · '+txt('desafio diário aberto','daily challenge open')+'</h3><p class="ranked-subtitle">'+status+' '+txt('Pontue, ganhe RP e tente subir de liga no seu ranking pessoal.','Score points, earn RP, and try to climb your personal league.')+'</p><div class="arena-entry-metrics ranked-metrics"><div class="arena-metric ranked-metric"><span>'+txt('desafio','challenge')+'</span><strong>'+arenaEscape(arenaChallengeTitle(challenge))+'</strong></div><div class="arena-metric ranked-metric ranked-league-metric"><span>'+txt('liga ranked','ranked league')+'</span>'+arenaLeagueBadge(data.rp||0)+'</div><div class="arena-metric ranked-metric"><span>RP</span><strong>'+(data.rp||0)+'</strong></div><div class="arena-metric ranked-metric"><span>'+txt('melhor','best')+'</span><strong>'+best+' pts</strong></div></div></div><div class="arena-entry-actions"><button type="button" class="arena-main-btn" id="openArenaBtn">'+(attempt?txt('Ver Ranked','View Ranked'):txt('Entrar no Ranked','Enter Ranked'))+'</button><button type="button" class="arena-ghost-btn" id="openArenaHistoryBtn">'+txt('Histórico ranked','Ranked history')+'</button></div></div>';
  const openBtn=document.getElementById('openArenaBtn'); if(openBtn)openBtn.addEventListener('click',showArenaIntro);
  const historyBtn=document.getElementById('openArenaHistoryBtn'); if(historyBtn)historyBtn.addEventListener('click',showArenaHistory);
  const closeBtn=document.getElementById('dismissArenaEntryBtn'); if(closeBtn)closeBtn.addEventListener('click',(event)=>{event.preventDefault();event.stopPropagation();localStorage.setItem(hiddenKey,today);card.classList.add('is-hidden');setTimeout(()=>card.remove(),140);});
}
function ensureArenaModal(){ let modal=document.getElementById('arenaModal'); if(modal)return modal; modal=document.createElement('div'); modal.id='arenaModal'; modal.className='arena-modal-backdrop'; modal.innerHTML='<div class="arena-modal" role="dialog" aria-modal="true"><button type="button" class="arena-modal-close" id="arenaCloseBtn" aria-label="Fechar">×</button><div class="arena-modal-body" id="arenaModalBody"></div></div>'; document.body.appendChild(modal); modal.addEventListener('click',(ev)=>{if(ev.target===modal)closeArenaModal();}); document.getElementById('arenaCloseBtn').addEventListener('click',closeArenaModal); return modal; }
function closeArenaModal(){ const modal=document.getElementById('arenaModal'); if(modal)modal.classList.remove('show'); stopArenaTimer(); if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility(); }
function showArenaModal(){ ensureArenaModal().classList.add('show'); if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility(); }
function showArenaIntro(){ stopArenaTimer(); const modal=ensureArenaModal(); const body=document.getElementById('arenaModalBody'); const data=loadArenaState(); const today=arenaDateKey(); const attempt=data.attempts[today]; const challenge=getDailyArenaChallenge(today); body.innerHTML='<div class="arena-intro-grid"><div class="arena-intro-byte"><img src="'+BYTE_IMAGE_SRC+'" alt="Byte"></div><div class="arena-intro-copy"><div class="arena-modal-eyebrow">⚔️ Ranked</div><h2>'+txt('Supere seu próprio recorde hoje.','Beat your own record today.')+'</h2><p>'+txt('Este modo é competitivo e local: a pontuação, liga, sequência e histórico ficam salvos apenas neste navegador.','This mode is local and competitive: score, league, streak, and history are saved only in this browser.')+'</p><div class="arena-rule-grid"><div class="arena-rule"><strong>'+txt('Novo desafio diário','New daily challenge')+'</strong><span>'+txt('O desafio é escolhido pela data. Amanhã, outro problema aparece.','The challenge is picked by date. Tomorrow, another problem appears.')+'</span></div><div class="arena-rule"><strong>180s</strong><span>'+txt('O cronômetro começa apenas quando você iniciar.','The timer starts only when you begin.')+'</span></div><div class="arena-rule"><strong>'+txt('1 tentativa ranqueada','1 ranked attempt')+'</strong><span>'+txt('Depois disso, você pode revisar em modo treino sem alterar RP.','After that, you can review in training mode without changing RP.')+'</span></div><div class="arena-rule"><strong>'+txt('Validação local','Local validation')+'</strong><span>'+txt('Sem backend: os testes rodam no navegador e o ranking é pessoal.','No backend: tests run in the browser and the ranking is personal.')+'</span></div></div><div class="arena-side-card"><h4>'+arenaEscape(arenaChallengeTitle(challenge))+'</h4><p>'+arenaEscape(arenaChallengeInstructions(challenge))+'</p><div class="arena-pill-row">'+challenge.concepts.map(c=>'<span class="arena-concept-pill">'+arenaEscape(c)+'</span>').join('')+'</div></div><div class="arena-intro-actions">'+(attempt?'<button type="button" class="arena-main-btn" id="arenaTrainBtn">'+txt('Revisar em modo treino','Review in training mode')+'</button><button type="button" class="arena-ghost-btn" id="arenaTodayResultBtn">'+txt('Ver resultado de hoje','View today\'s result')+'</button>':'<button type="button" class="arena-main-btn" id="arenaStartBtn">⚔️ '+txt('Iniciar desafio diário','Start daily challenge')+'</button>')+'<button type="button" class="arena-ghost-btn" id="arenaHistoryBtn">'+txt('Histórico','History')+'</button>'+(state.adminUnlocked?'<button type="button" class="arena-danger-btn" id="arenaResetBtn">'+txt('Resetar Arena','Reset Arena')+'</button>':'')+'</div><div class="arena-local-note">'+txt('Proteções de copiar/colar são apenas foco visual. Sem servidor, não existe anti-cheat profissional nem ranking global real.','Copy/paste protections are only a focus layer. Without a server, there is no professional anti-cheat or real global ranking.')+'</div></div></div>'; modal.classList.add('show'); if(typeof updateTopbarVisibility === 'function') updateTopbarVisibility(); const startBtn=document.getElementById('arenaStartBtn'); if(startBtn)startBtn.addEventListener('click',()=>startArenaChallenge(false)); const trainBtn=document.getElementById('arenaTrainBtn'); if(trainBtn)trainBtn.addEventListener('click',()=>startArenaChallenge(true)); const resultBtn=document.getElementById('arenaTodayResultBtn'); if(resultBtn)resultBtn.addEventListener('click',()=>showArenaResult(attempt,true)); const histBtn=document.getElementById('arenaHistoryBtn'); if(histBtn)histBtn.addEventListener('click',showArenaHistory); const resetBtn=document.getElementById('arenaResetBtn'); if(resetBtn)resetBtn.addEventListener('click',()=>{ if(confirm(txt('Apagar histórico local da Arena?','Erase local Arena history?'))){ localStorage.removeItem(ARENA_STORAGE_KEY); renderArenaCard(); showArenaIntro(); } }); }
function stopArenaTimer(){ if(arenaTimerId){ clearInterval(arenaTimerId); arenaTimerId=null; } }
function startArenaChallenge(trainingMode){ stopArenaTimer(); const today=arenaDateKey(); const data=loadArenaState(); if(!trainingMode&&data.attempts[today]){ showArenaIntro(); return; } const challenge=getDailyArenaChallenge(today); arenaSession={challenge,trainingMode:!!trainingMode,startedAt:performance.now(),remaining:challenge.time_limit_seconds,submitted:false}; const body=document.getElementById('arenaModalBody'); body.innerHTML='<div class="arena-challenge-layout"><div><div class="arena-challenge-head"><div><div class="arena-modal-eyebrow">'+(trainingMode?txt('modo treino','training mode'):txt('tentativa ranqueada local','local ranked attempt'))+'</div><h2>'+arenaEscape(arenaChallengeTitle(challenge))+'</h2><p>'+arenaEscape(arenaChallengeInstructions(challenge))+'</p></div><div class="arena-timer" id="arenaTimer"><span>'+txt('tempo','time')+'</span><strong>3:00</strong></div></div><div class="arena-editor-shell" id="arenaEditorShell"><div class="arena-editor-bar"><span>arena.js</span><span>'+challenge.tier+' · '+challenge.language+'</span></div><div class="arena-code-editor" id="arenaCodeEditor"><div class="arena-code-gutter" id="arenaCodeGutter" aria-hidden="true"></div><div class="arena-code-stage" id="arenaCodeStage"><div class="arena-active-line" id="arenaActiveLine" aria-hidden="true"></div><pre class="arena-code-highlight" id="arenaCodeHighlight" aria-hidden="true"><code></code></pre><textarea class="arena-code-input" id="arenaCodeInput" spellcheck="false" autocomplete="off" autocorrect="off" autocapitalize="off" aria-label="Arena code editor">'+arenaEscape(challenge.starter_code)+'</textarea></div></div></div><div class="arena-editor-actions"><button type="button" class="arena-ghost-btn" id="arenaRunExampleBtn">'+txt('Rodar exemplos','Run examples')+'</button><button type="button" class="arena-main-btn" id="arenaSubmitBtn">'+(trainingMode?txt('Verificar treino','Check training'):txt('Submeter tentativa','Submit attempt'))+'</button><button type="button" class="arena-ghost-btn" id="arenaBackRulesBtn">'+txt('Regras','Rules')+'</button></div><div class="arena-output" id="arenaOutput">'+txt('Use “Rodar exemplos” para testar casos visíveis antes de submeter.','Use “Run examples” to test visible cases before submitting.')+'</div></div><aside class="arena-side-panel"><div class="arena-side-card"><h4>Byte</h4><p>'+txt('Velocidade só dá bônus se a lógica passar em todos os testes. Primeiro pense, depois acelere.','Speed only gives a bonus if the logic passes every test. Think first, then go fast.')+'</p></div><div class="arena-side-card"><h4>'+txt('Conceitos','Concepts')+'</h4><div class="arena-pill-row">'+challenge.concepts.map(c=>'<span class="arena-concept-pill">'+arenaEscape(c)+'</span>').join('')+'</div></div><div class="arena-side-card"><h4>'+txt('Exemplo visível','Visible example')+'</h4><p><strong>input:</strong> '+arenaEscape(arenaOutputValue(challenge.visible_examples[0].input))+'<br><strong>output:</strong> '+arenaEscape(arenaOutputValue(challenge.visible_examples[0].expected_output))+'</p></div><div class="arena-side-card"><h4>'+txt('Modo local','Local mode')+'</h4><p>'+txt('Seu resultado fica no localStorage deste navegador.','Your result stays in this browser\'s localStorage.')+'</p></div></aside></div>'; initializeArenaCodeEditor(); wireArenaEditorProtection(); document.getElementById('arenaRunExampleBtn').addEventListener('click',()=>runArenaVisibleExamples()); document.getElementById('arenaSubmitBtn').addEventListener('click',()=>submitArenaAttempt(false)); document.getElementById('arenaBackRulesBtn').addEventListener('click',showArenaIntro); updateArenaTimer(); if(!trainingMode){ arenaTimerId=setInterval(()=>{ if(!arenaSession||arenaSession.submitted)return; arenaSession.remaining=challenge.time_limit_seconds-((performance.now()-arenaSession.startedAt)/1000); updateArenaTimer(); if(arenaSession.remaining<=0)submitArenaAttempt(true); },250); }else{ const timer=document.getElementById('arenaTimer'); if(timer)timer.innerHTML='<span>'+txt('treino','training')+'</span><strong>∞</strong>'; } }
function updateArenaTimer(){ const timer=document.getElementById('arenaTimer'); if(!timer||!arenaSession)return; const remaining=Math.max(0,arenaSession.remaining); timer.querySelector('strong').textContent=arenaFormatSeconds(remaining); timer.classList.toggle('danger',remaining<=30); }

function arenaEditorEscape(value){ return String(value ?? '').replace(/[&<>]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[ch])); }
function arenaTokenizeLine(line){
  const keywords=new Set(['function','return','if','else','elif','for','while','do','switch','case','break','continue','try','except','catch','finally','throw','class','extends','new','of','in','async','await','true','false','True','False','null','None','undefined','def','import','from','as','with','pass']);
  const declarations=new Set(['const','let','var']);
  const builtins=new Set(['Array','Object','Math','Set','Map','JSON','Number','String','Boolean','console','log','push','filter','map','reduce','sort','length','startsWith','includes','from','print','input','int','float','str','len','range','append']);
  let out=''; let i=0; let expectFn=false;
  while(i<line.length){
    const ch=line[i];
    if(ch==='/'&&line[i+1]==='/'){ out+='<span class="arena-syntax-comment">'+arenaEditorEscape(line.slice(i))+'</span>'; break; }
    if(ch==='\''||ch==='"'||ch==='`'){
      const quote=ch; let j=i+1; let escaped=false;
      while(j<line.length){ const c=line[j]; if(!escaped&&c===quote){ j++; break; } escaped=!escaped&&c==='\\'; if(c!=='\\') escaped=false; j++; }
      out+='<span class="arena-syntax-string">'+arenaEditorEscape(line.slice(i,j))+'</span>'; i=j; continue;
    }
    if(/\d/.test(ch)){
      let j=i+1; while(j<line.length&&/[\d.]/.test(line[j]))j++;
      out+='<span class="arena-syntax-number">'+arenaEditorEscape(line.slice(i,j))+'</span>'; i=j; continue;
    }
    if(/[A-Za-z_$]/.test(ch)){
      let j=i+1; while(j<line.length&&/[A-Za-z0-9_$]/.test(line[j]))j++;
      const word=line.slice(i,j);
      if(declarations.has(word)){ out+='<span class="arena-syntax-declare">'+word+'</span>'; expectFn=false; }
      else if(keywords.has(word)){ out+='<span class="arena-syntax-keyword">'+word+'</span>'; expectFn=word==='function'; }
      else if(expectFn || line.slice(j).trimStart().startsWith('(')){ out+='<span class="arena-syntax-fn">'+arenaEditorEscape(word)+'</span>'; expectFn=false; }
      else if(builtins.has(word)){ out+='<span class="arena-syntax-builtin">'+arenaEditorEscape(word)+'</span>'; expectFn=false; }
      else { out+='<span class="arena-syntax-name">'+arenaEditorEscape(word)+'</span>'; expectFn=false; }
      i=j; continue;
    }
    if(/[{}()[\];,.=+\-*/<>!?:]/.test(ch)){ out+='<span class="arena-syntax-op">'+arenaEditorEscape(ch)+'</span>'; i++; continue; }
    out+=arenaEditorEscape(ch); i++;
  }
  return out || ' ';
}
function arenaHighlightCode(code){ return String(code ?? '').split('\n').map(arenaTokenizeLine).join('\n'); }
function arenaGetLineMetrics(textarea){
  const value=textarea.value||'';
  const pos=textarea.selectionStart||0;
  const before=value.slice(0,pos);
  const lineIndex=before.split('\n').length-1;
  const lineCount=Math.max(1,value.split('\n').length);
  return {lineIndex,lineCount};
}
function syncArenaCodeEditor(){
  const input=document.getElementById('arenaCodeInput');
  const highlight=document.getElementById('arenaCodeHighlight');
  const gutter=document.getElementById('arenaCodeGutter');
  const active=document.getElementById('arenaActiveLine');
  if(!input||!highlight||!gutter)return;
  const metrics=arenaGetLineMetrics(input);
  highlight.querySelector('code').innerHTML=arenaHighlightCode(input.value)+'\n';
  const nums=[];
  for(let i=0;i<metrics.lineCount;i++) nums.push('<span class="'+(i===metrics.lineIndex?'active':'')+'">'+(i+1)+'</span>');
  gutter.innerHTML=nums.join('');
  highlight.scrollTop=input.scrollTop; highlight.scrollLeft=input.scrollLeft; gutter.scrollTop=input.scrollTop;
  if(active){
    const lineHeight=parseFloat(getComputedStyle(input).lineHeight)||23.8;
    const padTop=parseFloat(getComputedStyle(input).paddingTop)||20;
    active.style.transform='translateY('+((metrics.lineIndex*lineHeight)-input.scrollTop)+'px)';
    active.style.top=padTop+'px';
    active.style.height=lineHeight+'px';
  }
}
function arenaInsertAtCursor(input,text,cursorBack=0){
  const start=input.selectionStart; const end=input.selectionEnd; const value=input.value;
  input.value=value.slice(0,start)+text+value.slice(end);
  const pos=start+text.length-cursorBack;
  input.setSelectionRange(pos,pos);
  input.dispatchEvent(new Event('input',{bubbles:true}));
}
function arenaIndentOfCurrentLine(input){
  const before=input.value.slice(0,input.selectionStart);
  const line=before.split('\n').pop()||'';
  return (line.match(/^\s*/)||[''])[0];
}
function initializeArenaCodeEditor(){
  const input=document.getElementById('arenaCodeInput');
  const shell=document.getElementById('arenaEditorShell');
  if(!input||input.dataset.devEditorReady)return;
  input.dataset.devEditorReady='true';
  ['input','keyup','click','focus'].forEach(evt=>input.addEventListener(evt,syncArenaCodeEditor));
  input.addEventListener('scroll',syncArenaCodeEditor);
  input.addEventListener('focus',()=>shell&&shell.classList.add('is-focused'));
  input.addEventListener('blur',()=>shell&&shell.classList.remove('is-focused'));
  input.addEventListener('keydown',(ev)=>{
    const key=ev.key;
    const combo=ev.ctrlKey||ev.metaKey;
    const lower=key.toLowerCase();
    if(key==='Tab'){
      ev.preventDefault();
      arenaInsertAtCursor(input,'  ');
      return;
    }
    if(!combo && ['(','{','[','\'','"','`'].includes(key)){
      ev.preventDefault();
      const pairs={'(':')','{':'}','[':']','\'':'\'','"':'"','`':'`'};
      arenaInsertAtCursor(input,key+pairs[key],1);
      return;
    }
    if(key==='Enter'){
      ev.preventDefault();
      const indent=arenaIndentOfCurrentLine(input);
      const before=input.value.slice(0,input.selectionStart);
      const after=input.value.slice(input.selectionEnd);
      const extra=/\{\s*$/.test(before)?'  ':'';
      if(extra && /^\s*\}/.test(after)) arenaInsertAtCursor(input,'\n'+indent+extra+'\n'+indent,indent.length+1);
      else arenaInsertAtCursor(input,'\n'+indent+extra);
      return;
    }
    if(key==='Backspace'){
      const s=input.selectionStart, e=input.selectionEnd, v=input.value;
      if(s===e && s>0){
        const pairs={'(':')','{':'}','[':']','\'':'\'','"':'"','`':'`'};
        if(pairs[v[s-1]] && pairs[v[s-1]]===v[s]){
          ev.preventDefault(); input.value=v.slice(0,s-1)+v.slice(s+1); input.setSelectionRange(s-1,s-1); syncArenaCodeEditor(); return;
        }
      }
    }
    if(key==='f12'||(combo&&['c','x','v','u','s'].includes(lower))||(ev.ctrlKey&&ev.shiftKey&&['i','j','c'].includes(lower))){
      ev.preventDefault(); arenaSetOutput('<span class="bad">'+txt('Atalho bloqueado durante a Arena local.','Shortcut blocked during the local Arena.')+'</span>');
    }
  });
  setTimeout(()=>{ syncArenaCodeEditor(); input.focus(); },0);
}

function syncDevCodeEditorByIds(inputId, highlightId, gutterId, activeId){
  const input=document.getElementById(inputId);
  const highlight=document.getElementById(highlightId);
  const gutter=document.getElementById(gutterId);
  const active=document.getElementById(activeId);
  if(!input||!highlight||!gutter)return;
  const metrics=arenaGetLineMetrics(input);
  const codeEl=highlight.querySelector('code');
  if(codeEl) codeEl.innerHTML=arenaHighlightCode(input.value)+'\n';
  const nums=[];
  for(let i=0;i<metrics.lineCount;i++) nums.push('<span class="'+(i===metrics.lineIndex?'active':'')+'">'+(i+1)+'</span>');
  gutter.innerHTML=nums.join('');
  highlight.scrollTop=input.scrollTop;
  highlight.scrollLeft=input.scrollLeft;
  gutter.scrollTop=input.scrollTop;
  if(active){
    const lineHeight=parseFloat(getComputedStyle(input).lineHeight)||23.8;
    const padTop=parseFloat(getComputedStyle(input).paddingTop)||20;
    active.style.transform='translateY('+((metrics.lineIndex*lineHeight)-input.scrollTop)+'px)';
    active.style.top=padTop+'px';
    active.style.height=lineHeight+'px';
  }
}

function initializeDevCodeEditor(config){
  const input=document.getElementById(config.inputId);
  const shell=document.getElementById(config.shellId);
  if(!input||input.dataset.devEditorReady)return;
  input.dataset.devEditorReady='true';
  const sync=()=>syncDevCodeEditorByIds(config.inputId,config.highlightId,config.gutterId,config.activeId);
  ['input','keyup','click','focus'].forEach(evt=>input.addEventListener(evt,sync));
  input.addEventListener('scroll',sync);
  input.addEventListener('focus',()=>shell&&shell.classList.add('is-focused'));
  input.addEventListener('blur',()=>shell&&shell.classList.remove('is-focused'));
  input.addEventListener('keydown',(ev)=>{
    const key=ev.key;
    const combo=ev.ctrlKey||ev.metaKey;
    if(key==='Tab'){
      ev.preventDefault();
      arenaInsertAtCursor(input,'  ');
      return;
    }
    if(!combo && ['(','{','[','\'','"','`'].includes(key)){
      ev.preventDefault();
      const pairs={'(':')','{':'}','[':']','\'':'\'','"':'"','`':'`'};
      arenaInsertAtCursor(input,key+pairs[key],1);
      return;
    }
    if(key==='Enter'){
      ev.preventDefault();
      const indent=arenaIndentOfCurrentLine(input);
      const before=input.value.slice(0,input.selectionStart);
      const after=input.value.slice(input.selectionEnd);
      const extra=/\{\s*$/.test(before)?'  ':'';
      if(extra && /^\s*\}/.test(after)) arenaInsertAtCursor(input,'\n'+indent+extra+'\n'+indent,indent.length+1);
      else arenaInsertAtCursor(input,'\n'+indent+extra);
      return;
    }
    if(key==='Backspace'){
      const s=input.selectionStart, e=input.selectionEnd, v=input.value;
      if(s===e && s>0){
        const pairs={'(':')','{':'}','[':']','\'':'\'','"':'"','`':'`'};
        if(pairs[v[s-1]] && pairs[v[s-1]]===v[s]){
          ev.preventDefault();
          input.value=v.slice(0,s-1)+v.slice(s+1);
          input.setSelectionRange(s-1,s-1);
          sync();
          return;
        }
      }
    }
  });
  setTimeout(sync,0);
}

function wireArenaEditorProtection(){
  const editor=document.getElementById('arenaCodeInput');
  const shell=document.getElementById('arenaEditorShell');
  if(!editor||!shell)return;
  if(editor.dataset.arenaGuardsReady)return;
  editor.dataset.arenaGuardsReady='true';
  ['copy','cut','paste','contextmenu','dragstart','drop'].forEach(evt=>editor.addEventListener(evt,ev=>{
    ev.preventDefault();
    arenaSetOutput('<span class="bad">'+txt('A Arena bloqueia copiar/colar para manter o foco da tentativa local.','The Arena blocks copy/paste to keep focus in the local attempt.')+'</span>');
  }));
  editor.addEventListener('select',()=>{
    if(editor.selectionStart!==editor.selectionEnd){
      const pos=editor.selectionEnd;
      requestAnimationFrame(()=>editor.setSelectionRange(pos,pos));
    }
  });
  shell.addEventListener('contextmenu',ev=>ev.preventDefault());
  shell.addEventListener('selectstart',ev=>{
    if(ev.target!==editor) ev.preventDefault();
  });
}
function arenaSetOutput(html){ const output=document.getElementById('arenaOutput'); if(output)output.innerHTML=html; }
function runArenaVisibleExamples(){ if(!arenaSession)return; const code=document.getElementById('arenaCodeInput').value; arenaSetOutput(txt('Rodando exemplos visíveis...','Running visible examples...')); runArenaCode(code,arenaSession.challenge.visible_examples,arenaSession.challenge.function_name).then(result=>{ arenaSetOutput(renderArenaTestOutput(result)); }); }
function renderArenaTestOutput(result){ if(!result.ok)return '<span class="bad"><strong>'+txt('Erro ao executar:','Execution error:')+'</strong> '+arenaEscape(result.error)+'</span>'; return result.results.map((r,idx)=>'<div><span class="'+(r.pass?'ok':'bad')+'">'+(r.pass?'✓':'✕')+'</span> '+txt('Teste','Test')+' '+(idx+1)+': <strong>'+arenaEscape(arenaOutputValue(r.output))+'</strong> '+txt('esperado','expected')+' <strong>'+arenaEscape(arenaOutputValue(r.expected))+'</strong></div>').join('')||txt('Nenhum teste executado.','No tests executed.'); }
function runArenaCode(code,tests,functionName){ return new Promise(resolve=>{ const dangerous=/(importScripts|XMLHttpRequest|fetch\s*\(|postMessage\s*\(|onmessage\s*=|localStorage|sessionStorage|document\.|window\.)/; if(dangerous.test(code)){ resolve({ok:false,error:txt('Use apenas lógica pura dentro da função. A Arena local bloqueia APIs externas.','Use only pure logic inside the function. The local Arena blocks external APIs.')}); return; } const payload={code,tests,functionName}; const workerSource=`self.onmessage=function(event){const payload=event.data;function same(a,b){return JSON.stringify(a)===JSON.stringify(b)}try{const factory=new Function(payload.code+'\\n; return (typeof '+payload.functionName+' === "function") ? '+payload.functionName+' : null;');const fn=factory();if(typeof fn!=='function')throw new Error('Função esperada não encontrada: '+payload.functionName);const results=payload.tests.map(function(test){let output=fn.apply(null,test.input||[]);return{pass:same(output,test.expected_output),output:output,expected:test.expected_output}});self.postMessage({ok:true,results:results});}catch(error){self.postMessage({ok:false,error:error&&error.message?error.message:String(error)});}};`; let settled=false; let worker; try{ const blob=new Blob([workerSource],{type:'application/javascript'}); const url=URL.createObjectURL(blob); worker=new Worker(url); const timeout=setTimeout(()=>{ if(settled)return; settled=true; try{worker.terminate();}catch(e){} URL.revokeObjectURL(url); resolve({ok:false,error:txt('Tempo de execução excedido. Verifique se não existe loop infinito.','Execution timeout. Check for an infinite loop.')}); },1600); worker.onmessage=ev=>{ if(settled)return; settled=true; clearTimeout(timeout); try{worker.terminate();}catch(e){} URL.revokeObjectURL(url); resolve(ev.data); }; worker.onerror=ev=>{ if(settled)return; settled=true; clearTimeout(timeout); try{worker.terminate();}catch(e){} URL.revokeObjectURL(url); resolve({ok:false,error:ev.message||txt('Erro no Worker local.','Local Worker error.')}); }; worker.postMessage(payload); }catch(err){ try{ const factory=new Function(code+'\n; return (typeof '+functionName+' === "function") ? '+functionName+' : null;'); const fn=factory(); if(typeof fn!=='function')throw new Error('Função esperada não encontrada: '+functionName); const results=tests.map(test=>{const output=fn.apply(null,test.input||[]);return{pass:JSON.stringify(output)===JSON.stringify(test.expected_output),output,expected:test.expected_output};}); resolve({ok:true,results}); }catch(error){resolve({ok:false,error:error&&error.message?error.message:String(error)});} } }); }
function submitArenaAttempt(timedOut){ if(!arenaSession||arenaSession.submitted)return; arenaSession.submitted=true; stopArenaTimer(); const code=document.getElementById('arenaCodeInput').value; const challenge=arenaSession.challenge; const elapsed=Math.min(9999,(performance.now()-arenaSession.startedAt)/1000); if(timedOut){ const attempt=buildArenaAttempt(challenge,0,challenge.validation_tests.length,elapsed,0,0,true,arenaSession.trainingMode); if(arenaSession.trainingMode)showArenaResult(attempt,true); else saveArenaAttempt(attempt); return; } arenaSetOutput(txt('Submetendo aos testes de validação local...','Submitting to local validation tests...')); runArenaCode(code,challenge.validation_tests,challenge.function_name).then(result=>{ if(!result.ok){ const attempt=buildArenaAttempt(challenge,0,challenge.validation_tests.length,elapsed,0,0,false,arenaSession.trainingMode,result.error); if(arenaSession.trainingMode)showArenaResult(attempt,true); else saveArenaAttempt(attempt); return; } const passed=result.results.filter(r=>r.pass).length; const total=result.results.length; const calc=arenaCalculateScore(passed,total,elapsed,false); const attempt=buildArenaAttempt(challenge,passed,total,elapsed,calc.score,calc.speedBonus,false,arenaSession.trainingMode,null,result.results); if(arenaSession.trainingMode)showArenaResult(attempt,true); else saveArenaAttempt(attempt); }); }
function buildArenaAttempt(challenge,passed,total,elapsed,score,speedBonus,timedOut,training,error,results){ const precision=total?passed/total:0; return{day_id:challenge.day_id,date:arenaDateKey(),title:arenaChallengeTitle(challenge),tier:challenge.tier,language:challenge.language,score:score||0,speed_bonus:speedBonus||0,rp_gained:training?0:arenaRpForPrecision(precision),elapsed_seconds:Math.round(elapsed||0),passed_tests:passed||0,total_tests:total||0,completed:precision===1,timed_out:!!timedOut,training:!!training,error:error||null,results:results||[]}; }
function saveArenaAttempt(attempt){ const data=loadArenaState(); const today=arenaDateKey(); const oldRp=Number(data.rp||0); data.attempts[today]=attempt; data.history=[attempt].concat(data.history||[]).slice(0,30); data.rp=Math.max(0,(data.rp||0)+(attempt.rp_gained||0)); data.bestScore=Math.max(data.bestScore||0,attempt.score||0); if(data.lastPlayedDate===arenaYesterdayKey())data.streak=(data.streak||0)+1; else if(data.lastPlayedDate!==today)data.streak=1; data.lastPlayedDate=today; saveArenaState(data); renderArenaCard(); showArenaResult(attempt,false); notifyRankUp(oldRp, data.rp||0); }
function showArenaResult(attempt){ stopArenaTimer(); const data=loadArenaState(); const body=document.getElementById('arenaModalBody'); const explanation=arenaChallengeExplanation(getDailyArenaChallenge(attempt.date||arenaDateKey())); body.innerHTML='<div class="arena-result-wrap"><div class="arena-result-byte"><img src="'+BYTE_IMAGE_SRC+'" alt="Byte"></div><div class="arena-result-copy"><div class="arena-modal-eyebrow">'+(attempt.training?txt('resultado do treino','training result'):txt('resultado da arena','arena result'))+'</div><h2>'+(attempt.completed?txt('Mandou bem!','Well done!'):txt('Boa tentativa.','Good attempt.'))+'</h2><div class="arena-score-big">'+(attempt.score||0)+'</div><div class="arena-result-grid"><div class="arena-result-box"><span>'+txt('testes','tests')+'</span><strong>'+attempt.passed_tests+'/'+attempt.total_tests+'</strong></div><div class="arena-result-box"><span>'+txt('tempo','time')+'</span><strong>'+attempt.elapsed_seconds+'s</strong></div><div class="arena-result-box"><span>'+txt('bônus','bonus')+'</span><strong>+'+(attempt.speed_bonus||0)+'</strong></div><div class="arena-result-box"><span>RP</span><strong>+'+(attempt.rp_gained||0)+'</strong></div></div><p>'+(attempt.error?'<span class="bad">'+arenaEscape(attempt.error)+'</span>':arenaEscape(explanation))+'</p><div class="arena-output">'+(attempt.results&&attempt.results.length?renderArenaTestOutput({ok:true,results:attempt.results}):(attempt.timed_out?txt('O tempo acabou antes da submissão.','Time ran out before submission.'):txt('Nenhum teste passou nesta tentativa.','No tests passed in this attempt.')))+'</div><div class="arena-intro-actions"><button type="button" class="arena-main-btn" id="arenaTrainAgainBtn">'+txt('Revisar em modo treino','Review in training mode')+'</button><button type="button" class="arena-ghost-btn" id="arenaBackPanelBtn">'+txt('Voltar ao painel','Back to dashboard')+'</button><button type="button" class="arena-ghost-btn" id="arenaHistoryAfterBtn">'+txt('Histórico','History')+'</button></div><div class="arena-local-note">'+txt('Liga atual:','Current league:')+' '+arenaLeagueBadge(data.rp||0)+' · RP '+(data.rp||0)+' · '+txt('sequência','streak')+' '+(data.streak||0)+'</div></div></div>'; showArenaModal(); document.getElementById('arenaTrainAgainBtn').addEventListener('click',()=>startArenaChallenge(true)); document.getElementById('arenaBackPanelBtn').addEventListener('click',closeArenaModal); document.getElementById('arenaHistoryAfterBtn').addEventListener('click',showArenaHistory); }
function showArenaHistory(){ stopArenaTimer(); const data=loadArenaState(); const body=document.getElementById('arenaModalBody'); const history=(data.history||[]).slice(0,7); body.innerHTML='<div class="arena-intro-copy"><div class="arena-modal-eyebrow">⚔️ '+txt('histórico local','local history')+'</div><h2>'+txt('Sua evolução na Arena','Your Arena progress')+'</h2><p>'+txt('Este histórico existe apenas neste navegador. Use como acompanhamento pessoal até o MyCode ter backend e ranking online.','This history exists only in this browser. Use it as personal tracking until MyCode has a backend and online ranking.')+'</p><div class="arena-result-grid"><div class="arena-result-box"><span>RP</span><strong>'+(data.rp||0)+'</strong></div><div class="arena-result-box"><span>'+txt('liga','league')+'</span>'+arenaLeagueBadge(data.rp||0)+'</div><div class="arena-result-box"><span>'+txt('melhor','best')+'</span><strong>'+(data.bestScore||0)+'</strong></div><div class="arena-result-box"><span>'+txt('sequência','streak')+'</span><strong>'+(data.streak||0)+'</strong></div></div><div class="arena-history-list">'+(history.length?history.map(item=>'<div class="arena-history-item"><span><strong>'+arenaEscape(item.date)+'</strong> · '+arenaEscape(item.title)+'</span><span>'+item.score+' pts · +'+item.rp_gained+' RP</span></div>').join(''):'<div class="arena-history-item"><span>'+txt('Nenhuma arena concluída ainda.','No Arena attempts yet.')+'</span><span>—</span></div>')+'</div><div class="arena-intro-actions"><button type="button" class="arena-main-btn" id="arenaHistoryEnterBtn">'+txt('Ir para Arena de hoje','Go to today\'s Arena')+'</button><button type="button" class="arena-ghost-btn" id="arenaHistoryCloseBtn">'+txt('Fechar','Close')+'</button></div></div>'; showArenaModal(); document.getElementById('arenaHistoryEnterBtn').addEventListener('click',showArenaIntro); document.getElementById('arenaHistoryCloseBtn').addEventListener('click',closeArenaModal); }


/* init */
applyLanguage();
renderTaskGrid();

})();




/* =========================================================
   V41 — ranking mundial visual + topbar contextual segura
   ========================================================= */
const WORLD_RANKING_PLAYERS = [
  {name:'NinaScript', league:'Diamante', score:149, rp:2410},
  {name:'ByteKnight', league:'Diamante', score:147, rp:2360},
  {name:'ArrayMage', league:'Platina', score:143, rp:1985},
  {name:'LoopZero', league:'Platina', score:139, rp:1850},
  {name:'PythonFox', league:'Ouro', score:132, rp:1490},
  {name:'ConsoleKid', league:'Ouro', score:128, rp:1375},
  {name:'DevLua', league:'Ouro', score:121, rp:1290},
  {name:'StackHero', league:'Prata', score:116, rp:980},
  {name:'BugHunter', league:'Prata', score:109, rp:840},
  {name:'JoaoVictor', league:'Bronze', score:102, rp:620},
  {name:'CodeRafa', league:'Bronze', score:98, rp:510},
  {name:'MilaDOM', league:'Bronze', score:92, rp:470},
  {name:'FetchNinja', league:'Bronze', score:87, rp:420},
  {name:'IfMaster', league:'Bronze', score:83, rp:390},
  {name:'ReturnLeo', league:'Bronze', score:76, rp:330}
];
function worldRankingLeagueNameGlobal(league){
  const lang = (document.documentElement.getAttribute('lang') || 'pt').toLowerCase().startsWith('en') ? 'en' : 'pt';
  const map = {Diamante:'Diamond', Platina:'Platinum', Ouro:'Gold', Prata:'Silver', Bronze:'Bronze'};
  return lang === 'en' ? (map[String(league || '')] || String(league || '')) : String(league || '');
}
/* Removed duplicate earlier worldRankingRows during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier renderWorldRankingCard during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier showWorldRankingModal during ES module refactor. Final definition is kept later. */
/* Removed duplicate earlier updateTopbarVisibility during ES module refactor. Final definition is kept later. */
document.addEventListener('click',function(event){
  const rankingBtn=event.target && event.target.closest ? event.target.closest('#openWorldRankingBtn') : null;
  if(rankingBtn){ event.preventDefault(); showWorldRankingModal(); }
});
window.addEventListener('load',()=>{ renderWorldRankingCard(); updateTopbarVisibility(); });
setTimeout(()=>{ renderWorldRankingCard(); updateTopbarVisibility(); },0);



/* =========================================================
   V42 — funções globais seguras para ranking/topbar
   Estas funções ficam fora do IIFE, então não podem depender de
   pagePanel, overlay, txt ou escapeHtml declarados dentro dele.
   ========================================================= */
function __mycodePanelLang(){
  const htmlLang=(document.documentElement.getAttribute('lang')||'pt').toLowerCase();
  if(htmlLang.startsWith('en')) return 'en';
  try{
    for(const key of ['mycode_state_v3','mycode_state','mycode_progress']){
      const raw=localStorage.getItem(key);
      if(!raw) continue;
      const parsed=JSON.parse(raw);
      if(parsed && parsed.language) return parsed.language;
    }
  }catch(error){}
  return 'pt';
}
function __mycodeTxt(pt,en){ return __mycodePanelLang()==='en' ? en : pt; }
function __mycodeStudentName(){
  try{
    const raw = localStorage.getItem('codetrilha_progress_v3');
    if(raw){
      const parsed = JSON.parse(raw);
      const clean = String(parsed && parsed.studentName || '').replace(/\s+/g, ' ').trim().slice(0, 24);
      if(clean) return clean;
    }
  }catch(error){}
  return __mycodeTxt('Aluno', 'Student');
}
function __mycodeEsc(value){
  return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function __mycodeWorldLeague(league){
  const map={Diamante:'Diamond',Platina:'Platinum',Ouro:'Gold',Prata:'Silver',Bronze:'Bronze'};
  return __mycodePanelLang()==='en' ? (map[String(league || '')] || String(league || '')) : String(league || '');
}
function worldRankingRows(limit){
  const players=(typeof WORLD_RANKING_PLAYERS !== 'undefined' && Array.isArray(WORLD_RANKING_PLAYERS)) ? WORLD_RANKING_PLAYERS : [
    {name:'NinaScript', league:'Diamante', score:149, rp:2410},
    {name:'ByteKnight', league:'Diamante', score:147, rp:2360},
    {name:'ArrayMage', league:'Platina', score:143, rp:1985},
    {name:'LoopZero', league:'Platina', score:139, rp:1850},
    {name:'PythonFox', league:'Ouro', score:132, rp:1490},
    {name:'ConsoleKid', league:'Ouro', score:128, rp:1375},
    {name:'DevLua', league:'Ouro', score:121, rp:1290},
    {name:'StackHero', league:'Prata', score:116, rp:980},
    {name:'BugHunter', league:'Prata', score:109, rp:840},
    {name:'JoaoVictor', league:'Bronze', score:102, rp:620}
  ];
  return players.slice(0, limit || players.length).map((item, idx) =>
    '<div class="world-rank-row"><div class="world-rank-pos">#'+(idx+1)+'</div><div><div class="world-rank-name">'+__mycodeEsc(item.name === 'JoaoVictor' ? __mycodeStudentName() : item.name)+'</div><span class="world-rank-meta">'+__mycodeEsc(__mycodeWorldLeague(item.league))+' · '+__mycodeEsc(item.rp)+' RP</span></div><div class="world-rank-score">'+__mycodeEsc(item.score)+' pts</div></div>'
  ).join('');
}
function renderWorldRankingCard(){
  const card=document.getElementById('worldRankingCard');
  if(!card) return;
  const label=card.querySelector('.side-label-clean');
  if(label) label.textContent=__mycodeTxt('ranking mundial','world ranking');
  const title=document.getElementById('worldRankingTitle');
  if(title) title.textContent=__mycodeTxt('Top 10 devs de hoje',"Today's top 10 devs");
  const list=document.getElementById('worldRankingTop10');
  if(list) list.innerHTML=worldRankingRows(10);
  const open=document.getElementById('openWorldRankingBtn');
  if(open){
    const strong=open.querySelector('strong');
    const small=open.querySelector('small');
    if(strong) strong.textContent=__mycodeTxt('Ver ranking completo','View full ranking');
    if(small) small.textContent=__mycodeTxt('classificação geral','full leaderboard');
  }
}
function showWorldRankingModal(){
  let modal=document.getElementById('worldRankingModal');
  if(!modal){
    modal=document.createElement('div');
    modal.id='worldRankingModal';
    modal.className='world-ranking-modal';
    document.body.appendChild(modal);
    modal.addEventListener('click', function(event){
      if(event.target===modal) closeWorldRankingModal();
    });
  }
  modal.innerHTML=
    '<div class="world-ranking-dialog" role="dialog" aria-modal="true">'+
      '<div class="world-ranking-dialog-head">'+
        '<div><div class="arena-modal-eyebrow">✦ '+__mycodeTxt('ranking mundial','world ranking')+'</div>'+
        '<h2>'+__mycodeTxt('Classificação geral da Arena','Arena global leaderboard')+'</h2>'+
        '<p>'+__mycodeTxt('Lista demonstrativa para a versão local do MyCode. Quando houver backend, esta área poderá receber dados reais de usuários online.','Demo list for the local MyCode version. With a backend, this area can receive real online user data.')+'</p></div>'+
        '<button type="button" class="world-ranking-close" id="worldRankingCloseBtn" aria-label="Fechar">×</button>'+
      '</div>'+
      '<div class="arena-ranking-full">'+worldRankingRows(999)+'</div>'+
    '</div>';
  modal.classList.add('show');
  const close=document.getElementById('worldRankingCloseBtn');
  if(close) close.addEventListener('click', closeWorldRankingModal);
  updateTopbarVisibility();
}
function closeWorldRankingModal(){
  const modal=document.getElementById('worldRankingModal');
  if(modal) modal.classList.remove('show');
  updateTopbarVisibility();
}
function updateTopbarVisibility(){
  const pagePanelEl=document.getElementById('pagePanel');
  const overlayEl=document.getElementById('overlay');
  const arenaModalEl=document.getElementById('arenaModal');
  const rankingModalEl=document.getElementById('worldRankingModal');
  const isPanel=!!(pagePanelEl && pagePanelEl.classList.contains('active'));
  const lessonOpen=!!(overlayEl && overlayEl.classList.contains('show'));
  const arenaOpen=!!(arenaModalEl && arenaModalEl.classList.contains('show'));
  const rankingOpen=!!(rankingModalEl && rankingModalEl.classList.contains('show'));
  const shouldShow=isPanel && !lessonOpen && !arenaOpen && !rankingOpen;
  document.body.classList.toggle('panel-dashboard-active', shouldShow);
  const center=document.querySelector('.topbar-center');
  if(center){
    center.style.display=shouldShow ? 'flex' : 'none';
    center.setAttribute('aria-hidden', shouldShow ? 'false' : 'true');
  }
}
document.addEventListener('click', function(event){
  const btn=event.target && event.target.closest ? event.target.closest('#openWorldRankingBtn') : null;
  if(btn){ event.preventDefault(); showWorldRankingModal(); }
});
(function __mycodePanelSafetyBoot(){
  const run=function(){
    try{ renderWorldRankingCard(); }catch(error){ console.warn('ranking render failed', error); }
    try{ updateTopbarVisibility(); }catch(error){ console.warn('topbar sync failed', error); }
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', run); else run();
  window.addEventListener('load', run);
  setTimeout(run, 0);
  setTimeout(run, 250);
  setTimeout(run, 900);
  try{
    const obs=new MutationObserver(run);
    const panel=document.getElementById('pagePanel');
    const overlay=document.getElementById('overlay');
    if(panel) obs.observe(panel,{attributes:true,attributeFilter:['class']});
    if(overlay) obs.observe(overlay,{attributes:true,attributeFilter:['class']});
    document.addEventListener('click',()=>setTimeout(run,0),true);
  }catch(error){}
})();
