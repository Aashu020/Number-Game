var logform=document.getElementById("myform");
var logpasw=document.getElementById("pasw");
var logbtnsub=document.getElementById("btn-sub");
var lognameid=document.getElementById("nameid");
var userid=document.getElementById("userid");
var forgot=document.getElementById("for");

var getname=localStorage.getItem("Name");
var getpass=localStorage.getItem("Password");
var getid=localStorage.getItem("Userid");
userid.innerHTML=getid;  
userid.style.marginRight="7rem";
userid.style.fontSize="20px"
console.log("get",getname);
console.log("get",getpass);
console.log("get",getid);

logbtnsub.addEventListener("click",()=>{
    if(lognameid.value===getname && logpasw.value===getpass ){
        window.open="start.html";
    }
    else {
        alert("Please Enter Correct Name and Password");
        logform.action="login.html";
    }   
})

forgot.addEventListener("click",()=>{
    alert(` your name is ${getname} and password is ${getpass}`);
})