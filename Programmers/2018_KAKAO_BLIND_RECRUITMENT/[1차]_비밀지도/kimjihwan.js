function solution(n, arr1, arr2) {
    
    var newArray1 = [];
    var newArray2 = [];
    var answer = [];
    
    const newMyArr1 = arr1.forEach((currentElement, index, array) => {
        newArray1[index] = currentElement.toString(2).padStart(array.length, '0');
        answer[index] = "";
    });
    
    const newMyArr2 = arr2.forEach((currentElement, index, array) => {
        newArray2[index] = currentElement.toString(2).padStart(array.length, '0');
    });
    
    
    for(var i=0; i<=n-1; i++) {
        for(var j=0; j<=n-1; j++) {
            if(newArray1[i][j] == 1 || newArray2[i][j] == 1) {
                answer[i] = answer[i] + "#";
            } else {
                answer[i] = answer[i] + " ";
            }
        }
    }

    return answer;
}