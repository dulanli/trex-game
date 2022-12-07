<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Trex Game - Home");
    outputBannerNavigation("Home");
?>
	
	<!-- Brief description on how to play the game -->
	<div class="homepage">

		<h1> Trex Game </h1.>
		
		<p class="home"> 
			The game is a runner-based game where the user will have to press a key (usually the space button) 
			to dodge obstacles. If the user fails to do so, it will be game over. The goal is to survive. 
			The score will be calculated based on the time taken, number of obstacles jumped and difficulty set. 
			
			The longer you play, the higher score you will achieve. 
		</p>
		
		<!-- Shortcut to sign up -->
		<p class="home">
			Register Now! 
			<a class="create" href="registration.php">Create An Account Here!</a>
		</p>
		
		<!-- image/video example on how to play (may change) -->
		<img class="howto" src = "../img/2.png">
		
	</div>
	
	
<?php
    //Output the footer
    outputFooter();
?>