function solution(s) {
  return s
    .toLowerCase()
    .split(" ")
    .map((item) => {
      item = item.replace(item[0], (i) => i.toUpperCase());
      return item;
    })
    .join(" ");
}
