//creo le costanti, i pulsanti e le classi(per poterle modificarle in css)
const operatori = document.querySelector('#operatori');
const btnInc = document.createElement('button');
btnInc.innerHTML = '+';
operatori.appendChild(btnInc);
btnInc.style.color = 'green';
btnInc.setAttribute('class','Inc');

const btnDec = document.createElement('button');
btnDec.innerHTML = '−';
operatori.appendChild(btnDec);
btnDec.style.color = 'red'
btnDec.setAttribute('class','Dec');

//creo l'evento
let numContainer = document.getElementById("num");
let value = 0;
btnInc.addEventListener("click", () => {
    value++;
    numContainer.textContent = value;
});
btnDec.addEventListener("click", () => {
    value--;
    numContainer.textContent = value;
});
