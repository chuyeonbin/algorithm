function solution(cards1, cards2, goal) {
    var answer = '';
    var count1 = 0;
    var count2 = 0;
    
    for(var i = 0; i < goal.length; i++) {
        if(goal[i] === cards1[count1]) {
            count1++;
            continue;
        } else if(goal[i] === cards2[count2]) {
            count2++;
        } else {
            answer = 'No';
            return answer;
        }
    }
    answer = 'Yes';
    return answer;
}