<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Trex Game - Game");
    outputBannerNavigation("Game");
?>

<!-- Trex Game -->
<script type="text/javascript" src="../js/gameScript.js"></script>

<!-- Container for the game -->
<div class="game">
    
    <!-- Dino character -->
    <div class="dino" id="dino">
        <img src="../img/dino.png">
    </div>
    
    <!-- Block -->
    <div class="block" id="block">
         <img src="../img/blocky.png">
    </div>
    
    <!-- Path where the dino will run -->
    <div class="road" id="road">
        <img src="../img/roady.png">
    </div>
    
    <!-- Cloud -->
    <div class="cloud" id="cloud">
        <img src="../img/cloudy.png">
    </div>
    
    <!-- High score and current score -->
    <div class="scoring" id="scoring"></div>
    
    <!-- Gameover message -->
    <div id="gameOver" class="gameOver">
        <span id="gameOverMsg1" class="gameOverMsg1"> </span>
        <span id="gameOverMsg2" class="gameOverMsg2"> </span>
        <br>
        <span id="gameOverMsg3" class="gameOverMsg3"> </span>
    </div>

</div>

<!-- User playing and logout button -->
<div class="profile" id="profile">
    <i class="fa fa-user-circle"></i>
    <span class = "userpro" id ="userpro"> </span>
    <input id="logout" class="logout" type="button" onclick="logout();" value="Log Out"/>
</div>

<?php
    //Output the footer
    outputFooter();
?>