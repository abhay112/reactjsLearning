class Array {
  constructor(){
    this.length = 0;
    this.data = {}
  }
  get(index){
    return this.data[length];
  }
  push(item){
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  
  pop(){
    this.lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return this.lastItem;
  }
}
const myArr = new Array();
myArr.push(10);
myArr.push(11);
myArr.push(12);
myArr.push(13);
console.log(myArr);

console.log(myArr.pop());