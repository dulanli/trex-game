function validation() {
    
    // creating object
    var usrObject = {};
    
    // storing values from registration.php into object
    usrObject.username = document.getElementById('username').value;
    usrObject.email = document.getElementById('email').value;
    usrObject.country = document.getElementById('country').value;
    usrObject.password = document.getElementById('password').value;
    
    usrObject.currentscore = 0;     // set initial score to 0
    
    // retrieving value from registration.php 
    let conpw = document.getElementById('conpassword').value;
    
    if( 
        (usrObject.username === '') || (usrObject.email === '') || (usrObject.country === '') || (usrObject.password === '') || (usrObject.confirmpassword === '') || (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(usrObject.email)) || (/[^a-zA-Z]/.test(usrObject.country)) || (usrObject.password.length <= 5) || (usrObject.password != conpw) 
    ){      // to allow all fields to be checked at once instead one by one
        
        // user
        
        let message1 = document.getElementById("errormessage1");
        let form1 = document.getElementById("formregis1");

        if (usrObject.username === '') {    // username field is empty
            form1.classList.add("error");
            form1.classList.remove("success");
            message1.innerHTML = "*This field is empty";

        }

        else {
            form1.classList.add("success");
            form1.classList.remove("error");
            
            if (localStorage[usrObject.username] === undefined) {       // username does not exist
                form1.classList.add("success");
                form1.classList.remove("error");

            }
            
            else {          // username exists
                form1.classList.add("error");
                form1.classList.remove("success");
                message1.innerHTML = "*Username is taken";
            }

        }

        // email
        
        let message2 = document.getElementById("errormessage2");
        let form2 = document.getElementById("formregis2");

        if (usrObject.email === '') {       // email field is empty
            form2.classList.add("error");
            form2.classList.remove("success");
            message2.innerHTML = "*This field is empty";

        }
        
        // value input is an invalid email 
        else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(usrObject.email)) {
            form2.classList.add("error");
            form2.classList.remove("success");
            message2.innerHTML = "*Invalid email address";

        } 

        else {      // value input is a valid email
            form2.classList.add("success");
            form2.classList.remove("error");
            
            let userArray = new Array();        // creating userArray
            let emailInput = document.getElementById('email').value;    // retrieving email value from registration.php

            // retrieving all data (keys and values) and store in userArray
            for (let i = 0; i < localStorage.length; i++){      
    
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);

                userArray[i] = JSON.parse(value);
                localStorageEmail = userArray[i].email;     // storing email value in localStorage

            }
            
            if (emailInput === localStorageEmail) {     // email already in use
                form2.classList.add("error");
                form2.classList.remove("success");
                message2.innerHTML = "*Email is taken";

            }
            
            else {      // email not taken
                form2.classList.add("success");
                form2.classList.remove("error");
            }

        }

        // country
        
        let message3 = document.getElementById("errormessage3");
        let form3 = document.getElementById("formregis3");

        if (usrObject.country === '') {     // country field is empty
            form3.classList.add("error");
            form3.classList.remove("success");
            message3.innerHTML = "*This field is empty";

        }

        else if (/[^a-zA-Z]/.test(usrObject.country)) {     // check if country contain characters
            form3.classList.add("error");
            form3.classList.remove("success");
            message3.innerHTML = "*This field can only contain characters";

        }

        else {          
            form3.classList.add("success");
            form3.classList.remove("error");

        }

        // password
    
        let message4 = document.getElementById("errormessage4");
        let form4 = document.getElementById("formregis4");

        if (usrObject.password === '') {        // password field is empty
            form4.classList.add("error");
            form4.classList.remove("success");
            message4.innerHTML = "*This field is empty";

        }

        else if (usrObject.password.length <= 5){         // check password strength - more than 6 characters or numbers
            form4.classList.add("error");
            form4.classList.remove("success");
            message4.innerHTML = "*Password is too weak";

        }

        else {
            form4.classList.add("success");
            form4.classList.remove("error");

        }

        // confirm password
        
        let message5 = document.getElementById("errormessage5");
        let form5 = document.getElementById("formregis5");

        if (conpw === '') {     // confirm password field is empty
            form5.classList.add("error");
            form5.classList.remove("success");
            message5.innerHTML = "*This field is empty";

        }

        else if (usrObject.password != conpw) {     // check if password value is confirm password value
            form5.classList.add("error");
            form5.classList.remove("success");
            message5.innerHTML = "*Password does not match";

        }

        else {
            form5.classList.add("success");
            form5.classList.remove("error");

        }
        
        return false;           // do not redirect to next page
    
    }

    else {
        
        // store in local storage
        localStorage[usrObject.username] = JSON.stringify(usrObject);

        return true;        // redirect to next page
    }
}

	
