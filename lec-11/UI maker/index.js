let products = [];


const ui = () => {
    document.getElementById('box').innerHTML = ""
    products.map((ele, i) => {
        let box = document.createElement('box')
        box.setAttribute('id', 'box1')
        box.style.margin = "20px"

        let p_img = document.createElement('img');
        p_img.src = ele.img
        let p_title = document.createElement('p');
        p_title.innerHTML = ele.title
        p_title.style.color = "red"
        p_title.style.textAlign = "center"
        let p_price = document.createElement('p');
        p_price.innerHTML = ele.price
        p_price.style.color = "red"
        p_price.style.textAlign = "center"

        let delbtn = document.createElement('button')
        delbtn.innerHTML = 'delete'
        delbtn.setAttribute('id', 'delete')
        delbtn.addEventListener('click', () => {
            products.splice(i, 1)
            ui()
        })

        box.append(p_img, p_title, p_price, delbtn);
        document.getElementById('box').append(box)

    })
}

const crateproduct = (e) => {
    e.preventDefault();

    let title = document.getElementById('title').value;
    let img = document.getElementById('img').value;
    let price = parseInt(document.getElementById('price').value);

    if (title.length <= 0) {
        alert("must fill title")
        return
    }

    if (title.length < 2) {
        alert("enter 2 value")
        return
    }

    if (price < 1) {
        alert("enter must be above 1")
        return
    }


    let product = {
        title: title,
        img: img,
        price: price
    }
    products.push(product)
    console.log(products)
    ui();
}

document.getElementById('main').addEventListener('submit', crateproduct)