var form = document.getElementById("my-form");

form.addEventListener('submit', addLocalStorage);

function addLocalStorage(e){
    e.preventDefault();
    var name = e.target.name.value;
    var email = e.target.email.value;

    localStorage.setItem('name' , name);
    localStorage.setItem('email', email);
}