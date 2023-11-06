function solution(keymap, targets) {
  var answer = [];
  var alphabet = {};

  for (var i = 0; i < keymap.length; i++) {
    for (var j = 0; j < keymap[i].length; j++) {
      if (!alphabet[keymap[i][j]]) {
        alphabet[keymap[i][j]] = j + 1;
      } else if (j + 1 <= alphabet[keymap[i][j]]) {
        alphabet[keymap[i][j]] = j + 1;
      }
    }
  }

  for (var i = 0; i < targets.length; i++) {
    var result = 0;
    for (var j = 0; j < targets[i].length; j++) {
      if (!alphabet[targets[i][j]]) {
        result = -1;
        break;
      }
      result += alphabet[targets[i][j]];
    }
    if (result === -1) {
      answer.push(-1);
      continue;
    }
    answer.push(result);
  }

  return answer;
}
