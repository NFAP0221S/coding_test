// function solution(n, m) {
//     var answer = [];
//     var temp = []
//     var temp2 = []
//     var temp3 = []
//     for (let i = 1; i <= n; i++){
//         if(n%i === 0) temp.push(i)
//     }
//     for (let i = 1; i <= m; i++){
//         if(m%i === 0) temp2.push(i)
//     }
//     if(temp.length > temp2.length){
//         [temp, temp2] = [temp2, temp]
//     }
//     temp.forEach((elm)=>{
//         console.log(temp2.includes(elm))
//         if(temp2.includes(elm)) {temp3.push(elm)}
//     })
//     answer.push(Number(temp3.slice(-1).join("")))
//     answer.push((n * m) / gcd(n, m))

//     console.log(answer)

//     return answer;
// }

// function gcd(m, n) {
//   if (m % n === 0) return n;
//   return gcd(n, m % n);
// }

function solution(n, m) {
  var answer = [];
  var temp = [];
  var temp2 = [];
  var temp3 = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) temp.push(i);
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) temp2.push(i);
  }
  if (temp.length > temp2.length) {
    [temp, temp2] = [temp2, temp];
  }
  temp.forEach((elm) => {
    console.log(temp2.includes(elm));
    if (temp2.includes(elm)) {
      temp3.push(elm);
    }
  });
  answer.push(Number(temp3.slice(-1).join("")));

  if (m % n === 0) {
    answer.push(m);
  } else {
    answer.push(n * m);
  }

  console.log(answer);

  return answer;
}
