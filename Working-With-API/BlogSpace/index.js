
let inputEl = document.getElementById("title")
let postEl = document.getElementById("post")
let blogPostEl = document.getElementById("blog-post")
let postsFormEl = document.getElementById("postsForm")

let postArray = []

function renderPosts() {
    let html = " "
    for (let post of postArray) {
        html += `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <hr/>
            `
    }
    blogPostEl.innerHTML = html
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(res => res.json())
    .then(data => {
        postArray = data.slice(0, 5)
        renderPosts()
    })


postsFormEl.addEventListener("submit", function (e) {
    e.preventDefault()
    let postTitle = inputEl.value
    let postBody = postEl.value
    let data = {
        title: postTitle,
        body: postBody
    }
    let options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)

        .then(res => res.json())
        .then(post => {
            postArray.unshift(post)
            renderPosts()
            inputEl.value = ""
            postEl.value = ""
        })

})


