//==================================//
//          LOGIN DETAILS           //
//==================================//

const correctName = "amber";

const correctBirthday = "2008-07-26";



//==================================//
//          LOGIN SYSTEM            //
//==================================//


function checkLogin() {


let name =

document
.getElementById("name")
.value
.toLowerCase()
.trim();



let birthday =

document
.getElementById("birthday")
.value;




if(

name === correctName &&

birthday === correctBirthday

){


sessionStorage
.setItem("loggedIn","true");



window.location.href =

"unwrap.html";


}


else{


document
.getElementById("errorMessage")
.innerHTML =

"Hmm... I don't think this gift belongs to you.";


}


}



//==================================//
//       PAGE PROTECTION            //
//==================================//



function isLoggedIn(){


return(

sessionStorage
.getItem("loggedIn")

===

"true"

);


}




function checkUnwrapAccess(){


if(

!isLoggedIn()

){

window.location.href =

"login.html";

}


}




function checkBirthdayAccess(){


if(

!isLoggedIn()

){

window.location.href =

"login.html";

}


}





//==================================//
//          UNWRAP PAGE             //
//==================================//



function startUnwrap(){


const text =

document
.getElementById("unwrapText");



setTimeout(()=>{


text.innerHTML =

"Adding Some Happiness...";


},1000);




setTimeout(()=>{


text.innerHTML =

"Almost There...";


},2000);




setTimeout(()=>{


text.innerHTML =

"Redirecting...";


},2800);




setTimeout(()=>{


window.location.href =

"birthday.html";


},3000);



}




//==================================//
//      AUTOMATIC AGE SYSTEM        //
//==================================//



function calculateAge(){


const birthday =

new Date(

2008,
6,
26

);


//REMEMBER:
//
//JAN = 0
//FEB = 1
//
//JULY = 6
//


const today =

new Date();



let age =

today.getFullYear()

-

birthday.getFullYear();



const birthdayThisYear =

new Date(

today.getFullYear(),
6,
26

);



if(

today < birthdayThisYear

){

age--;


}



document
.getElementById("ageDisplay")
.innerHTML =

`✨${age}✨`;


}





//==================================//
//        OPEN YOUR GIFT            //
//==================================//



function openGift(){


const button =

document
.getElementById("giftButton");



const videoSection =

document
.getElementById("videoSection");



button.style.display =

"none";



videoSection.style.display =

"block";



const video =

document
.getElementById("birthdayVideo");



video.play();



}





//==================================//
//       EXTRA SECURITY             //
//==================================//



window.onpageshow = function(){


if(


window.location.pathname
.includes("birthday.html")


){

checkBirthdayAccess();

}


};


