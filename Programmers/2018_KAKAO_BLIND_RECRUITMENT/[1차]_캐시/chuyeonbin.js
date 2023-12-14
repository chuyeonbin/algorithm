function solution(cacheSize, cities) {
  var answer = 0;
  var cacheArr = [];

  if (cacheSize === 0) {
    return cities.length * 5;
  }

  for (var i = 0; i < cities.length; i++) {
    var citie = cities[i].toLowerCase();
    const findIndex = cacheArr.indexOf(citie);
    cacheArr.push(citie);

    if (cacheArr.length <= cacheSize) {
      if (findIndex > -1) {
        answer += cacheArr.splice(findIndex, 1).join('') === citie ? 1 : 5;
      } else {
        answer += 5;
      }
      continue;
    }

    if (findIndex > -1) {
      answer += cacheArr.splice(findIndex, 1).join('') === citie ? 1 : 5;
    } else {
      cacheArr.shift();
      answer += 5;
    }
  }

  return answer;
}
