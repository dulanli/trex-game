function login(){           // function login
    
    // retrieve id and values from login.php
    let loginmsg = document.getElementById("loginmsg");
    
    let password = document.getElementById("password").value;
    let username = document.getElementById("username").value;
    
    let formuser = document.getElementById("formloginuser");
    let formpw = document.getElementById("formloginpw");
    
    if (username === '') {           // username is empty
        formuser.classList.add("error");
        formuser.classList.remove("success");
        loginmsg.innerHTML = "*Username field is empty";
        return false;
     }
    
    else if (password === '') {     // password is empty
        formpw.classList.add("error");
        formpw.classList.remove("success");
        loginmsg.innerHTML = "*Password field is empty";
        return false;
     }
    
    else{
    
        if(localStorage[username] === undefined){       // username exists
            loginmsg.innerHTML = "*Invalid Username";
            formuser.classList.add("error");
            formuser.classList.remove("success");
            return false; 
        }

        else{          // username does not exist
            formuser.classList.add("success");
            formuser.classList.remove("error");

            let usrObj = JSON.parse(localStorage[username]);    // convert to object
            
            // check password is the same stored in localStorage
            if(password === usrObj.password){       // password success
                sessionStorage.loggedInUsrUsername = usrObj.username;
                loginmsg.innerHTML = " "; 
                formpw.classList.add("success");
                formpw.classList.remove("error");
                return true;        // submit button redirect to next page
            }
            else{                                   // password error
                loginmsg.innerHTML = "*Invalid Password"; 
                formpw.classList.add("error");
                formpw.classList.remove("success");
                return false;
            }
        }
    }
        
}

