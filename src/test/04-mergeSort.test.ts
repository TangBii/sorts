import mergeSort from '../04-mergeSort';
import contrast from '../utils/contrast';

test('归并排序', () => {
  expect(() => contrast(mergeSort)).not.toThrow();
});
