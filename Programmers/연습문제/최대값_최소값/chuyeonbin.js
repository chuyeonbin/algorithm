function solution(s) {
  var max = s.split(' ').reduce((a, b) => Math.max(a, b));
  var min = s.split(' ').reduce((a, b) => Math.min(a, b));

  if (max > min) {
    return `${min} ${max}`;
  } else {
    return `${max} ${min}`;
  }
}
