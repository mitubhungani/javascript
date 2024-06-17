let string = "w#w###mmmw#w#";

class hasOne {
  constructor(size) {
    this.str = new Array();
    this.index = -1;
    this.size = size;
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
    return this.str[this.length];
  }
  isEmpty() {
    if (this.index == -1) {
      return true;
    } else {
      return false;
    }
  }
}
const check = (strs) => {
  let hi = new hasOne(strs.length);
  for (let i = 0; i < strs.length; i++) {
    if (strs[i] !== "#") {
      hi.push(strs[i]);
    } else {
      hi.pop();
    }
  }
  return hi.isEmpty();
};
console.log(check(string));
