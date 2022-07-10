let data = [1, 7, 8, 15, 23, 31, 46, 57, 89, 101];

data.unshift('UserName');
data.push(307);
console.log(data);

let data1 = [1, 7, 8, 15, 23, 31, 46, 57, 89, 101];

data1.shift();
data1.pop();
console.log(data1);

data.forEach((member) => {
  document.getElementById('data').innerHTML += ' - ' + member;
});
