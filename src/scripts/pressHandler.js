const pressHandler = (lang, keysArray, event) => {
  event.preventDefault();
  const textArea = document.querySelector('textarea');
  textArea.focus();
  const start = textArea.selectionStart;
  const end = textArea.selectionEnd;
  /* const start = textArea.selectionStart;
  const end = textArea.selectionEnd; */
  const caps = document.querySelector('.CapsLock');
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');
  let isShift = false;
  if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) isShift = true;
  let isCaps = false;
  if (caps.classList.contains('active')) isCaps = true;
  if (event.ctrlKey && event.altKey && event.type === 'keydown') {
    if (lang === 'en') {
      localStorage.setItem('lang', 'ru');
    } else {
      localStorage.setItem('lang', 'en');
    }
  }

  keysArray.forEach((el) => {
    const arr = Array.from(el.children);
    const arrayOfCurrent = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;

    if (event.type === 'keydown' && !el.classList.contains('CapsLock')) {
      if (el.classList.contains(`${event.code}`)) el.classList.add('active');
    }
    if (event.type === 'keyup' && !el.classList.contains('CapsLock')) {
      if (el.classList.contains(`${event.code}`)) el.classList.remove('active');
    }
    if (event.code === 'CapsLock' && el.classList.contains('CapsLock') && !isShift && event.type !== 'keyup') {
      el.classList.toggle('active');
    }
    if ((event.code === 'ShiftLeft')
      && (el.classList.contains('ShiftLeft'))
      && event.type !== 'keyup') {
      el.classList.add('active');
    }
    if ((event.code === 'ShiftRight')
      && (el.classList.contains('ShiftRight'))
      && event.type !== 'keyup') {
      el.classList.add('active');
    }
    // CAPS LOCK
    if (event.code === 'CapsLock' && event.type === 'keydown') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.toggle('hidden');
    }
    // SHIFT
    if (event.shiftKey && event.type === 'keydown') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.remove('hidden');
    }
    if ((event.code === 'ShiftLeft') && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.remove('hidden');
    }
    if ((event.code === 'ShiftRight') && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.remove('hidden');
    }
    // CAPS LOCK + SHIFT
    if (isCaps && event.shiftKey && event.type === 'keydown') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    if (isCaps && event.code === 'ShiftLeft' && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
    }
    if (isCaps && event.code === 'ShiftRight' && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
    }
    //  CTRL + ALT
    if (event.ctrlKey && event.altKey && event.type === 'keydown') {
      const currentLang = arr.filter((elem) => !elem.classList.contains('hidden'))[0];
      const currentLangArr = Array.from(currentLang.children);
      const hiddenLang = arr.filter((elem) => elem.classList.contains('hidden'))[0];
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
    // PRINT
    if (!el.classList.contains('Backspace')
    && !el.classList.contains('Tab')
    && !el.classList.contains('Delete')
    && !el.classList.contains('CapsLock')
    && !el.classList.contains('Enter')
    && !el.classList.contains('ShiftLeft')
    && !el.classList.contains('ShiftRight')
    && !el.classList.contains('ControlLeft')
    && !el.classList.contains('ControlRight')
    && !el.classList.contains('AltLeft')
    && !el.classList.contains('AltRight')
    && !el.classList.contains('MetaLeft')
    && !el.classList.contains('ArrowLeft')
    && !el.classList.contains('ArrowUp')
    && !el.classList.contains('ArrowRight')
    && !el.classList.contains('ArrowDown')
    && el.classList.contains(`${event.code}`)
    && event.type !== 'keyup') {
      const { textContent } = Array.from(arrayOfCurrent).filter((elem) => !elem.classList.contains('hidden'))[0];
      textArea.setRangeText(textContent, start, end, 'end');
    }
  });
  // BACKSPACE
  if (event.code === 'Backspace' && event.type === 'keydown') {
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
  if (event.code === 'Delete' && event.type === 'keydown') {
    if (start === end) {
      textArea.value = textArea.value.slice(0, start) + textArea.value.slice(start + 1);
    }
    if (start !== end) {
      textArea.value = textArea.value.slice(0, start)
      + textArea.value.slice(end, textArea.value.length);
    }
    textArea.selectionStart = start;
    textArea.selectionEnd = start;
  }
  // ENTER
  if (event.code === 'Enter' && event.type === 'keydown') {
    textArea.setRangeText('\n', start, end, 'end');
  }
  // TAB
  if (event.code === 'Tab' && event.type === 'keydown') {
    textArea.setRangeText('\t', start, end, 'end');
  }
  // MOOVING CURSOR
  if (start > 0 && event.code === 'ArrowLeft' && event.type === 'keydown') {
    textArea.selectionStart = start - 1;
    textArea.selectionEnd = start - 1;
  }
  if (event.code === 'ArrowRight' && event.type === 'keydown') {
    textArea.selectionStart = start + 1;
    textArea.selectionEnd = start + 1;
  }
  // SELECTION WITH ARROWS
  if (start > 0 && isShift && event.code === 'ArrowLeft' && event.type === 'keydown') {
    textArea.selectionStart = start - 1;
    textArea.selectionEnd = end;
  }
  if (isShift && event.code === 'ArrowRight' && event.type === 'keydown') {
    textArea.selectionStart = start;
    textArea.selectionEnd = end + 1;
  }
};

export default pressHandler;
