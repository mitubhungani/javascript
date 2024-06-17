class num {
    constructor(a, b, c = 0) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    ans() {
        console.log(this.c);
    }

    sum() {
        this.c = this.a + this.b;
        this.ans();
    }

    sub() {
        this.c = this.a - this.b;
        this.ans();
    }

    mult() {
        this.c = this.a * this.b;
        this.ans();
    }

    div() {
        this.c = this.a / this.b;
        this.ans();
    }
}

// ----------------------------------------------------------

class num1 extends num {
    constructor(a, b, d, c = 0) {
        super(a, b, c = 0)
        this.d = d;
    }
    ans() {
        console.log(this.c);
    }

    sum() {
        this.c = this.a + this.b + this.d;
        this.ans();
    }

    sub() {
        this.c = this.a - this.b - this.d;
        this.ans();
    }

    mult() {
        this.c = this.a * this.b * this.d;
        this.ans();
    }

    div() {
        this.c = this.a / this.b / this.d;
        this.ans();
    }
}


// --------------------------------------------------------------------------------------


class num2 extends num1 {
    constructor(arr) {
        super(arr[0], arr[1], arr[2]);
        this.arr = arr
    }
    sum() {
        let sum = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sum += this.arr[i];
        }
        console.log(sum);
    }

    mult() {
        let mult = 1;
        for (let i = 0; i < this.arr.length; i++) {
            mult *= this.arr[i];
        }
        console.log((mult));
    }

}


let h = new num(1, 1);
h.sum();

let m = new num1(2, 2, 2);
m.mult();

let n = new num2([1, 1, 1])
n.sum();