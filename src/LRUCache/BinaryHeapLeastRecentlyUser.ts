import { NodeClass } from ".";

// The BinaryHeapLRU is a Least Recently Used (LRU) cache implementation that uses a binary heap to track the least recently used elements. This approach allows the cache to efficiently identify and remove the “oldest” or least recently accessed item when the cache reaches its capacity.

// Key points:
// 	•	Capacity-limited cache: Stores up to a fixed number of key-value pairs.
// 	•	Map for O(1) lookup: A hash map (Map<K, NodeClass<K, V>>) is used to quickly locate nodes by key.
// 	•	Heap for ordering: A binary heap (heap: NodeClass<K, V>[]) keeps track of usage order or priority for eviction.
// 	•	NodeClass: Each cache entry is represented by a NodeClass<K, V> node, which can also form a doubly linked structure if needed.
// 	•	Operations:
// 	•	get(key): Retrieve the value for a key and update its usage in the heap.
// 	•	put(key, value): Insert or update a key-value pair and evict the least recently used item if at capacity.
// 	•	removeMin(): Remove the least recently used item from the heap.
// 	•	heapifyUp(index), heapifyDown(index): Maintain heap properties after insertion or deletion.
// 	•	clear(): Reset the cache completely.

class BinaryHeapLRU<K, V> {
  capacity: number;
  map: Map<K, NodeClass<K, V>>;
  heap: NodeClass<K, V>[];

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
    this.heap = [];
  }

  get(key: K): V | undefined {
    // TODO: implement get
    return undefined;
  }

  put(key: K, value: V): void {
    // TODO: implement put
  }

  removeMin(): void {
    // TODO: implement removeMin
  }

  heapifyUp(index: number): void {
    // TODO: implement heapifyUp
  }

  heapifyDown(index: number): void {
    // TODO: implement heapifyDown
  }

  clear(): void {
    // TODO: implement clear
  }
}

export default BinaryHeapLRU;
