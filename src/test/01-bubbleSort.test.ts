import bubbleSort from '../01-bubbleSort';
import contrast from '../utils/contrast';

test('冒泡排序', () => {
  expect(() => contrast(bubbleSort)).not.toThrow();
});
