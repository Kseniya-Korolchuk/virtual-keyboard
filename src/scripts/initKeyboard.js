import clickHandler from './clickHandler.js';

const initKeyboard = (lang, keysArray) => {
  const doc = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.setAttribute('cols', '30');
  textArea.setAttribute('rows', '10');
  textArea.setAttribute('autofocus', 'autofocus');

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');

  const info = document.createElement('div');
  info.classList.add('info');
  info.innerHTML = 'Клавиатура создана для WIN OS <br> Для смены раскладки используйте левые CTRL + ALT';

  const row1 = document.createElement('div');
  const row2 = document.createElement('div');
  const row3 = document.createElement('div');
  const row4 = document.createElement('div');
  const row5 = document.createElement('div');
  const rowArr = [row1, row2, row3, row4, row5];
  rowArr.forEach((el) => {
    el.classList.add('row');
  });

  for (let i = 0; i < keysArray.length; i += 1) {
    keysArray[i].addEventListener('mousedown', clickHandler.bind(null, lang, keysArray));
    keysArray[i].addEventListener('mouseup', clickHandler.bind(null, lang, keysArray));
    keysArray[i].addEventListener('mouseout', () => {
      if (!keysArray[i].classList.contains('CapsLock')
      && !keysArray[i].classList.contains('ShiftLeft')
      && !keysArray[i].classList.contains('ShiftRight')
      && !keysArray[i].classList.contains('ControlLeft')
      && !keysArray[i].classList.contains('AltLeft')) {
        keysArray[i].classList.remove('active');
      }
    });
  }

  for (let i = 0; i < keysArray.length; i += 1) {
    if (i < 14) row1.append(keysArray[i]);
    if (i >= 14 && i < 29) row2.append(keysArray[i]);
    if (i >= 29 && i < 42) row3.append(keysArray[i]);
    if (i >= 42 && i < 56) row4.append(keysArray[i]);
    if (i >= 56) row5.append(keysArray[i]);
  }

  doc.append(wrapper);
  wrapper.append(textArea, keyboardWrapper, info);
  keyboardWrapper.append(...rowArr);
};

export default initKeyboard;
