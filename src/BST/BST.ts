import { TreeNode } from ".";

// Binary Search Tree
export default class BST<T> {
  root: TreeNode<T> | null = null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value: T): void {
    // Pseudocode:
    // 1. Create a new node with the given value.
    const newNode = new TreeNode(value);
    // 2. If root is null, set root to the new node and return.
    if (this.root === null) {
      this.root = newNode;
      return;
    }

    // 3. Start at the root and iterate:
    let currentNode = this.root;
    //    a. If value is less than current node value, go left.
    while (currentNode) {
      if (currentNode.value === value) {
        return;
      }
      if (currentNode.value > value) {
        //       - If left child is null, insert new node there and stop.
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
        //    b. Otherwise, go right.
      } else {
        //       - If right child is null, insert new node there and stop.
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // Search for a value in the BST
  search(value: T): boolean {
    // Pseudocode:
    // 1. Start at the root.
    let currNode = this.root;
    // 2. While current node is not null:
    while (currNode) {
      //    a. If value equals current node value, return true.
      if (currNode.value === value) return true;
      //    b. If value is less than current node value, move to left child.
      if (currNode.value > value) {
        currNode = currNode.left;
      } else {
        //    c. Otherwise, move to right child.
        currNode = currNode.right;
      }
    }
    // 3. If loop ends, value was not found; return false.
    return false;
  }

  // Delete a value from the BST
  delete(value: T): void {
    // Pseudocode:
    // 1. Find the node to delete and keep track of its parent.
    // 2. Handle three cases:
    //    a. Node has no children (leaf): remove it by updating parent's pointer.
    //    b. Node has one child: replace node with its child.
    //    c. Node has two children:
    //       - Find the inorder successor (minimum node in right subtree).
    //       - Copy successor's value into current node.
    //       - Delete the successor node.
  }

  // Find the minimum value in the BST
  findMin(): T | null {
    // Pseudocode:
    // 1. If root is null, return null.
    // 2. Start at root.
    // 3. While current node has a left child, move left.
    // 4. Return current node value.
    return null;
  }

  // Find the maximum value in the BST
  findMax(): T | null {
    // Pseudocode:
    // 1. If root is null, return null.
    // 2. Start at root.
    // 3. While current node has a right child, move right.
    // 4. Return current node value.
    return null;
  }

  // In-order traversal: left -> root -> right
  inorderTraversal(callback: (value: T) => void): void {
    // Pseudocode (DFS - Left, Root, Right):
    // 1. Define a recursive helper function traverse(node):
    //    a. If node is null, return.
    //    b. Traverse left subtree.
    //    c. Call callback with node value.
    //    d. Traverse right subtree.
    // 2. Call traverse(root).
  }

  // Pre-order traversal: root -> left -> right
  preorderTraversal(callback: (value: T) => void): void {
    // Pseudocode (DFS - Root, Left, Right):
    // 1. Define recursive helper traverse(node):
    //    a. If node is null, return.
    //    b. Call callback with node value.
    //    c. Traverse left subtree.
    //    d. Traverse right subtree.
    // 2. Call traverse(root).
  }

  // Post-order traversal: left -> right -> root
  postorderTraversal(callback: (value: T) => void): void {
    // Pseudocode (DFS - Left, Right, Root):
    // 1. Define recursive helper traverse(node):
    //    a. If node is null, return.
    //    b. Traverse left subtree.
    //    c. Traverse right subtree.
    //    d. Call callback with node value.
    // 2. Call traverse(root).
  }

  // Optional: Get height of the BST
  getHeight(): number {
    // Pseudocode:
    // 1. Define recursive helper height(node):
    //    a. If node is null, return -1 (or 0 depending on definition).
    //    b. Recursively get height of left subtree.
    //    c. Recursively get height of right subtree.
    //    d. Return max(leftHeight, rightHeight) + 1.
    // 2. Return height(root).
    return 0;
  }

  // Optional: Check if BST is balanced
  isBalanced(): boolean {
    // Pseudocode:
    // 1. Define recursive helper check(node):
    //    a. If node is null, return 0.
    //    b. Get left subtree height.
    //    c. Get right subtree height.
    //    d. If absolute difference between heights > 1, tree is not balanced.
    //    e. Return max(leftHeight, rightHeight) + 1.
    // 2. Call helper on root and track if any imbalance was found.
    // 3. Return true if balanced, otherwise false.
    return false;
  }
}
