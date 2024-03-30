let blog = JSON.parse(localStorage.getItem("blogs")) || []

const data = (e) => {
    e.preventDefault();
    let data = document.getElementById("title").value
    console.log(data);
    let hi = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value,
        Content: document.getElementById("Content").value,
        Country: document.getElementById("Country").value,
    }

    console.log(hi)
    blog.push(hi)
    localStorage.setItem("blogs", JSON.stringify(blog))
    window.location.href = "../html/index.html"
}

document.querySelector(".add-form").addEventListener("submit", data)