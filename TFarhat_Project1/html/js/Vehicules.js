


document.addEventListener("DOMContentLoaded", function() {
    let w = document.querySelector("#l5");
    w.style= "opacity:1";
    let w2 = document.querySelector("#l6");
    let w1 = document.querySelector("#l7");
    w2.style= "opacity:1";
    w1.style= "opacity:1";

});


const loginBtn=document.querySelector("#login-btn");
const closeLoginBar=document.querySelector(".login-form-container i");
const loginBar=document.querySelector(".login-form-container");

loginBtn.addEventListener('click',()=>{
    loginBar.style= ('top:0');
    closeLoginBar.addEventListener('click',()=>{
        loginBar.style= ('top:120%');
    });
});

const signupbtn=document.querySelector("#reg");
const close=document.querySelector(".login-form-container1 i");
const signup=document.querySelector(".login-form-container1");

signupbtn.addEventListener('click',()=>{
    loginBar.style= ('top:120%');
    signup.style= ('top:0%');

    close.addEventListener('click',()=>{
        signup.style= ('top:120%');
    });
});