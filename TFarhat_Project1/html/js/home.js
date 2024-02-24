document.addEventListener("DOMContentLoaded", function() {
    let t = document.querySelector(".X-TERRADescriptionT");
    t.style= "opacity:1";
});

document.addEventListener("scroll", function() {
    let d = document.querySelector("#l1");
    let k = document.querySelector("#l2");
    d.style.opacity = "1";
    k.style.opacity = "1";
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