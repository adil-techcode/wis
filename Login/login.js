const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});


   let  login= async ()=>{
var email=document.getElementById("email") 
var loginResult=document.getElementById("login-result");

var password2=document.getElementById("id_password")

   loginResult.innerHTML="Logging Please Wait....."
   if(email.value=="adil.techcode@gmail.com" && password2.value =="A005200"){
    loginResult.innerHTML=" Admin Login  Successful....."
    window.location.assign("../Admin/adminportal.html");
    
   }

   else{ await firebase.auth().signInWithEmailAndPassword(email.value, password2.value)
  .then((userCredential) => {
      // Signed in
      
      const user = userCredential.user;
      // ...
      localStorage.setItem("userId",user.uid)

      window.location.assign("../student Data/studentPortal.html");
      // save log in details into real time database
     // Data saved successfully!
   loginResult.innerHTML="user logged in successfully"

  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      loginResult.innerHTML=errorMessage
      loginResult.innerHTML=errorCode
      // alert(errorMessage);
  });

}
}


