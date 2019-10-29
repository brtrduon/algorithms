//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Node {
  constructor(next = null, prev = null, val = null) {
    this.next = next
    this.prev = prev
    this.val = val
  }
}

export class LinkedList {
  constructor(head = null, tail = null) {
    this.head = head
    this.tail = tail
  }

  push(val) {
    if (!this.head) {
      const newNode = new Node(val, null, null)
      this.head = newNode
      this.tail = newNode;
    }

    else {
      const newNode = new Node(val, this.tail, null)
      this.tail.next = newNode;
    }
  }

  pop() {
    if (!this.head) {
      null
    }

    else {
      
    }
  }

  shift() {
    
  }

  unshift() {
    
  }

  delete() {
    
  }

  count() {
    
  }
}
