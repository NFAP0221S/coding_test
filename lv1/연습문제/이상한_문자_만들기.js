function solution(s) {
  // return s
  //   .split(" ")
  //   .map((word) =>
  //     word
  //       .split("")
  //       .map((char, index) =>
  //         index % 2 === 0
  //           ? word[index].toUpperCase()
  //           : word[index].toLowerCase()
  //       )
  //       .join("")
  //   )
  //   .join(" ");
  return s
    .split(" ")
    .map((x) =>
      x
        .split("")
        .map((str, i) =>
          i % 2 === 0 ? x[i].toUpperCase() : x[i].toLowerCase()
        )
        .join("")
    )
    .join(" ");
}
