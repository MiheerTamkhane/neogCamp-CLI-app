const readLineSync = require("readline-sync");
const chalk = require('chalk')
  const userName = readLineSync.question(chalk.yellow.bold("To play quiz please enter your name : "));

const data = [
  {
    que:`1.How old prof. Dumbledore was?
    a:100 years
    b:150 years
    c:160 years
    `,
    ans:"b",
  },  {
    que:`2.Who wrote Haryy Potter books?
    a:jane austin
    b:Virginia Woolf
    c:J.K. Rowling
    `,
    ans:"c",
  },  {
    que:`3.What name is assign to normal human being in Harry Potter?
    a:Muggles
    b:Elfs
    c:Wizards
    `,
    ans:"a",
  },  {
    que:`4.How many Horcruxes did Voldemort create?
    a:5
    b:6
    c:7
    `,
    ans:"c",
  },  {
    que:`5.Which family Dobby served the most?
    a:Malfoy's
    b:Potter
    c:Granger
    `,
    ans:"a",
  },  {
    que:`6.Which was the fastest Broomstick in Harry Potter?
    a:Nimbus 2001
    b:Nimbus 3000
    c:The Firebolt
    `,
    ans:"c",
  },  {
    que:`7.What is name of Hagrid house?
    a:Gryffindor
    b:Ravenclaw
    c:Hufflepuff 
    `,
    ans:"a",
  },  {
    que:`8.Which was the safest place in Wizarding world?
    a:Hogwarts School
    b:Gringotts
    c:Azkaban
    `,
    ans:"b",
  },  {
    que:`9.How may houses in Hogwarts school?
    a:3
    b:5
    c:4
    `,
    ans:"c",
  },  {
    que:`10.Who is the Hufflepuff house ghost?
    a:Cutherbert binns
    b:The fat friar
    c:The gray lady`,
    ans:"b",
  },
   {
    que:`11.How many staircases does Hogwarts have?
    a:142
    b:152
    c:163
    `,
    ans:"a",
  },
   {
    que:`12.What is the name of the book Hermione supposes Voldemort used to learn about Horcruxes?
    a:Amagik moste evil
    b:Secrets of the darkest art
    c:Moste potente potions
    `,
    ans:"b",
  },
   {
    que:`13.Who was the headmaster of Hogwarts when the Chamber of Secrets was opened for the first time?
    a:Armondo dippet
    b:Albus dumbledore
    c:Brutus scrimgeour
    `,
    ans:"a",
  },
   {
    que:`14.What is full name of prof. Dumbledore?
    a:Albus Wulfric Percival Brian Dumbledore
    b:Albus Percival Brian Wulfric Dumbledore
    c:Albus Percival Wulfric Brian Dumbledore
    `,
    ans:"c",
  }
];
//High scorers Database
const highScores = [{
  name: "Miheer",
  oldScores:16
},{
  name: "Joy",
  oldScores:15
}]
let score = 0;

//play game function
function play(que,ans){
  const userAns = readLineSync.question(chalk.yellow.bold(que));
  if(userAns.toUpperCase() === ans.toUpperCase()){
    console.log(chalk.green.bold("You got write answer! ;)"));
    score = score + 2;
  }
  else{
    console.log(chalk.red.bold("wrong! ans, you are giving more power to Lord Voldemort!"));
    score = score - 1;
  }
  //Checking users game stanzs 
  if(score === 4){
  console.log(chalk.cyan.bold("Nice you distroyed, Tom Riddle's diary"))
}else if(score === 8){
  console.log(chalk.cyan.bold("Good, Marvolo Gaunt's Ring is finished"))
}else if(score === 12){
  console.log(chalk.cyan.bold("Well done its Salazar Slytherin's Locket"))
}else if(score === 16){
  console.log(chalk.cyan.bold("Helga Hufflepuff's Cup is removed"))
}else if(score === 20){
  console.log(chalk.cyan.bold("Great wanished Rowena Ravenclaw's Diadem"))
}else if(score === 24){
  console.log(chalk.cyan.bold("Its Hard for that one, Horcrux within Harry Potter finished"))
}else if(score === 28){
  console.log(chalk.cyan.bold("It's unreal, you have distroyed Nagini the Snake, the Voldemort is no more."))
}
  console.log("Current score :",score);
  console.log("----------------------")
}

//Comparing users score with high scorers
function highScoresHandler(){
   if(score > highScores[0].oldScores){
       console.log("You got a high score than Miheer and grabbed first place in this game")
     }else if(score > highScores[1].oldScores){
       console.log("You got a high score than Joy and grabbed second place in this game")
     }else{
       console.log("Good game!")
     }
     for(let j=0; j<highScores.length; j++){
       console.log(highScores[j].name + ' score is : ' + highScores[j].oldScores);
     }    
}

//making sure user does not give a name = empty string
if(userName){ 
    console.log(chalk.cyan.bold("Hello! "+ userName + ". Welcome to Wizarding World."));
    console.log(chalk.blue.bold("In this game as you give two right answers you distroys one HORCRUX & similarly on wrong answer you will give more power to Lord Voldemort."))
    console.log(chalk.bold.blue("LETS HUNT THE HORCRUXES!"))
    for(let i = 0; i<data.length; i++){
     play(data[i].que,data[i].ans);
      }
     console.log(chalk.cyan("Hey "+chalk.bold(userName.toUpperCase())+" your total score is: ",chalk.bold(score)));  
     highScoresHandler();
    
}else{
console.log("please enter you name!")
}



