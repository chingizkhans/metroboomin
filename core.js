// Создаем элементы и устанавливаем им атрибуты и содержимое
const body = document.createElement('body');

const divTxt = document.createElement('div');
divTxt.className = 'txt';

const h2 = document.createElement('h2');
h2.textContent = 'What Clients Say';

const p = document.createElement('p');
p.textContent = 'Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics';

divTxt.appendChild(h2);
divTxt.appendChild(p);

const divCards = document.createElement('div');
divCards.className = 'cards';

const card1 = document.createElement('div');
card1.className = 'card_1';

const h3Card1 = document.createElement('h3');
h3Card1.textContent = 'Regina Miles';

const h6Card1 = document.createElement('h6');
h6Card1.textContent = 'Designer';

const starsCard1 = document.createElement('div');
starsCard1.className = 'stars';
for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.src = './img/icn bxs-star.png';
    star.alt = '';
    starsCard1.appendChild(star);
}

const textCard1 = document.createTextNode('This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.');

card1.appendChild(h3Card1);
card1.appendChild(h6Card1);
card1.appendChild(starsCard1);
card1.appendChild(textCard1);

const card2 = document.createElement('div');
card2.className = 'card_2';

const h3Card2 = document.createElement('h3');
h3Card2.textContent = 'Regina Miles';

const h6Card2 = document.createElement('h6');
h6Card2.textContent = 'Designer';

const starsCard2 = document.createElement('div');
starsCard2.className = 'stars';
for (let i = 0; i < 5; i++) {
    const star = document.createElement('img');
    star.src = './img/icn bxs-star.png';
    star.alt = '';
    starsCard2.appendChild(star);
}

const textCard2 = document.createTextNode('This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space. This proved to be impossible using the traditional concepts of space and time. Einstein developed a new view of time first and then space.');

card2.appendChild(h3Card2);
card2.appendChild(h6Card2);
card2.appendChild(starsCard2);
card2.appendChild(textCard2);

divCards.appendChild(card1);
divCards.appendChild(card2);

// Добавляем созданные элементы в body
body.appendChild(divTxt);
body.appendChild(divCards);

// Добавляем body в документ
document.documentElement.appendChild(body);
