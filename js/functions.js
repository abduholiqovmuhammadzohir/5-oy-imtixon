function createHtml(world) {
    return `
    <div class="header">
        <img src=${world.flags.svg} width="560" height="401">
        <div class="medium">
            <div>
                <h1>${world.name.common}</h1>
                <p><span>Native Name:</span>${world.name.nativeName}</p>
                <p><span>Population:</span>${world.population}</p>
                <p><span>Region:</span>${world.region}</p>
                <p><span>Sub Region:</span>${world.subregion}</p>
                <p><span>Capital:</span>${world.capital}</p>
            </div>
            <div class = "mediums">
                <p><span>Top Level Domain:</span> ${world.cioc}</p>
                <p><span>Currencies:</span>${world.currencies}</p>
                <p><span>Languages: </span>${world.languages}</p>
            </div>
        </div>
    </div>
    `
}

function createCard(world) {
    return `
        <div id = "item" class="card"  style="width: 19rem;" data-id = "element_${world.name.slug}">
            <img src=${world.flags.svg} class="card-img-top shunca" width="303" height="160" alt="...">
            <div class="card-body"> 
                <h3 class="card-title">${world.name.common}</h3>
                <p class="card-text">Population:${world.population}</p>
                <p class="card-text">Region:${world.region}</p>
                <p class="card-text">Capital: ${world.capital}</p>
            </div>
        </div>
    `
}

export {createHtml,createCard}