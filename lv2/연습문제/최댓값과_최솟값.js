function solution(s) {
  let s_split = s.split(" ");

  return `${Math.min(...s_split)} ${Math.max(...s_split)}`;
}
