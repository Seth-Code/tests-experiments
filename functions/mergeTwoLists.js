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
  let remainder = null;
  let newNode = null;

  let l1Node = l1;
  let l2Node = l2;
  while (!remainder) {
    const smaller = Math.min(l1Node.val, l2Node.val);
    const bigger = Math.max(l1Node.val, l2Node.val);

    if (smaller === l1Node.val) {
      nextNode = l1Node.next;
    }
    if (smaller === l2Node.val) {
      nextNode = l2Node.next;
    }

    // if (nextNode === null) {
    //   const nextSmaller =
    // }

    l1Node = l1Node.next;
    l2Node = l2Node.next;

    console.log("\n", l1Node, l2Node);

    if (l1Node === null) {
      remainder = l2Node;
    }
    if (l2Node === null) {
      remainder = l1Node;
    }

    if (!remainder) {
      nextSmaller = Math.min(bigger, nextNode.val);
      newNode = new Node(smaller, nextSmaller);
    } else {
      newNode = new Node(smaller);
    }

    if (!head) {
      head = newNode;
    }
  }

  currentNode.next = remainder;

  return head;
}

const list1 = makeTestList([1, 2, 4]);
const list2 = makeTestList([1, 3, 4]);

console.log(mergeTwoLists(list1, list2));
