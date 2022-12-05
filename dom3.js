
// var secondItem = document.querySelector('.list-group-item:nth-child(2');
// var thirdItem = document.querySelector('.list-group-item:nth-child(3');

// secondItem.style.color = "green";
// thirdItem.style.display = "none";

var items = document.querySelectorAll('.list-group-item');
// items[1].style.color = 'green';

for(var i=0; i<items.length; i+2){
    items[0].style.background = 'green';
}




