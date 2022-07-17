// დავალება 1:   მასივი --  LET AUTO = ["FORD", "MUSTANG", 5.4, ["V6", "V8"], {VARIANT:"BOSS 302", VARIANT2:"SHELBY", VARIANT3:"SAALEN", YEAR:["2018", "2022"]}];

let auto = [
  'FORD',
  'MUSTANG',
  5.4,
  ['V6', 'V8'],
  {
    VARIANT: 'BOSS 302',
    VARIANT2: 'SHELBY',
    VARIANT3: 'SAALEN',
    YEAR: ['2018', '2022'],
  },
];

//  მოცემული მასივიდან უნდა ავკინძოთ შემდეგი სტრინგი: "FORD MUSTANG გამოდის 5.4 V8 ტიპის ძრავით, ასევე მისი მოდიფიკაციებია BOSS 302 , SHELBY ,საუკეთესო მოდელები გამოდიოდა 2018 დან 2021 წლამდე."

let new_string = (document.getElementById('array1').innerHTML += ` ${auto[0]} 
  ${auto[1]} გამოდის ${auto[2]} ${
  auto[3][1]
} ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].VARIANT}, ${
  auto[4].VARIANT2
},  საუკეთესო მოდელები გამოდიოდა ${auto[4].YEAR[0]}-დან ${
  auto[4].YEAR[1] - 1
} წლამდე. `);

// let new_string = `${auto[0]} ${auto[1]} გამოდის ${auto[2]} ${
//   auto[3][1]
// } ტიპის ძრავით, ასევე მისი მოდიფიკაციებია ${auto[4].VARIANT}, ${
//   auto[4].VARIANT2
// }  საუკეთესო მოდელები გამოდიოდა ${auto[4].YEAR[0]}-დან  ${
//   auto[4].YEAR[1] - 1
// } -დან `;

// document.getElementById('array1').innerHTML = auto1;

// დავალება 2
// 1) შევიტანოთ მასივში სიტყვა "FRONT-END" და FOR ციკლის შიგნით გავაკეთოთ ჩანაცვლება სიტყვა "BACK-END" - ით (REPLACE())
// let array = ['GRAPHIC DESIGN', 'UX/UI DESIGN', 'DATA ANALYSIS'];
// array.push('FRONT-END');

// for (let new_array in array) {
//   array[3] = `${array[3].replace(`${array[3]}`, 'back-end').toUpperCase()}`;
//   document.getElementById('array2').innerHTML = array;
// }

// array[3] = `${array[3].replace(`${array[3]}`, 'back-end').toUpperCase()}`;
// document.getElementById('array2').innerHTML = array;

// 2) გადავამოწმოთ აკმაყოფილებს თუ არა მასივში არსებული  ყველა ელემენტი რაიმე პირობას  (პირობა თქვენ მოიფიქრეთ)

// პირობა: შემოწმდეს შეიცავს თუ არა მონაცემები ციფრებს
array.forEach((array_memeber) => {
  if (!array_memeber.match(/[0-9]/g)) {
    console.error('მონაცემები არ შეიცავს ციფრებს');
  }
});

// 3) გადავამოწმოთ აკმაყოფილებს თუ არა მასივში არსებული  1 ელემენტი რაიმე პირობას  (პირობა თქვენ მოიფიქრეთ)

// პირობა: შემოწმდეს მეოთხე მონაცემში არის თუ არა სიმბოლო/სიმბოლოები
if (array[3].match(/\W/g)) {
  console.log('მონაცემი შეიცავს სიმბოლოებს');
} else {
  console.log('მონაცემი არ შეიცავს სიმბოლოებს');
}

// დავალება 3

//  მოცემულია მასივი  LET USERS = ["ADMIN", "MANAGER" , "BUYER" , "SELLER",    "UNCONFIRMED"];

let users = [
  'ADMIN',
  'MANAGER',
  // 'UNCONFIRMED',
  'BUYER',
  'SELLER',
  'UNCONFIRMED',
];
console.log(users);

// მოვძებნოთ არსებობს თუ არა მასივში "UNCONFIRMED" წევრი

// ვარიანტი 1
let result1 = users.find((array_memeber) => {
  return array_memeber == 'UNCONFIRMED';
});
console.log('მასივში არის განუსაზღვრელი წევრი');

// ვარიანტი 2
let result2 = users.filter((array_memeber, index) => {
  if (array_memeber == 'UNCONFIRMED') {
    console.log(array_memeber + '-' + 'ინდექსი' + index);
  }
});

// შევქმნათ ცვლადი X რომლის მნიშვნელობა იქნება სტრინგი , X მნიშვნელობის მიხედვით მოვიძიოთ USERS მასივში არსებული ელემენტის იდექსი და წავშალოთ

users.unshift((x = 'ADMIN1'));
console.log(users);

users.splice(users.indexOf(x), 1);
console.log(users);
