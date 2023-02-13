
let userChoice= prompt ("Heads or Tails?")
const rand= Math.round(Math.random())
let computerChoice; 
if(rand==0) { 
    computerChoice= 'heads'
 }
 else {
    computerChoice= 'tails'
 }

if(userChoice!=computerChoice){
 alert ("Sorry, the coin flip landed on " + computerChoice)
}
else {
    alert("You guessed right! The coin flip landed on " + computerChoice)
}

const birthYear= prompt('What year were you born?')
if ((2023-birthYear)<21)
{
    alert("Sorry, you are not old enough to drink in the US");
}
else if ((2023-birthYear)==21) { 
    alert("You are old enough to drink in the US...barely");    
}
 else { 
    alert("You are old enough to drink in the US");
    
}