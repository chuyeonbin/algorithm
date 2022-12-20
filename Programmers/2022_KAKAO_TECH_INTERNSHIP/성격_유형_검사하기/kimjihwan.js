function solution(survey, choices) {
    
    var answer = '';
    
    var map = new Map();
    
    map.set("T", 0);
    map.set("R", 0);
    map.set("C", 0);
    map.set("F", 0);
    map.set("J", 0);
    map.set("M", 0);
    map.set("A", 0);
    map.set("N", 0);
    
    console.log(map)
    
    for(var i=0; i<=survey.length; i++) {
           if(choices[i] == 1) {
               var score = map.get(survey[i].substring(0, 1));
               map.set(survey[i].substring(0, 1), score+3);
           } else if(choices[i] == 2) {
               var score = map.get(survey[i].substring(0, 1));
               map.set(survey[i].substring(0, 1), score+2);
           } else if(choices[i] == 3) {
               var score = map.get(survey[i].substring(0, 1));
               map.set(survey[i].substring(0, 1), score+1);
           } else if(choices[i] == 4) {
               
           } else if(choices[i] == 5) {
               var score = map.get(survey[i].substring(1, 2));
               map.set(survey[i].substring(1, 2), score+1);
           } else if(choices[i] == 6) {
               var score = map.get(survey[i].substring(1, 2));
               map.set(survey[i].substring(1, 2), score+2);
           } else if(choices[i] == 7){
               var score = map.get(survey[i].substring(1, 2));
               map.set(survey[i].substring(1, 2), score+3);
           } else {
               
           }
    }
    
    console.log(map)
    
    if(map.get("T") > map.get("R")) {
        answer = answer + "T";
    } else if(map.get("R") > map.get("T")) {
        answer = answer + "R";
    } else if(map.get("T") == map.get("R")) {
        if("T" > "R") {
            answer = answer + "R";
        } else {
            answer = answer + "T";
        }
    } else {
        
    }
    
    if(map.get("C") > map.get("F")) {
        answer = answer + "C";
    } else if(map.get("F") > map.get("C")) {
        answer = answer + "F";
    } else if(map.get("C") == map.get("F")) {
        if("C" > "F") {
            answer = answer + "F";
        } else {
            answer = answer + "C";
        }
    } else {
        
    }
    
    if(map.get("J") > map.get("M")) {
        answer = answer + "J";
    } else if(map.get("M") > map.get("J")) {
        answer = answer + "M";
    } else if(map.get("J") == map.get("M")) {
        if("J" > "M") {
            answer = answer + "M";
        } else {
            answer = answer + "J";
        }
    } else {
        
    }
    
    if(map.get("A") > map.get("N")) {
        answer = answer + "A";
    } else if(map.get("N") > map.get("A")) {
        answer = answer + "N";
    } else if(map.get("A") == map.get("N")) {
        if("A" > "N") {
            answer = answer + "N";
        } else {
            answer = answer + "A";
        }
    } else {
        
    }
    
    return answer;
}