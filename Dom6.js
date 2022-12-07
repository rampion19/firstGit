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
    }
