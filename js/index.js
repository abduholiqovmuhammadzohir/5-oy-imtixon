import { createCard } from "./functions.js";

const wrapper = document.getElementById('wrapper');
const search = document.getElementById('search')
const select = document.getElementById('select')
const item = document.getElementById('item')
const bodys = document.querySelector(".bodys")
const loader = document.querySelector(".loader")

bodys.style.display= "none";

function loaderReflection() {
loader.style.display= "none";
bodys.style.display= "block";
}


document.addEventListener("DOMContentLoaded", function ()  {
    fetch('https://countries-api-v7sn.onrender.com/countries?limit=250', {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            if (data.data.length) {
                data.data.forEach(world => {
                    let card = createCard(world)
                    wrapper.innerHTML += card
                });
                loaderReflection()
                let moreButtons = document.querySelectorAll('div.card')
                moreButtons.length && moreButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        let elId = this.getAttribute('data-id').substring(8);
                        console.log(elId);
                        if (elId) {
                            window.location.assign(`http://127.0.0.1:5500/pages/item.html?id=${elId}`)
                        }
                    })
                })
            }
        })
      
        .catch(err => {
            console.log(err);
        })
});

search && search.addEventListener('keyup', function () {
    let value = search.value;
    fetch(`https://countries-api-v7sn.onrender.com/countries?search=${value}`)
        .then(data => data.json())
        .then(data => {
            wrapper.innerHTML = ''
            data.data.forEach(element => {
                let card = createCard(element)
                wrapper.innerHTML += card
            });
            let moreButtons = document.querySelectorAll('div.card')
                moreButtons.length && moreButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        let elId = this.getAttribute('data-id').substring(8);
                        if (elId) {
                            window.location.assign(`http://127.0.0.1:5500/pages/item.html?id=${elId}`)
                        }
                    })
                })
        })
        .catch(err => {
            console.log(err);
        });
});


select && select.addEventListener('change', function () {
    let value = select.value;
    fetch(`https://countries-api-v7sn.onrender.com/countries?region=${value}`)
        .then(data => data.json())
        .then(data => {
            wrapper.innerHTML = ''
            data.data.forEach(element => {
                let card = createCard(element)
                wrapper.innerHTML += card
            });
            let moreButtons = document.querySelectorAll('div.card')
                moreButtons.length && moreButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        let elId = this.getAttribute('data-id').substring(8);
                        if (elId) {
                            window.location.assign(`http://127.0.0.1:5500/pages/item.html?id=${elId}`)
                        }
                    })
                })
        })
        .catch(err => {
            console.log(err);
        });
});
