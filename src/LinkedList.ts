class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number) : void {
    const node = new Node(data);

    // If there is no Node in head, use it as first element in head.
    if (!this.head) {
      this.head = node;
      return;
    }

    // Loop untill the tail.next property is null.
    let tail = this.head;
    while(tail.next) {
      tail = tail.next
    }

    // Link the new Node to the end of linked list.
    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let length = 1;
    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }

    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while(node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty')
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }
}