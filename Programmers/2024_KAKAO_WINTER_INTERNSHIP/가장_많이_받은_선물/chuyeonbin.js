function solution(friends, gifts) {
  var answer = 0;
  var giftTables = new Map();
  var friendsObj = {};
  var max = 0;

  friends.forEach((friend) => {
    friendsObj[friend] = 0;
  });

  gifts.forEach((gift) => {
    var [A, B] = gift.split(' ');

    if (!giftTables.has(A)) {
      giftTables.set(A, {
        friends: { ...friendsObj },
        index: 0,
      });
      delete giftTables.get(A).friends[A];
    }

    if (!giftTables.has(B)) {
      giftTables.set(B, {
        friends: { ...friendsObj },
        index: 0,
      });
      delete giftTables.get(B).friends[B];
    }

    giftTables.get(A).index += 1;
    giftTables.get(B).index -= 1;

    giftTables.get(A).friends[B] += 1;
  });

  for (var [key, value] of giftTables) {
    var friends = Object.keys(value.friends);
    console.log(key, friends);
    var giftCount = 0;
    for (var i = 0; i < friends.length; i++) {
      var friend = friends[i];

      if (!giftTables.has(key) || !giftTables.has(friend)) {
        giftCount++;
        continue;
      }

      if (giftTables.get(key).friends[friend] > giftTables.get(friend).friends[key]) {
        giftCount++;
        continue;
      }

      if (giftTables.get(key).friends[friend] === giftTables.get(friend).friends[key]) {
        if (giftTables.get(key).index > giftTables.get(friend).index) {
          giftCount++;
        }
      }
    }

    if (max < giftCount) {
      max = giftCount;
    }
  }

  return max;
}
