function solution(x) {
  //     if ((""+x).length === 1) {
  //         answer = true
  //         return answer;
  //     }
  //     const strlen = ""+x
  //     let temp = 0

  //     for (let i = 0; i < strlen.length; i++){
  //         temp += Number(strlen[i])
  //         console.log(temp)
  //     }

  //     x%temp === 0 ? answer= true : answer = false
  let n = 0;
  ("" + x).split("").forEach((elm) => {
    n += +elm;
  });
  return x % n === 0 ? true : false;
}
