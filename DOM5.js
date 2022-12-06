var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newDiscription = document.getElementById('description').value;

    //create new Li elem

    var li = document.createElement('li');
    //create classname

    li.className = 'list-group-item';
    console.log(li);

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newDiscription));

//     //delete button elem

    var butn = document.createElement('button');
    // //add class to delete btn
    butn.className = "btn btn-danger btn-sm float-right delete";
    // //add text node
    butn.appendChild(document.createTextNode('X'));

    li.appendChild(butn);

    itemList.appendChild(li);

//     //edit button elem

    var editbtn = document.createElement('button');

    editbtn.className = "btn btn-danger btn-sm float-right delete";
    editbtn.appendChild(document.createTextNode('E'));
    li.appendChild(editbtn);
    itemList.appendChild(li);

}

function removeItem(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// //filter items
function filterItems(e) {
//     //convert lowercase
    var text = e.target.value.toLowerCase();
//     //get element by tag name
    var items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function (item) {
        var itemName = item.firstChild.textContent;
        var desc = item.childNodes[1].textContent;
        if (itemName.toLowerCase().indexOf(text) != -1 || desc.toLowerCase().indexOf(text) != -1 ) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}




