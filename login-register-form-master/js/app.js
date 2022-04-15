function validateForm(){

    let data=localStorage.getItem('details') ? JSON.parse(localStorage.getItem('details')) : [];;
    let formData ={
            "name":document.getElementById("uName").value,
            "email":document.getElementById("uEmail").value,
            "contactno":document.getElementById("uContactno").value,
            "password":document.getElementById("uPassword").value,
            "confirmpassword":document.getElementById("confirmPassword").value
        }
        data.push(formData);
        if(localStorage){
            localStorage.setItem("details", JSON.stringify(data));
        } 
}

//Check if password is matching
function verifyPassword(input){
    if(input.value != document.getElementById("uPassword").value){
        input.setCustomValidity("Password Must be Matching");
    }else{
        input.setCustomValidity("");
    }
}
//check already registered users
function emailExist(value){
    let existemail = JSON.parse(localStorage.getItem("details"));
     console.log(existemail)
    // let emailid = existemail.map((emailData) =>{
    //     debugger
    //     return emailData.email;
    // });

     let getexistemail = existemail.filter((emailData)=>{
        if(emailData.email == value.value){
            value.setCustomValidity('email exist. try something else');
            
        }else{
            value.setCustomValidity("");
        }

        console.log(getexistemail)
    });
}

// Handling bubbling
    const form = document.getElementById("registerForm");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        form.reset();
        document.getElementById("thankYou").style.display="block";
        form.style.display="none";
    });

    function showHide(show, hide){
        let showEle = document.getElementById(show);
        let hideEle = document.getElementById(hide);
        showEle.style.display="block";
        hideEle.style.display="none";
    }

    //login here
    function loginUser(){
        
        let loginEmail = document.getElementById("uemailId").value;
        let loginPass =  document.getElementById("ePassword").value;
        let matchEmail = JSON.parse(localStorage.getItem("details"));
        console.log(matchEmail)
        let emailArray =[];
        let passArray=[];
         let result = matchEmail.map((emailData) =>{
           emailArray.push(emailData.email);
           passArray.push(emailData.password);
        });
        if(emailArray.indexOf(loginEmail) > -1 && passArray.indexOf(loginPass) > -1){
            alert("You have sucsessfuly loged in");
        }else{
            alert("You have no registered with us");
        }
      
    }
    const loginForm = document.getElementById("logIn");
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
    });