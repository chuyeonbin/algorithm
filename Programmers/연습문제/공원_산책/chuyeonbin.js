function solution(park, routes) {
  let answer = [];
  let parkArr = [];
  let position;

  for (let i = 0; i < park.length; i++) {
    let startPosition = [i, park[i].indexOf('S')];
    if (park[i].indexOf('S') !== -1) {
      position = startPosition;
      break;
    }
  }

  park.forEach((value, index) => {
    parkArr.push(Array.from(value));
  });

  for (let i = 0; i < routes.length; i++) {
    let op = routes[i].split(' ')[0];
    let n = Number(routes[i].split(' ')[1]);
    let [y, x] = position;
    let prevPosition = [y, x];

    if (op === 'E' && x + n <= parkArr[y].length - 1) {
      let t = x + n;
      for (let j = x; j < t; j++) {
        x++;
        if (parkArr[y][x] === 'X') {
          position = [...prevPosition];
          break;
        }
        position = [y, x];
      }
      continue;
    }

    if (op === 'W' && x - n >= 0) {
      let t = x - n;
      for (let j = x; j > t; j--) {
        x--;
        if (parkArr[y][x] === 'X') {
          position = [...prevPosition];
          break;
        }
        position = [y, x];
      }
      continue;
    }

    if (op === 'S' && y + n <= parkArr.length - 1) {
      let t = y + n;
      for (let j = y; j < t; j++) {
        y++;
        if (parkArr[y][x] === 'X') {
          position = [...prevPosition];
          break;
        }
        position = [y, x];
      }
      continue;
    }

    if (op === 'N' && y - n >= 0) {
      let t = y - n;
      for (let j = y; j > t; j--) {
        y--;
        if (parkArr[y][x] === 'X') {
          position = [...prevPosition];
          break;
        }
        position = [y, x];
      }
      continue;
    }
  }

  return position;
}
