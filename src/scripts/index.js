import initKeyboard from './initKeyboard.js';
import pressHandler from './pressHandler.js';
import createKeys from './createKeys.js';

const lang = localStorage.getItem('lang') || 'en';
const fullArrayOfKeys = createKeys(lang);

window.addEventListener('DOMContentLoaded', initKeyboard(lang, fullArrayOfKeys));

window.addEventListener('keydown', pressHandler.bind(null, lang, fullArrayOfKeys));
window.addEventListener('keyup', pressHandler.bind(null, lang, fullArrayOfKeys));
