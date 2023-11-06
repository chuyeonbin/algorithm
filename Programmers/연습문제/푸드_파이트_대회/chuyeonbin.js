function solution(food) {
  var answer = '';

  for (var i = 1; i < food.length; i++) {
    for (var j = 1; j <= Math.floor(food[i] / 2); j++) {
      answer += String(i);
    }
  }

  var reverse = '';
  for (var i = answer.length - 1; i >= 0; i--) {
    reverse += answer[i];
  }

  return answer + '0' + reverse;
}
