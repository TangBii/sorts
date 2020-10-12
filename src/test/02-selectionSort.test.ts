import selectionSort from '../02-selectionSort';
import contrast from '../utils/contrast';

test('选择排序', () => {
  expect(() => contrast(selectionSort)).not.toThrow();
});
