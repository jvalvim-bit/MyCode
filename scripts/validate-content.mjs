import { TASKS_PT } from '../src/content/tasks.pt.js';
import { TASKS_EN } from '../src/content/tasks.en.js';
import { EXTRA_QUESTION_BANK_PT } from '../src/content/extraQuestions.pt.js';
import { EXTRA_QUESTION_BANK_EN } from '../src/content/extraQuestions.en.js';

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(Array.isArray(TASKS_PT) && TASKS_PT.length > 0, 'TASKS_PT is empty');
assert(Array.isArray(TASKS_EN) && TASKS_EN.length === TASKS_PT.length, 'TASKS_EN length mismatch');
assert(Object.keys(EXTRA_QUESTION_BANK_PT).length > 0, 'EXTRA_QUESTION_BANK_PT is empty');
assert(Object.keys(EXTRA_QUESTION_BANK_EN).length > 0, 'EXTRA_QUESTION_BANK_EN is empty');

const modulesPt = new Set(TASKS_PT.map((task) => task.module));
const modulesEn = new Set(TASKS_EN.map((task) => task.module));
console.log(`Validated ${TASKS_PT.length} PT tasks, ${TASKS_EN.length} EN tasks, ${modulesPt.size}/${modulesEn.size} modules.`);
