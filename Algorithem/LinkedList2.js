console.log("Linked List");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.size++;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = node;
      this.size++;
    }
  }

  printList() {
    if (this.isEmpty()) console.log("List is Empty....");
    else {
      let pointer = this.head;
      let listValue = "";
      while (pointer) {
        listValue += `${pointer.value} `;
        console.log(`linkedlist is:[` + pointer.value + "]");
        pointer = pointer.next;
      }
      console.log(listValue);
    }
  }
}

const list = new LinkedList();
console.log(list.isEmpty());
console.log(list.getSize());
list.prepend(10);
list.prepend(11);
list.prepend(12);
list.prepend(13);
list.append(14);
list.append(15);
list.append(16);
list.append(16);
console.log(list.isEmpty());
console.log(list.getSize());
list.printList();
