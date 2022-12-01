

let signout=()=>{
    firebase.auth().signOut().then(() => {
        // alert("Sign-out successful")
        window.location.assign("../index.html");
 }).catch((error) => {
     alert("An error happened.")
 });
}

var userId =localStorage.getItem("userId")
let sectionProfile  = document.getElementById("sectionProfile")

let grade= (num)=>{
if(num== 4.00){
  return "A"
}
else if(num >= 3.00  && num<= 3.99 ){
  return "B"
}
else if(num >= 2.00 && num <= 2.99){
  return "C"
}
else{
  return "Fail"
}
}

// Result Fall 2020
const fall20Sub1=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub2=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub3=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub4=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub5=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub6=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub7=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const fall20Sub8=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
let fall20totalSgpa = +((fall20Sub2+fall20Sub2+fall20Sub3+fall20Sub4+fall20Sub5+fall20Sub6+fall20Sub7+fall20Sub8)/8).toFixed(2)

// Result Fall 2020
const spring20Sub1=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub2=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub3=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub4=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub5=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub6=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
const spring20Sub7=  +((Math.random() *(3.00-1.00+1) ) +1.00).toFixed(2);  
let spring20totalSgpa = +((spring20Sub2+spring20Sub2+spring20Sub3+spring20Sub4+spring20Sub5+spring20Sub6+spring20Sub7)/7).toFixed(2)

var starCountRef = firebase.database().ref('wis/students/' + userId );
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  console.log(data)
});

firebase.database().ref(`wis/students/`).child(userId).on('child_added',function(std){

  console.log(std.val())
sectionProfile.innerHTML= `<div class="col text-center my-5 ">
<h2 class="display-3"> Profile</h2>
</div>
<form   >
<div class="flex flex-wrap -mx-3 mb-3">
  <div class="w-1/2 md:w-1/3 px-2 mb-6 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Name:
    </label>
    <input disabled value="${std.val().firstName} ${std.val().lastName}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text" >
  </div>
  <div class="w-1/2 md:w-1/3 px-2 mb-6 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Father Name:
    </label>
    <input disabled value="${std.val().fatherName}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text" >
  </div>
  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Cnic:
    </label>
    <input disabled value="${std.val().fatherCnic}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text">
  </div>
</div>
<div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Date of Birth:
    </label>
    <input disabled value="${std.val().userDob}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text" >
  </div>
  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Mobile Number:
    </label>
    <input disabled value="${std.val().fatherPH}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text">
  </div>
  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Email:
    </label>
    <input disabled value="${std.val().loginEmail}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text" >
  </div>
</div>
<div class="flex flex-wrap -mx-3 mb-3">
  <div class="w-1/2 md:w-1/3 px-2 mb-6 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Grade:
    </label>
    <input disabled value="${std.val().enterGrade}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text" >
  </div>
  <div class="w-1/2 md:w-1/3 px-2 mb-6 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Entering Year:
    </label>
    <input disabled value="${std.val().enteringYear}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
      type="text" >
  </div>
  <div class="w-full md:w-1/3 px-2 mb-2 md:mb-0 text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      School Level:
    </label>
    <input disabled value="${std.val().schoolLevel}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
       type="text">
  </div>
</div>
<div class="flex flex-wrap -mx-3 mb-2">
  <div class="w-1/2 md:w-1/2 px-3 mb-3 md:mb-0  text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
      City:
    </label>
    <input disabled value="${std.val().city}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       type="text" >
  </div>
  <div class="w-1/2 md:w-1/2 px-3 mb-3 md:mb-0  text-left">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
      Country:
    </label>
    <input disabled value="${std.val().country}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       type="text" >
  </div>
  <div class="w-full md:w-full px-3 mb-3 md:mb-0">
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      Address:
    </label>
    <input disabled value="${std.val().address}"
      class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
       type="text">
  </div>
</div>
</form>

<div class="col text-center my-5 ">
<h2 class="display-3">Result </h2>
</div>
<div class=" semName  text-center my-5 py-3 fs-5 fw-bolder"> Fall Semester 2020</div>

<div class="tableSection">
<table class="table">
  <thead>
  
      <th scope="col text-center">Course Code</th>
      <th scope="col text-center ">Course Title</th>
      <th scope="col">Grade</th>
      <th scope="col">Credit Point</th>
      <th scope="col">Credit Hours</th>
      <th scope="col">GPA</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">PHYS-1122</th>
      <td  class="sN" >Applied Physics</td>
      <td>${grade(fall20Sub1)}</td>
      <td>${(eval(fall20Sub1*12/4.00).toFixed(2))}</td>
      <td>3</td>
      <td>${fall20Sub1}</td>
    </tr>
    <tr>
      <th scope="row">MATH-1121</th>
      <td>Calculus and Analytical Geometry</td>
      <td>${grade(fall20Sub2)}</td>
      <td>${(eval(fall20Sub2*12/4.00).toFixed(2))}</td>
      <td>3</td>
      <td>${fall20Sub2}</</td>
    </tr>
    <tr>
      <th scope="row">ENGL-1114</th>
      <td>English Composition and Comprehension</td>
      <td>${grade(fall20Sub3)}</td>
      <td>${(eval(fall20Sub3*12/4.00).toFixed(2))}</td>
      <td>3</td>
      <td>${fall20Sub3}</</td>
    </tr>
    <tr>
      <th scope="row">COSC-1105</th>
      <td>Introduction To IT</td>
      <td>${grade(fall20Sub4)}</td>
      <td>${(eval(fall20Sub4*12/4.00).toFixed(2))}</td>
      <td>3</td>
      <td>${fall20Sub4}</</td>
    </tr>
    <tr>
      <th scope="row">COSC-1205L</th>
      <td>Introduction To IT LAB</td>
      <td>${grade(fall20Sub5)}</td>
      <td>${(eval(fall20Sub5*12/4.00).toFixed(2))}</td>
      <td>1</td>
      <td>${fall20Sub5}</</td>
    </tr>
    <tr>
      <th scope="row">ISLS-1112</th>
      <td>Islamic Studies/ethics</td>
      <td>${grade(fall20Sub6)}</td>
      <td>${(eval(fall20Sub6*12/4.00).toFixed(2))}</td>
      <td>2</td>
      <td>${fall20Sub6}</</td>
    </tr>
    <tr>
      <th scope="row">COSC-1201</th>
      <td>Programming Fundamental Lab</td>
      <td>${grade(fall20Sub7)}</td>
      <td>${(eval(fall20Sub7*12/4.00).toFixed(2))}</td>
      <td>1</td>
      <td>${fall20Sub7}</</td>
    </tr>
    <tr>
      <th scope="row">COSC-1101</th>
      <td>Programming Fundamental </td>
      <td>${grade(fall20Sub8)}</td>
      <td>${(eval(fall20Sub8*12/4.00).toFixed(2))}</</td>
      <td>3</td>
      <td>${fall20Sub8}</</td>
    </tr>
    <tr class="bg-success">
    <th scope="row"></th>
    <td> </td>
    <td>Total SGPA </td>
    <td> ${fall20totalSgpa}</td>
    <td>Total CGPA</td>
    <td>${fall20totalSgpa}</</td>
  </tr>
  </tbody>
</table> 
</div>
<div class=" semName  text-center my-5 py-3 fs-5 fw-bolder "> Fall Semester 2020</div>

<div class="tableSection my-5">

<table class="table">
  <thead>
    <tr>
      <th scope="col text-center">Course Code</th>
      <th scope="col text-center ">Course Title</th>
      <th scope="col">Grade</th>
      <th scope="col">Credit Point</th>
      <th scope="col">Credit Hours</th>
      <th scope="col">GPA</th>
    </tr>
  </thead>
  <tbody>
  <tr>
  <th scope="row">PHYS-1122</th>
  <td>Communication and Presentation Skills</td>
  <td>${grade(spring20Sub1)}</td>
  <td>${(eval(spring20Sub1*12/4.00).toFixed(2))}</td>
  <td>3</td>
  <td>${spring20Sub1}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td> Discrete Structure</td>
<td>${grade(spring20Sub2)}</td>
<td>${(eval(spring20Sub2*12/4.00).toFixed(2))}</td>
<td>3</td>
<td>${spring20Sub2}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td>Object Oriented Programming</td>
<td>${grade(spring20Sub3)}</td>
<td>${(eval(spring20Sub3*12/4.00).toFixed(2))}</td>
<td>3</td>
<td>${spring20Sub3}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td>Object Oriented Programming  Lab</td>
<td>${grade(spring20Sub4)}</td>
<td>${(eval(spring20Sub4*12/4.00).toFixed(2))}</td>
<td>1</td>
<td>${spring20Sub4}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td>Pakistan Studies</td>
<td>${grade(spring20Sub5)}</td>
<td>${(eval(spring20Sub5*12/4.00).toFixed(2))}</td>
<td>2</td>
<td>${spring20Sub5}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td>Probality & Statistics </td>
<td>${grade(spring20Sub6)}</td>
<td>${(eval(spring20Sub6*12/4.00).toFixed(2))}</td>
<td>3</td>
<td>${spring20Sub6}</td>
</tr>
<tr>
<th scope="row">PHYS-1122</th>
<td>Software Engineering</td>
<td>${grade(spring20Sub7)}</td>
<td>${(eval(spring20Sub7*12/4.00).toFixed(2))}</td>
<td>3</td>
<td>${spring20Sub7}</td>
</tr>
</tr>
    <tr class="bg-success">
    <th scope="row"></th>
    <td> </td>
    <td>Total SGPA </td>
    <td> ${spring20totalSgpa}</td>
    <td>Total CGPA</td>
    <td>${((spring20totalSgpa+fall20totalSgpa)/2).toFixed(2)}</</td>
  </tr>
  </tbody>
</table> 
  

</div>
`

})

// firebase.database().ref(`wis/students/${schoolLevel.value}/${enterGrade.value}`).child(`${


