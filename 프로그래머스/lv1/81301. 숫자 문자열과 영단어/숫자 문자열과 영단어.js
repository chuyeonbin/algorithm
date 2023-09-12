function solution(s) {
    var answer = '';
    const number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    var str = '';
    
    for(var i = 0; i < s.length; i++) {
        if(s[i] < 10) {
            answer += s[i]; 
            continue;
        }
        str += s[i];
        for(var j = 0; j < number.length; j++) {
            if(str === number[j]) {
               answer += j;
                str = '';
               break;
            }
        }
    }
    
    return Number(answer);
}