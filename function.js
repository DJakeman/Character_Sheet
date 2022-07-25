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

// when clicking the randombutton it sends calls the randomAvg() function and uses the .value to send it to the proper text box in html.
randomBtn.onclick = () => {
    strength.value = randomAvg();
    dexterity.value = randomAvg();
    constitution.value = randomAvg();
    intelligence.value = randomAvg();
    wisdom.value = randomAvg();
    charisma.value = randomAvg();
    
    // call the modifier if else function to use the data above to calculate the modifier 
    console.log(modifier(strength.value)); // this works... need to finish the if/else...if function to calculate the modified values now.
};

// IF/Else...if Function to calculate the modifier 

const modifier = (mod) => {
    if (mod === '1') {
        return 'This Works';
    } else {
        return 'Does not work';
    }
};

modBtn.onclick = () => {
    console.log(modifier(strength));
};
