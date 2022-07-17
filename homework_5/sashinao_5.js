// დავალება 1) შექმნით თარიღის ობიექტი, გამოიტანეთ HTML ში შემდეგი ფორმატით YYYY/MM/DD

// არჩეული თარიღია 2021 წლის 21 ივლისი

// ვარიანტი 1:  თუ საწყის თარიღში არჩეულ თარიღს ვუთითებთ სტრინგის სახით, მაშინ თვის რიცხვის გამოტანისას ვამატებთ ერთს
let date = new Date('2021-07-21');

document.getElementById('date').innerHTML +=
  '  ' +
  date.getFullYear() +
  ' / ' +
  (date.getMonth() + 1) +
  ' / ' +
  date.getDate();

console.log(date); // ამ შემთხვევაში ISO თარიღი და ჩვენს მიერ შერჩეული ფორმატით გამოტანილი თარიღი ორივე სწორი იქნება

// ვარიანტი 2: საწყის თარიღშივე ზუსტად ვუთითებთ არჩეულ თარიღს, ოღონდ არა სტრინგის სახით
let date1 = new Date(2021, 06, 21);

console.log(
  date1.getFullYear() + ' / ' + date1.getMonth() + ' / ' + date1.getDate()
);

console.log(date1); // ამ შემთხვევაში ჩვენს მიერ შერჩეული ფორმატით გამოტანილი თარიღი სწორი იქნება, თუმცა თუ ISO თარიღს გამოვიტანთ ერთი თვის შემდგომ თარიღს გვიჩვენებს, ამიტომ თუ ISO თარიღის მიღება გვინდა თვის ციფრად უნდა მივუთითოთ 6

// დავალება 2)  გამოთვალეთ კვირის რა დღე იყო 1995 წლის 26 მაისს

let date2 = new Date(1995, 04, 26);
console.log(date2.getDay());

let date3 = new Date('1995/05/26');
console.log(date3.getDay());

// ზემოთ მოცემული ორივე ჩანაწერით მივიღეთ ციფრი 5 ე.ი პარასკევი დღე ყოფილა

// დავალება 3) შექმენით X თარიღი, შექმენით Y თარიღი, გამოთვალეთ X და Y თარიღს შორის დარჩენილი  თვეების , დღეების , საათების და წუთების რაოდენობა

// პირობა:  x არის მიმდინარე დღე, y არის 2022 წლის 17 დეკემბერი

let x = new Date();
let y = new Date('2022/12/17');
let z = y - x;
console.log(z);

// დარჩენილი დრო
let sec = z / 1000; // წამებში
let min = z / 1000 / 60; // წუთებში
let hour = z / 1000 / 60 / 60; // საათებში
let day = z / 1000 / 60 / 60 / 24; // დღეებში
let month = z / 1000 / 60 / 60 / 24 / 30; // თვეებში

// რეალურად დარჩენილი დრო
// თვე
let months = Math.trunc(month);
// დღე
let days = Math.trunc(day % 30);
// console.log(days);
// საათი
let hours = Math.trunc(hour % 24);
console.log(hours);
// წუთი
let mins = Math.trunc(min % 60);
console.log(mins);
// წამი
let seconds = Math.round(z / 1000) % 60;
console.log(seconds);

document.getElementById('date1').innerHTML +=
  'დარჩენილია: ' +
  months +
  ' თვე, ' +
  days +
  ' დღე, ' +
  hours +
  ' საათი, ' +
  mins +
  ' წუთი და ' +
  seconds +
  ' წამი';

// console.log(
//   'დარჩენილია ' +
//     months +
//     ' თვე ' +
//     days +
//     ' დღე ' +
//     hours +
//     ' საათი ' +
//     mins +
//     ' წუთი და ' +
//     seconds +
//     ' წამი'
// );
