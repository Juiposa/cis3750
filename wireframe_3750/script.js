$(document).ready(function(){
	var invites =  0; //total number of people the team captain has invited

	//localStorage.setItem("state", "part"); //admin, part, or none
	updateLogin(); //call this once the user has logged in 

	function updateLogin(){
		var state = localStorage.getItem("state");
		if(state=="admin"){
			document.getElementById("logTableCol1").innerHTML="ADMIN";
		}
		else if(state=="part"){
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
		var state = localStorage.getItem("state");
		
		document.getElementById("arrowPic").src="pics/arroworange.png";
		document.getElementById("loginTable").style.backgroundColor = "orange";
		document.getElementById("loginTable").style.color = "beige";
		document.getElementById("logTableCol1").style.backgroundColor = "orange";
		document.getElementById("logTableCol2").style.backgroundColor = "orange";

		if(state=="admin"){
			document.getElementById("adminMenu").style.display="block";
		}
		if(state=="part"){
			document.getElementById("partMenu").style.display="block";
		}
	};
	
	document.getElementById("loginLink").onmouseout=function(){
		var state = localStorage.getItem("state");
		
		document.getElementById("arrowPic").src="pics/arrow.png";
		document.getElementById("loginTable").style.backgroundColor = "beige";
		document.getElementById("loginTable").style.color = "orange";
		document.getElementById("logTableCol1").style.backgroundColor = "beige";
		document.getElementById("logTableCol2").style.backgroundColor = "beige";

		if(state=="admin"){
			document.getElementById("adminMenu").style.display="none";
		}
		if(state=="part"){
			document.getElementById("partMenu").style.display="none";
		}	
	};


	document.getElementById("manageRoutesLink").onclick=function(){
		window.location.href = "route_manage.html";
	};	
	document.getElementById("manageTeamsLink").onclick=function(){
		window.location.href = "under_construction.html";
	};	
	document.getElementById("managePartLink").onclick=function(){
		window.location.href = "under_construction.html";
	};	
	document.getElementById("liveChatLink").onclick=function(){
		window.location.href = "under_construction.html";
	};	
	document.getElementById("logOutLink").onclick=function(){
		//window.location.href = "";
	};	
	document.getElementById("profileLink").onclick=function(){
		window.location.href = "under_construction.html";
	};	
	document.getElementById("teamLink").onclick=function(){
		window.location.href = "team_view.html";
	};	
	document.getElementById("loginLink").onclick=function(){
		//window.location.href = "login.html";
	};	
	document.getElementById("aboutLink").onclick=function(){
		window.location.href = "under_construction.html";
	};
	document.getElementById("homeLink").onclick=function(){
		window.location.href = "index.html";
	};
	document.getElementById("contactLink").onclick=function(){
		window.location.href = "under_construction.html";
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
			window.alert("You cannot invite more than 4 people.")
		}
	});
	document.getElementById("loginButton").onclick=function(){
		handleLogin (admin);
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
		if (usernameValue.length >1 && passwordValue.length >1 && !document.getElementById('admin').checked && !document.getElementById('part').checked ){
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