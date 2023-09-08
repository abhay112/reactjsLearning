  
  class Node {
    constructor(value){
      this.value=value
      this.next=null
    }
  }

class LinkedList {
  constructor(value){
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode= new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value){
   const newNode= new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  insert(value, index) {
    if(this.length <=index){
      this.append(value);
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;
      let currentIndex = 0;
        while (currentNode) {
          if (currentIndex === index - 1) {
            newNode.next = currentNode.next;
            currentNode.next = newNode;
            this.length++;
            break;
          }
          currentNode = currentNode.next;
          currentIndex++;
        }
      }
    }
  remove(index){
    if(index === 0 ){
      this.head = this.head.next;
      this.length--;
      if(this.length === 0){
        this.tail = null;
      }
      
      
    }
    else if(index >= this.length){
      console.log('element not founr');
    }else{
      let currentNode = this.head;
      let currentIndex = 0;
      while(currentIndex < index-1){
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }
  printList() {
    const values = [];
    let currentNode = this.head;
    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(values.join(' -> '));
  }
}

const myList1 = new LinkedList(2);
myList1.append(3);
myList1.append(4);
myList1.append(5);
myList1.prepend(1);
myList1.insert(6,21);
myList1.remove(3);
myList1.printList();
