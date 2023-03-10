

function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers2(data))
}

function displayUsers2(users) {
    const ul = document.getElementById('user-list');
    for (const user of users) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = user.email;
        ul.appendChild(li);
    }

}