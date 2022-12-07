<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Trex Game - Login");
    outputBannerNavigation("Game");
?>

<script type="text/javascript" src="../js/loginScript.js"></script>

<!-- Login container -->
<div class="container-login">
	
	<!-- User inputs to login -->
    <div class="header-login">
		<h2>LOGIN</h2>
	</div>
    
    <!-- Form -->
    <form name="loginform" class="loginform" id="loginform" action="game.php" onsubmit="return login()">
        
        <!-- Username field -->
        <div class="form-login" id="formloginuser" >
            <i class="fa fa-user" aria-hidden="true"></i>       <!-- Bootstrap icon -->
            <input id="username" type="text" placeholder="Username" autocomplete="off">
        </div>
        
        <!-- Password field -->
        <div class="form-login" id="formloginpw">
            <i class="fa fa-lock" aria-hidden="true"></i>       <!-- Bootstrap icon -->
            <input id="password" type="password" placeholder="Password" autocomplete="off">
        </div>
        
        <!-- Message Error field -->
        <span id="loginmsg" class="loginmsg"> </span>
        <br>
        
        <!-- Button to login -->
        <button class="btnlogin" type="submit" name="btnlogin" value="submit">Login In and Play</button>
        
        <!-- Link to redirect to registration page -->
        <div class="signuplink">
            <li><a class="signup" href="registration.php">Sign Up Here</a></li> 
            <i class="fa fa-question-circle" aria-hidden="true"></i>
        </div>
        
    </form>
</div>

<?php
    //Output the footer
    outputFooter();
?>