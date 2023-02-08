function solution(A, B) {
  let num = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  A.forEach((v, i) => {
    num += v * B[i];
  });
  return num;
}
