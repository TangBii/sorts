import swap from '../../utils/swap';

test.skip('交换数组的两项', () => {
  const arr = [1, 2, 3, 4];
  const arrSwaped = [2, 1, 3, 4];
  expect(swap(arr, 0, 1)).toEqual(arrSwaped);
});
