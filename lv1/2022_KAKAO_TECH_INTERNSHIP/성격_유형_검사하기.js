function solution(survey, choices) {
  var answer = "";

  let RT = { R: 0, T: 0 };
  let CF = { R: 0, T: 0 };
  let JM = { R: 0, T: 0 };
  let AN = { A: 0, N: 0 };

  const mbti = ["R", "T", "C", "F", "J", "M", "A", "N"];
  const num = [0, 2, 4, 6];
  const point = {
    R: 0,
    T: 0,
    F: 0,
    C: 0,
    M: 0,
    J: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; survey.length > i; i++) {
    console.log(survey[i][0][0]);
    if (choices[i] < 4) {
      point[survey[i][0]] += 4 - choices[i];
    } else if (choices[i] > 4) {
      point[survey[i][1]] += choices[i] - 4;
    }
  }

  for (let i = 0; num.length > i; i++) {
    if (point[mbti[num[i]]] === point[mbti[num[i] + 1]]) {
      answer += mbti[num[i]];
    } else if (point[mbti[num[i]]] > point[mbti[num[i] + 1]]) {
      answer += mbti[num[i]];
    } else if (point[mbti[num[i]]] < point[mbti[num[i] + 1]]) {
      answer += mbti[num[i] + 1];
    }
  }

  return answer;
}
