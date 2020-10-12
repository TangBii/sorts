// 快速排序2 时间复杂度 O(n^logN) 不稳定

import swap from './utils/swap';

function quickSort(nums: number[], left = 0, right = nums.length - 1) {
  const pivot = nums[getRandomIndex(left, right)];
  const [less, more] = partition(nums, left, right, pivot);
  if (less > left) quickSort(nums, left, less);
  if (more < right) quickSort(nums, more, right);
  return nums;
}

function getRandomIndex(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function partition(nums: number[], left: number, right: number, pivot: number): number[] {
  while (left <= right) {
    while (nums[left] < pivot) left++;
    while (nums[right] > pivot) right--;
    if (left <= right) swap(nums, left++, right--);
  }
  return [left - 1, left];
}

export default quickSort;
