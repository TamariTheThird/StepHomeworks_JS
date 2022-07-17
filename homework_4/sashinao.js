// 1) ვქმნით პროდუქტის ობიექტს რომელსაც ექნება შემდეგი თვისებები
//    -- წონა
//    -- რაოდენობა
//    -- ფასი
//    -- ფოტო
// დავბეჭდოთ პროდუქტის ობიექტის ყველა key
// დავბეჭდოთ პროდუქტის ობიექტის ყველა value
// დავბეჭდოთ პროდუქტის ობიექტის  key  value ერთად

const product = {
  ფოტო: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnmR2Oq0qIwROcc-bQz0mgoSHT-eatU7U08w&usqp=CAU',
  რაოდენობა: '0',
  წონა: '300',
  ფასი: '45',
};

let keys = Object.keys(product);
document.getElementById(`result`).innerHTML += keys + '<br>' + '<br>';

let values = Object.values(product);
document.getElementById(`result`).innerHTML += values + '<br>' + '<br>';

let key_values = Object.entries(product);
document.getElementById(`result`).innerHTML += key_values;

console.log(values);
console.log(key_values);

// 1) შევქმნათ მეთოდი(ფუნქცია) რომელიც დაითვლის არის თუ არა მარაგში პროდუქტი რაოდენობის მიხედვით
// 2) თუ რაოდენობა  უდრის 0 გამოვიტანოთ მნიშვნელობა მარაგი ამოიწურა , თუ 0 მეტია გამოვიტანოთ რაოდენობა

function quantity() {
  if (product.რაოდენობა < 0 && product.რაოდენობა.match(/\w/ | /\W/g)) {
  } else if (product.რაოდენობა == 0) {
    return `მარაგი ამოიწურა`;
  } else if (product.რაოდენობა > 0) {
    return product.რაოდენობა + ' ცალი';
  } else {
    return `ინფორმაცია არ არსებობს`;
  }
}

// 3) მოცემული ინფორმაცია გამოგვაქვს html ში bootstrap card მეშვეობით

let product_card = `
  <div class="card" style="width:360px;">
    <img src="${
      product.ფოტო
    }" class="card-img-top" alt="ProductPhoto" style="height:300px";>
    <div class="card-body">
      <p class="quantity">რაოდენობა: ${quantity()}</p>
      <p class="weight">წონა: ${product.წონა} გრ.</p>
      <p class="price">ფასი: ${product.ფასი} ₾</p>
    </div>
  </div>
  `;
document.getElementById('result1').innerHTML += product_card;

// 4) შევქმნათ ფუნქცია რომელიც ჩაანაცვლებს პროდუქტების ობიექტის რაიმე თვისების მნიშვნელობას ახალი თვისებით

function changes() {
  let new_quantity = (product.რაოდენობა = 32);
  let new_photo = (product.ფოტო =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiXglnj0dtahJReLGxW8px2WuPAWuX1SxUAg&usqp=CAU');
  let new_price = (product.ფასი = 20);

  product_card = `
  <div class="card" style="width:360px;">
   <img src="${
     product.ფოტო
   }" class="card-img-top" alt="ProductPhoto" style="height:300px";>
   <div class="card-body">
      <p class="quantity">რაოდენობა: ${quantity()} </p>
      <p class="weight">წონა: ${product.წონა} გრ</p>
     <p class="price">ფასი: ${product.ფასი} ₾ </p>
  </div>
   </div>
   `;
  return product_card;
}

document.getElementById('result2').innerHTML += changes();
