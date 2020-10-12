// 冒泡排序 时间复杂度 O(N^2) 稳定

import swap from './utils/swap';

function bubbleSort(nums: number[]) {
  if (nums.length < 2) return nums;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j + 1] < nums[j]) swap(nums, j, j + 1);
    }
  }
  return nums;
}

export default bubbleSort;
