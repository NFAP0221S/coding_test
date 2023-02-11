function solution(n) {
  // return Number((""+n).split("").map((elm)=>Number(elm)).sort().reverse().join(""))
  return Number(("" + n).split("").sort().reverse().join(""));
}
