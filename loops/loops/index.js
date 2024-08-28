function guessingGame() {
    let number=prompt("guess a number");
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = 1;
    while(number!=randomNumber)
      {
        if(number==null)
          return;
        if(!(number>=1 && number<=100)){
          number = prompt("not a valid number\nenter a number between 1 and 100")
          continue;
        }
        
        if (number> randomNumber)
              number = prompt(number+" is too high\nEnter a number")
          else
            number = prompt(number+" is too low\nEnter a number")
        
        guesses++
        
      }
    alert("you guessed it right in " + guesses + " attempts");
    return;
  }
  guessingGame()