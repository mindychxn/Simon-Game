var whichBtn = ["tleft", "tright", "bleft", "bright"];
var gamePattern = [];
var userPattern = [];

$(".btn").click(function (event){
    var userChosenBtn = event.target.id;
    console.log(userChosenBtn);
})
userPattern.push(userChosenBtn);

function nextSequence(){
    var randNum = Math.floor(Math.random()*4);
    var chosenBtn = whichBtn[randNum];
    gamePattern.push(chosenBtn);
    console.log(chosenBtn);

    //$("#" + chosenBtn).fadeOut(100).fadeIn(100);
}
nextSequence();