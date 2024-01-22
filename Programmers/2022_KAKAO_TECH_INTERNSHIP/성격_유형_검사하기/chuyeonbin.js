function solution(survey, choices) {
  let answer = '';
  let surveyScore = new Map();
  let list = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
  let score = [3, 2, 1, 0, 1, 2, 3];

  list.forEach((v) => surveyScore.set(v, 0));

  for (let i = 0; i < choices.length; i++) {
    let [left, right] = survey[i];

    if (choices[i] < 4) {
      surveyScore.set(left, surveyScore.get(left) + score[choices[i] - 1]);
      continue;
    }

    if (choices[i] > 4) {
      surveyScore.set(right, surveyScore.get(right) + score[choices[i] - 1]);
      continue;
    }
  }

  for (let i = 0; i < list.length; i = i + 2) {
    let left = list[i];
    let right = list[i + 1];

    if (surveyScore.get(left) === surveyScore.get(right)) {
      left.charCodeAt() < right.charCodeAt() ? (answer += left) : (answer += right);
      continue;
    }

    surveyScore.get(left) > surveyScore.get(right) ? (answer += left) : (answer += right);
  }

  return answer;
}
