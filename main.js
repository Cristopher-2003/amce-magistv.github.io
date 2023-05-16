/* slider de imagenes*/
let slider = document.querySelector(".contenido-galeria");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 6000;

window.addEventListener("resize" ,  function(){
    let width = sliderIndividual[0].clientWidth;
});

setInterval(function(){
    slides();
}, intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "2s";
    contador ++;
    if(contador == sliderIndividual.length){
        setTimeout(function(){
            slider.style.transform = "translate(0px)";
            slider.style.transition = "2s";
            contador = 1;

        },3500);
    }
}



