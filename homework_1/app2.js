// შევქმნათ მოც. სტრინგი. სტრინგის  ფოტო  , ფასი , დასახელება და აღწერა უნდა მიენიჭოს ცვლადებიდან

let img = '../images/phone.jpg';
let prod_name = 'super phone';
let price = '199$';
let prod_descr =
  'This is an awesome smartphone that ca help you do a lot of thing in this modern era';
let link = ` <a href="#" class="btn btn-primary">Add to Cart</a>`;

let card = `
<div class="card" style="width:300px;">
  <img src="${img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h4 class="card-title text-capitalize">${prod_name}</h4>
   <h6> ${price} </h6>
    <p class="card-text">${prod_descr}</p>
   ${link}
  </div>
</div>
`;

document.getElementById('product_card').innerHTML = card;
