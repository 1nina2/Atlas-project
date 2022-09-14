import Country from "./countriesClass.js";

const init = () => {
    doApi("UK");
    searchEvent();
    searchUSA();
    searchIsrael();
    searchUkraine();
    searchFrance();
    searchThailand();
}

const doApi = (countryName) => {
    let url = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            createCountry(data)
        })
}

const createCountry = (_item) => {
    let country = new Country("#id_parent", _item[0]);
    country.render();
}





const searchEvent = () => {
    let id_search_btn = document.querySelector("#id_search_btn");
    id_search_btn.addEventListener("click", (e) => {
        let id_countryName = document.querySelector("#id_countryName").value;
        doApi(id_countryName);
    });
}

const searchUSA = () => {
    let btn = document.querySelector("#id_usa");
    btn.addEventListener("click", () => {
        doApi(btn.innerHTML);
    });
}

const searchIsrael = () => {
    let btn = document.querySelector("#id_israel");
    btn.addEventListener("click", () => {
        doApi(btn.innerHTML);
    });
}

const searchUkraine = () => {
    let btn = document.querySelector("#id_uk");
    btn.addEventListener("click", () => {
        doApi(btn.innerHTML);
    });
}

const searchFrance = () => {
    let btn = document.querySelector("#id_france");
    btn.addEventListener("click", () => {
        doApi(btn.innerHTML);
    });
}

const searchThailand = () => {
    let btn = document.querySelector("#id_thailand");
    btn.addEventListener("click", () => {
        doApi(btn.innerHTML);
    });
}

init();