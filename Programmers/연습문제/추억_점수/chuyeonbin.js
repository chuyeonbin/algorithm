function solution(name, yearning, photo) {
  var answer = [];
  const scoreMap = new Map();

  name.forEach((nickname, index) => scoreMap.set(nickname, yearning[index]));

  for (var i = 0; i < photo.length; i++) {
    var result = 0;
    for (var j = 0; j < photo[i].length; j++) {
      if (!scoreMap.get(photo[i][j])) continue;
      result += scoreMap.get(photo[i][j]);
    }
    answer.push(result);
  }

  return answer;
}
