function solution(s) {
  return s
    .toLowerCase()
    .split(' ')
    .map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1, value.length);
    })
    .join(' ');
}
