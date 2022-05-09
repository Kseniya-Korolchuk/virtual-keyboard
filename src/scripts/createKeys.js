import keys from './keys.js';

const createKeys = (lang) => {
  const keyItemsArray = [];

  Object.entries(keys).forEach((key) => {
    const keyItemEn = document.createElement('span');
    const keyItemRu = document.createElement('span');
    const keyItem = document.createElement('div');
    keyItem.classList.add('key', `${key[0]}`);

    if (lang === 'en') {
      keyItemRu.classList.add('ru', 'hidden');
      keyItemEn.classList.add('en');
    } else {
      keyItemRu.classList.add('ru');
      keyItemEn.classList.add('en', 'hidden');
    }

    Object.entries(key[1]).forEach((el) => {
      Object.entries(el[1]).forEach((prop) => {
        const span = document.createElement('span');
        span.innerHTML = `${prop[1]}`;
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

    if (lang === 'en') {
      keyItemRu.childNodes.forEach((el) => el.classList.add('hidden'));
    } else {
      keyItemEn.childNodes.forEach((el) => el.classList.add('hidden'));
    }

    keyItem.append(keyItemRu, keyItemEn);
    keyItemsArray.push(keyItem);
  });

  return keyItemsArray;
};

export default createKeys;
