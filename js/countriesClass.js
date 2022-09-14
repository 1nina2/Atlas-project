export default class Country {
    constructor(_parent, _item) {
        this.parent = _parent;
        this.name = _item.name.common;
        this.region = _item.region;
        this.population = _item.population;
        this.languages = _item.languages;
        this.languages = Object.values(_item.languages);
        this.coins = Object.keys(_item.currencies);
        this.borders = _item.borders;
        this.capital = _item.capital;
        this.flag = _item.flags.svg;
        this.lat = _item.latlng[0];
        this.lng = _item.latlng[1];
    }

    render() {
        let bordersStr = " ";

        this.borders.forEach(element => {
            bordersStr = bordersStr + element + ", ";
        });
        bordersStr = bordersStr.slice(0, -2);


        document.querySelector(this.parent).innerHTML = "";
        let div = document.createElement("div");
        div.className = " mt-3 d-flex col-lg-6 ";
        document.querySelector(this.parent).append(div);
        div.innerHTML = ` 
       
        <img  class="w-50" src="${ this.flag }"  alt="flag" >
        
        <div class="ps-3 col-md-6  ">
            <h3>${this.name} </h3>
            <div>Population:  ${this.population}</div>
            <div>Region:  ${ this.region}</div>
            <div>Languages: ${ this.languages}</div>
            <div>Coin:  ${this.coins}</div>
            <div>Capital:  ${ this.capital } </div>
            <div>Borders: ${bordersStr} </div>

        <div> `;

        let mapDiv = document.createElement("div");
        document.querySelector(this.parent).append(mapDiv);

        mapDiv.innerHTML = `
        
        
       
        <iframe  class="mt-4 me-4"  height="400px" width="700px" " id="gmap_canvas "
        src="https://maps.google.com/maps?q=${this.lat},${this.lng}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
        
        `;




    }
}