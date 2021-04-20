
	function myfunction(){
		var x = document.getElementById("myInput");
		var y = document.getElementById("hide1");
		var z = document.getElementById("hide2");
		
		if(x.type==='password'){
			x.type="text";
			y.style.display= "inline-block";
			z.style.display= "none";	
		}else{
			x.type='password';
			y.style.display= "none";
			z.style.display= "inline-block";	
		}
	}
	function check(){
		var x = document.getElementById("myInput");
		if (x.value=="")
		{
			alert('Invalid password')
		}
		return false;
	}
	function reset(){
			
		document.getElementById('myInput').value = '';
	}


    function save(){
		var today = new Date();
   		var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
   		var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   		var dateTime = date+' '+time;
		var st1 = document.getElementById('input-data').value
		var st = document.getElementById('info-data').value;
		st =  st1 + '\t' + dateTime + '\n' +st;
		
        document.getElementById('info-data').value = st;
    }

