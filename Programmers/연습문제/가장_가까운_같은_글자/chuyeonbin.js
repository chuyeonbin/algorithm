function solution(s) {
  var answer = [];

  for (var i = 0; i < s.length; i++) {
    var _s = s.slice(0, i);
    var index = _s.lastIndexOf(s[i]);
    if (index === -1) {
      answer.push(-1);
    } else {
      answer.push(i - index);
    }
  }
  return answer;
}
