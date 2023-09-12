function solution(n, m, section) {
    var answer = 0;
    var max = 0;
   
    for(var i = 0; i < section.length; i++) {
        if(section[i] < max) continue; 
        max = section[i] + m;
        answer++;
    }
    
    return answer;
}