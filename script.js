document.getElementById('output').style.visibility = 'hidden';

function calculate() {
    // Get value from input
    document.getElementById('output').style.visibility = 'visible';
    let lbs = document.getElementById("lbsInput").value;
    let reps = document.getElementById("repInput").value;

    // convert to numbers
    lbs = parseFloat(lbs);
    reps = parseFloat(reps);

    // calculation 
    let repMax = Math.round(lbs*(36/(37 - reps)));

    // percent calculation
    perNinetySeven = Math.round(repMax * .97);
    perNinetyFive = Math.round(repMax * .95);
    perNinetyFour = Math.round(repMax * .94);
    perNinetyTwo = Math.round(repMax * .92);
    perNinety = Math.round(repMax * .90);
    perEightyNine = Math.round(repMax * .89);
    perEightySix = Math.round(repMax * .86);
    perEightyFive = Math.round(repMax * .85);
    perEightyThree = Math.round(repMax * .83);
    perEightyOne = Math.round(repMax * .81);
    perEighty = Math.round(repMax * .80);
    perSeventyEight = Math.round(repMax * .78);
    perSeventyFive = Math.round(repMax * .75);
    perSeventyThree = Math.round(repMax * .73);
    perSeventyOne = Math.round(repMax * .71);
    perSeventy = Math.round(repMax * .70);
    perSixtyEight = Math.round(repMax * .68);
    perSixtySeven = Math.round(repMax * .67);
    perSixtyFive = Math.round(repMax * .65);
    perSixtyFour = Math.round(repMax * .64);
    perSixtyTwo = Math.round(repMax * .62);
    perSixtyOne = Math.round(repMax * .61);
    perSixty = Math.round(repMax * .60);

    // Display results
    document.getElementById("result").value = repMax;

    // Display percent results
    document.getElementById('percent-100').value = repMax;
    document.getElementById('percent-95').value = perNinetyFive;
    document.getElementById('percent-90').value = perNinety;
    document.getElementById('percent-85').value = perEightyFive;
    document.getElementById('percent-80').value = perEighty;
    document.getElementById('percent-75').value = perSeventyFive;
    document.getElementById('percent-70').value = perSeventy;
    document.getElementById('percent-65').value = perSixtyFive;
    document.getElementById('percent-60').value = perSixty;

    // Display rep percent results
    document.getElementById('rep-percent-100').value = repMax;
    document.getElementById('rep-percent-97').value = perNinetySeven;
    document.getElementById('rep-percent-94').value = perNinetyFour;
    document.getElementById('rep-percent-92').value = perNinetyTwo;
    document.getElementById('rep-percent-89').value = perEightyNine;
    document.getElementById('rep-percent-86').value = perEightySix;
    document.getElementById('rep-percent-83').value = perEightyThree;
    document.getElementById('rep-percent-81').value = perEightyOne;
    document.getElementById('rep-percent-78').value = perSeventyEight;
    document.getElementById('rep-percent-75').value = perSeventyFive;
    document.getElementById('rep-percent-73').value = perSeventyThree;
    document.getElementById('rep-percent-71').value = perSeventyOne;
    document.getElementById('rep-percent-70').value = perSeventy;
    document.getElementById('rep-percent-68').value = perSixtyEight;
    document.getElementById('rep-percent-67').value = perSixtySeven;
    document.getElementById('rep-percent-65').value = perSixtyFive;
    document.getElementById('rep-percent-64').value = perSixtyFour;
    document.getElementById('rep-percent-62').value = perSixtyTwo;
    document.getElementById('rep-percent-61').value = perSixtyOne
    document.getElementById('rep-percent-60').value = perSixty;
    }
/* 
document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', (e) => {
    document.getElementById('output').style.visibility = 'visible';
    let lbs = e.target.value;
    let reps = e.target.value;
    document.getElementById('kgOutput').innerHTML
    = Math.round(lbs/2.2046 * 100) / 100;
    document.getElementById('ozOutput').innerHTML
    = Math.round(lbs*(36/(37 - reps)));
});
document.getElementById('repInput').addEventListener('input', (e) => {
    let reps = e.target.value;
    document.getElementById('repOutput').innerHTML = reps * 0.95
});

One rep max calculation Brzycki Formula: 1RM = Weight * (36 / (37 - Reps))
calculate percent 95% -> x 0.95

Epley Formula: 1RM = Weight * (1 + (0.0333 * Reps))
Brzycki Formula: 1RM = Weight * (36 / (37 - Reps))
Lombardi Formula: 1RM = Weight * (Reps ^ 0.1)
O'Conner Formula: 1RM = Weight * (1 + (0.025 * Reps)) 
*/