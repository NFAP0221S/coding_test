function solution(n) {
  var answer = 0;
  console.log(("" + n).split("").map((elm) => (answer += Number(elm))));
  return answer;
}
