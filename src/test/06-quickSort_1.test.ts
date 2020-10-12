import quickSort from '../06-quickSort-1';
import contrast from '../utils/contrast';

test('快速排序1', () => {
  expect(() => contrast(quickSort)).not.toThrow();
});
