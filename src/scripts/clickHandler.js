const clickHandler = (lang, keysArray, event) => {
  const textArea = document.querySelector('textarea');
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  const capsLock = document.querySelector('.CapsLock');
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');
  const ctrl = document.querySelector('.ControlLeft');
  const arr = Array.from(event.currentTarget.children);
  const arrayOfCurrent = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;
  let isCaps = false;
  let isShift = false;
  let isCtrl = false;
  if (capsLock.classList.contains('active')) isCaps = true;
  if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) isShift = true;
  if (ctrl.classList.contains('active')) isCtrl = true;
  if (isCtrl && event.currentTarget.classList.contains('AltLeft') && event.type === 'mousedown') {
    if (lang === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
  }

  keysArray.forEach((el) => {
    const keyArr = Array.from(el.children);
    const currentKeyArr = keyArr.filter((elem) => !elem.classList.contains('hidden'))[0].children;

    if (event.type === 'mousedown'
    && !event.currentTarget.classList.contains('CapsLock')
    && !event.currentTarget.classList.contains('ShiftLeft')
    && !event.currentTarget.classList.contains('ShiftRight')) {
      event.currentTarget.classList.add('active');
    }
    if (event.type === 'mouseup'
    && !event.currentTarget.classList.contains('CapsLock')
    && !event.currentTarget.classList.contains('ShiftLeft')
    && !event.currentTarget.classList.contains('ShiftRight')
    && !event.currentTarget.classList.contains('ControlLeft')
    && !event.currentTarget.classList.contains('AltLeft')) {
      event.currentTarget.classList.remove('active');
    }
    if (isShift === false && event.currentTarget.classList.contains('CapsLock') && event.type !== 'mouseup') {
      event.currentTarget.classList.toggle('active');
    }
    if (event.currentTarget.classList.contains('ShiftLeft')
      && !shiftRight.classList.contains('active')
      && event.type !== 'mouseup') {
      event.currentTarget.classList.toggle('active');
    }
    if (event.currentTarget.classList.contains('ShiftRight')
    && !shiftLeft.classList.contains('active')
    && event.type !== 'mouseup') {
      event.currentTarget.classList.toggle('active');
    }
    if (event.currentTarget.classList.contains('AltLeft') && event.type === 'mouseup') {
      event.currentTarget.classList.remove('active');
      ctrl.classList.remove('active');
    }
    // CAPS LOCK
    if (isShift === false && event.currentTarget.classList.contains('CapsLock') && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.toggle('hidden');
    }
    // SHIFT LEFT
    if (event.currentTarget.classList.contains('ShiftLeft')
      && !shiftRight.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.toggle('hidden');
    }
    // SHIFT RIGHT
    if (event.currentTarget.classList.contains('ShiftRight')
      && !shiftLeft.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.toggle('hidden');
    }
    // CAPS LOCK + SHIFT LEFT
    if (isCaps === true
      && event.currentTarget.classList.contains('ShiftLeft')
      && !shiftRight.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.remove('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    if (isCaps === true
      && isShift === true
      && event.currentTarget.classList.contains('ShiftLeft')
      && !shiftRight.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    // CAPS LOCK + SHIFT RIGHT
    if (isCaps === true
      && event.currentTarget.classList.contains('ShiftRight')
      && !shiftLeft.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.remove('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    if (isCaps === true
      && isShift === true
      && event.currentTarget.classList.contains('ShiftRight')
      && !shiftLeft.classList.contains('active')
      && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    // CTRL + ALT
    if (ctrl.classList.contains('active')
      && event.currentTarget.classList.contains('AltLeft')
      && event.type === 'mousedown') {
      const currentLang = keyArr.filter((elem) => !elem.classList.contains('hidden'))[0];
      const currentLangArr = Array.from(currentLang.children);
      const hiddenLang = keyArr.filter((elem) => elem.classList.contains('hidden'))[0];
      const hiddenLangArr = Array.from(hiddenLang.children);
      currentLang.classList.add('hidden');
      currentLangArr.forEach((elem) => elem.classList.add('hidden'));
      hiddenLang.classList.remove('hidden');
      hiddenLangArr.forEach((elem) => {
        if (isCaps) {
          if (elem.classList.contains('caps')) elem.classList.remove('hidden');
        }
        if (!isCaps) {
          if (elem.classList.contains('lowerCase')) elem.classList.remove('hidden');
        }
      });
    }
  });
  // PRINT
  if (!event.currentTarget.classList.contains('Backspace')
    && !event.currentTarget.classList.contains('Tab')
    && !event.currentTarget.classList.contains('Delete')
    && !event.currentTarget.classList.contains('CapsLock')
    && !event.currentTarget.classList.contains('Enter')
    && !event.currentTarget.classList.contains('ShiftLeft')
    && !event.currentTarget.classList.contains('ShiftRight')
    && !event.currentTarget.classList.contains('ControlLeft')
    && !event.currentTarget.classList.contains('ControlRight')
    && !event.currentTarget.classList.contains('AltLeft')
    && !event.currentTarget.classList.contains('AltRight')
    && !event.currentTarget.classList.contains('MetaLeft')
    && !event.currentTarget.classList.contains('ArrowLeft')
    && !event.currentTarget.classList.contains('ArrowUp')
    && !event.currentTarget.classList.contains('ArrowRight')
    && !event.currentTarget.classList.contains('ArrowDown')
    && event.type !== 'mouseup') {
    const { textContent } = Array.from(arrayOfCurrent).filter((elem) => !elem.classList.contains('hidden'))[0];
    textArea.setRangeText(textContent, start, end, 'end');
  }
  // BACKSPACE
  if (event.currentTarget.classList.contains('Backspace') && event.type === 'mousedown') {
    if (start > 0 && start === end) {
      textArea.value = textArea.value.slice(0, start - 1) + textArea.value.slice(start);
      textArea.selectionStart = start - 1;
      textArea.selectionEnd = start - 1;
    }
    if (start !== end) {
      textArea.value = textArea.value.slice(0, start) + textArea.value.slice(end);
      textArea.selectionStart = start;
      textArea.selectionEnd = start;
    }
  }
  // DELETE
  if (event.currentTarget.classList.contains('Delete') && event.type === 'mousedown') {
    if (start === end) {
      textArea.value = textArea.value.slice(0, start)
        + textArea.value.slice(start + 1, textArea.value.length);
    }
    if (start !== end) {
      textArea.value = textArea.value.slice(0, start) + textArea.value.slice(end);
    }
    textArea.selectionStart = start;
    textArea.selectionEnd = start;
  }
  // ENTER
  if (event.currentTarget.classList.contains('Enter') && event.type === 'mousedown') {
    textArea.value += '\n';
  }
  // TAB
  if (event.currentTarget.classList.contains('Tab') && event.type === 'mousedown') {
    textArea.value += '\t';
  }
};

export default clickHandler;
