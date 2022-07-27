// საშინაო 7_3
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let modal = document.querySelector('.new_modal');

open.addEventListener('click', function () {
  modal.classList.add('open_mod');
});

close.addEventListener('click', function () {
  modal.classList.remove('open_mod');
});
