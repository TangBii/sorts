import createArr from '../../utils/createArr';

test.skip('生成数组', () => {
  const arrs = createArr();
  for (let i = 0, len = arrs.length; i < len; i++) {
    const arr = arrs[i];
    for (let j = 0; j < arr.length; j++) {
      expect(arr[i] >= 1 && arr[i] <= 1000);
    }
  }
});
