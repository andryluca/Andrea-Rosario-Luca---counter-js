//creo le costanti, i pulsanti e le classi(per poterle modificarle in css)
const operator = document.querySelector('#operatori');
const btnInc = document.createElement('button');
btnInc.innerHTML = '+';
operator.appendChild(btnInc);
btnInc.style.color = 'green';
btnInc.setAttribute('class','Inc');
btnInc.setAttribute('data-counter','inc');

const btnDec = document.createElement('button');
btnDec.innerHTML = '−';
operator.appendChild(btnDec);
btnDec.style.color = 'red'
btnDec.setAttribute('class','Dec');

//creo l'evento
let numContainer = document.getElementById("num");
let value = 0;

operator.addEventListener('click', (event) => {
    const target = event.target
    if (target.tagName === 'BUTTON') {
    if (target.classList.contains('Inc')) {
        value++;
    } else if (target.classList.contains('Dec')) {
        value--;
    }
    numContainer.textContent = value;
    }
});
