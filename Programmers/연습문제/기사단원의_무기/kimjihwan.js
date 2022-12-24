function solution(number, limit, power) {
    var answer = 0;

    for (var i = 1; i <= number; i++) {
        var divisor = 0;
        for (var j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                divisor = divisor + 1;
                if (i / j != j) {
                    divisor = divisor + 1;
                }
            }
        }
        if (divisor > limit) {
            answer = answer + power;
        } else {
            answer = answer + divisor;
        }
    }

    return answer;
}