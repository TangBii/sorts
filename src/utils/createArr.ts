// 默认生成 10 个数组, 每个数组包含 30 个 [1, 1000] 的随机数
function createArr(count = 10, max = 1000, min = 1) {
  const arrs: number[][] = [];
  for (let i = 0; i < count; i++) {
    const arr = [];
    for (let j = 0; j < count * 3; j++) {
      // 生成区间在 [min, max] 的随机整数
      const value = Math.floor(Math.random() * (max - min + 1) + min);
      arr.push(value);
    }
    arrs.push(arr);
  }
  return arrs;
}

export default createArr;
