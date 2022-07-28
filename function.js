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

// IF/Else...if Function to calculate the modifier 

const modifier = (ability, mod) => {
    if (ability === '1') {
        mod.value = -5;
    } else if (ability === '2' || ability === '3') {
        mod.value = -4;
    } else if (ability === '4' || ability === '5') {
        mod.value = -3;
    } else if (ability === '6' || ability === '7') {
        mod.value = -2;
    } else if (ability === '8' || ability === '9') {
        mod.value = -1;
    } else if (ability === '10' || ability === '11') {
        mod.value = 0;
    } else if (ability === '12' || ability === '13') {
        mod.value = 1;
    } else if (ability === '14' || ability === '15') {
        mod.value = 2;
    } else if (ability === '16' || ability === '17') {
        mod.value = 3;
    } else if (ability === '18' || ability === '19') {
        mod.value = 4;
    } else if (ability === '20' || ability === '21') {
        mod.value = 5;
    } else if (ability === '22' || ability === '23') {
        mod.value = 6;
    } else if (ability === '24' || ability === '25') {
        mod.value = 7;
    } else if (ability === '26' || ability === '27') {
        mod.value = 8;
    } else if (ability === '28' || ability === '29') {
        mod.value = 9;
    } else if (ability === '30') {
        mod.value = 10;
    } else {
        console.log('does not work');
    }
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
    // this works... need to finish the if/else...if function to calculate the modified values now.
    modifier(strength.value, modStr);
    modifier(dexterity.value, modDex);
    modifier(constitution.value, modCon);
    modifier(intelligence.value, modInt);
    modifier(wisdom.value, modWis);
    modifier(charisma.value, modCha);
};

// Allows user to calculate their modifier from manually typed ability scores.
modBtn.onclick = () => {
    modifier(strength.value, modStr);
    modifier(dexterity.value, modDex);
    modifier(constitution.value, modCon);
    modifier(intelligence.value, modInt);
    modifier(wisdom.value, modWis);
    modifier(charisma.value, modCha);
};

//Navbar functions
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
});

//Lets the navigation move to the linked names and the main nav bar does not cover the names
document.documentElement.style.setProperty('--scroll-padding', navHeight + 1 + 'px');