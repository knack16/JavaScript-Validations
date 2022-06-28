function validation(){
    var user=document.getElementById('fname').value;
    var emailid=document.getElementById('mail').value;
    var password1=document.getElementById('pass1').value;
    var password2=document.getElementById('pass2').value;
   

    if (user==""){
        document.getElementById('username').innerHTML="this feild is required";
        return false;
    }
    if (user.length <= 2){
        document.getElementById('username').innerHTML="Minimum should be 3 letters";
        return false;
    }
    if(!isNaN(user)){
        document.getElementById('username').innerHTML="Only Charecters are allowed";
        return false;
    }
    if(password1=="" || password1.length<8){
        document.getElementById('password1').innerHTML="Password should be of minimum 8 charecters and should not be null";
        return false;
    }
    if(password1!=password2){
        document.getElementById('password2').innerHTML="Password does not matches";
        return false;
    }
    if(emailid.indexOf('@')<=0){
        document.getElementById('emailid').innerHTML="please write correct email id for@example.domain";
        return false;
    }
    

    
}