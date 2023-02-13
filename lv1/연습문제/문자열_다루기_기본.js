function solution(s) {
  var answer = true;
  const box = s.split("");

  if (s.length === 4 || s.length === 6) {
    box.forEach((elm) => {
      if (Number(elm).toString().length !== 1) {
        console.log("NaN");
        answer = false;
        return answer;
      }
    });
  } else {
    answer = false;
  }
  return answer;

  //     if (s.length === 4 || s.length === 6 ){

  //         for(let i = 0; i < s.length; i++){

  //             if (Number(s[i]).toString().length != 1){
  //                 console.log(Number(s[i]).toString().length)
  //                 answer = false
  //                 return answer
  //             }

  //         }
  //         return answer;
  //     }
  //     // return answer;
}
