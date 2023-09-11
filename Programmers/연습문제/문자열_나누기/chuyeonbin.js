function solution(s) {
  var answer = 0;
  var x = s[0];
  var str = s;
  var count1 = 1;
  var count2 = 0;

  for (var i = 1; i <= s.length; i++) {
    if (x === s[i]) {
      count1++;
    } else count2++;

    if (count1 === count2) {
      str = s.slice(i + 1, s.length);
      x = str[0];
      i++;
      count1 = 1;
      count2 = 0;
      answer++;
    } else if ((answer === 0 && i === s.length) || (i === s.length && count1 > count2)) {
      answer++;
    }
  }
  return answer;
}
