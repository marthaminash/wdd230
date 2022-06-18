
const cards = document.querySelector('.cards');

fetch("./directory.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const companies = jsonObject["companies"];
        companies.forEach(displayCompanies);
    });


    function displayCompanies(company) {
        //Create elements to add to the document
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let membership = document.createElement("p");
        let logoPicture = document.createElement("img");
    
        //Change the textContent property of the h2 element to contain the prophet's full name
        
        h2.textContent = `${company.name}`;
        address.innerHTML = `Address: ${company.address}`;
        phone.innerHTML = `Phone number: ${company.phonenumber}`;
        membership.innerHTML = `Membership: ${company.membershipLevel}`;
    
    
    
        //Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        logoPicture.setAttribute("src", company.logo);
        logoPicture.setAttribute("alt",`${company.name} logo`);
        logoPicture.setAttribute("width", "150")
        logoPicture.setAttribute("loading", "lazy");
    
        card.appendChild(h2);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(logoPicture);
    
        // Add/apend the existing HTML div with the cards class with the section(card)
        document.querySelector("div.cards").appendChild(card);
    }
    


