function solution(x) {
  var a, b, c, d, e;
  a = Math.floor((x % 100000) / 10000);
  b = Math.floor((x % 10000) / 1000);
  c = Math.floor((x % 1000) / 100);
  d = Math.floor((x % 100) / 10);
  e = Math.floor(x % 10);

  return x % (a + b + c + d + e) === 0 ? true : false;
}
