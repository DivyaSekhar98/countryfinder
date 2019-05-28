document.addEventListener('DOMContentLoaded', () => {
    const countryInput = document.querySelector('.country-input'),
        submitBtn = document.querySelector('.search-button');
    // Adding click listener to the search button 
    submitBtn.addEventListener('click', () => {
        let countryName = countryInput.value;
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`
        return getAllDetails(countryName, url)
            .then(res => res.json())
            .then(res => {
                displayCountryCard(res)
            })
            .catch(er => {
                console.log(er)
            })
    })
    // This method fetches and returns all the details of the coubtries that are fitered using the country name
    const getAllDetails = (countryName, url) => {
        return fetch(url)
    }
    // This displays all the results as cards that displays flag and country name
    const displayCountryCard = (details) => {
        let resultNumber = document.getElementById('resultsNumber')
        countryCards = document.querySelector('.country-cards');
        countryCards.innerHTML = ''
        resultNumber.textContent = details.length.toString();

        let cardTemplate = ''
        details.forEach(detail => {
            cardTemplate += `
                <div class='card'
                    <div class='flag-card'>
                        <img src=${detail.flag} class='flag'>
                        <div class='country-name'>
                            ${detail.name} 
                        </div> 
                    </div>
                </div>
            `
        })
        countryCards.innerHTML += cardTemplate
    }
})