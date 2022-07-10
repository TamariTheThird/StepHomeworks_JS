let user_cards = [
  {
    image: '',
    user: 'Rajinish Kumar',
    position: 'web designer',
    text: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur possimus ipsa eos nihil consequatur nostrum fugit beatae molestiae esse! .`,
    link: '',
  },
  {
    image: '',
    user: 'Satyan Tiwani',
    position: 'web developer',
    text: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur possimus ipsa eos nihil consequatur nostrum fugit beatae molestiae esse! Excepturi iure, aliquid voluptatum minus pariatur ut eveniet quidem sunt non magnam optio officiis consequatur recusandae nulla autem! Eaque obcaecati architecto error, quasi placeat culpa. Officiis.`,
    link: '',
  },
  {
    image: '',
    user: 'Salim Malik',
    position: 'front-end developer',
    text: `   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur possimus ipsa eos nihil consequatur nostrum fugit beatae molestiae esse! Excepturi iure, aliquid voluptatum minus pariatur ut eveniet quidem sunt non magnam optio officiis consequatur recusandae nulla autem! Eaque obcaecati architecto error, quasi placeat culpa. Officiis.`,
    link: '',
  },
];

let finduser = user_cards.forEach((el) => {
  let users = `
      <div class="card col-lg-4 mx-auto">
      
       <div class="card-body">
         <h5 class="card-title">${el.user}</h5>
         <p class="card-text">${el.position}</p>
         <p class="card-text">${el.text}</p>
       </div>
     </div>
      `;
  document.getElementById('users').innerHTML += users;
});
