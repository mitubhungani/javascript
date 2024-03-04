function ans() {
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)

    for (let i = 0; i <= a; i++) {
        if (i % b == 0) {
            console.log(i);
        }
    }
}