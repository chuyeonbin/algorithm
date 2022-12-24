function solution(array) {
    var rule = /7/g;
    var answer = 0;

    array.forEach((currentElement, index, array) => {
        var arr = [];
        arr = String(currentElement).match(rule)
        if (arr == null) {

        } else {
            answer = answer + arr.length;
        }
    });

    return answer;
}