// Racing number logic
let raceNumber = Math.floor(Math.random() * 1000);

// Determine Early Registers
let adultEarlyRunner = true;

// Runner Age
let runnerAge = 30;

// Determine runner as adult and early register
if (adultEarlyRunner && runnerAge > 18) {
    console.log("Runner number: " + (raceNumber += 1000));
} else {
    console.log("Runner number: " + raceNumber);
}

// Determine early register race time
if (adultEarlyRunner && runnerAge >= 18) {
    console.log("Race starts at 9:30am runner number: " + raceNumber);
}

// Determine late register and youth race time
if (!adultEarlyRunner && runnerAge >= 18) {
    console.log("Race starts at 11:00am runner number: " + raceNumber);
} else if (runnerAge < 18) {
    console.log(
        "Youth registrants run at 12:30 pm (regardless of registration) runner number: " +
        raceNumber
    );
}
