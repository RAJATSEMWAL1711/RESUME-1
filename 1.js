let eyeIcon = document.getElementById("eyeIcon");
let password = document.getElementById("password");
eyeIcon.onclick = function(){
    if(password.type=="password"){
        password.type="text"
        eyeIcon.src="IMG1.png"
    }else{
        password.type="password"
        eyeIcon.src="IMG2.png"
    }
}

let username = document.getElementById("username");
let error = document.getElementById("errors");
function login(){
    if(username.value.trim()==="" || password.value.trim()===""){
        error.innerHTML=("DO NOT KEEP ANY FIELD EMPTY!!")
        return false
    }
    if(username.value!=="rajat semwal"){
        error.innerHTML=("Invalid Username!")
        return false
    }
    if(password.length<8){
        error.innerHTML=("the password should contain atleast letters")
        return false
    }
    if(password.value !== "rajat@semwal") {
        error.innerHTML=("Incorrect password!")
        return false
    }
    if(password.value==="rajat@semwal"){

    }
    console.log(username)
    console.log(password)
    alert("Form submitted successfully!");
}
