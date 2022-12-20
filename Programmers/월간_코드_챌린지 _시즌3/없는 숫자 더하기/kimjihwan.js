
function solution(numbers) {
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    var answer = 0;
    var middle = 0;

    for(var i=0; i<number.length; i++) {
        for(var j=0; j<numbers.length; j++) {
            if(number[i] == numbers[j]) {
                middle = middle + number[i];
            }
        }
    }
    
    answer = 45 - middle;
    
    return answer;
}