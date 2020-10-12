// 归并排序 时间复杂度 O（nlogn）稳定

function mergeSort(nums: number[]): number[] {
  if (nums.length < 2) return nums;
  const mid = Math.floor(nums.length / 2);
  const leftArr = mergeSort(nums.slice(0, mid));
  const rightArr = mergeSort(nums.slice(mid));
  return merge(leftArr, rightArr);
}

function merge(nums1: number[], nums2: number[]) {
  if (!nums1.length || !nums2.length) return nums1 || nums2;
  let i = 0;
  let j = 0;
  const result: number[] = [];
  while (i < nums1.length && j < nums2.length) {
    result.push(nums1[i] < nums2[j] ? nums1[i++] : nums2[j++]);
  }
  return result.concat(i >= nums1.length ? nums2.slice(j) : nums1.slice(i));
}

export default mergeSort;
