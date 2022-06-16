const requestURL = './directory.json';
const cards = document.querySelector('.cards');
console.log(requestURL)

async function getCompanies(){
    let response = await fetch(requestURL)
    if(response.ok){
        let data = await response.json();
        buildCompanyCards(data)
    } else {
        throw Error(response.status);
    }
}

function buildCompanyCards(data){
    data.companies.forEach(company => {
        let card = document.createElement('section')
        let h2 = document.createElement('h2');
        let img = document.createElement('img');
        let firstParagraph = document.createElement('p');
        let secondParagraph = document.createElement('p');

        h2.innerHTML = `${company.name}`;
        firstParagraph.innerHTML = `Address: ${company.address}`;
        secondParagraph.innerHTML = `Phone number: ${company.phonenumber}`;
        img.setAttribute('src', `${company.logo}`);
        img.setAttribute('alt', `${company.name}`);
        img.setAttribute('width', '100');
        img.setAttribute('loading', 'lazy')

        card.appendChild(h2);
        card.appendChild(firstParagraph);
        card.appendChild(secondParagraph);
        card.appendChild(img);
        
        cards.appendChild(card);
    })
}

getCompanies()