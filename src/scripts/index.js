import { initKeyboard } from './initKeyboard.js';
import pressHandler from './pressHandler.js';

window.addEventListener('DOMContentLoaded', initKeyboard());

window.addEventListener('keydown', pressHandler);
window.addEventListener('keyup', pressHandler);
