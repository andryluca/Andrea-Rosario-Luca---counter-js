const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');
const decrementBtn = document.getElementById('decrement');

let counterValue = 0;

incrementBtn.addEventListener("click", function (event){
  counterValue += 1;
  counter.innerHTML = counterValue;
  counterStile();
});

decrementBtn.addEventListener("click", function (event){
  counterValue -= 1;
  counter.innerHTML = counterValue;
  counterStile();
});

resetBtn.addEventListener("click", function (event){
  counterValue = 0;
  counter.innerHTML = counterValue;
  counter.style.color="rgb(93, 56, 244)"
});

function counterStile(){
  if (counterValue <0){
    counter.style.color="red"
  }
  else if (counterValue >0){
    counter.style.color="green"
  }
  else if (counterValue ==0){
    counter.style.color="rgb(93, 56, 244)"
  }
}
