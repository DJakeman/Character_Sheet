// Need to create a random number generator function that rounds down (done)
// Need to remove the lowest number and add the three highest together. (done)
// Need to populate the HTML text boxes with seaparate random numbers
// Should also check to see if the text box already has a number inside it before randomizing

const strength = document.getElementById('str');
const dexterity = document.getElementById('dex');
const constitution = document.getElementById('con');
const intelligence = document.getElementById('int');
const wisdom = document.getElementById('wis');
const charisma = document.getElementById('cha');
const randomBtn = document.getElementById('button');

// simulates the random 6 sided die, could use * 20 for the 20 sided die but going by the bok rules on this one
const randomNum = () => {
    return Math.floor(Math.random() * 6)+ 1;
};
//Simulates the 4 6-sided die that you roll and then add together based on book rules. 
const randomAvg = () => {
    const die1 = randomNum();
    const die2 = randomNum();
    const die3 = randomNum();
    const die4 = randomNum();

    const array = [die1, die2, die3, die4]
    const result = array.sort().filter((_,i) => i);
    
    const addDie = () => {
        const sum = result.reduce((partialSum, a) => partialSum + a, 0);
        return sum;
    };
    return addDie();
};

randomBtn.onclick = () => {
    strength.value = randomAvg();
    dexterity.value = randomAvg();
    constitution.value = randomAvg();
    intelligence.value = randomAvg();
    wisdom.value = randomAvg();
    charisma.value = randomAvg();   
};


console.log(randomAvg());