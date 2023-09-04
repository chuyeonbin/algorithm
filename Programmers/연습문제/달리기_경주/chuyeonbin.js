function solution(players, callings) {
  var sunsu = {};

  players.forEach((player, index) => (sunsu[player] = index));

  callings.forEach((calling) => {
    var backPlace = sunsu[calling]; //3 -> 2 -> 4
    var frontPlace = sunsu[calling] - 1; //2 -> 1 -> 3
    var player = players[frontPlace]; // poe -> soe -> poe

    sunsu[player] = backPlace; // poe:3 -> soe:2
    sunsu[calling] = frontPlace; // kai:2 -> kai -> 1

    const swap = players[backPlace];
    players[backPlace] = players[frontPlace];
    players[frontPlace] = swap;
  });

  return players;
}
