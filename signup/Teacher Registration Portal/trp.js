






let srpValidation =   () => {
     
      

    let firstName = document.getElementById("firstName");  //
    let firstnameError = document.getElementById("firstnameError");
    let lastName = document.getElementById("lastName");//
    let lastNameError = document.getElementById("lastNameError");
    let fatherName=document.getElementById("fatherName")//
    let fatherNameError=document.getElementById("fatherNameError");
    let fatherCnic=document.getElementById("fatherCnic");//
    let fatherCnicError=document.getElementById("fatherCnicError");
    let fatherPH=document.getElementById("fatherPH");//
    let fatherPhError=document.getElementById("fatherPhError")
    let userDob=document.getElementById("userDob");//
    let userDobError=document.getElementById("userDobError");
    let qualification=document.getElementById("qualification");//
    let qualificationError=document.getElementById("qualificationError")
    let teachingLevel=document.getElementById("teachingLevel");//
    let teachingLevelError=document.getElementById("teachingLevelError")
    let experience=document.getElementById("experience");
    let experienceError=document.getElementById("experienceError");
    let city=document.getElementById("city");//
    let cityError=document.getElementById("cityError");
    let country= document.getElementById("country");//
    let countryError=document.getElementById("countryError");
    let address=document.getElementById("address");//
    let addressError=document.getElementById("addressError");
    let loginEmail=document.getElementById("loginEmail");//
    let loginEmailError=document.getElementById("loginEmailError");
    let Userpassword =document.getElementById("password");//
    let passwordError=document.getElementById("passwordError")
    let compassword=document.getElementById("compassword");//
    let conpasswordError=document.getElementById("conpasswordError");
    let submitError=document.getElementById("submitError");






    






    if (firstName.value === "" || firstName.value.length < 4 || !isNaN(firstName.value)) {
        firstName.focus();
        firstName.style="border-color: red !important";
        firstnameError.innerHTML = "Length Must be Between 4 -20  & not allowed Number";
        return false;
    }
    if (lastName.value === "" || lastName.value.length < 4  || !isNaN(lastName.value)   ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.focus();
        lastName.style="border-color: red !important";
        lastNameError.innerHTML = "Length Must be Between 4 -20  & not allowed Number";
        return false;
    }
    if (fatherName.value === "" || fatherName.value.length < 4  || !isNaN(fatherName.value) ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.focus();
        fatherName.style="border-color: red !important";
        fatherNameError.innerHTML = "Length Must be Between 4 -20  & not allowed Number";
        return false;
    }
    if (fatherCnic.value === "" || fatherCnic.value.length !=13  || isNaN(fatherCnic.value)  ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.focus();
        fatherCnic.style="border-color: red !important";
        fatherCnicError.innerHTML = "Fill  this Field. Enter 13 Number Cnic  & not allowed Characters ";
        return false;
    }
    if (fatherPH.value === "" || fatherPH.value.length !=11  || isNaN(fatherPH.value)  ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.focus();
        fatherPH.style="border-color: red !important";
        fatherPhError.innerHTML = "Fill  this Field. Enter 11 Number Cnic  & not allowed Characters ";
        return false;
    }
    if (userDob.value === "" ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.focus();
        userDob.style="border-color: red !important";
        userDobError.innerHTML = " Please Choose Date Of Birth ";
        return false;
    }

    if (qualification.value === "Select" ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.focus();
        qualification.style="border-color: red !important";
        qualificationError.innerHTML = " Please Select an Option ";
        return false;
    }

    if (teachingLevel.value === "Select" ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.focus();
        teachingLevel.style="border-color: red !important";
        teachingLevelError.innerHTML = " Please Select an Option ";
        return false;
    }

    if (experience.value === "Select" ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.focus();
        experience.style="border-color: red !important";
        experienceError.innerHTML = " Please Select an Option ";
        return false;
    }

    if(city.value === "") {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.focus();
        city.style="border-color: red !important";
        cityError.innerHTML = " Please Enter City ";
        return false;
    }

    if( country.value === "Select") {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.style="border-color: red";
        cityError.innerHTML = "";
        country.focus();
        country.style="border-color: red !important";
        countryError.innerHTML = " Please Select Country ";
        return false;
    }

    
    if(address.value === "") {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.style="border-color: red";
        cityError.innerHTML = "";
        country.style="border-color: red";
        countryError.innerHTML = "";
        address.focus();
        address.style="border-color: red !important";
        addressError.innerHTML = " Please Select Country ";
        return false;
    }

    if(loginEmail.value === "") {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.style="border-color: red";
        cityError.innerHTML = "";
        country.style="border-color: red";
        countryError.innerHTML = "";
        address.style="border-color: red";
        addressError.innerHTML = "";
        loginEmail.focus();
        loginEmail.style="border-color: red !important";
        loginEmailError.innerHTML = " Please Enter valid Email ";
        return false;
    }

   
    
    if(Userpassword .value === ""    ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.style="border-color: red";
        cityError.innerHTML = "";
        country.style="border-color: red";
        countryError.innerHTML = "";
        address.style="border-color: red";
        addressError.innerHTML = "";
        loginEmail.style="border-color: red";
        loginEmailError.innerHTML = "";
        Userpassword .focus();
        Userpassword .style="border-color: red !important";
        passwordError.innerHTML = " Please Fill";
        return false;
    }

    if(compassword.value === ""|| Userpassword.value != compassword.value  ) {
        firstName.style="border-color: red";
        firstnameError.innerHTML = "";
        lastName.style="border-color: red";
        lastNameError.innerHTML = "";
        fatherName.style="border-color: red";
        fatherNameError.innerHTML = "";
        fatherCnic.style="border-color: red";
        fatherCnicError.innerHTML = "";
        fatherPH.style="border-color: red";
        fatherPhError.innerHTML = "";
        userDob.style="border-color: red";
        userDobError.innerHTML = "";
        qualification.style="border-color: red";
        qualificationError.innerHTML = "";
        teachingLevel.style="border-color: red";
        teachingLevelError.innerHTML = "";
        experience.style="border-color: red";
        experienceError.innerHTML = "";
        city.style="border-color: red";
        cityError.innerHTML = "";
        country.style="border-color: red";
        countryError.innerHTML = "";
        address.style="border-color: red";
        addressError.innerHTML = "";
        loginEmail.style="border-color: red";
        loginEmailError.innerHTML = "";
        Userpassword .style="border-color: red";
        passwordError.innerHTML = "";
        compassword.focus();
        compassword.style="border-color: red !important";
        conpasswordError.innerHTML = " Please Fill  & verify Password and Compassword are Same  ";
        return false;
    }

 
else{

    let data={
        firstName:  firstName.value,
        lastName: lastName.value,
        Name: fatherName.value,
        Cnic : fatherCnic.value,
        phoneNumber :  fatherPH.value,
        userDob: userDob.value,
        qualification: qualification.value,
        TeachingLevel: teachingLevel.value,
        Experience: experience.value ,
        city: city.value,
        country: country.value,
        address:address.value,
        loginEmail: loginEmail.value,
        password: Userpassword.value,
        
    }





submitError.innerHTML="Submitting Please Wait....";

  firebase.auth().createUserWithEmailAndPassword(loginEmail.value, data.password)
   
 .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    firebase.database().ref(`wis/teachers/`+user.uid).child("ProfileData").set(data).then(() => {
    submitError.innerHTML="Submit Data Successful....";
    window.location.assign("../../Login/login.html");
        })
        .catch((error) => {
            submitError.innerHTML="Error....";
        });

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    loginEmailError.innerHTML=error.message;
    passwordError.innerHTML= error.code;
    // ..
  });  
   return false
}
   

}



