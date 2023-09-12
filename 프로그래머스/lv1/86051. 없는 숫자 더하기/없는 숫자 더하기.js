function solution(numbers) {
    var answer = 45 - numbers.reduce((acc, curr) => acc + curr);
    return answer;
}