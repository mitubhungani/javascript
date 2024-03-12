let n = 1;

const counter1 = () => {
    const data1 = document.querySelector('.count').innerHTML
    count = 0;
    counts = 1;
    let firstloop = setInterval(() => {
        count = count + 1;
        counts++;
        document.querySelector('.count').innerHTML = count;
        if (data1 <= count) {
            clearInterval(firstloop)
            document.querySelector('.count').innerHTML = data1;
            counter2();
        }

    }, 10)

}
const counter2 = () => {
    const data2 = document.querySelector('.count2').innerHTML;

    count = 0;
    let secondloop = setInterval(() => {
        if (data2 <= 1000) {
            count++;
        }
        document.querySelector('.count2').innerHTML = count;
        if (data2 <= count) {
            clearInterval(secondloop);
            document.querySelector('.count2').innerHTML = data2;
            counter3();
        }
    }, 10)

}
const counter3 = () => {
    const data3 = document.querySelector('.count3').innerHTML
    count = 0;
    let thirdloop = setInterval(() => {
        if (data3 <= 1000) {
            count++;
        }
        document.querySelector('.count3').innerHTML = count;
        if (data3 <= count) {
            clearInterval(thirdloop)
            document.querySelector('.count3').innerHTML = data3;
            counter4();
        }
    }, 10)

}

const show = () => {

    counter1()
}
setTimeout(show, 100)