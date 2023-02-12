function solution(num) {
  var answer = 0;
  for (let i = 0; i < 502; i++) {
    if (num === 1) {
      return answer;
    }
    if (num % 2 === 0) {
      num = num / 2;
      answer += 1;
    } else {
      num = num * 3 + 1;
      answer += 1;
    }
    if (answer > 500) {
      answer = -1;
      return answer;
    }
  }
}
