$(document).ready(function(){
	var admin = false; /* admin is logged in when TRUE */
	var part = false;
	
	document.getElementById("search").onclick=function(){
		document.getElementById("search").value="";
	};
	
	document.getElementById("loginLink").onmouseover=function(){
		document.getElementById("arrowPic").src="pics/arroworange.png";
		document.getElementById("loginTable").style.backgroundColor = "orange";
		document.getElementById("loginTable").style.color = "beige";
		document.getElementById("logTableCol1").style.backgroundColor = "orange";
		document.getElementById("logTableCol2").style.backgroundColor = "orange";
		
		if(admin==true){
			document.getElementById("adminMenu").style.display="block";
		}
		else {
			document.getElementById("partMenu").style.display="block";
		}
	};
	
	document.getElementById("loginLink").onmouseout=function(){
		document.getElementById("arrowPic").src="pics/arrow.png";
		document.getElementById("loginTable").style.backgroundColor = "beige";
		document.getElementById("loginTable").style.color = "orange";
		document.getElementById("logTableCol1").style.backgroundColor = "beige";
		document.getElementById("logTableCol2").style.backgroundColor = "beige";
		
		if(admin==true){
			document.getElementById("adminMenu").style.display="none";
		}
		else{
			document.getElementById("partMenu").style.display="none";
		}	
	};
	

	
	document.getElementById("aboutLink").onclick=function(){
		window.location.href = "about.html";
	};
	document.getElementById("homeLink").onclick=function(){
		window.location.href = "index.html";
	};
	document.getElementById("contactLink").onclick=function(){
		window.location.href = "contact.html";
	};
	document.getElementById("registerLink").onclick=function(){
		window.location.href = "register.html";
	};

});
