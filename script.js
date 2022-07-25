// Need to create a random number generator function that rounds down (done)
// Need to remove the lowest number and add the three highest together. (done)
// Need to populate the HTML text boxes with seaparate random numbers (done)
// Should also check to see if the text box already has a number inside it before randomizing (possible need)
//Need a function to calculate the modifier based on the random generated stat.

const strength = document.getElementById('str');
const dexterity = document.getElementById('dex');
const constitution = document.getElementById('con');
const intelligence = document.getElementById('int');
const wisdom = document.getElementById('wis');
const charisma = document.getElementById('cha');
const randomBtn = document.getElementById('button');

const modStr = document.getElementById('str-mod');
const modDex = document.getElementById('dex-mod');
const modCon = document.getElementById('con-mod');
const modInt = document.getElementById('int-mod');
const modWis = document.getElementById('wis-mod');
const modCha = document.getElementById('cha-mod');
const modBtn = document.getElementById('button2');