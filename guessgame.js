random=10;
let guess_no=prompt("enter number");
while(guess_no!=random){
    console.log("try agin..");
    guess_no=prompt("enter a random number");
}
if(guess_no==random){
    alert("congragulations")
}
