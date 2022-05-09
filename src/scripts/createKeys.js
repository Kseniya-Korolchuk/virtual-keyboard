import keys from './keys.js';

const createKeys = () => {
  const keyItemsArray = [];

  Object.entries(keys).forEach((key) => {
    const keyItem = document.createElement('div');
    keyItem.classList.add('key', `${key[0]}`);

    const keyItemRu = document.createElement('span');
    keyItemRu.classList.add('ru', 'hidden');

    const keyItemEn = document.createElement('span');
    keyItemEn.classList.add('en');

    Object.entries(key[1]).forEach((el) => {
      Object.entries(el[1]).forEach((prop) => {
        const span = document.createElement('span');
        // eslint-disable-next-line prefer-destructuring
        span.innerHTML = prop[1];
        if (prop[0] === 'lowerCase') {
          span.classList.add(`${prop[0]}`);
        } else {
          span.classList.add(`${prop[0]}`, 'hidden');
        }
        if (el[0] === 'ru') {
          keyItemRu.append(span);
        } else {
          keyItemEn.append(span);
        }
      });
    });

    keyItemRu.childNodes.forEach((el) => el.classList.add('hidden'));

    keyItem.append(keyItemRu, keyItemEn);
    keyItemsArray.push(keyItem);
  });

  return keyItemsArray;
};

export default createKeys;
