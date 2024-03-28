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
    .then((data) => one(data.products))