var whichBtn = ["tleft", "tright", "bleft", "bright"];
var gamePattern = [];
var userPattern = [];
var firstPress=false;
var level=1;

document.addEventListener("keypress", function(){
    if (!firstPress){
        $("#level-title").html("Level "+level).css("font-size", "2.5vw");
        nextSequence();
        firstPress=true;}
    });

$(".btn").click(function (event){
    var userChosenBtn = event.target.id;
    userPattern.push(userChosenBtn);
    console.log(userPattern);
    animatePress(userChosenBtn);
    checkAns(userPattern.length - 1);
    
})

function nextSequence(){
    $("#level-title").text("Level "+level);
    var randNum = Math.floor(Math.random()*4);
    var chosenBtn = whichBtn[randNum];
    gamePattern.push(chosenBtn);
    $("#" + chosenBtn).fadeIn(100).fadeOut(100).fadeIn(100);
    level++;
}

function animatePress(currentButton) {
    $("#"+currentButton).addClass("pressed");
    setTimeout(function() {$("#"+currentButton).removeClass("pressed")}, 400);
}

function checkAns(currentLevel){
    if (userPattern[currentLevel]===gamePattern[currentLevel]){
        console.log("success");
        if (userPattern.length===gamePattern.length){
            setTimeout(nextSequence, 1000);
        }    
    }
    else {
        console.log("wrong");
    }
}