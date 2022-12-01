let studentData = async()=>{
  let sectionProfile=document.getElementById("sectionProfile");
    sectionProfile.innerHTML=`
    <div class="col  text-center display-5   ">
    Students 
  </div>
  <div class="col  fs-5  "  id="totalstrength" >
  
</div>
<div class="col  text-center fs-5 mt-5 "  id="errorrow" >
   Fecting Data Please Wait..........
</div>

  <table>
    <thead>
     <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone No</th>
      <th>Class</th>
      <th> User ID </th>
     </tr>           
    </thead>
    <tbody class= "stdRow">
      
    </tbody>
  </table>
    `
    let totalStudents=0;
    let stdRow=document.querySelector(".stdRow")
    let errorrow=document.getElementById("errorrow");
    let totalstrength=document.getElementById("totalstrength")

 await firebase.database().ref(`wis/students/`).on('child_added',function(std){
errorrow.innerHTML="";
 let tr=document.createElement("tr")
 stdRow.appendChild(tr)
 var td1=document.createElement("td")
 tr.appendChild(td1)
 td1.setAttribute("onclick","studentProfile(this)")
 td1.setAttribute("class","colName")
var td1Text=document.createTextNode(`${std.val().ProfileData.firstName} ${std.val().ProfileData.lastName}`)
td1.appendChild(td1Text)
 var td2=document.createElement("td")
 tr.appendChild(td2)
 var td2Text=document.createTextNode(`${std.val().ProfileData.loginEmail}`)
 td2.appendChild(td2Text)
 var td3=document.createElement("td")
 tr.appendChild(td3)
 var td3Text=document.createTextNode(`${std.val().ProfileData.fatherPH}`)
td3.appendChild(td3Text)
 var td4=document.createElement("td")
 tr.appendChild(td4)
 var td4Text=document.createTextNode(`${std.val().ProfileData.enterGrade}`)
td4.appendChild(td4Text)
var td5=document.createElement("td")
tr.appendChild(td5)
var td5Text=document.createTextNode(`${std.val().ProfileData.stdid}`)
td5.appendChild(td5Text)
totalStudents++;
totalstrength.innerHTML=  "Total Student :" +  totalStudents;

})

}


let studentProfile=(e)=>{
   console.log(e.parentNode);
   console.log(e.parentNode.childNodes[4].childNodes[0].nodeValue)
   localStorage.setItem("userId",e.parentNode.childNodes[4].childNodes[0].nodeValue)
   window.location.assign("../student Data/studentPortal.html");
}

  

