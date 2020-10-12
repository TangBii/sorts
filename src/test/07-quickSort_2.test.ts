import quickSort from '../07-quickSort-2';
import contrast from '../utils/contrast';

test('快速排序2', () => {
  expect(() => contrast(quickSort)).not.toThrow();
});
