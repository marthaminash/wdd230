const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

async function getProphets(){
    let response = await fetch(requestURL)
    if(response.ok){
        let data = await response.json();
        buildPhrophetCards(data)
    } else {
        throw Error(response.status);
    }
}

function buildPhrophetCards(data){
    data.prophets.forEach(prophet => {
        let card = document.createElement('section')
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let firstParagraph = document.createElement('p');
        let secondParagraph = document.createElement('p');

        h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
        firstParagraph.innerHTML = `Date of birth: ${prophet.birthdate}`;
        secondParagraph.innerHTML = `Place of birth: ${prophet.birthplace}`;
        img.setAttribute('src', `${prophet.imageurl}`);
        img.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
        img.setAttribute('width', '200');
        img.setAttribute('loading', 'lazy')

        card.appendChild(h2);
        card.appendChild(firstParagraph);
        card.appendChild(secondParagraph);
        card.appendChild(img);
        
        cards.appendChild(card);
    })
}

getProphets()