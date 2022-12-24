function solution(my_str, n) {
    var answer = [];

    for (var i = 0; i <= my_str.length - 1; i = i + n) {
        answer.push(my_str.substring(i, i + n));
    }

    return answer;
}