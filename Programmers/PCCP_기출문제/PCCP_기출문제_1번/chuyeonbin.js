function solution(bandage, health, attacks) {
  var lastAttackTime = attacks[attacks.length - 1][0];
  var attackCount = 0;
  var success = 0;
  var maxHealth = health;

  var currentAttackTime = attacks[attackCount][0];

  for (var time = 1; time <= lastAttackTime; time++) {
    var currentAttackTime = attacks[attackCount][0];
    var currentAttackDamage = attacks[attackCount][1];

    if (time === currentAttackTime) {
      health -= currentAttackDamage;
      success = 0;
      attackCount++;

      if (attacks[attackCount]) {
        currentAttackTime = attacks[attackCount][0];
        currentAttackDamage = attacks[attackCount][1];
      }

      if (health <= 0) {
        return -1;
      }
      continue;
    }

    health = health + bandage[1] >= maxHealth ? maxHealth : health + bandage[1];
    success++;
    if (success === bandage[0]) {
      health = health + bandage[2] >= maxHealth ? maxHealth : health + bandage[2];
      success = 0;
    }
  }

  return health;
}
