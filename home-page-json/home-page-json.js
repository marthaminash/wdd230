const cards = document.querySelector('.cards');
const cardTwo = document.querySelector('.cardTwo');
const cardThree = document.querySelector('.cardThree');

fetch("./home-page.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject["companies"];
        companies.forEach(displayGold);
        companies.forEach(displaySilver);
        companies.forEach(displayBronze);
    });


    function displayGold(company) {
        //Create elements to add to the document
        if (company.homePage == "Gold"){
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let membership = document.createElement("p");
            let logoPicture = document.createElement("img");
    
    
        //Change the textContent property of the h2 element to contain the prophet's full name
        
            h2.textContent = `${company.name}`;
    
        //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            logoPicture.setAttribute("src", company.logo);
            logoPicture.setAttribute("alt",`${company.name} logo`);
            logoPicture.setAttribute("width", "200")
            logoPicture.setAttribute("loading", "lazy");

    
            card.appendChild(h2);
            card.appendChild(membership);
            card.appendChild(logoPicture);
    
        // Add/apend the existing HTML div with the cards class with the section(card)
            document.querySelector("div.cards").appendChild(card);
        }
    
    }

    function displaySilver(company) {
        //Create elements to add to the document
        if (company.homePage == "Silver"){
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let membership = document.createElement("p");
            let logoPicture = document.createElement("img");
    
        //Change the textContent property of the h2 element to contain the prophet's full name
        
            h2.textContent = `${company.name}`;
    
        //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            logoPicture.setAttribute("src", company.logo);
            logoPicture.setAttribute("alt",`${company.name} logo`);
            logoPicture.setAttribute("width", "200")
            logoPicture.setAttribute("loading", "lazy");
    
            card.appendChild(h2);
            card.appendChild(membership);
            card.appendChild(logoPicture);
    
        // Add/apend the existing HTML div with the cards class with the section(card)
            document.querySelector("div.cardTwo").appendChild(card);
        }
    
    }

    function displayBronze(company) {
        //Create elements to add to the document
        if (company.homePage == "Bronze"){
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let membership = document.createElement("p");
            let logoPicture = document.createElement("img");
    
        //Change the textContent property of the h2 element to contain the prophet's full name
        
            h2.textContent = `${company.name}`;
    
        //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
            logoPicture.setAttribute("src", company.logo);
            logoPicture.setAttribute("alt",`${company.name} logo`);
            logoPicture.setAttribute("width", "200")
            logoPicture.setAttribute("loading", "lazy");
    
            card.appendChild(h2);
            card.appendChild(membership);
            card.appendChild(logoPicture);
    
        // Add/apend the existing HTML div with the cards class with the section(card)
            document.querySelector("div.cardThree").appendChild(card);
        }
    
    }