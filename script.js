console.log("script running!");

const pet_button = document.querySelector("#pet-button");
const feed_button = document.querySelector("#feed-button");
const play_button = document.querySelector("#play-button");
const brush_button = document.querySelector("#brush-button");


let happiness_num = Math.floor(Math.random()*6);
let hunger_num = Math.floor(Math.random()*6);
let energy_num = Math.floor(Math.random()*6);
let cleanliness_num = 10;

let hunger = document.querySelector("#hunger");
hunger.innerHTML = "<h3>Hunger: " + hunger_num +"</h3>";

let happiness = document.querySelector("#happiness");
happiness.innerHTML = "<h3>Happiness: " + happiness_num +"</h3>";

let cleanliness = document.querySelector("#clean");
cleanliness.innerHTML = "<h3>Cleanliness: " + cleanliness_num +"</h3>";

let energy = document.querySelector("#energy");
energy.innerHTML = "<h3>Energy: " + energy_num +"</h3>";

pet_button.addEventListener('click',()=>{
  alert("Bark bark! Fleece licks your hand.");
  happiness_num += 2;
  energy_num += 1
  happiness.innerHTML = "<h3>Happiness: " + happiness_num +"</h3>"
  energy.innerHTML = "<h3>Energy: " + energy_num +"</h3>"
});

play_button.addEventListener('click',()=>{
  happiness_num += 1
  energy_num -= 1;
  happiness.innerHTML = "<h3>Happiness: " + happiness_num +"</h3>"
  energy.innerHTML = "<h3>Energy: " + energy_num +"</h3>"
  if (energy_num <= 1)
  {  alert("Fleece is out of energy to play with you. He is now resting :(")
    play_button.remove();
  }
});


brush_button.addEventListener('click',()=>{
  cleanliness_num ++;
  happiness_num ++;
  happiness.innerHTML = "<h3>Happiness: " + happiness_num +"</h3>"
  cleanliness.innerHTML = "<h3>Cleanliness: " + cleanliness_num +"</h3>"
});


let fruit = 2;
feed_button.addEventListener('click', ()=> {
  fruit++;
  hunger_num--;
  let fleece_status = document.querySelector("#fleece-status");
  fleece_status.innerHTML = "Fleece has had " + fruit +  " fruits today."
  hunger.innerHTML = "<h3>Hunger: " + hunger_num +"</h3>"
  if (fruit >= 20 || hunger_num <= 0)
  {  
    alert("Fleece had eaten too much carrots! STOP FEEDING HIM!");
    feed_button.remove();
  }
});



const button2 = document.querySelector("#button2");

button2.addEventListener('click', ()=> {
  let status2 = document.querySelector("#status2");
  console.log(status2.innerText);
  status2.innerHTML = "Brodie enjoys being pet!";
  console.log(status2.innerText);
});


const button3 = document.querySelector("#button3");


let carrots = 2;
button3.addEventListener('click', ()=> {
  carrots++;
  let status3 = document.querySelector("#status3");
  status3.innerHTML = "Coco has had " + carrots +  " carrots today."
  if (carrots >= 20)
  {  
    alert("Mama Goat had eaten too much carrots! STOP FEEDING HER");
    button3.remove();
  }
});

const button4 = document.querySelector("#button4");

button4.addEventListener('click',()=> {
  button4.innerHTML = "Are you sure?"
  button4.addEventListener('click',()=> {
    let container = document.querySelector(".container");
    container.innerHTML = "<h1 class='title'>Due to some dangerous rulebreaking, the petting zoo is temporarily closed.</h1>";
  });

});

const button5 = document.querySelector("#button5");

button5.addEventListener('click',()=> {
  let container = document.querySelector(".container");
  container.innerHTML = "<h1 class='title'>Due to some dangerous rulebreaking, the tiger zoo is temporarily closed. Misty has escaped and is now chasing down guests. Please run.</h1>";
});


            