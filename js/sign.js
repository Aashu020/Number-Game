var myform=document.getElementById("myform");
var pasw=document.getElementById("pasw");
var conpasw=document.getElementById("con-pasw");
var btnsub=document.getElementById("btn-sub");
var mail=document.getElementById("mailid");
var nameid=document.getElementById("userid");
var min=100;
var max=999;
var rnum = Math.floor(Math.random() * (max - min + 1)) + min;

var currhighscore=0;
localStorage.setItem("Highscore",currhighscore)

btnsub.addEventListener("click",(e)=>{
    var name=nameid.value;
    var pasword=pasw.value;
    regex=/\d/;
    if(regex.test(name)){
        alert("Name should not contain any number");
        myform.action="sign.html"
    }
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailcheck=mail.value
    if(emailPattern.test(emailcheck)){
        alert(emailcheck)
        alert("Please complete your address");
        myform.action="sign.html";
    }

    if(pasword.length<=7){
        alert("Password must contain atleast * characters");
        myform.action="sign.html";
    }
    if(pasw.value!=conpasw.value){
        alert("Password is incorrect");
        myform.action="sign.html";
    }
    
        localStorage.setItem("Name",nameid.value);
        localStorage.setItem("Email",mail.value);
        localStorage.setItem("Password",pasw.value);
        var pid=(nameid.value+String(rnum));
        console.log(pid);
        localStorage.setItem("Userid",pid);
})
