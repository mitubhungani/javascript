<<<<<<< HEAD
const one = (data) => {

    data.map((ele) => {



        let title = document.createElement('p')
        title.setAttribute('id', 'title')
        title.innerHTML = ele.title

        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.src = ele.thumbnail

        let disc = document.createElement('p')
        disc.setAttribute('id', 'disc')
        disc.innerHTML = ele.description

        let price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.innerHTML = `Rs ${ele.price}`



        let div = document.createElement('div')
        div.setAttribute('id', 'inner-box')
        div.append(title, img, disc, price)

        document.querySelector('.box').append(div)
    })
}

fetch('https://dummyjson.com/products')
    .then(res => res.json())
=======
const one = (data) => {

    data.map((ele) => {



        let title = document.createElement('p')
        title.setAttribute('id', 'title')
        title.innerHTML = ele.title

        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        img.src = ele.thumbnail

        let disc = document.createElement('p')
        disc.setAttribute('id', 'disc')
        disc.innerHTML = ele.description

        let price = document.createElement('p')
        price.setAttribute('id', 'price')
        price.innerHTML = `Rs ${ele.price}`



        let div = document.createElement('div')
        div.setAttribute('id', 'inner-box')
        div.append(title, img, disc, price)

        document.querySelector('.box').append(div)
    })
}

fetch('https://dummyjson.com/products')
    .then(res => res.json())
>>>>>>> a72f5355292d6af235eba494759521caa2724fb5
    .then((data) => one(data.products))