function solution(t, p) {
    var answer = 0;
    
    var i = 0;
    
    while(t.slice(i, i + p.length).length === p.length) {
        if(t.slice(i, i + p.length) <= p) {
            answer++;
        }
        i++;  
    }
    return answer;
}