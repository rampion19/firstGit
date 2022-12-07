var form = document.getElementById("addForm");


form.addEventListener('submit', saveLocal);

function saveLocal(e){
    e.preventDefault();
   
   const name = e.target.username.value;
   const email = e.target.emailId.value;
    
    let my_obj = {
        name,email
    }
    let myObj_serialized = JSON.stringify(my_obj);

    localStorage.setItem(my_obj.email , myObj_serialized);

}
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener('submit', addItem);
function addItem(e) {
    e.preventDefault();

    //get input value
    var newItem = document.getElementById('item').value;
    var newDiscription = document.getElementById('description').value;

    //create new Li elem
    var li = document.createElement('li');
    li.className = "list-group-item";

    li.appendChild(document.createTextNode(newItem));
    li.appendChild(document.createTextNode(" "+newDiscription));
    document.getElementById("items").appendChild(li);
    

    var butn = document.createElement('button');
    //add class to delete btn
    butn.className = "btn btn-danger btn-sm float-right delete";
    //add text node
    butn.appendChild(document.createTextNode('delete'));

    li.appendChild(butn);

    itemList.appendChild(li);

    //edit button elem

    var editbtn = document.createElement('button');

    editbtn.className = "btn btn-danger btn-sm float-right delete";
    editbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editbtn);
    itemList.appendChild(li);
}
function deleteUser(emailId){
    console.log(emailId)
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);

}

function removeUserFromScreen(emailId){
    const parentNode = document.getElementsByClassName("list-group");
    const childNodeToBeDeleted = document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted)
}

