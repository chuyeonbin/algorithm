function solution(n, arr1, arr2) {
  var answer = [];
  var str = '';

  for (var i = 0; i < n; i++) {
    var binary1 = arr1[i].toString(2).padStart(n, 0);
    var binary2 = arr2[i].toString(2).padStart(n, 0);
    for (var j = 0; j < n; j++) {
      if (binary1[j] == 1 || binary2[j] == 1) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    answer.push(str);
    str = '';
  }

  return answer;
}
