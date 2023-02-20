function solution(lottos, win_nums) {
  const lank = [6, 6, 5, 4, 3, 2, 1];
  let maxN = 0;
  let minN = 0;
  lottos.forEach((elm) => {
    if (elm === 0) {
      maxN += 1;
    }
    if (win_nums.indexOf(elm) !== -1) {
      maxN += 1;
    }
  });
  lottos.forEach((elm) => {
    if (win_nums.indexOf(elm) !== -1) {
      minN += 1;
    }
  });
  return [lank[maxN], lank[minN]];
}
