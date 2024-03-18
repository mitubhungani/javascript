let posts = JSON.parse(localStorage.getItem('index')) || [];
uimeke();
const intaker = (e) => {
    e.preventDefault()
    let title = document.getElementById('title-i').value;
    let img = document.getElementById('img-i').value;
    let desc = document.getElementById('con-i').value;

    let post = {
        title: title,
        img: img,
        desc: desc
    }

    posts.push(post);
    console.log(posts);

    localStorage.setItem("index", JSON.stringify(posts))
    uimeke()
}



function uimeke() {
    document.querySelector('#box-1').innerHTML = ""
    posts.map((ele, i) => {
        let box = document.createElement('div')
        box.setAttribute('id', 'box')

        let box1 = document.createElement('div')
        box1.setAttribute('id', 'box-1')

        let innerbox = document.createElement('div')
        innerbox.setAttribute('id', 'inner-box')

        let title = document.createElement('h1')
        title.setAttribute('id', 'title')
        title.innerHTML = ele.title

        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.src = ele.img

        let desc = document.createElement('p')
        desc.setAttribute('id', 'desc')
        desc.innerHTML = ele.desc

        let btn = document.createElement('div')
        btn.setAttribute('id', 'btn')

        let sub = document.createElement('button')
        sub.setAttribute('id', 'sub')
        sub.innerHTML = "Like"

        let del = document.createElement('button')
        del.setAttribute('id', 'del')
        del.innerHTML = "Delete"

        del.addEventListener('click', () => {
            posts.splice(i, 1);

            localStorage.setItem("index", JSON.stringify(posts))
            uimeke();
        })

        sub.addEventListener('click', () => {
            alert("You like post")
        })

        btn.append(sub, del)
        innerbox.append(title, img, desc, btn)
        box1.append(innerbox)
        box.append(box1)
        document.querySelector('#box-1').append(innerbox)
    })

}

document.getElementById('input-box').addEventListener('submit', intaker)