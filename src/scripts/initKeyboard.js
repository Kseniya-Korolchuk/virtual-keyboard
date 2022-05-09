import createKeys from './createKeys.js';
import clickHandler from './clickHandler.js';

const keysArray = createKeys();

const initKeyboard = () => {
  const doc = document.querySelector('body');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const textArea = document.createElement('textarea');
  textArea.classList.add('textarea');
  textArea.setAttribute('cols', '30');
  textArea.setAttribute('rows', '10');

  const keyboardWrapper = document.createElement('div');
  keyboardWrapper.classList.add('keyboard-wrapper');

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
    keysArray[i].addEventListener('mousedown', clickHandler);
    keysArray[i].addEventListener('mouseup', clickHandler);
    keysArray[i].addEventListener('mouseout', () => {
      if (!keysArray[i].classList.contains('CapsLock')
      && !keysArray[i].classList.contains('ShiftLeft')
      && !keysArray[i].classList.contains('ShiftRight')) {
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
  wrapper.append(textArea, keyboardWrapper);
  keyboardWrapper.append(...rowArr);
};

export { keysArray, initKeyboard };
