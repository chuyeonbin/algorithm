function solution(n) {
  var answer = 0;

  for (var i = 1; i <= Math.floor(n / 2); i++) {
    var sum = 0;
    for (var j = i; j <= n; j++) {
      sum += j;
      if (sum > n) {
        break;
      } else if (sum === n) {
        answer++;
        break;
      }
    }
  }
  answer++;
  return answer;
}
