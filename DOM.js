//examine the document object//
console.dir(document);

console.log(document.domain);
console.log(document.URL);
console.log(document.title);

document.title = "Pince";
console.log(document.title);

console.log(document.head)
console.log(document.forms);

//get element by id//
console.log(document.getElementById('header-title'));

var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
console.log(headerTitle);
headerTitle.textContent = 'Hello';
headerTitle.innerText = 'Hii';

headerTitle.innerHTML = '<h3>Hello</h3>';
headerTitle.style.borderBottom = 'solid 3px #000';
header.style.borderBottom = 'solid 3px #000';

//get element by class name//
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.color = 'green';