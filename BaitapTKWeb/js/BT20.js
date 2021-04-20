function function1(){
   var a = document.getElementById("sp1");
   alert(a.innerHTML);
   
}






function function2(){
    alert((document.getElementById("sp2").innerHTML));
 }





 function function3(){
    alert((document.getElementById("sp3").innerHTML));
 }
 






//  function function4 () {
//     alert("Xin chào!");     
//  }






//  function function5() {
//     var ms =  confirm ("Do you want to exit?")
//     if (ms == true) 
//        {
//         alert("See you soon");
//         close();
//        }
//     else 
//         alert("Stay with me!!!");
//  }







//  function function6() {
//     var ms =  confirm ("Do you want to go to NTU ?")
//     if (ms == true) 
//     window.open("http://ntu.edu.vn/").
//     else 
//       //   alert("Stay with me!!!");
//       return;
//  }


// //  function function7() {
// //     D = new  Date();
// //     alert(" Hôm nay : Ngày "+D.getDate()+
// //     " Tháng "+ (parseInt(D.getMonth())+1) +" Năm "+D.getFullYear()+ 
// //     "\n Bay giờ : " + D.getHours()+" giờ "+ D.getMinutes()+ " phút.");
// //  }


// function calc(){
//     var a = parseInt(document.getElementById("ip1").value);
//     var b =parseInt(document.getElementById("ip2").value);
//     var c = a+b;
//     alert(c);
// }
// function calt(){
//     var a = parseInt(document.getElementById("ip1").value);
//     var b =parseInt(document.getElementById("ip2").value);
//     var c = a-b;
//     alert(c);
// }



function myfunction(){
   var a = parseInt(document.getElementById("num1").value);
   var b =parseInt(document.getElementById("num2").value);
   var x = document.getElementById('operator').value;
   var resutl=0;
   if(x == "+"){
      resutl = a + b;
   }else if(x =="-"){
     resutl = a - b;
   }else if(x =="*"){
      resutl = a * b;
   }else if(x =="/"){
      resutl = a / b;
   }
   document.getElementById('resutl').value = resutl;
}