function sum() {
    let a = parseFloat(document.getElementById('a').value)
    let sum = 0;
    for (let i = 0; i <= a; i++) {
        if (i % 2 == 0) {
            sum += i
        }
    }
    document.getElementById('b').innerHTML = sum
}