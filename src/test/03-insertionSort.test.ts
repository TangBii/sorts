import insertionSort from '../03-insertionSort';
import contrast from '../utils/contrast';

test('插入排序', () => {
  expect(() => contrast(insertionSort)).not.toThrow();
});
