import { createHtml } from "./functions.js";

const wrapper = document.getElementById('wrapper');

document.addEventListener('DOMContentLoaded', function () {
    let elId = window.location.href.substring(window.location.href.search('id=') + 3);
    if (elId) {
        fetch(`https://countries-api-v7sn.onrender.com/countries/slug/${elId}`)
            .then(res => res.json())
            .then(data => {
                let block = createHtml(data)
                wrapper.innerHTML = block
            })
    } else {
        window.location.assign('http://127.0.0.1:5500/index.html');
    }
})
