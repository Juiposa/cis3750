$(document).ready(function(){
	var admin = true; /* admin is logged in when TRUE */

	var invites =  0; //total number of people the team captain has invited
	
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
		window.location.href = "under_construction.html";
	};


	//invite page stuff
	$('.btn-default').on('click', function (){
		if (invites < 4) {
			$(this).text("Invited");
			invites++;
		} else {
			//popup indicating max number of participants invited has been reached
			//NOOP for now
		}
	});

});
