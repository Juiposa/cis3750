$(document).ready(function(){
	var invites =  0; //total number of people the team captain has invited

	//localStorage.setItem("state", "admin"); //admin, part, or none
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
	if (document.getElementById("logOutLinkA")!=null){
			document.getElementById("logOutLinkA").onclick=function(){
			localStorage.setItem("state", "none");
			window.location.href = "index.html";
		};
	}
	if (document.getElementById("logOutLinkP")!=null){
			document.getElementById("logOutLinkP").onclick=function(){
			localStorage.setItem("state", "none");
			window.location.href = "index.html";
		};	
	}
	document.getElementById("profileLink").onclick=function(){
		window.location.href = "under_construction.html";
	};	
	document.getElementById("teamLink").onclick=function(){
		var teamStatus = localStorage.getItem("teamStatus");
		if (teamStatus == "true") {
			window.location.href = "team_view.html";
		} else {
			window.location.href = "team_create.html";			
		}
	};	
	document.getElementById("loginTable").onclick=function(){
		window.location.href = "login.html";
	};	
	document.getElementById("aboutLink").onclick=function(){
		window.location.href = "under_construction.html";
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


	$('#deleteBtn').on('click', function() {
		var r = confirm("Are you sure you wish to delete your team?");
		if( r==true ) {
			localStorage.setItem("teamStatus", "false");
			window.location.href = "index.html";
		}
	});
	
	$('#selectBtn').on('click', function() {
		window.location.href = "team_view.html";
	});
	$('#inviterino').on('click', function() {
		window.location.href = "invite.html";
	});
	$('#changeRoute').on('click', function() {
		window.location.href = "route_select.html";
	});
	//invite pages
	$('.btn-primary').on('click', function() {
		window.location.href = "part_invite.html";
	});
	$('#createBtn').on('click', function () {
		localStorage.setItem("teamStatus", "true");
		window.location.href = "team_view.html";
	});
	$('#routeCreateLink').on('click', function () {
		window.location.href = "route_create.html";
	});
	$('#routeDeleteLink').on('click', function () {
		window.location.href = "route_delete.html";
	});
	$('#doneBtn').on('click', function() {
		window.location.href = "route_manage.html";
	});
	$('.btn-warning').on('click', function() {
		var r = confirm("Are you sure you wish to delete this route?");
		if( r == true ) {
			window.location.href= "route_manage.html";
		}
	});
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
		handleLogin ();
	};



	function handleLogin () {
		var pass = false;
		var role = false;
		usernameValue= document.getElementById('username').value  ;
		passwordValue=document.getElementById('password').value;
		if (usernameValue.length <1 || passwordValue.length <1) {
			alert ("Missing username or password, please re-enter");
		} else {
			pass = true;
		}
		// else if (passwordValue.length <6 && passwordValue.length >=1){
		// 	alert ("Password is too short, please enter a password longer th");
		// }
		if (usernameValue.length >1 && passwordValue.length >1 && !document.getElementById('admin').checked && !document.getElementById('part').checked ){
			alert ("Please select a role");
			
		} else {
			role = true;
		}
		if( pass == true && role == true ) {
			roleValue= document.querySelector('input[name="role"]:checked').value;
			if (roleValue=="administrator"){
					localStorage.setItem("state", "admin");
					window.location.href = "index.html";
			}
			else if (roleValue=="participant"){
					localStorage.setItem("state", "part");
					window.location.href = "index.html";
			} 
		}
	}

	document.getElementById("cancelButton").onclick=function(){
		window.location.href="index.html"
	};
});