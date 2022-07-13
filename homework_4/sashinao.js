// 1) ვქმნით პროდუქტის ობიექტს რომელსაც ექნება შემდეგი თვისებები
//    -- წონა
//    -- რაოდენობა
//    -- ფასი
//    -- ფოტო
// დავბეჭდოთ პროდუქტის ობიექტის ყველა key
// დავბეჭდოთ პროდუქტის ობიექტის ყველა value
// დავბეჭდოთ პროდუქტის ობიექტის  key  value ერთად

let product = {
  ფოტო: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmR2Oq0qIwROcc-bQz0mgoSHT-eatU7U08w&usqp=CAU',
  რაოდენობა: '17',
  წონა: '300 გრ',
  ფასი: '45 ₾',
};

console.log(Object.keys(product));
console.log(Object.values(product));
console.log(product);

// for (const key in product) {
//   const object = product[key];
//   console.log(object);
// }

// 1) შევქმნათ მეთოდი(ფუნქცია) რომელიც დაითვლის არის თუ არა მარაგში პრიოდუქტი რაოდენობის მიხედვით
// 2) თუ რაოდენობა  უდრის 0 გამოვიტანოთ მნიშვნელობა მარაგი ამოიწურა , თუ 0 მეტია გამოვიტანოთ რაოდენობა

// 3) მოცემული ინფორმაცია გამოგვაქვს html ში bootstrap card მეშვეობით

let product_card = `
  <div class="card" style="width:360px;">
    <img src="${product.ფოტო}" class="card-img-top" alt="ProductPhoto">
    <div class="card-body">
      <p class="quantity">რაოდენობა: ${product.რაოდენობა}</p>
      <p class="weight">წონა: ${product.წონა}</p>
      <p class="price">ფასი: ${product.ფასი}</p>
    </div>
  </div>
  `;
document.getElementById('result1').innerHTML += product_card;

// 4) შევქმნათ ფუნქცია რომელიც ჩაანაცვლებს პროდუქტების ობიექტის რაიმე თვისების მნიშვნელობას ახალი თვისებით

product.ფასი = '30 ₾';

let product_card1 = `
  <div class="card" style="width:360px;">
    <img src="${product.ფოტო}" class="card-img-top" alt="ProductPhoto">
    <div class="card-body">
      <p class="quantity">რაოდენობა: ${product.რაოდენობა}</p>
      <p class="weight">წონა: ${product.წონა}</p>
      <p class="price">ფასი: ${product.ფასი}</p>
    </div>
  </div>
  `;

document.getElementById('result1').innerHTML += product_card1;
