function solution(s) {
  let nanBox = [];
  let mergeBox = [];
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  for (let i = 0; i < s.length; i++) {
    if (isNaN(+s[i]) === true) {
      nanBox.push(s[i]);
      if (dict[nanBox.join("")] !== undefined) {
        mergeBox.push(dict[nanBox.join("")]);
        nanBox = [];
      }
    } else {
      mergeBox.push(s[i]);
    }
  }

  return Number(mergeBox.join(""));
}
