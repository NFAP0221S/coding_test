function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const temp = arr1[i].map((x, y) => x + arr2[i][y]);
    answer.push(temp);
  }

  return answer;
}
