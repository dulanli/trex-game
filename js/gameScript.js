var score = 0;          // initialising score as 0
var newScore = 0;       // initialising newScore as 0

// Sound effects from audio files
var jumpAudio = new Audio ("../audio/jump.mp3");
var deadAudio = new Audio ("../audio/dead.mp3");
var scoreUpAudio = new Audio ("../audio/scoreUp.mp3");

// load function upon loading webpage
window.onload = checkLogin;

// allow user to access game.php, display user, updatescore
function checkLogin(){
    
    if (sessionStorage.loggedInUsrUsername !== undefined){
        
        let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUsrUsername]);
        
        let userpro = document.getElementById("userpro");
        userpro.innerHTML = " User: " +usrObj.username;
        
        updateScores(score);
    }
    
    else{
        window.location.href = "login.php";
    }
}

// logout function - redirect to login.php and clear session storage 
function logout(){
    
    window.location.href = 'login.php';
    sessionStorage.clear();
}

// detect keypress "space"
document.body.onkeyup = function(e){
    
    if(e.keyCode == 32){        // space bar
        jump();                 // execute function jump()
    }
    
}

// function is executed when user press "space"
function jump(){
    
    // getting values from game.php
    var dino = document.getElementById("dino");
    var block = document.getElementById("block");
    var road = document.getElementById("road");
    var cloud = document.getElementById("cloud");
    var gameOver = document.getElementById("gameOver");
    var scoreLabel = document.getElementById("scoring");
    
    // play sound effect jump
    jumpAudio.play();
    
    // add classes & style
    gameOver.style.display = "none";
    dino.style.visibility = "visible";
    block.classList.add("blockActive");
    road.classList.add("roadActive");
    cloud.classList.add("cloudActive");
    scoreLabel.style.display = "block";

    // add class if the class is not there
    if (dino.classList != "jump") {
    
        dino.classList.add("jump");
        
        // after 300ms class is removed
        setTimeout(function(){
            dino.classList.remove("jump");
        }, 300);    
    }    
    
}

// constant check if character is alive each 100ms
let checkCharacter = setInterval(function (){      
    
    // getting values from game.php
    var dino = document.getElementById("dino");
    var block = document.getElementById("block");
    var road = document.getElementById("road");
    var cloud = document.getElementById("cloud");
    var gameOver = document.getElementById("gameOver");
    var scoreLabel = document.getElementById("scoring");
    
    // get current character position
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let dinoLeft = parseInt(window.getComputedStyle(dino).getPropertyValue("left"));
    // get current block position
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    // detect collision between block and dino
    if (blockLeft > 0 && blockLeft < 80 && dinoTop >= 230){  
        
        // add/remove classes & style
        gameOver.style.display = "block";
        dino.style.visibility = "hidden";
        block.classList.remove("blockActive");
        road.classList.remove("roadActive");
        cloud.classList.remove("cloudActive");
        scoreLabel.style.display = "none";
        
        deadAudio.play();               // play sound effect dead

        storeScores(score);             // function to store highest scores
        newScore = score;               // getting value of score into newScore
        gameOverDisplay(newScore);      // function gameOverDisplay
        
        score = 0;                      // set value of score to 0
    }
    
    let xCoor = Math.abs(dinoLeft - blockLeft);     // return x-coordinate between the block and the dino

    if (xCoor < 1300){          // pts for each pixel 
        score += 1;             // increment score by 1
        updateScores(score);    // updateScores function
    }
    
    if (xCoor < 30){            // play sound when dino cross obstacle
        scoreUpAudio.play();   
    }

}, 100);        

// Store highest score by the user into localStorage
function storeScores(score){

    let user = JSON.parse(localStorage[sessionStorage.loggedInUsrUsername]);
    
    if (user.currentscore < score){
        user.currentscore = score;
        localStorage[sessionStorage.loggedInUsrUsername] = JSON.stringify(user);
    }
}  

// Update score bar 
function updateScores(score){
    
    // retrieve key "user" to use value "currentscore"
    let user = JSON.parse(localStorage[sessionStorage.loggedInUsrUsername]);
    var scoreLabel = document.getElementById("scoring");
    
    scoreLabel.innerHTML = "High Score: "+user.currentscore + " | Score "+ score; 
}

// Display text if game is over
function gameOverDisplay(newScore){
    
    let gameOverMsg1 = document.getElementById("gameOverMsg1");
    let gameOverMsg2 = document.getElementById("gameOverMsg2");
    let gameOverMsg3 = document.getElementById("gameOverMsg3");
    let user = JSON.parse(localStorage[sessionStorage.loggedInUsrUsername]);
    
    gameOverMsg1.innerHTML = "Game Over";
    gameOverMsg2.innerHTML = "High Score "+user.currentscore + " - Score "+ score; 
    gameOverMsg3.innerHTML = "[Press Space to Try Again]"; 

}


                          
               