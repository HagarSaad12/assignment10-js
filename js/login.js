// HTML ELEMENTS
var signinEmail=document.querySelector('#signinEmaill');
var signinPassword=document.querySelector('#signinPassword');
var loginBtn=document.querySelector('#loginBtn');
// APP VARIABLES
let arr2=[];
arr2=JSON.parse(localStorage.getItem('user'));
// FUNCTIONS
 
function check(){
    for (i=0;i<arr2.length;i++){
        if(signinEmail.value==arr2[i].email&&signinPassword.value==arr2[i].password){
            var x=arr2[i].name;
            localStorage.setItem('userName',x);
            location.href='index.html';
        }
         
    }

}
// EVENTS
loginBtn.addEventListener('click',function(){
    if(signinEmail.value==''||signinPassword.value==''){
        alert('all inputs are required');
    }
    else if(signinEmail.value!=arr2[1].email&&signinPassword.value!=arr2[2].password){
        alert('please enter valid data');
    }
     else{
        check();
     }    
    

})
 