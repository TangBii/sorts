// 快速排序 时间复杂度 O(nlogn) 不稳定

/* eslint-disable no-plusplus */

import swap from './utils/swap';

function quickSort(nums: number[], left = 0, right = nums.length - 1) {
  const [_left, _right] = partitial(nums, left, right);
  if (_left > left) quickSort(nums, left, _left);
  if (_right < right) quickSort(nums, _right, right);
  return nums;
}

function partitial(nums:number[], left: number, right: number): number[] {
  const pivot = nums[getRandomIndex(left, right)];
  let less = left - 1;
  let more = right + 1;
  let curr = left;
  while (curr < more) {
    if (nums[curr] < pivot) {
      swap(nums, curr++, ++less);
    } else if (nums[curr] > pivot) {
      swap(nums, curr, --more);
    } else {
      curr++;
    }
  }
  return [less, more];
}

function getRandomIndex(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default quickSort;
