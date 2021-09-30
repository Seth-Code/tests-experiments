function makeTestList(array) {
  class Node {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  let head = null;
  let prevNode = null;
  for (let i = 0; i < array.length; i++) {
    const thisNode = new Node(array[i]);
    if (!head) {
      head = thisNode;
    }
    if (prevNode) {
      prevNode.next = thisNode;
    }
    prevNode = thisNode;
  }
  return head;
}

function mergeTwoLists(l1, l2) {
  class Node {
    constructor(val, next) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }

  let head = null;
  let nextNode = null;
  let listEnded = false;

  while (l1 || l2) {
    let l1Node = l1;
    let l2Node = l2;
    const smaller = Math.min(l1Node.val, l2Node.val);
    const bigger = Math.max(l1Node.val, l2Node.val);

    if (smaller === l1Node.val) {
      nextNode = l1Node.next;
      if (nextNode === null) {
        nextNode = l2Node.next;
      }
    }
    if (smaller === l2Node.val) {
      nextNode = l2Node.next;
      if (nextNode === null) {
        nextNode = l1Node.next;
      }
    }

    // if (nextNode === null) {
    //   const nextSmaller =
    // }

    const nextSmaller = Math.min(bigger, nextNode.val);
    const newNode = new Node(smaller, nextSmaller);

    if (!head) {
      head = newNode;
    }

    l1 = l1.next;
    l2 = l2.next;

    // if (l1 === null) {
    //   remainder = l2;
    // }
    // if (l2 === null) {
    //   remainder = l1;
    // }

    // if (remainder) {

    // }
  }

  return head;
}

const list1 = makeTestList([1, 2, 4]);
const list2 = makeTestList([1, 3, 4]);

console.log(mergeTwoLists(list1, list2));
