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
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      //   let list = [];
      //   let indent = this.head;
      //   for (let i = 0; i < this.size; i++) {
      //     list[i] = indent.value;
      //     indent = indent.next;
      //   }
      //   console.log(list);
      let current = this.head;
      let listValues = "";
      while (current) {
        listValues += ` ${current.value}`;
        current = current.next;
      }
      console.log(listValues);
    }
  }
}

const list = new LinkedList();

console.log("list is Empty?", list.isEmpty());
console.log("list size:", list.getSize());
list.print();
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(140);
list.print();
