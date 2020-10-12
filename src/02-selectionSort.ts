// 选择排序，时间复杂度 O(n ^ 2) 不稳定

import swap from './utils/swap';

function selectionSort(nums: number[]) {
  for (let i = 0, len = nums.length - 1; i < len; i++) {
    let min = i;
    for (let j = min + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) min = j;
    }
    swap(nums, i, min);
  }
  return nums;
}

export default selectionSort;
