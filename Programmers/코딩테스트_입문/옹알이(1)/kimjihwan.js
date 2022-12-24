function solution(babbling) {
    var exp1 = "aya";
    var exp2 = "ye";
    var exp3 = "woo";
    var exp4 = "ma";

    var answer = 0;

    babbling.forEach((currentElement, index, array) => {
        let num = 0;
        if (currentElement.includes(exp1) == true) {
            num = num + 1;
        }
        if (currentElement.includes(exp2) == true) {
            num = num + 1;
        }
        if (currentElement.includes(exp3) == true) {
            num = num + 1;
        }
        if (currentElement.includes(exp4) == true) {
            num = num + 1;
        }
        let arr1 = currentElement.split(exp1).join('#');
        let arr2 = arr1.split(exp2).join('#');
        let arr3 = arr2.split(exp3).join('#');
        let arr4 = arr3.split(exp4).join('#');
        if (arr4.length == num) {
            answer = answer + 1;
        }
    });

    return answer;
}