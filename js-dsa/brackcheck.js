let string = "{}{{}"

class Brackcheck {
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
       return this.str[this.index]
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
    let hi = new Brackcheck(strs.length)
    for (let i = 0; i < strs.length; i++) {
        if (strs[i] == '{' || strs[i] == '(' || strs[i] == '[') {
            hi.push(strs[i]);
        }
        else if(strs[i] == '}' || strs[i] == ')' || strs[i] == ']'){
            if(hi.peak()=='{' && strs[i]=='}'){
                hi.pop()
            }
            else if(hi.peak()=='[' && strs[i]==']'){
                hi.pop()
            }
            else if(hi.peak()=='(' && strs[i]==')'){
                hi.pop()
            }
        }
       
    }
    console.log(hi.isEmpty());
}
check(string)