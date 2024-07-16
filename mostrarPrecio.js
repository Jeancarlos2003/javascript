export function mostrarPrecio(rutaImagen, textoAlternativo, nombreItem, precioItem) {

    let divItem = document.getElementById("item");
  
    let img = document.createElement("img");
  
    img.src = rutaImagen;
  
    img.alt = textoAlternativo;
  
    let container = document.createElement("div");
  
    let nombre = document.createElement("h4");
  
    nombre.textContent = nombreItem;
  
    let precio = document.createElement("p");
  
    precio.textContent = `Precio: $ ${precioItem} COP`;
  
    container.appendChild(nombre);
  
    container.appendChild(precio);
  
    divItem.appendChild(img);
  
    divItem.appendChild(container);
}