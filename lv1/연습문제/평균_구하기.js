function solution(arr) {
  var answer = 0;

  arr.forEach((x) => (answer += x));

  return answer / arr.length;
}
