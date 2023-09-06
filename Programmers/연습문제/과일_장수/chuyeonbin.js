function solution(k, m, score) {
  var answer = 0;

  var sort = score.sort((a, b) => b - a);

  for (var i = m; i <= sort.length; i = i + m) {
    answer += sort[i - 1] * m;
  }

  return answer;
}
