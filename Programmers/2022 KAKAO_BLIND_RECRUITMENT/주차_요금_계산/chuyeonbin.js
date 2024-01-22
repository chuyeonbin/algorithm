function solution(fees, records) {
  var answer = [];
  var parkinglot = new Map();
  var accTime = new Map();

  records.forEach((record) => {
    var [time, num, history] = record.split(' ');
    var [hour, minute] = time.split(':').map((v) => Number(v));

    if (!accTime.has(num)) {
      var sum = 0;
      accTime.set(num, sum);
    }

    if (history === 'IN') {
      parkinglot.set(num, { history, hour, minute });
    }

    if (history === 'OUT') {
      var sum = minute + hour * 60 - (parkinglot.get(num).minute + parkinglot.get(num).hour * 60);
      accTime.set(num, accTime.get(num) + sum);
      parkinglot.delete(num);
    }
  });

  for (var [num, sum] of accTime) {
    if (parkinglot.has(num)) {
      continue;
    }

    if (sum - fees[0] > 0) {
      accTime.set(num, fees[1] + Math.ceil((sum - fees[0]) / fees[2]) * fees[3]);
      continue;
    }

    accTime.set(num, fees[1]);
  }

  for (var [num, { hour, minute }] of parkinglot) {
    var sum = 59 + 23 * 60 - (minute + hour * 60);

    if (accTime.get(num) + sum - fees[0] > 0) {
      accTime.set(num, fees[1] + Math.ceil((accTime.get(num) + sum - fees[0]) / fees[2]) * fees[3]);
      continue;
    }

    accTime.set(num, fees[1]);
  }

  answer = [...accTime.entries()].sort((a, b) => Number(a[0]) - Number(b[0])).map((v) => v[1]);

  return answer;
}
