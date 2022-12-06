var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;

    //create new Li elem

    var li = document.createElement('li');
    //create classname

    li.className = 'list-group-item';
    console.log(li);

    li.appendChild(document.createTextNode(newItem));

    //delete button elem

    var butn = document.createElement('button');
    //add class to delete btn
    butn.className = "btn btn-danger btn-sm float-right delete";
    //add text node
    butn.appendChild(document.createTextNode('X'));

    li.appendChild(butn);

    itemList.appendChild(li);

    //edit button elem

    var editbtn = document.createElement('button');

    editbtn.className = "btn btn-danger btn-sm float-right delete";
    editbtn.appendChild(document.createTextNode('E'));
    li.appendChild(editbtn);
    itemList.appendChild(li);

}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
    }
  }
}