function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    if (name == "") {
        {
            
            alert ("Username Invalid");
            document.getElementById("false1").style.backgroundColor="yellow";
        }
    return false;
    }
    if(name.length<6){
      {
        alert("Username must be more than 6 characters");
        document.getElementById("false1").style.backgroundColor="yellow";
      }
    }
      else{
        document.getElementById("false1").style.backgroundColor="white";
    }
    
    
    var pw = document.forms["myForm"]["pw"].value;
    if (pw == "") {
    {
        alert("Password Invalid");
        document.getElementById("false2").style.backgroundColor="yellow";
    }
    }
    else{
        document.getElementById("false2").style.backgroundColor="white";
    }

    var pw1 = document.forms["myForm"]["pw1"].value;
    if (pw1 == "") {
    alert("Password again Invalid");
    }else{
        document.getElementById("false2").style.backgroundColor="white";
    }
    if(pw1 != pw){
        {
            alert("Password not same");
            document.getElementById("false3").style.backgroundColor="yellow";
        }
    }
    else{
        document.getElementById("false3").style.backgroundColor="white";
    }
    
    // document.getElementsByClassName("falsee").style.backgroundColor="yelow"
}