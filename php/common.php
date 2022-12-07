<?php

/* Ouput the page header and opening HTML tag */
function outputHeader($title){
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
	echo '<meta charset="UTF-8">';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" type="text/css" href="../css/styles.css">';
    echo '</head>';
    echo '<body>';
}

/* Ouput the navigation bar */
/* The selected class is applied to the page that matches the page name variable */
function outputBannerNavigation($pageName){

    echo '<div class="navigation">';
    
    // Array of pages to link to
    $linkNames = array("Home", "Game", "Leaderboard", "About Us");
    $linkAddresses = array("index.php", "game.php", "leaderboard.php", "aboutus.php");
    
    // Output navigation using a for loop
    for($x = 0; $x < count($linkNames); $x++){
		
		// if a page is selected
        if($linkNames[$x] == $pageName){
            echo '<a class="selected navi"';
        }
		
		// if a page is at default
		else{
			echo '<a class="navi"';
		}
		
        echo 'href="' . $linkAddresses[$x] . '">' . $linkNames[$x] . '</a>';
    }
    echo '</div>';

}

//Output the page footer and closing HTML tag
function outputFooter(){
	
	echo '<div class="footer">';
		echo '<div class="footer-bottom">';
			echo '&copy; trexgame 2020 | Designed by M00723060';
		echo '</div>';
	echo '</div>';
		
	
    echo '</body>';
    echo '</html>';
}

