let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


            function fn(){
                document.getElementById("fnp").innerHTML="Enter Your Full Name";
                document.getElementById("fnp").style.color="Red";
            }
            function fnoblur(){
                   var fname=document.getElementById("fname").value;
                   
                   if(fname==""){
                    document.getElementById("fnp").innerText="** Must Enter Your Name";
                   }
                   else{
                    document.getElementById("fnp").innerText="";
                   }
            }

            function fn1(){
                document.getElementById("fnp1").innerHTML="Enter user name";
                document.getElementById("fnp1").style.color="Red";
            }
            function fnoblur1(){
                   var mobile=document.getElementById("uname").value;
                   
                   if(mobile==""){
                    document.getElementById("fnp1").innerText="** Must Enter user name ";
                   }
                   else{
                    document.getElementById("fnp1").innerText="";
                   }
            }

            function fn2(){
                document.getElementById("fnp2").innerHTML="Enter Your Email Id ";
                document.getElementById("fnp2").style.color="Red";
            }
            function fnoblur2(){
                   var email=document.getElementById("email").value;
                   
                   if(email==""){
                    document.getElementById("fnp2").innerText="** Must Enter Your Email Id";
                   }
                   else{
                    document.getElementById("fnp2").innerText="";
                   }
            }

            function fn3(){
                document.getElementById("fnp3").innerHTML="Enter Your Password";
                document.getElementById("fnp3").style.color="Red";
            }
            function fnoblur3(){
                   var pass=document.getElementById("pass").value;
                   
                   if(pass==""){
                    document.getElementById("fnp3").innerText="** Must Enter Your Password";
                   }
                   else{
                    document.getElementById("fnp3").innerText="";
                   }
            }
            
       