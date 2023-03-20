'use strict';

// selecting elements
const btnEl = document.querySelectorAll('.btn');
const value = document.getElementById('value');

// global variables

let count = 0;

// functions

// event listeners

btnEl.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    const values = e.currentTarget.classList;
    // console.log(values);

    if (values.contains('decrease')) {
      count--;
    } else if (values.contains('increase')) {
      count++;
    } else {
      count = 0;
    }

    if (count < 0) {
      value.style.color = 'red';
    } else if (count > 0) {
      value.style.color = 'white';
    }

    value.innerText = count;
  });
});
