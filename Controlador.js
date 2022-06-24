let title=document.getElementById("title");
console.log(title);

// CONTROLANDO ETIQUETAS
// 1.CAMBIAR EL TEXTO DE UNA ETIQUETA

title.textContent="Chao putitos";

//2. CAMBIAR LA IMAGEN O LA FUENTE 

let photo=document.getElementById("photo");
photo.src="https://www.futbox.com/img/v1/c61/a39/16d/fa5/ac14b7e5603d0057735a_zoom.png"

//3.AGRGANDO ESTILOS
title.classList.add("letra");

//4. DETECTANDO EVENTOS
let button=document.getElementById("button");
button.addEventListener("click",function(){

console.log("hice clic")
});

() =>{

}

 