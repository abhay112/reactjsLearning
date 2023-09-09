class Node {
  constructor(value) {
    this.value = value;
    this.prev = null; // Added prev pointer
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  
  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail; // Set the prev pointer
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode; // Set the prev pointer
    this.head = newNode;
    this.length++;
    return this;
  }
  
  insert(value, index) {
    if (this.length <= index) {
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
          newNode.prev = currentNode; // Set the prev pointer
          currentNode.next.prev = newNode; // Update next node's prev pointer
          currentNode.next = newNode;
          this.length++;
          break;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }
    }
  }
  
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null; // Update the prev pointer of the new head
      this.length--;
      if (this.length === 0) {
        this.tail = null;
      }
    } else if (index >= this.length) {
      console.log('Element not found');
    } else {
      let currentNode = this.head;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.next;
        currentIndex++;
      }
      currentNode.next = currentNode.next.next;
      if (currentNode.next) {
        currentNode.next.prev = currentNode; // Update the next node's prev pointer
      } else {
        this.tail = currentNode; // Update the tail if removing the last node
      }
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
    console.log(values.join(' <-> '));
  }
}

const myList1 = new DoublyLinkedList(2);
myList1.append(3);
myList1.append(4);
myList1.append(5);
myList1.prepend(1);
myList1.insert(6, 2);
myList1.remove(3);
myList1.printList(); // This will print: 1 <-> 2 <-> 3 <-> 5
