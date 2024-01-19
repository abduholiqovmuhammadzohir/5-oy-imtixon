import { createCard } from "./functions.js";

const wrapper = document.getElementById('wrapper');
const search = document.getElementById('search')
const select = document.getElementById('select')
const item = document.getElementById('item')


document.addEventListener("DOMContentLoaded", function () {
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
                let moreButtons = document.querySelectorAll('div#item')
                moreButtons.length && moreButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        let elId = this.getAttribute('id').substring(8);
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
})

button && button.addEventListener("click", function (e) {

    e.preventDefault();

    fetch('https://countries-api-v7sn.onrender.com/countries?limit=250', {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {

            let filterData = data.data

            let filter = {};

            if (search.value) {
                filter.search = search.value;
            }
            if (select.value) {
                filter.select = select.value;
            }

            if (filter.search) {
                filterData = filterData.filter(el => {
                    return el.search == filter.search
                })
            }

            if (filter.select) {
                filterData = filterData.filter(el => {
                    return el.select == filter.select
                })
            }

            if (filter.search) {
                filterData = filterData.filter(el => {
                    if (el.name.includes(filter.search)) {
                        return el.name.includes(filter.search) == true
                    }
                })
            }

            wrapper.innerHTML = '';
            if (filterData.length) {
                filterData.forEach(world => {
                    let card = createCard(world);
                    wrapper.innerHTML += card;
                })
            } else {
                wrapper.innerHTML = "Bunday mahsulot mavjud emas"
            }

            form.reset();

        })
        .catch(err => {
            console.log(err);
        })

})

  