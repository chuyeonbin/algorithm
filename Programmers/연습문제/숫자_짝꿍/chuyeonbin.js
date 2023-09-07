function solution(X, Y) {
  var answer = '';
  var strX = X.toString().split('');
  var strY = Y.toString().split('');
  const numberCountX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const numberCountY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  strX.forEach((c) => (numberCountX[parseInt(c)] = numberCountX[parseInt(c)] + 1));

  strY.forEach((c) => (numberCountY[parseInt(c)] = numberCountY[parseInt(c)] + 1));

  for (var i = numberCountX.length - 1; i >= 0; i--) {
    var jjakCount = 0;

    if (numberCountX[i] > 0 && numberCountY[i] > 0) {
      if (numberCountX[i] > numberCountY[i]) {
        jjakCount = numberCountY[i];
      } else {
        jjakCount = numberCountX[i];
      }
    }
    if (jjakCount > 0) answer += String(i).repeat(jjakCount);
    if (answer === '' && i === 0) answer = '-1';
  }

  for (var i = 0; i < answer.length; i++) {
    if (i === 0 && answer[i] === '0') answer = '0';
  }

  return answer;
}
