var form = document.getElementById("my-form");

form.addEventListener('submit', addLocalStorage);

function addLocalStorage(e){
    e.preventDefault();
    let my_obj = {
    name  :  e.target.name.value,
    email : e.target.email.value
    };
    let myObj_serialized = JSON.stringify(my_obj);

    localStorage.setItem('my_obj' , myObj_serialized);

   console.log(JSON.parse(localStorage.getItem('my_obj')));
}