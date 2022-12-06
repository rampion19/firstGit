var itemList = document.querySelector('#items');
//parent node

console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentNode.parentNode);

//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';

console.log(itemList.parentElement.parentElement);

//childNode

console.log(itemList.childNodes);
//chlidren
console.log(itemList.children);
itemList.children[1].style.backgroundColor = 'yellow';

// //firstchild
console.log(itemList.firstChild);
// //firstElementchild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello1';

// //lastElementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello4';

// //lasttchild
console.log(itemList.lastChild);

//nextsibling
console.log(itemList.nextSibling);

// //nextElementsibling
console.log(itemList.nextElementSibling);

//previoussibling
console.log(itemList.previousSibling);

// //previousElementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'red';

//createElement
//create div

var newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add id
newDiv.id = 'hello1';
//Add attrib
newDiv.setAttribute('title','Hello div');

//create text node

newDivText = document.createTextNode('Hello world');

newDiv.appendChild(newDivText); 

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);

var newNode = document.createElement('li');
var newTextNode = document.createTextNode('Hello word');

newNode.appendChild(newTextNode);

var list = document.getElementById("items" );
list.insertBefore(newNode, list.children[0]);