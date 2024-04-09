class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(element) {
    this.item.push(element);
  }
  dequeue() {
    return this.item.shift(); // remove first element of the array.
  }

  isEmpty() {
    return this.item.length === 0;
  }
  peek() {
    if (!this.isEmpty) {
      return this.item[0];
    }
    return null;
  }
  size() {
    return this.item.length;
  }
  print() {
    console.log(this.item.toString());
  }
}

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(9);
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
