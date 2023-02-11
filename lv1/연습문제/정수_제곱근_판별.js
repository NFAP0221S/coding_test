function solution(n) {
  let answer;

  for (let x = 1; x * x <= n; x++) {
    console.log(x);
    if (x * x === n) {
      answer = (x + 1) * (x + 1);
    } else {
      answer = -1;
    }
  }
  return answer;
}
