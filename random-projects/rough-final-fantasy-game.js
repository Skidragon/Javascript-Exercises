'use strict'

function speak() {
  console.log(this.phrase);
}
let warrior = {
  "name": "warrior",
  "hp": 1111,
  "attack": 10,
  "defense": 20,
  "phrase": "I am the royal warriro of Asgard! You shall die dragon!!!"
};
let dragon = {
  "name": "dragon",
  "hp": 60,
  "attack": 337,
  "defense": 2,
  "phrase": "Puny human, you do not have the qualifications to kill me, you shall become my bed time snack!"
};


function battleSystem(player1, player2) {
  let turn = 1;
  console.log(warrior.phrase);
  console.log(dragon.phrase);
  while (player1.hp > 0 && player2.hp > 0) {
    console.log(`turn:${turn++} of battle`);
    player2.hp = player2.hp-player1.attack;
    player1.hp = player1.hp-player2.attack;

    console.log(`${player1.name} health:${player1.hp}   ${player2.name} health:${player2.hp}\n\n`);
  }
}
battleSystem(warrior,dragon);
