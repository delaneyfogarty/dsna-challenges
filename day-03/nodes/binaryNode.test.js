class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node < this.value && this.left) {
      this.left.add(node);
    } else if (node < this.value) {
      this.left = new BinaryTreeNode(node);
    }

    if (node > this.value && this.right) {
      this.right.add(node);
    } else if (node > this.value) {
      this.right = new BinaryTreeNode(node);
    }
  }
}

test('add node', () => {
  // initialize a root node
  // insert a node to the left of that root node
  // test value of the left node is less than that root node;
});
