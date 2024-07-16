let btn = document.getElementById("btn");

let menu = document.querySelector("#menu");

import mostrarPrecio from "./mostrarPrecio.js";



btn.addEventListener("click", (event) => {

  event.preventDefault();

  switch (menu.selectedIndex) {

    case 1:

      mostrarPrecio("img/helado.png.jpg" , "helado", "Helado", "5.000");

      break;

    case 2:

      mostrarPrecio(

        "img/hamburguesa.png.jpg",

        "hamburguesa",

        "Hamburguesa",

        "15.000"

      );

      break;

    case 3:

      mostrarPrecio(

        "img/perro.png.jpg",

        "Perro Caliente",

        "Perro Caliente",

        "8.000"

      );

      break;

    case 4:

      mostrarPrecio("img/ensalada.png.jpg", "ensalada", "Ensalada", "12.000");

      break;

    default:

      alert("Debes seleccionar una opción del menú");

      break;

  }

});