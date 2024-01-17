// function solution(n, works) {
//     works.sort((a, b) => b - a);
//     while (n) {
//         if (works[0] < works[1])
//             works.sort((a, b) => b - a);
//         if (!works[0])
//             break;
//         works[0] -= 1;
//         n--;
//     }
//     return works.reduce((acc, cur) => {
//         return acc + Math.pow(cur, 2);
//     }, 0);
// }

class MaxHeap {
    constructor() {
      this.heap = [null];
    }
    swap(idx1, idx2) {
      [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    getParentIdx(idx) {
      return (idx / 2) >> 0;
    }
    getChildIdx(idx) {
      return [idx * 2, idx * 2 + 1];
    }
    push(n) {
      this.heap.push(n);
      let curIdx = this.heap.length - 1;
      let parIdx = this.getParentIdx(curIdx);

      while (curIdx > 1 && this.heap[parIdx] < this.heap[curIdx]) {
        this.swap(parIdx, curIdx);
        curIdx = parIdx;
        parIdx = this.getParentIdx(curIdx);
      }
    }
    unShift() {
      const max = this.heap[1];
      if (this.heap.length <= 2) this.heap = [null];
      else this.heap[1] = this.heap.pop();

      let curIdx = 1;
      let [leftIdx, rightIdx] = this.getChildIdx(curIdx);

      if (!this.heap[leftIdx]) return max;
      if (!this.heap[rightIdx]) {
        if (this.heap[leftIdx] > this.heap[curIdx]) {
          this.swap(leftIdx, curIdx);
        }
        return max;
      }

      while (
        this.heap[leftIdx] > this.heap[curIdx] ||
        this.heap[rightIdx] > this.heap[curIdx]
      ) {
        const maxIdx =
          this.heap[leftIdx] < this.heap[rightIdx] ? rightIdx : leftIdx;
        this.swap(maxIdx, curIdx);
        curIdx = maxIdx;
        [leftIdx, rightIdx] = this.getChildIdx(curIdx);
      }
      return max;
    }
}
function solution(n, works) {
    const maxHeap = new MaxHeap();
    
    works.forEach((el) => maxHeap.push(el));
    for (let i = n; i > 0 ; i--) {
        const maxWork = maxHeap.unShift();
        if (maxWork === 0) break;
        maxHeap.push(maxWork - 1);
    }
    return maxHeap.heap.reduce((acc, cur) => acc + (cur ** 2));
}