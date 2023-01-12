var whichBtn = ["tleft", "tright", "bleft", "bright"];
var gamePattern = [];
var userPattern = [];
var start=false;
var level=1;

document.addEventListener("keypress", function(){
    if (!start){
        $("#level-title").html("Level "+level).css("font-size", "2.5vw");
        $(".btn").removeClass("game-over");
        $("#level-title").removeClass("glow-text");
        $("#level-title").css("text-shadow", "0 0 2vw #fffae4ed")
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
    playSound(chosenBtn);
    animatePress(chosenBtn);
    level++;
}

$(".btn").click(function (event){
    var userChosenBtn = event.target.id;
    userPattern.push(userChosenBtn);
    playSound(userChosenBtn);
    animatePress(userChosenBtn);
    checkAns(userPattern.length - 1);
})

function animatePress(currentButton) {
    $("#"+currentButton).addClass("pressed");
    setTimeout(function() {$("#"+currentButton).removeClass("pressed")}, 400);
}

function playSound(name) {
    var audio = new Audio("Sounds/"+name+".mp3");
    audio.play();
}

function checkAns(currentLevel){
    if (userPattern[currentLevel]===gamePattern[currentLevel]){
        if (userPattern.length===gamePattern.length){
            setTimeout(nextSequence, 1000);
        }    
    }
    else {
        $("#level-title").html("Game Over.<p>Press Any Key to Restart</p>").css({"font-size": "2vw", "letter-spacing": "0.5vw", "margin-bottom": "1vw"});
        $("#level-title p").css("font-size", "1vw").css("letter-spacing", "0.5vw");
        $("#level-title p").addClass("glow-text");
        playSound("lose");
        $(".btn").addClass("game-over");
        startOver();
    }
}

function startOver(){
    level=1;
    gamePattern=[];
    start=false;
}
