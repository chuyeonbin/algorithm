function solution(n, k) {
    var service = parseInt(n/10);
    
    var answer = n*12000+(k-service)*2000;
    return answer;
}