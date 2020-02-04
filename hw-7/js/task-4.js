let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('.decrement');
const incrementBtn = document.querySelector('.increment');

decrementBtn.addEventListener('click', decrement)
incrementBtn.addEventListener('click', increment)

function decrement() {
    counterValue -= 1;
    value.textContent = counterValue;
};

function increment() {
    counterValue += 1;
    value.textContent = counterValue;
};




