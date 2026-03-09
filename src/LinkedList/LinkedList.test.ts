import { LinkedList } from "./LinkedList";
import { LLNode } from "./Node";
import { describe, it, expect, beforeEach } from "vitest";

describe("Linked List class", () => {
  let linkedList: LinkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it(`should be defined, and have following properties: 
    append, delete, reverse, toArray
    `, () => {
    expect(linkedList).toBeDefined();
    expect(linkedList.append).toBeDefined();
    expect(linkedList.delete).toBeDefined();
    expect(linkedList.reverse).toBeDefined();
    expect(linkedList.toArray).toBeDefined();
  });

  it("should head and tail", () => {
    expect(linkedList?.head).toBeNull();
    expect(linkedList?.tail).toBeNull();
  });

  it("should add 5 and assign it to head ", () => {
    linkedList.append(5);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(5);
    expect(linkedList?.head?.next).toBeNull();
    expect(linkedList?.toArray()).toEqual([5]);
    expect(linkedList?.size).toBe(1);
  });

  it("should add 3 and assign it to tail", () => {
    linkedList.append(5);
    linkedList.append(3);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(3);
    expect(linkedList?.head?.next?.value).toBe(3);
    expect(linkedList?.size).toBe(2);
    expect(linkedList.toArray()).toEqual([5, 3]);
  });

  it("should add 5, 3, 67, 99, -0 and assign be [5, 3, 67, 99, -0]", () => {
    linkedList.append(5);
    linkedList.append(3);
    linkedList.append(67);
    linkedList.append(99);
    linkedList.append(-0);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(-0);
    expect(linkedList?.size).toBe(5);
    expect(linkedList.toArray()).toEqual([5, 3, 67, 99, -0]);
  });

  it("should delete value and return a boolean", () => {
    linkedList.append(5);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(5);
    expect(linkedList.delete(5)).toBeTruthy();
    expect(linkedList.delete(5)).toBeFalsy();
    expect(linkedList?.head).toBeNull();
    expect(linkedList?.tail).toBeNull();
  });

  it("should add 67 then -0 from LL [5, 3, 67, 99, -0]", () => {
    linkedList.append(5);
    linkedList.append(3);
    linkedList.append(67);
    linkedList.append(99);
    linkedList.append(-0);
    linkedList.delete(67);
    expect(linkedList.toArray()).toEqual([5, 3, 99, -0]);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(-0);
    linkedList.delete(-0);
    expect(linkedList.toArray()).toEqual([5, 3, 99]);
    expect(linkedList?.head?.value).toBe(5);
    expect(linkedList?.tail?.value).toBe(99);
    linkedList.delete(5);
    expect(linkedList.toArray()).toEqual([3, 99]);
    expect(linkedList?.head?.value).toBe(3);
    expect(linkedList?.tail?.value).toBe(99);
  });

  it("should reverse LL with one or many values", () => {
    linkedList.append(5);
    linkedList.reverse();
    expect(linkedList.toArray()).toEqual([5]);
    expect(linkedList.head?.value).toBe(5);
    expect(linkedList.tail?.value).toBe(5);

    linkedList.append(3);
    linkedList.append(67);
    linkedList.append(99);
    linkedList.append(-0);
    linkedList.reverse();

    expect(linkedList.toArray()).toEqual([5, 3, 67, 99, -0].reverse());
    expect(linkedList.head?.value).toBe(-0);
    expect(linkedList.tail?.value).toBe(5);
  });

  it("should reverse LL with one or many values with stack", () => {
    linkedList.append(5);
    linkedList.reverseWithStack();
    expect(linkedList.toArray()).toEqual([5]);
    expect(linkedList.head?.value).toBe(5);
    expect(linkedList.tail?.value).toBe(5);

    linkedList.append(3);
    linkedList.append(67);
    linkedList.append(99);
    linkedList.append(-0);
    linkedList.reverseWithStack();

    expect(linkedList.toArray()).toEqual([5, 3, 67, 99, -0].reverse());
    expect(linkedList.head?.value).toBe(-0);
    expect(linkedList.tail?.value).toBe(5);
  });
});
