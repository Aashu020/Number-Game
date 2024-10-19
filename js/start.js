var nav=document.getElementById("mainnav");
var strtbody=document.getElementById("mainbody");
var lives=document.getElementById("lives");
var highscore=document.getElementById("highscore");
var fnum=document.getElementById("firstnum");
var secnum=document.getElementById("secnum");
var opt1=document.getElementById("opt1");
var opt2=document.getElementById("opt2");
var opt3=document.getElementById("opt3");
var opt4=document.getElementById("opt4");
var opt5=document.getElementById("opt5");
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");
var bodyele=document.getElementById("mainbody");
var section1=document.getElementById("sec");
var nav=document.getElementById("mainnav");
var cir=document.getElementById("circle1");
var add=document.getElementById("addi");
var optlist=document.getElementById("optionss");
var sec=document.getElementById("sec");
var level=document.getElementById("level");
var sign=document.getElementById("sign");

var profimg=document.getElementById("prof");
var getprofimg=localStorage.getItem("uploadedImage");
profimg.src=getprofimg;

var playername=document.getElementById("p-name");
var pname=localStorage.getItem("Name");
playername.innerHTML=pname;

var circle3=document.createElement("div");
var tnum=document.createElement("h1");
var addimg=document.createElement("img");
var randomnum3;

var op1;
var op2;
var op3;
var op4;
var op5;
var cn;
var timestoper;

var levels=1;
level.innerHTML=Number(levels);
var count=0;

var currhighscore=0;

// var seconds=30;
function timer(seconds){
    if(timestoper){
        clearInterval(timestoper)
    }
    timestoper=setInterval(()=>{
        seconds--;
        sec.innerHTML=seconds
        if(seconds>=10){
            sec.style.color="white";
        }
        if(seconds<10){
            sec.style.color="#ed7777";
        }
        if(seconds==0){
            clearInterval(timestoper);
            livedecre();
        }
    },1000);
    // seconds;
}
timer(30)

var live=3;
localStorage.setItem("score",0);
var getscore=localStorage.getItem("score");
highscore.innerHTML=Number(getscore);

function genrandnum(){
    var randomnum1=Math.floor(Math.random()*101);
    var randomnum2=Math.floor(Math.random()*101);
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1+randomnum2;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*101);
    var randans3=Math.floor(Math.random()*201);
    var randans4=Math.floor(Math.random()*101);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}
genrandnum()

function genrandnum_subtraction(){
    var randomnum1=Math.floor(Math.random()*50)+50;
    var randomnum2=Math.floor(Math.random()*50);
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1-randomnum2;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*101);
    var randans3=Math.floor(Math.random()*201);
    var randans4=Math.floor(Math.random()*101);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function genrandnum_multiplication(){
    var randomnum1=Math.floor(Math.random()*11);
    var randomnum2=Math.floor(Math.random()*10);
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1*randomnum2;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*101);
    var randans3=Math.floor(Math.random()*201);
    var randans4=Math.floor(Math.random()*101);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function genrandnum_3addition(){
    var randomnum1=Math.floor(Math.random()*101);
    var randomnum2=Math.floor(Math.random()*101);
    var r3=Math.floor(Math.random()*101);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1+randomnum2+randomnum3;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*301);
    var randans3=Math.floor(Math.random()*201);
    var randans4=Math.floor(Math.random()*101);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function genrandnum_3subtarction(){
    var randomnum1=Math.floor(Math.random()*50)+50;
    var randomnum2=Math.floor(Math.random()*50);
    var r3=Math.floor(Math.random()*20);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1-randomnum2-randomnum3;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*101);
    var randans3=Math.floor(Math.random()*201);
    var randans4=Math.floor(Math.random()*101);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function genrandnum_3multiplication(){
    var randomnum1=Math.floor(Math.random()*10);
    var randomnum2=Math.floor(Math.random()*10);
    var r3=Math.floor(Math.random()*5);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1*randomnum2*randomnum3;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*301);
    var randans3=Math.floor(Math.random()*501);
    var randans4=Math.floor(Math.random()*401);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function finalQ1(){
    var randomnum1=Math.floor(Math.random()*101);
    var randomnum2=Math.floor(Math.random()*51);
    var r3=Math.floor(Math.random()*5);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1+randomnum2-randomnum3;

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*301);
    var randans3=Math.floor(Math.random()*501);
    var randans4=Math.floor(Math.random()*401);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function finalQ2(){
    var randomnum1=Math.floor(Math.random()*101);
    var randomnum2=Math.floor(Math.random()*51);
    var r3=Math.floor(Math.random()*5);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1-(randomnum2*randomnum3);

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*301);
    var randans3=Math.floor(Math.random()*501);
    var randans4=Math.floor(Math.random()*401);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function finalQ3(){
    var randomnum1=Math.floor(Math.random()*101);
    var randomnum2=Math.floor(Math.random()*51);
    var r3=Math.floor(Math.random()*5);
    randomnum3=r3;
    tnum.innerHTML=randomnum3;
    fnum.innerHTML=randomnum1;
    secnum.innerHTML=randomnum2;
    var ans=randomnum1+(randomnum2*randomnum3);

    var randans1=Math.floor(Math.random()*201);
    var randans2=Math.floor(Math.random()*301);
    var randans3=Math.floor(Math.random()*501);
    var randans4=Math.floor(Math.random()*401);
    var arr=[ans,randans1,randans2,randans3,randans4];
    function shufflenum(array){
        var shufarray=array.sort(()=>Math.random()-0.5);
        return shufarray
    }
    newarr=shufflenum(arr)
    var [option1,option2,option3,option4,option5]=newarr;
    opt1.innerHTML=option1;
    opt2.innerHTML=option2;
    opt3.innerHTML=option3;
    opt4.innerHTML=option4;
    opt5.innerHTML=option5;

    op1=option1;
    op2=option2;
    op3=option3;
    op4=option4;
    op5=option5;
    cn=ans;
    console.log(ans)
}

function livedecre(){
    live--
    if(levels==1){
        genrandnum();
        timer(30);
    }
    if(levels==2){
        genrandnum_subtraction();
        timer(30);
    }
    if(levels==3){
        genrandnum_multiplication();
        timer(30);
    }
    if(levels==4){
        genrandnum_3addition();
        timer(30);
    }
    if(levels==5){
        genrandnum_3subtarction();
        timer(30);
    }
    if(levels==6){
        genrandnum_3multiplication();
        timer(30);
    }
    if(levels==7){
        genrandnum_3addition();
        timer(20);
    }
    if(levels==8){
        genrandnum_3subtarction();
        timer(20);
    }
    if(levels==9){
        genrandnum_3multiplication();
        timer(20);
    }
    if(levels==10){
        genrandnum_3addition();
        timer(10);
    }
    if(levels==11){
        genrandnum_3subtarction();
        timer(10);
    }
    if(levels==12){
        genrandnum_3multiplication();
        timer(10);
    }
    if(levels==13){
        finalQ1();
        timer(5);
    }
    if(levels==14){
        finalQ2();
        timer(5);
    }
    if(levels==15){
        finalQ3();
        timer(5);
    }
    console.log(live);
    

    if(live==2){
        img3.style.display="none";
        lives.innerHTML="2";
    }
    if(live==1){
        img2.style.display="none"
        lives.innerHTML="1";
    }
    if(live==0){
        img1.style.display="none"
        lives.innerHTML="";
        localStorage.setItem("score",0);
        highscore.innerHTML="0"
        nav.style.display="none";
        cir.style.display="none";
        add.style.display="none";
        optlist.style.display="none";
        // bodyele.style.display="none";


        var newdiv=document.createElement("div");
        newdiv.style.width="100%";
        newdiv.style.height="500px";
        newdiv.style.display="flex";
        newdiv.style.flexDirection="column";
        newdiv.style.justifyContent="center";
        newdiv.style.alignItems="center";
        newdiv.style.position="relative";

        var gameover=document.createElement('p');
        gameover.textContent="Game Over";
        gameover.style.fontSize="120px";
        gameover.style.color="#ed7777";

        var btnrestart=document.createElement('button');
        btnrestart.textContent="restart";
        btnrestart.style.width="15%";
        btnrestart.style.height="2.5rem";
        btnrestart.style.marginTop="1rem";
        btnrestart.style.background="transparent";
        btnrestart.style.border="none";
        btnrestart.style.color="white";
        btnrestart.style.fontFamily="'Yuji Boku', serif";
        btnrestart.style.fontSize="70px";

        var bthome=document.createElement('button');
        bthome.textContent="Home";
        bthome.style.width="15%";
        bthome.style.height="2.5rem";
        bthome.style.marginTop="1rem";
        bthome.style.background="transparent";
        bthome.style.border="none";
        bthome.style.color="white";
        bthome.style.fontFamily="'Yuji Boku', serif";
        bthome.style.fontSize="70px";
        bthome.style.marginTop="5rem";

        btnrestart.addEventListener("click",()=>{
            location.reload();
        })
        btnrestart.addEventListener("mouseover",()=>{
            btnrestart.style.fontSize="90px";
            btnrestart.style.color="#32de84"
        })
        btnrestart.addEventListener("mouseout",()=>{
            btnrestart.style.fontSize="70px";
            btnrestart.style.color="white";
        })

        bthome.addEventListener("click",()=>{
            window.open("../html/profile.html","_parent")
        })
        bthome.addEventListener("mouseover",()=>{
            bthome.style.fontSize="90px";
            bthome.style.color="#87CEEB";
        })
        bthome.addEventListener("mouseout",()=>{
            bthome.style.fontSize="70px";
            bthome.style.color="white";
        })

        newdiv.appendChild(gameover);
        newdiv.appendChild(btnrestart)
        newdiv.appendChild(bthome)
        bodyele.appendChild(newdiv);
    }
}


function scoreincre(){
    var score=parseInt(localStorage.getItem("score"));
    localStorage.setItem("score",++score);
    console.log("score",score)
    var prehighscore=localStorage.getItem("Highscore")
    if(score>prehighscore){
        prehighscore=score;
        localStorage.setItem("Highscore",prehighscore)
    }
    highscore.innerHTML=score;
    if(levels==1){
        genrandnum();
        timer(30);
    }
    if(levels==2){
        genrandnum_subtraction();
        timer(30);
    }
    if(levels==3){
        genrandnum_multiplication();
        timer(30);
    }
    if(levels==4){
        genrandnum_3addition();
        timer(30);
    }
    if(levels==5){
        genrandnum_3subtarction();
        timer(30);
    }
    if(levels==6){
        genrandnum_3multiplication();
        timer(30);
    }
    if(levels==7){
        genrandnum_3addition();
        timer(20);
    }
    if(levels==8){
        genrandnum_3subtarction();
        timer(20);
    }
    if(levels==9){
        genrandnum_3multiplication();
        timer(20);
    }
    if(levels==10){
        genrandnum_3addition();
        timer(10);
    }
    if(levels==11){
        genrandnum_3subtarction();
        timer(10);
    }
    if(levels==12){
        genrandnum_3multiplication();
        timer(10);
    }
    if(levels==13){
        finalQ1()
        timer(5);
    }
    if(levels==14){
        finalQ2();
        timer(5);
    }
    if(levels==15){
        finalQ3();
        timer(5);
    }
}

function level2(){
    sign.src="../img/icons8-subtraction-100.png";
    genrandnum_subtraction();
    count=5;
}

function level3(){
    sign.src="../img/icons8-multiplication-100.png";
    genrandnum_multiplication();
    count=10;
}

function level4(){
    sign.src="../img/addition.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/addition.png";
    add.appendChild(addimg);
    count=15;
}

function level5(){
    sign.src="../img/icons8-subtraction-100.png";
    genrandnum_3subtarction();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-subtraction-100.png";
    add.appendChild(addimg);
    count=20;
}

function level6(){
    sign.src="../img/icons8-multiplication-100.png";
    genrandnum_3multiplication();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-multiplication-100.png";
    add.appendChild(addimg)
    count=25;
}

function level7(){
    sign.src="../img/addition.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/addition.png";
    add.appendChild(addimg);
    count=30;
    timer(20)
}

function level8(){
    sign.src="../img/icons8-subtraction-100.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-subtraction-100.png";
    add.appendChild(addimg);
    count=33;
    timer(20)
}

function level9(){
    sign.src="../img/icons8-multiplication-100.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-multiplication-100.png";
    add.appendChild(addimg);
    count=36;
    timer(20)
}

function level10(){
    sign.src="../img/addition.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/addition.png";
    add.appendChild(addimg);
    count=39;
    timer(10)
}

function level11(){
    sign.src="../img/icons8-subtraction-100.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-subtraction-100.png";
    add.appendChild(addimg);
    count=42;
    timer(10)
}

function level12(){
    sign.src="../img/icons8-multiplication-100.png";
    genrandnum_3addition();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-multiplication-100.png";
    add.appendChild(addimg);
    count=45;
    timer(10)
}

function level13(){
    sign.src="../img/addition.png";
    finalQ1();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-subtraction-100.png";
    add.appendChild(addimg);
    count=47;
    timer(5)
}

function level14(){
    sign.src="../img/icons8-subtraction-100.png";
    finalQ2();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-multiplication-100.png";
    add.appendChild(addimg);
    count=49;
    timer(5)
}

function level15(){
    sign.src="../img/addition.png";
    finalQ3();
    tnum.innerHTML=randomnum3;
    circle3.appendChild(tnum);
    cir.appendChild(circle3);
    addimg.src="../img/icons8-multiplication-100.png";
    add.appendChild(addimg);
    count=51;
    timer(5);
}

function checkans(selectedoption){
    if(selectedoption===cn){
    scoreincre();
    count++
    if(count==5){
        levels++;
        level.innerHTML=levels;
        level2()
    }
    console.log("count scin",count)
    if(count==10){
        levels++;
        level.innerHTML=levels;
        level3()
    }
    if(count==15){
        levels++;
        level.innerHTML=levels;
        level4();
    }
    if(count==20){
        levels++;
        level.innerHTML=levels;
        level5();
    }
    if(count==25){
        levels++;
        level.innerHTML=levels;
        level6();
    }
    if(count==30){
        levels++;
        level.innerHTML=levels;
        level7();
    }
    if(count==33){
        levels++;
        level.innerHTML=levels;
        level8();
    }
    if(count==36){
        levels++;
        level.innerHTML=levels;
        level9();
    }
    if(count==39){
        levels++;
        level.innerHTML=levels;
        level10();
    }
    if(count==42){
        levels++;
        level.innerHTML=levels;
        level11();
    }
    if(count==45){
        levels++;
        level.innerHTML=levels;
        level12();
    }
    if(count==47){
        levels++;
        level.innerHTML=levels;
        level13();
    }
    if(count==49){
        levels++;
        level.innerHTML=levels;
        level14();
    }
    if(count==50){
        levels++;
        level.innerHTML=levels;
        level15();
    }
    

    }
    else{
        clearInterval(timestoper)
        livedecre();
        console.log("count scde",count);
    }
}

opt1.addEventListener("click",()=>
    checkans(op1)
);
opt2.addEventListener("click",()=>
    checkans(op2)
)
opt3.addEventListener("click",()=>
    checkans(op3)
)
opt4.addEventListener("click",()=>
    checkans(op4)
)
opt5.addEventListener("click",()=>
    checkans(op5)
)

sign.style.width="10%";
sign.style.marginTop="-5rem";

addimg.style.width="10%";
addimg.style.marginTop="-6rem";

circle3.style.height="15rem";
circle3.style.width="20%";
circle3.style.borderRadius="50%";
circle3.style.display="flex";
circle3.style.alignItems="center";
circle3.style.justifyContent="center";