
import inquirer from "inquirer";


type ans ={
    userguess:number
}



const randomNumber = Math.floor(Math.random()*10)

// console.log(randomNumber);

const answer:ans = await inquirer.prompt([
    {
        type:"number",
        name:"userguess",
        message:"ENTER YOUR  GUESS NUMBER b/w 1 TO 10"
    }
])


const {userguess} = answer
console.log(`YOUR GUESS, ${userguess}, SYSTEM NUMBER, ${randomNumber}`);


if(userguess == randomNumber){ 
    console.log("CORRECTO\n AB JA IDHAR SE")
}else{

    console.log("LAKH DI LANAT")
}