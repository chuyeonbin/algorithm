function solution(strArr) {
    var answer = 0;
    var dir = {};
    
    strArr.forEach((str) => {
      if(!dir[str.length]) dir[str.length] = 0;
      dir[str.length]++;
    });
    
    return Math.max(...Object.values(dir));
}