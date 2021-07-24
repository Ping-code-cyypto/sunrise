const burger = document.querySelector('.burger');
const links = document.querySelector('.links');
const topLine = document.querySelector('#topline');
const bottomLine = document.querySelector('#bottomline');
const midLine = document.querySelector('#midline');



function func (){
    links.classList.toggle('dropdown');
    topLine.classList.toggle('rotateposi');
    bottomLine.classList.toggle('rotatenegi');
    midLine.classList.toggle('displaynone');
}


burger.addEventListener('click', func , false);