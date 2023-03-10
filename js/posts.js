function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data));
}
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts-container');
    for (const post of posts) {
        console.log(post);

        const divPosts = document.createElement('div');
        divPosts.classList.add('post');
        divPosts.innerHTML = `
        <h4>User-${post.userId}</h4>
        <h5>Post:${post.title} </h5>
        <h6>Post:${post.body} </h6>
        `
        postsContainer.appendChild(divPosts)
    }
}
loadPosts()