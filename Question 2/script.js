// Task 2

users = []

function handleSubmit (event) {
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    users.push({name: fullname, email: email, message:message})
    console.log(users);
}