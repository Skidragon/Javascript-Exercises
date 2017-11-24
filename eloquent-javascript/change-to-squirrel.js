'use strict'
const journal = [];

function addEntry(events, didITurnIntoASquirrel) {
  journal.push({
    events: events,
    squirrel: didITurnIntoASquirrel
  });
}

addEntry(["work", "touched tree", "pizza", "running",
  "television"
], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna",
  "touched tree", "brushed teeth"
], false);
addEntry(["weekend", "cycling", "break", "peanuts",
  "beer"
], true);


function compareSituations(journalArr, squirrelOrHuman) {
  let stillHuman = [];
  let becameSquirrel = [];
  let uniqSquirrelActions = [];
  let uniqHumanActions = [];
  journalArr.forEach((entry, i) => {
      entry.squirrel === true ? becameSquirrel.push(entry.events) : stillHuman.push(entry.events);
    }

  );

  return stillHuman;

}

console.log(compareSituations(journal, true));
