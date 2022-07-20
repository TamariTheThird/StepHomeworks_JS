// დავალება 1

// ვარიანტი 1
// მუშაობს ორივე შემთხვევაში, როცა აიდი თავიდანვე მინიჭებული აქვს და როცა არ აქვს

let button1 = document.querySelector('#btn1');
let box = document.querySelector('.box');

if ((box.id = 'bg_green')) {
  button1.addEventListener('click', function () {
    box.id = 'bg_blue';
    button.style.backgroundColor = 'aqua';
  });
}

// მუშაობს იმ შემთხვევაში, როცა აიდი თავიდანვე მინიჭებული აქვს და გვინდა აიდის შეცვლით თვისების შეცვლა

// let button = document.getElementById('btn1');

// button.addEventListener('click', function () {
//   let box = document.querySelector('.box');
//   box.id = 'bg_blue';
//   button.style.backgroundColor = 'aqua';
// });

// დავალება მეორე

let click = document.querySelector('#btn2');
let frame = document.querySelector('#two');

click.addEventListener('click', () => {
  click.innerText = 'Loading..';
  click.style.background = 'orange';
  setTimeout(() => {
    click.style.visibility = 'hidden';
    frame.style.background = 'orange';
  }, 1500);
});

// დავალება მესამე

let jokes = ['Joke 1', 'Joke 2', 'Joke 3', 'Joke 4', 'Joke 5'];

function Jokes() {
  let get_joke = Math.floor(Math.random() * jokes.length);
  document.getElementById('txt').innerHTML = jokes[get_joke];
}
