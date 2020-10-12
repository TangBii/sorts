import heapSort from '../05-heapSort';
import contrast from '../utils/contrast';

test('堆排序', () => {
  expect(() => contrast(heapSort)).not.toThrow();
});
