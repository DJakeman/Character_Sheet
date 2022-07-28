// Need to create a random number generator function that rounds down (done)
// Need to remove the lowest number and add the three highest together. (done)
// Need to populate the HTML text boxes with seaparate random numbers (done)
// Should also check to see if the text box already has a number inside it before randomizing (possible need)
//Need a function to calculate the modifier based on the random generated stat.
//Ability
const strength = document.getElementById('str');
const dexterity = document.getElementById('dex');
const constitution = document.getElementById('con');
const intelligence = document.getElementById('int');
const wisdom = document.getElementById('wis');
const charisma = document.getElementById('cha');
const randomBtn = document.getElementById('button');
//Modifiers
const modStr = document.getElementById('str-mod');
const modDex = document.getElementById('dex-mod');
const modCon = document.getElementById('con-mod');
const modInt = document.getElementById('int-mod');
const modWis = document.getElementById('wis-mod');
const modCha = document.getElementById('cha-mod');
const modBtn = document.getElementById('button2');

//Navbar Java
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('link-container')[0];
const navHeight = document.querySelector('.navbar').offsetHeight;

//Race, Class, Background, Experience, and Level
const pRace = document.getElementById('input-race');
const pSubRace = document.getElementById('input-subrace');
const pClass = document.getElementById('input-class');
const pBackground = document.getElementById('input-background');
const pLevel = document.getElementById('input-level');
const pExperience = document.getElementById('input-experience');


