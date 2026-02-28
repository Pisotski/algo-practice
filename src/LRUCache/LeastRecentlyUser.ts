import { NodeClass } from ".";

// An LRU Cache is a data structure that stores a limited number of key-value pairs. When the cache reaches its capacity and a new key is added, it evicts the least recently used (oldest) key to make space.

// The cache must support O(1) operations for:
// 	1.	get(key) – Returns the value associated with the key if it exists; otherwise, returns -1. Accessing a key makes it recently used.
// 	2.	put(key, value) – Inserts or updates the key-value pair. If adding the new key exceeds the cache capacity, evict the least recently used key first.

// ⸻

// Key Properties
// 	•	Fixed capacity: Cannot exceed a set number of entries.
// 	•	Fast access: Both get and put must run in O(1) time.
// 	•	Ordering: Maintains the order of usage; the least recently used entry is removed when full.

// LRUCache cache = new LRUCache(2); // capacity = 2

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1, now 2 is LRU
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

export default class LRUCache<K, V> {
  private head: NodeClass<K, V> | null;
  private tail: NodeClass<K, V> | null;
  private capacity: number;
  private size: number;
  private map: Map<K, NodeClass<K, V>>;

  constructor(capacity: number) {
    this.head = null;
    this.tail = null;
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map<K, NodeClass<K, V>>();
  }

  get(key: K): V | -1 {
    // placeholder
    return -1;
  }

  put(key: K, value: V): void {
    // placeholder
  }

  private moveToTail(node: NodeClass<K, V>): void {
    // placeholder
  }

  private removeNode(node: NodeClass<K, V>): void {
    // placeholder
  }

  private addNodeToTail(node: NodeClass<K, V>): void {
    // placeholder
  }

  private removeHead(): void {
    // placeholder
  }

  clear(): void {
    // placeholder
  }
}
