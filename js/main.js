// HTML ELEMENTS
var loginBtn=document.querySelector('#loginBtn');
var userName=document.querySelector('#userName');
// APP VARIABLES
// FUNCTIONS
userName.innerHTML=' '+ localStorage.getItem('userName');
// EVENTS
loginBtn.addEventListener('click',function(){
    localStorage.removeItem('userName');
})