export default class NodeClass<K, V> {
  key: K;
  value: V;
  next: NodeClass<K, V> | null;
  prev: NodeClass<K, V> | null;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
