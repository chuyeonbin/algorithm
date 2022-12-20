function solution(babbling) {
  var answer = 0;
  var arr = ['aya', 'ye', 'woo', 'ma'];

  for (var i = 0; i < babbling.length; i++) {
    var str = '';
    str = babbling[i];

    for (var j = 0; j < arr.length; j++) {
      str = str.split(arr[j]).join('#');
    }

    if (str.split('#').join('').length === 0) {
      answer++;
    }
  }
  return answer;
}
