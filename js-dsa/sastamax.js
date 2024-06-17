let arrayssss = [10, 20, 1, 50, 5, 3, 5, 100]

class hasOne {
    constructor(size) {
        this.str = new Array();
        this.index = -1;
        this.size = size
    }
    push(eles) {
        this.index++;
        this.str[this.index] = eles;
    }
    pop() {
        this.str[this.index] = null;
        this.index--;
    }
    peak() {
        return this.str[this.length]
    }
    isEmpty() {
        if (this.index == -1) {
            return true;
        }
        else {
            return false;
        }
    }

}

const check = (strs) => {
    let hi = new hasOne(strs.length)
    for (let i = 0; i < strs.length; i++) {
        let count = 0
        for (let j = i; j < strs.length; j++) {
            if (strs[i] < strs[j]) {
                if (count == 0) {
                    hi.push(strs[j])
                    count++;
                }
            }
            else if (j == strs.length - 1 && count == 0) {
                hi.push(-1)
                count++;
            }
        }
    }
    return hi.str;
}
console.log(check(arrayssss));