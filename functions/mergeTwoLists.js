//constructor is bad
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
  if (!l1) return l2;
  if (!l2) return l1;
  let currL1 = l1;
  let currL2 = l2;

  let head;
  if (l1.val < l2.val) {
    head = l1;
    currL1 = l1.next;
  } else {
    head = l2;
    currL2 = l2.next;
  }

  let tail = head;

  while (currL1 || currL2) {
    if (!currL1) {
      tail.next = currL2;
      break;
    }
    if (!currL2) {
      tail.next = currL1;
      break;
    }

    if (currL1.val < currL2.val) {
      tail.next = currL1;
      tail = tail.next;
      currL1 = currL1.next;
    } else {
      tail.next = currL2;
      tail = tail.next;
      currL2 = currL2.next;
    }
  }

  return head;
}

const list1 = makeTestList([1, 2, 4]);
const list2 = makeTestList([1, 3, 4]);

console.log(mergeTwoLists(list1, list2));

// //bad version, learning exercize
// function mergeTwoLists(l1, l2) {
//   class Node {
//     constructor(val, next) {
//       this.val = val === undefined ? 0 : val;
//       this.next = next === undefined ? null : next;
//     }
//   }

//   let head = null;
//   let nextNode = null;
//   let remainder = null;
//   let newNode = null;

//   let l1Node = l1;
//   let l2Node = l2;
//   while (!remainder) {
//     const smaller = Math.min(l1Node.val, l2Node.val);
//     const bigger = Math.max(l1Node.val, l2Node.val);

//     if (smaller === l1Node.val) {
//       nextNode = l1Node.next;
//     }
//     if (smaller === l2Node.val) {
//       nextNode = l2Node.next;
//     }

//     // if (nextNode === null) {
//     //   const nextSmaller =
//     // }

//     l1Node = l1Node.next;
//     l2Node = l2Node.next;

//     console.log("\n", l1Node, l2Node);

//     if (l1Node === null) {
//       remainder = l2Node;
//     }
//     if (l2Node === null) {
//       remainder = l1Node;
//     }

//     if (!remainder) {
//       nextSmaller = Math.min(bigger, nextNode.val);
//       newNode = new Node(smaller, nextSmaller);
//     } else {
//       newNode = new Node(smaller);
//     }

//     if (!head) {
//       head = newNode;
//     }
//   }

//   currentNode.next = remainder;
//   return head;
// }
