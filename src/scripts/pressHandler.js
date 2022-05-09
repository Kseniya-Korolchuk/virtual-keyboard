import { keysArray } from './initKeyboard.js';

const pressHandler = (event) => {
  event.preventDefault();
  const textArea = document.querySelector('textarea');
  const caps = document.querySelector('.CapsLock');

  keysArray.forEach((el) => {
    const arr = Array.from(el.children);
    const arrayOfCurrent = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;

    if (event.type === 'keydown' && !el.classList.contains('CapsLock')) {
      if (el.classList.contains(`${event.code}`)) el.classList.add('active');
    }
    if (event.type === 'keyup' && !el.classList.contains('CapsLock')) {
      if (el.classList.contains(`${event.code}`)) el.classList.remove('active');
    }
    if (event.code === 'CapsLock' && el.classList.contains('CapsLock') && event.type !== 'keyup') {
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
    if (event.code === 'CapsLock' && event.type === 'keydown') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.toggle('hidden');
    }
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
    if (caps.classList.contains('active') && event.shiftKey && event.type === 'keydown') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
    }
    if (caps.classList.contains('active') && event.code === 'ShiftLeft' && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
    }
    if (caps.classList.contains('active') && event.code === 'ShiftRight' && event.type === 'keyup') {
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('caps'))[0].classList.remove('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('upperCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.add('hidden');
      Array.from(arrayOfCurrent).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
    }
    if (!el.classList.contains('Backspase')
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
      textArea.value += textContent;
    }
  });
};

export default pressHandler;
