function solution(quiz) {
    var answer = [];
    
    quiz.forEach((qui, index) => {
        var qz = qui.split(' ');
        
        if(qz[1] === '+') {
            if(parseInt(qz[0]) + parseInt(qz[2]) === parseInt(qz[4])) {
                answer.push('O')
            } else answer.push('X');
        } else {
            if(parseInt(qz[0]) - parseInt(qz[2]) === parseInt(qz[4])) {
                answer.push('O')
            } else answer.push('X');
        }
    })

    
        
    return answer;
}