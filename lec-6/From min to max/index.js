function ans() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)

    if (a == b) {
        console.log("this is equal");
    }

    else if (a > b) {
        for (let i = b; i < a; i++) {
            console.log(i);
        }
    }
    else {
        for (let i = a; i < b; i++) {
            console.log(i);
        }
    }
}