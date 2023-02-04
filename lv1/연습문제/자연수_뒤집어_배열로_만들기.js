function solution(n) {
  return ("" + n)
    .split("")
    .reverse()
    .map((elm) => Number(elm));
}
