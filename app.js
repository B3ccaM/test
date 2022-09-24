const x = prompt("what do you wanna be called?");

console.log( "Welcome to my quiz game trial " + prompt())
const losses = 10

if(losses > 20){
    console.log("Come on you got this.");
} 
else if(losses> 0){
    console.log("Can you answer my question?");
}

function myFunction() {
    var text;
    var favChar = prompt("What video game character wears a red cap and collects coins?")
    switch(favChar) {
        case "Mario":
            text = "That is correct!";
            document.getElementById("demo").style.color = "green";
            break;
        case "mario":
            text = "That is correct!";
            document.getElementById("demo").style.color = "green";
            break;
        default:
            text = "Sorry but that is incorrect!"
    }
document.getElementById("demo").innerHTML = text;
}

let text = "randomString";
document.getElementById("demo").innerHTML = text.length;
console.log(text.length)


document.getElementById("demo").innerHTML = 
  text.length.valueOf() + "<br>" +
  (24).valueOf() + "<br>" +
  (12+ 13).valueOf();

//For Loop
for(let i=0; i < 5; i++){
    console.log(i);
}

//while Loop
let j = 0;
while(j < 5){
    console.log("Im getting closer to 5");
    j++;
}

//Change CSS
document.getElementById("demo").style.color = "blue";

