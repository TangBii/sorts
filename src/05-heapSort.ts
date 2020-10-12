// 桶排序 时间复杂度 O(n^logn) 不稳定

import swap from './utils/swap';

function heapSort(nums: number[]) {
  // 生成大顶堆
  const heap: number[] = [];
  for (const num of nums) heapInsert(heap, num);
  // 重新堆化
  for (let i = heap.length - 1; i > 0; i--) {
    swap(heap, 0, i);
    heapify(heap, i);
  }
  return heap;
}

function heapInsert(heap: number[], value: number) {
  let curr = heap.push(value) - 1;
  let parent = getParent(curr);
  while (parent >= 0 && heap[curr] > heap[parent]) {
    swap(heap, curr, parent);
    curr = parent;
    parent = getParent(curr);
  }
  return heap;
}

function heapify(heap: number[], heapSize: number) {
  let curr = 0;
  let left = getLeftChild(curr);
  while (left < heapSize) {
    const max = left + 1 < heapSize && heap[left + 1] > heap[left] ? left + 1 : left;
    if (heap[max] <= heap[curr]) return heap;
    swap(heap, curr, max);
    curr = max;
    left = getLeftChild(curr);
  }
  return heap;
}

function getParent(curr: number) {
  return Math.floor((curr - 1) / 2);
}

function getLeftChild(parent: number) {
  return parent * 2 + 1;
}

export default heapSort;
