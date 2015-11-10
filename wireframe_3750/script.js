//last bash version
$(document).ready(function(){
	var admin = true; /* admin is logged in when TRUE */
	var part = false;
	var invites =  0; //total number of people the team captain has invited
	
	updateLogin(); //call this once the user has logged in 
	
	function updateLogin(){
		if(admin==true){
			document.getElementById("logTableCol1").innerHTML="ADMIN";
		}
		else if(part == true){
			document.getElementById("logTableCol1").innerHTML="PARTICIPANT";
		}
		else{
			document.getElementById("logTableCol1").innerHTML="LOG IN";
		}
	}
	
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

		
	document.getElementById("loginLink").onclick=function(){
		window.location.href = "login.html";
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
	document.getElementById("loginButton").onclick=function(){
		handleLogin (admin,participant);
	};

	document.getElementById("cancelButton").onclick=function(){
		window.location.href="index.html"
	};

	function handleLogin (admin) {
		
		usernameValue= document.getElementById('username').value  ;
		passwordValue=document.getElementById('password').value;
		if (usernameValue.length <1 || passwordValue.length <1) {
			alert ("Missing username or password, please re-enter");
		}
		// else if (passwordValue.length <6 && passwordValue.length >=1){
		// 	alert ("Password is too short, please enter a password longer th");
		// }
		if (!document.getElementById('admin').checked && !document.getElementById('part').checked ){
			alert ("Please select a role");
			
		}
		roleValue= document.querySelector('input[name="role"]:checked').value;

		if (roleValue=="administrator"){
				admin=true;
				window.location.href = "index.html";

		}
		else if (roleValue=="participant"){

				admin=false;
				window.location.href = "index.html";
		}
	}


});