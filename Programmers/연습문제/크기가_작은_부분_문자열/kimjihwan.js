function solution(t, p) {
    var answer = 0;
    
    for(var i=0; i<=t.length-p.length; i++) {
            if(t.substring(i, i+p.length) <= p) {
                   answer = answer + 1;
            }
    }
    
    return answer;
}