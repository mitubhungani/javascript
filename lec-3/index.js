alert("Welcome")

let a = 10
let b = 10
let c = 10

let sum = a + b + c

let d = 10
let e = 10

let div = d / e

let f = 10
let g = 10
let h = 10

let sub = f - g - h

let i = 10
let j = 10
let k = 10

let mul = i * j * k

let l = 10
let m = 10

let mod = l % m

document.getElementById("a").innerHTML = `sum of ${a} + ${b} + ${c} is ${sum}`;

document.getElementById("b").innerHTML = `div of ${d} / ${e} is ${div}`;

document.getElementById("c").innerHTML = `sub of ${f} - ${g} - ${h} is ${sub}`;

document.getElementById("d").innerHTML = `mul of ${i} * ${j} * ${k} is ${mul}`;

document.getElementById("e").innerHTML = `mod of ${l} % ${m} is ${mod}`;