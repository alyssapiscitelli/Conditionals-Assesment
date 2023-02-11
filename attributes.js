
let userChoice= prompt ("Heads or Tails?")
rand= Math.round(Math.random())
if(userChoice!=rand){
 document.write ("Sorry, the coin flip landed on " + rand)
}
else {document.write("You guessed right! The coin flip landed on " + rand)}

const birthYear= prompt('What year were you born?')
if ((2023-birthYear)<21)
{alert("Sorry, you are not old enough to drink in the US");}
else if ((2023-birthYear)==21) { alert("You are old enough to drink in the US...barely"); 
    
} else { alert("You are old enough to drink in the US");
    
}