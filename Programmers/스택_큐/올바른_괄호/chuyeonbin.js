function solution(s) {
  var answer = 0;
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      answer++;
    } else {
      answer--;

      if (answer === -1) {
        return false;
      }
    }
  }
  return answer === 0 ? true : false;
}
