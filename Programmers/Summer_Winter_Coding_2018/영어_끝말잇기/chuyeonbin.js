function solution(n, words) {
  var answer = [];
  var turn = 1;
  var fuck = {};

  for (var i = 0; i < words.length; i++) {
    fuck[words[i]] = 0;
  }

  for (var i = 0; i < words.length; ) {
    for (var j = 1; j <= n; j++) {
      fuck[words[i]]++;
      if (fuck[words[i]] > 1) {
        return [j, turn];
      }
      if (i > 0) {
        if (words[i - 1].charAt(words[i - 1].length - 1) !== words[i][0]) {
          return [j, turn];
        }
      }
      i++;
    }
    turn++;
  }
  answer = [0, 0];
  return answer;
}
