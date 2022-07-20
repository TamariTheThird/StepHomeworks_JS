let decrease = document.querySelector('.decrease');

let resete = document.querySelector('.resete');

let increase = document.querySelector('.increase');

let count = 0;

let update = document.querySelector('#input');

increase.addEventListener('click', function () {
  update.value++;
});

decrease.addEventListener('click', function () {
  update.value--;
});

resete.addEventListener('click', function () {
  update.value = 0;
});
