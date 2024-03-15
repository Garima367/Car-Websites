var modal=document.getElementById('login');
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "block";
        modal.style.alignContent = "center";
    }
}

function check(){
    var email = document.getElementById("email");
    var pass = document.getElementById("pass");
    if(email.value==""){
       email.style.border='2px solid red';
       emailerr.style.visibility='visible';
       return false;
    }
    if(pass.value==""){
        pass.style.border='2px solid red';
        passerr.style.visibility='visible';
        return false;
    }
}