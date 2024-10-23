var playername=document.getElementById("pname");
var playername1=document.getElementById("pname1");
var playerid=document.getElementById("pid");
var playermail=document.getElementById("pmail");
var profimg=document.getElementById("prof-img");
var playerhs=document.getElementById("highscore");
var back=document.getElementById("backbtn");
var quit=document.getElementById("quit");
var profimgbtn=document.getElementById("profimage");

var pnameget=localStorage.getItem("Name");
var pmailget=localStorage.getItem("Email");
var pidget=localStorage.getItem("Userid");
var phighscore=localStorage.getItem("Highscore");
// console.log(pnameget)

playername.innerHTML=pnameget;
playername1.innerHTML=pnameget;
playermail.innerHTML=pmailget;
playerid.innerHTML=pidget;
playerhs.innerHTML=phighscore


var hg=localStorage.getItem("Highscore");
localStorage.setItem("Highscore",hg);

back.addEventListener("click",()=>{
    window.open('../html/start.html',"_top")
})

quit.addEventListener("click",()=>{
    window.open("../html/login.html","_self");
})

    document.getElementById('image_input').addEventListener('change', function() {
        var filereader = new FileReader();
        filereader.addEventListener("load", () => {
            var uploaded_image = filereader.result;
            profimg.src=uploaded_image
            localStorage.setItem('uploadedImage', uploaded_image);
        });
        filereader.readAsDataURL(this.files[0]);
    });
var storeimg=localStorage.getItem("uploadedImage");
profimg.src=storeimg
profimg.style.borderRadius="50%"