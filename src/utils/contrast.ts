import createArr from './createArr';

function contrast(sortFn: (arr: number[]) => number[]) {
  const arrs = createArr();
  for (let i = 0; i < arrs.length; i++) {
    const arr1 = arrs[i];
    // 拷贝一份 arr1, 否则会相互影响
    const arr2: number[] = JSON.parse(JSON.stringify(arr1));
    const result = JSON.stringify(sortFn(arr1));
    const standard = JSON.stringify(arr2.sort((x, y) => x - y));
    if (result !== standard) {
      throw new Error(JSON.stringify({ result, standard }));
    }
  }
}

export default contrast;
