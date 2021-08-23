class LinkedList {
  constructor() {
    this.first = null;
    this.last = null;
  }

  append(value) {
    if (!this.last) {
      this.first = this.last = new Node(value);
    } else {
      let oldLast = this.last;
      this.last = new Node(value);
      oldLast.next = this.last;
      this.last.prev = oldLast;
    }
  }

  prepend(value) {
    if (!this.first) {
      this.first = this.last = new Node(value);
    } else {
      let oldFirst = this.first;
      this.first = new Node(value);
      oldFirst.prev = this.first;
      this.first.next = oldFirst;
    }
  }

  deleteHead() {
    if (!this.first) {
      return null;
    } else {
      let removedHead = this.first;

      if (this.first === this.last) {
        this.first = this.last = null;
      } else {
        this.first = this.first.next;
        this.first.prev = null;
      }
      return removedHead.value;
    }
  }

  deleteTail() {
    if (!this.last) {
      return null;
    } else {
      let removedTail = this.last;

      if (this.first === this.last) {
        this.first = this.last = null;
      } else {
        this.last = this.last.prev;
        this.last.next = null;
      }
      return removedTail.value;
    }
  }

  search(value) {
    let currentNode = this.first;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(0);
list.prepend(-1);

console.log(list.search(2));
