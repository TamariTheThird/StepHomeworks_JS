// საშინაო 7_2

let menu = document.querySelector('.burger_menu');
let sidebar = document.querySelector('.sidebar');

menu.addEventListener('click', () => {
  menu.classList.toggle('menu_toggled');
  sidebar.classList.toggle('sidebar_toggled');
});


