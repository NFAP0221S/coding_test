function solution(s, n) {
  const eng_up = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  const eng_lo = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz".split(
    ""
  );
  const sSplit = s.split("");

  const box = sSplit.map((elm) => {
    if (eng_up.includes(elm)) {
      return (elm = eng_up[eng_up.indexOf(elm) + n]);
    }
    if (eng_lo.includes(elm)) {
      return (elm = eng_lo[eng_lo.indexOf(elm) + n]);
    }
    return elm;
  });
  return box.join("");
}
