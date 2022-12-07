<?php
    //Include the PHP functions to be used on the page 
    include('common.php'); 
	
    //Output header and navigation 
    outputHeader("Trex Game - Sign Up");
    outputBannerNavigation("Game");
?>

<script type="text/javascript" src="../js/registrationScript.js"></script>

<!-- Click "Sign Up Here" or "Create an account" to access this page -->

<!-- Registration container -->
<div class="container-regis">
    
    <!-- Header of registration -->
	<div class="header-regis">
		<h2>Sign Up</h2>
	</div>
    
    <!-- Form -->
	<form name="form" class="form" id="form" action="login.php" onsubmit="return validation()" method="GET">
        
        <!-- Username field -->
		<div class="form-regis" id="formregis1">
			<label for="username">Username</label>
			<input type="text" placeholder="" id="username" autocomplete="off"/>
			<i class="fa fa-check-circle"></i>   <!-- Bootstrap icon -->
			<i class="fa fa-exclamation-circle"></i>
			<span id="errormessage1" class="errormessage"> </span>
		</div>
        
        <!-- Email field -->
		<div class="form-regis" id="formregis2">
			<label for="email">Email</label>
			<input type="text" placeholder="" id="email" autocomplete="off"/>
			<i class="fa fa-check-circle"></i>
			<i class="fa fa-exclamation-circle"></i>
			<span id="errormessage2" class="errormessage"> </span>
		</div>
        
        <!-- Country field -->
        <div class="form-regis" id="formregis3">
			<label for="country">Country</label>
			<input type="text" placeholder="" id="country" autocomplete="off"/>
			<i class="fa fa-check-circle"></i>
			<i class="fa fa-exclamation-circle"></i>
			<span id="errormessage3" class="errormessage"> </span>
		</div>
        
        <!-- Password field -->
        <div class="form-regis" id="formregis4">
			<label for="password">Password</label>
			<input type="password" placeholder="" id="password" autocomplete="off"/>
			<i class="fa fa-check-circle"></i>
			<i class="fa fa-exclamation-circle"></i>
			<span id="errormessage4" class="errormessage"> </span>
		</div>
        
        <!-- Confirm Password field -->
        <div class="form-regis" id="formregis5">
			<label for="conpassword">Confirm Password</label>
			<input type="password" placeholder="" id="conpassword" autocomplete="off"/>
			<i class="fa fa-check-circle"></i>
			<i class="fa fa-exclamation-circle"></i>
			<span id="errormessage5" class="errormessage"> </span>
		</div>
        
        <!-- Submit button -->
		<button type="submit" name="submit" value="submit">Submit</button>
        
	</form>
    
</div>

<?php
    //Output the footer
    outputFooter();
?>