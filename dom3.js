var li = document.getElementsByClassName('list-group-item');
console.log(li);
console.log(li[1]);
li[2].textContent = 'Hello 2';
//items[2].style.fontWeight = 'bold';
li[2].style.background = 'green';
for(var i=0; i<li.length; i++){
    li[i].style.fontWeight = 'bold';
}

var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[2].textContent = 'Hello 2';
//items[2].style.fontWeight = 'bold';
items[2].style.background = 'green';
for(var i=0; i<items.length; i++){
    items[i].style.fontWeight = 'bold';
}
