import { BST } from ".";
import { describe, test, expect, beforeEach } from "vitest";

function buildTree(values: number[]) {
  const tree = new BST<number>();
  values.forEach((v) => tree.insert(v));
  return tree;
}

describe("Binary Search Tree", () => {
  let tree: BST<number>;
  describe("insert", () => {
    beforeEach(() => {
      tree = new BST();
    });
    test("should not insert duplicate value", () => {
      tree.insert(5);
      tree.insert(5);
      tree.insert(5);
      const node = tree.root;
      expect(node?.value).toBe(5);
      expect(node?.left).toBeNull();
      expect(node?.right).toBeNull();
    });
    test("should insert left", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(1);
      const node = tree.root;
      expect(node?.value).toBe(5);
      expect(node?.left?.value).toBe(3);
      expect(node?.left?.left?.value).toBe(1);
      expect(node?.right).toBeNull();
    });
    test("should insert right", () => {
      tree.insert(5);
      tree.insert(7);
      tree.insert(9);
      const node = tree.root;
      expect(node?.value).toBe(5);
      expect(node?.right?.value).toBe(7);
      expect(node?.right?.right?.value).toBe(9);
      expect(node?.left).toBeNull();
    });
    test("should insert values into correct positions in mixed order", () => {
      tree.insert(5);
      tree.insert(3);
      tree.insert(1);
      tree.insert(7);
      tree.insert(9);
      tree.insert(4);
      tree.insert(6);

      const node = tree.root;
      expect(node?.left?.right?.value).toBe(4);
      expect(node?.right?.left?.value).toBe(6);
    });
  });
  describe("search", () => {
    tree = buildTree([5, 3, 1, 7, 9, 4, 6]);
    test("should find existing values and return false for missing ones", () => {
      expect(tree.search(4)).toBeTruthy();
      expect(tree.search(1)).toBeTruthy();
      expect(tree.search(0)).toBeFalsy();
      expect(tree.search(10)).toBeFalsy();
    });
  });
});
