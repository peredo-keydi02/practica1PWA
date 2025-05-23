const btn_abrir = document.getElementById("abrir");
const btn_cerrar = document.getElementById("cerrar");
const overlay =  document.getElementById("overlay");
const ventana =  document.getElementById("ventana");

btn_abrir.addEventListener("click", () =>{
    overlay.classList.add("fondo");
    ventana.classList.add("ver");
});

btn_cerrar.addEventListener("click", () =>{
    overlay.classList.remove("fondo");
    ventana.classList.remove("ver");
});

overlay.addEventListener("click", ()=>{
    overlay.classList.remove("fondo");
    ventana.classList.remove("ver");
});