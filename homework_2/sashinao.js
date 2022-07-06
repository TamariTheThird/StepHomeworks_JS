// მარტივი:

// 1) შევქმნათ ფუნქცია რომელიც HTML - ში გამოიტანს "BOOTSTRAP CARD"
let img = '../images/phone.jpg';
function bs_card(result) {
  let card = `<div class="card" style="width: 300px ;">
       <img src="${img}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">Card title</h5>
         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <a href="#" class="btn btn-primary">Go somewhere</a>
       </div>
     </div>`;
  result.innerHTML = card;
}

bs_card(document.getElementById('card'));

// 2) შევქმნათ ფუნქცია რომელიც ორი რიცხვის ნამრავლს დაამრგვალებს ათეულამდე | ერთეულამდე | ასეულამდე

function multiply() {
  let x = 7.225;
  let y = 11.81;
  return x * y;
}
console.log(multiply()); // პირველადი პასუხი
console.log(multiply().toFixed(0)); // დამრგვალებული ერთეულამდე
console.log(multiply().toFixed(1)); // დამრგვ. მეათედამდე
console.log(multiply().toFixed(2)); // დამრგვ. მეასედამდე
console.log(multiply().toFixed(3)); // დამრგვ. მეათასედამდე

// 3) შევქმნათ ფუნქცია რომელიც სტრინგში გაფილტრავს სიტყვა "HTML" და დააბრუნებს ახალ სტრინგს  "HTML"  სიტყვის  გარაშე

function new_text() {
  let text = 'you can edit the HTML code';
  let result = text.replace('HTML', '');
  return result;
}
console.log(new_text());

// function new_text(searchValue, replaceValue) {
//   let text = 'you can edit the HTML code';

// }
// console.log(new_text('HTML', ''));

// საშუალო
// შევქმნათ ფუნქცია რომელიც გლობალურ ცვლადს შეუცვლის მნიშვნელობას

let Name = 'ლიტვა';
console.log(Name);

function new_Name() {
  Name = 'ლიეტვუა';
  return Name;
}
console.log(new_Name()); // console.log(Name);

// let first_name = '';
// function new_var(FirstName) {
//   return FirstName;
// }
// console.log(new_var('ანა'));
// console.log(new_var('დავითი'));

// რთული:
// შექმენით ფუნქცია რომელსაც გადაეცემა  ორი პარამეტრი  1 სტრინგ ტიპის  , მეორე რიცხვითი,  ფუნქციამ უნდა დააბრუნეს სტრინგი რომელიც გადავეცით პარამეტრში მხოლოდ იმდენი სიმბოლო რამდენიც  განსაზღვრული გვაქვს მეორე რიცხვით პარამეტრში

function F1(text, number) {
  return text.slice(0, number);
}

console.log(F1('თემიდა', 4));
console.log(F1('არესი', 3));
