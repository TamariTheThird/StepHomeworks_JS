//    1) შევქმნათ სტრინგი რომელსაც ექნება bootstrap card  მნიშვნელობა გამოვიტანოთ html ში bs card სახiთ, ფოტო, ტექსტები და ნახვის ლინკი უნდა გავატანოთ ცვლადებიდან.  გამოიყენეთ ტემპლეიტ სინტაქსი `${}`

let photo = '../images/photo.png';
let badge = 'pro';

let link1 = 'https://getbootstrap.com/docs/5.2/components/card/';
let link1_text = 'message';

let link2 = 'https://getbootstrap.com/docs/5.2/components/card/';
let link2_text = 'following';

let title = 'rahul yaduvanshi';
let subtitle = 'nodia, u.p.';
let par =
  "Some quick example text to build on the card title and make up the bulk of the card's content.";

let list_title = `skills`;

let list = `<ul class="list">
<li class="list-group-item">ux/ui</li>
<li class="list-group-item">front end developer</li>
<li class="list-group-item">html</li>
<li class="list-group-item">css</li>
<li class="list-group-item">javascript</li>
<li class="list-group-item">react</li>
<li class="list-group-item">node</li>
  </ul>`;

let bs_card = `
<div class="card" style="width:360px;">

  <span class="badge">${badge.toUpperCase('')}</span>
  <img src="${photo}" class="card-img-top" alt="ProfilePhoto">

  <div class="card-body">
    <h5 class="card-title">${title}</h5>
    <h6 class="subtitle">${subtitle.toUpperCase('')} </h6>
    <p class="card-text"> ${par}</p>
       <a href="${link1}" class="card-link link1">${link1_text}</a>
    <a href="${link2}" class="card-link link2">${link2_text}</a>
  </div>
<div class="card-footer">
<small> ${list_title.toUpperCase('')} </small>
${list}
</div>
</div>
`;

document.getElementById('card').innerHTML = bs_card;

// 2)  შევქმნათ სტრინგი

let quote = ' Play it ones, Sam. ';

// მოვახდენოთ მოქმედებები:
// 2.1) გამოვიტანოთ მის შუაში არსებულ სიტყვას
console.log(quote.slice(-11, -7));

// 2.2) ჩავანაცვლოთ მასში არსებულ  სიტყვას სხვა სიტყვით
console.log(quote.replace('ones', 'again'));

// 2.3) შევქმნათ სტრინგში არსებული სიტყვებისგან მასივს
console.log(quote.split(` `));

// 2.4) შევამოწმოთ თუ არის სტრინგში რაიმე სიმბოლო ან სიტყვა
console.log(quote.includes('.', ','));
console.log(quote.includes('!', ','));
console.log(quote.includes('Sam'));

// 2.5) შევამოწმოთ თუ იწყება სტრინგი რაიმე სიტყვით ან სიმბოლოთი
console.log(quote.startsWith('P'));
console.log(quote.startsWith('play'));
console.log(quote.startsWith('Play'));

// 2.6) გავადიდოთ სტრინგში არსებული ყველა სიმბოლო
console.log(quote.toUpperCase());

// 2.7) წავშალოთ სტრინგში არსებული  სიცარიელე მარცხენივ და მარჯვნივ
console.log(quote.trim());
console.log(quote.trim().startsWith('Play'));

//      3)  შევქმნათ სტრინგი პირობებით:  8 სიმბოლოზე მეტი,დიდი და პატარა ასოები,რიცხვი,სიმბოლოები (!@%$&*()_-=+).  ყველა პირობა უნდა გადამოწმდეს ⦁ Regexp  გამოყენებით

let test_str = 'Tb_81&tt!';

if (
  test_str.length > 8 &&
  test_str.match(/[A-Z]/ | /[a-z]/ | /[0-9]/ | /\W/g)
) {
} else if (test_str.length <= 8) {
  console.error(
    'შეიცავს ' +
      test_str.length +
      ' სიმბოლოს, მონაცემი უნდა შედგებოდეს 8-ზე მეტი სიმბოლოსგან !'
  );
} else if (!test_str.match(/[A-Z]/g)) {
  console.error('მონაცემი არ შეიცავს დიდ ასოებს !');
} else if (!test_str.match(/[a-z]/g)) {
  console.error('მონაცემი არ შეიცავს პატარა ასოებს !');
} else if (!test_str.match(/[0-9]/g)) {
  console.error('მონაცემი არ შეიცავს ციფრებს/რიცხვებს !');
} else if (!test_str.match(/\W/g)) {
  console.error('მონაცემი არ შეიცავს სიმბოლოებს !');
} else {
  console.log('ყველა პირობა სრულად შესრულდა..');
}
