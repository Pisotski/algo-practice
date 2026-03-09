export class LLNode {
  value: number;
  next: LLNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}
