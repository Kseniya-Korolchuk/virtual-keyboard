// eslint-disable-next-line import/no-cycle
import { keysArray } from './initKeyboard.js';

const clickHandler = (event) => {
  const textArea = document.querySelector('textarea');
  const capsLock = document.querySelector('.CapsLock');
  const shiftLeft = document.querySelector('.ShiftLeft');
  const shiftRight = document.querySelector('.ShiftRight');
  const arr = Array.from(event.currentTarget.children);
  const arrayOfCurrent = arr.filter((elem) => !elem.classList.contains('hidden'))[0].children;
  let isCaps = false;
  let isShift = false;
  if (capsLock.classList.contains('active')) isCaps = true;
  if (shiftLeft.classList.contains('active') || shiftRight.classList.contains('active')) isShift = true;

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
    && !event.currentTarget.classList.contains('ShiftRight')) {
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
    // CAPS LOCK
    if (isShift === false && event.currentTarget.classList.contains('CapsLock') && event.type !== 'mouseup') {
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.toggle('hidden');
    }
    // SHIFT LEFT
    if (event.currentTarget.classList.contains('ShiftLeft')
      && !shiftRight.classList.contains('active')
      && event.type !== 'mouseup') {
      /*  Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden'); */
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('lowerCase'))[0].classList.toggle('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('upperCase'))[0].classList.toggle('hidden');
    }
    // SHIFT RIGHT
    if (event.currentTarget.classList.contains('ShiftRight')
      && !shiftLeft.classList.contains('active')
      && event.type !== 'mouseup') {
      /*  Array.from(currentKeyArr).filter((elem) => elem.classList.contains('shiftCaps'))[0].classList.add('hidden');
      Array.from(currentKeyArr).filter((elem) => elem.classList.contains('caps'))[0].classList.add('hidden'); */
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
  });
  if (!event.currentTarget.classList.contains('Backspase')
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
    textArea.value += textContent;
  }
};

export default clickHandler;
