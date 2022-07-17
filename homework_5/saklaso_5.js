// 1) შევქმნათ ბლოგების  მასივი  რომელშიც იქნება შეყვანილი  ობიექტები

//    ობიექტს უნდა ქონდეს შემდეგი თვისებები:
//     -- დასახელება (STRING) -- აღწერა (STRING) -- ფოტო (STRING) -- დამატების თარიღი (DATE)
//     -- კატეგერია (STRING)  -- აქტიურია თუ არა (BOOLEAN) -- ნახვების რაოდენობა  (NUMBER)

let blog = [
  {
    title: 'Title1',
    descr:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis labore ut ratione, asperiores cupiditate modi deserunt molestiae reprehenderit. ',
    img: '           https://i.pinimg.com/236x/3f/04/cd/3f04cd9233f45b88ff7898c9dd24d9b1.jpg ',
    date: new Date(),
    category: 'Category1',
    online: '',
    views: 238,
  },
  {
    title: 'Title2',
    descr:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis labore ut ratione, asperiores cupiditate modi deserunt molestiae reprehenderit. ',
    img: 'https://i.pinimg.com/236x/0f/d6/72/0fd6721a822d5d584aeef1d5c1bbe4a7.jpg',
    date: new Date(2022, 04, 28),
    category: 'Category2',
    online: '',
    views: 135,
  },
  {
    title: 'Title3',
    descr:
      '   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis labore ut ratione, asperiores cupiditate modi deserunt molestiae reprehenderit. ',
    img: 'https://i.pinimg.com/236x/83/d1/3d/83d13dbfb2ad3f03ed9f806557237d38.jpg',
    date: new Date(),
    category: 'Category3',
    online: '',
    views: 45,
  },
];

// function date_check() {
//   let publish_date;
//   for (let i = 0; i < blog.length; i++) {
//     publish_date = blog[i].date;

//     console.log(publish_date);

//     if (new Date() === publish_date) {
//       return (publish_date = 'დამატებულია დღეს');
//     } else {
//       return publish_date;
//     }
//   }
// }

// 2) მოცემული მასივი უნდა გამოვიტანოთ HTML ში შემდეგი პირობით
// -- თუ დამატების თარიღი უდრის დღევანდელ დღეს დაეწეროს "დამატებულია დღეს" თუ არადა ორიგინალი დამატების თარიღი

blog.forEach((member) => {
  let article = ` <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
<div class="col-md-4">
  <img src="${
    member.img
  }" class="img-fluid rounded-start w-100" alt="..." style="height:260px";>
</div>
<div class="col-md-8">
  <div class="card-body">
    <p class="card-text">${member.date.toISOString()}</p>
    <p class="card-text">${member.views}</p>
    <p class="card-text">${member.online}</p>
    <h5 class="card-title">${member.title}</h5>
    <small class="card-text text-muted">${member.category}</small>
    <p class="card-text">${member.descr}</p>

  </div>
</div>
</div>
</div>`;
  document.getElementById('blog').innerHTML += article;
});
