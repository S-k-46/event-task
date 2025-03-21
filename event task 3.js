function fun1(login1,signup1){
    login1.style.borderBottomColor="rgb(61, 103, 176)";
    login1.style.borderBottomStyle="solid";
    login1.style.borderBottomWidth="10px";
    signup1.style.borderBottom="2px solid black";   
}


let login=document.getElementById("login");
let signup=document.getElementById("signup");
login.addEventListener("click",()=>{
fun1(login,signup);
let divi=document.getElementById("dl");
let div=document.getElementById("ds");
divi.style.display="none";
div.style.display="block";   

},false);

let name=document.getElementById("name");
let pwd=document.getElementById("npass");
let cpwd=document.getElementById("cpass");
let td1=document.getElementById("td1");
signup.addEventListener("click",()=>{
fun1(signup,login);
let divi=document.getElementById("dl");
let div=document.getElementById("ds");
divi.style.display="block";
div.style.display="none"; 
// name.addEventListener("focusout",()=>{
// if(name.value != ""){
//     td1.textContent="*vaild name*";
//     td1.style.color="green"
// }  
// else{
//     td1.textContent="*please enter your name*";
    
 
// }
// td1.textContent="";


// },false);
td1.textContent="";
//  temp=block;
//  type = cpwd.getAttribute('type') === 'password' ? 'text' : 'password';
//  let icon=document.getElementById("icon");
//  let icon1=document.getElementById("icon1");
//  if(type=='password'){
//     icon.style.visibility="hidden";
//  }
//  else{
//     icon1.style.visibility="visible";
//  }

 

},false);