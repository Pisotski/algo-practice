import { TreeNode } from ".";

// Binary Search Tree
export default class BST<T> {
  root: TreeNode<T> | null = null;

  constructor() {
    this.root = null;
  }

  // Insert a value into the BST
  insert(value: T): void {
    // Implementation later
  }

  // Search for a value in the BST
  search(value: T): boolean {
    // Implementation later
    return false;
  }

  // Delete a value from the BST
  delete(value: T): void {
    // Implementation later
  }

  // Find the minimum value in the BST
  findMin(): T | null {
    // Implementation later
    return null;
  }

  // Find the maximum value in the BST
  findMax(): T | null {
    // Implementation later
    return null;
  }

  // In-order traversal: left -> root -> right
  inorderTraversal(callback: (value: T) => void): void {
    // Implementation later
  }

  // Pre-order traversal: root -> left -> right
  preorderTraversal(callback: (value: T) => void): void {
    // Implementation later
  }

  // Post-order traversal: left -> right -> root
  postorderTraversal(callback: (value: T) => void): void {
    // Implementation later
  }

  // Optional: Get height of the BST
  getHeight(): number {
    // Implementation later
    return 0;
  }

  // Optional: Check if BST is balanced
  isBalanced(): boolean {
    // Implementation later
    return false;
  }
}
