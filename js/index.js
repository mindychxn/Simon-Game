var whichBtn = ["tleft", "tright", "bleft", "bright"];
var gamePattern = [];
var userPattern = [];
var start=false;
var level=1;

document.addEventListener("keypress", function(){
    if (!start){
        $("#level-title").html("Level "+level).css("font-size", "2.5vw");
        $(".btn").removeClass("game-over");
        setTimeout(nextSequence, 500);
        start=true;
    }
});

function nextSequence(){
    userPattern=[];
    $("#level-title").text("Level "+level);
    var randNum = Math.floor(Math.random()*4);
    var chosenBtn = whichBtn[randNum];
    gamePattern.push(chosenBtn);
    animatePress(chosenBtn);
    level++;
}

$(".btn").click(function (event){
    var userChosenBtn = event.target.id;
    userPattern.push(userChosenBtn);
    console.log(userPattern);
    animatePress(userChosenBtn);
    checkAns(userPattern.length - 1);
})

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
        $("#level-title").html("Game Over.<p>Press Any Key to Restart</p>");
        $("#level-title p").css("font-size", "1vw").css("letter-spacing", "0.5vw");
        $(".btn").addClass("game-over");
        startOver();
        //setTimeout(function() {$(".button").removeClass("gsme-over")}, 400);
    }
}

function startOver(){
    level=1;
    gamePattern= [];
    userPattern = [];
    start=false;
}
