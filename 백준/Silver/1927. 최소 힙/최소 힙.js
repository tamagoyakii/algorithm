class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getParentIndex = (idx) => (idx / 2) >> 0;

  getChildrenIndex = (idx) => [idx * 2, idx * 2 + 1];

  swap = (a, b) =>
    ([this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]]);

  push(num) {
    this.heap.push(num);

    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);

    while (
      currentIndex > 1 &&
      this.heap[parentIndex] > this.heap[currentIndex]
    ) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }

  shift() {
    const min = this.heap[1];

    if (this.heap.length <= 2) {
      this.heap = [null];
      return min;
    }

    this.heap[1] = this.heap.pop();

    if (this.heap.length <= 3) {
      if (this.heap[2] < this.heap[1]) this.swap(2, 1);
      return min;
    }

    let currentIndex = 1;
    let [leftChildIndex, rightChildIndex] = [2, 3];

    while (
      this.heap[leftChildIndex] < this.heap[currentIndex] ||
      this.heap[rightChildIndex] < this.heap[currentIndex]
    ) {
      const minIndex =
        this.heap[leftChildIndex] > this.heap[rightChildIndex]
          ? rightChildIndex
          : leftChildIndex;
      this.swap(minIndex, currentIndex);
      currentIndex = minIndex;
      [leftChildIndex, rightChildIndex] = this.getChildrenIndex(currentIndex);
    }
    return min;
  }
}

const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const N = Number(input[0]);
const heap = new MinHeap();
const minimums = input.slice(1, N + 1).reduce((acc, cur) => {
  cur === '0' ? acc.push(heap.shift() || 0) : heap.push(Number(cur));
  return acc;
}, []);

console.log(minimums.join('\n'));
