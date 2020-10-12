// 插入排序，时间复杂度 O(n^2) 稳定

/* eslint-disable no-param-reassign */
function insertionSort(nums: number[]) {
  for (let i = 1; i < nums.length; i++) {
    const target = nums[i];
    // 这样控制边界，最后的 j 即为 target 应放的位置
    let j = i;
    while (nums[j - 1] > target && j > 0) {
      nums[j] = nums[--j];
    }
    nums[j] = target;
  }
  return nums;
}

export default insertionSort;
