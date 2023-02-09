function solution(n) {
  let result = 0;
  for (let i = 1; i < n + 1; i++) {
    let num = 0;
    for (let j = i; j < n + 1; j++) {
      num += j;
      if (num > n) {
        break;
      }
      if (num === n) {
        result += 1;
        break;
      }
    }
  }
  return result;
}
// 효율성 25 ...
