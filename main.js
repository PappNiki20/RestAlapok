let lista = [];
$(function () {
  console.log(lista);
  let file = "adatok.json";
  adatBeolvas(file, megjelenit);
  let pokeVegpont = "https://pokeapi.co/api/v2/pokemon/pikachu";
  adatBeolvas(pokeVegpont,pokemegjelenit)
});

function adatBeolvas(vegpont, callbackFv) {
  fetch(vegpont, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      callbackFv(data);
    })
    .catch((error) => console.log(error));
}
function megjelenit(adataim) {
  lista = adataim.AdatLista;
  console.log("megjelenít adataim", lista);
}
function pokemegjelenit(adataim) {
    let ut = adataim.sprites.front_default;
    console.log(ut)
    let nev = adataim.name;
    const PELEM = $("main");
    const TEXT = `<h2>${nev}</h2>
    <div class="kep"> <img src="${ut}" alt="${nev}"></div>
    `;
 PELEM.html(TEXT);
}
