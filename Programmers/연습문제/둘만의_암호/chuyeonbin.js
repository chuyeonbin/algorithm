function solution(s, skip, index) {
  var answer = '';

  for (var i = 0; i < s.length; i++) {
    var count = 0;
    for (var j = s.charCodeAt(i) + 1; count < index; j++) {
      if (j > 122) {
        j = 97;
      }
      if (skip.indexOf(String.fromCharCode(j)) !== -1) continue;
      count++;
      if (count === index) {
        answer += String.fromCharCode(j);
      }
    }
  }
  return answer;
}
