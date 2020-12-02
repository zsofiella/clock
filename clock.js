'use strict';

const clock = document.querySelector('.clock');

function opentime (){
    let dateNow = new Date();
    let time = dateNow.toLocaleTimeString('hu');
    clock.textContent = time;

    setTimeout (openTime, 1000);
}

openTime();
