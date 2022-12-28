function solution(s) {
  var chanum = s;

  chanum = chanum.replace(/zero/gi, 0);
  chanum = chanum.replace(/one/gi, 1);
  chanum = chanum.replace(/two/gi, 2);
  chanum = chanum.replace(/three/gi, 3);
  chanum = chanum.replace(/four/gi, 4);
  chanum = chanum.replace(/five/gi, 5);
  chanum = chanum.replace(/six/gi, 6);
  chanum = chanum.replace(/seven/gi, 7);
  chanum = chanum.replace(/eight/gi, 8);
  chanum = chanum.replace(/nine/gi, 9);

  return Number(chanum);
}
