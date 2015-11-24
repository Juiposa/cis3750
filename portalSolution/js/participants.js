//code for participants pages

//=============================
//	View participants page
//=============================
function populateParticipantsGrid()
{
	var data = listAllParticipants();
	
	for(var i = 1; i < 4; i++)
	{
		var table = document.getElementById("participants-table");
		//var x = document.getElementById("participation-table").rows.length;
		
		// Create an empty <tr> element and add it to the 1st position of the table:
		var row = table.insertRow(i);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var FirstName = row.insertCell(0);
		var LastName = row.insertCell(1);
		var Email = row.insertCell(2);
		var Student = row.insertCell(3);
		var ParWavier = row.insertCell(4);
		var BusWavier = row.insertCell(5);
		var Team = row.insertCell(6);
		var TeamCaptain = row.insertCell(7);
		var Route = row.insertCell(8);

		// Add some text to the new cells:
		FirstName.innerHTML = "New Data";
		LastName.innerHTML = "More Data";
		Email.innerHTML = "More Data";
		Student.innerHTML = "More Data";
		ParWavier.innerHTML = "More Data";
		BusWavier.innerHTML = "More Data";
		Team.innerHTML = "More Data";
		TeamCaptain.innerHTML = "More Data";
		Route.innerHTML = "More Data";
	}
}

function filterTable()
{
	var fname = document.getElementById("filter-first-name").value;
	var lname = document.getElementById("filter-last-name").value;
	var tname = document.getElementById("filter-team-name").value;
	
	
}

//=============================
//	create participants page
//=============================

function populateCreateFields()
{
	document.getElementById("team-captain").innerHTML = "Joe Don";
	var option = document.createElement("option");
	option.text = "person 1";
	document.getElementById("create-part-left").add(option);
	var option = document.createElement("option");
	option.text = "person 2";
	document.getElementById("create-part-right").add(option);
	
	var option = document.createElement("option");
	option.text = "route 1";
	document.getElementById("create-routes-left").add(option);
	var option = document.createElement("option");
	option.text = "route 2";
	document.getElementById("create-routes-right").add(option);
}

//team captain
function createRemoveTeamCaptain()
{
	document.getElementById("team-captain").innerHTML = "";
	document.getElementsByClassName("create-show-captain")[0].style.display = "none";
	document.getElementsByClassName("create-no-captain")[0].style.display = "block";
}

function createAddNewTeamCaptain()
{
	var fname = document.getElementById("create-captain-first-name");
	var lname = document.getElementById("create-captain-last-name");
	var email = document.getElementById("create-captain-email");
	
	if(fname.value != '' && lname.value != '' && email.value != '')
	{
		var newCaptain = fname.value +" "+ lname.value;
		document.getElementsByClassName("create-show-captain")[0].style.display = "block";
		document.getElementsByClassName("create-no-captain")[0].style.display = "none";
		document.getElementById("team-captain").innerHTML = newCaptain;
	}
	else
	{
		alert("All fields are required!");
	}
}

function createInviteNewTeamCapModule()
{
	$('#create-captain-modal').modal('show');
	document.getElementById("create-captain-first-name").value = "";
	document.getElementById("create-captain-last-name").value = "";
	document.getElementById("create-captain-edit").value = "";
}

//members
function createMoveParticipantRight()
{
	var selectedItem = $("#create-part-left option:selected");
	$("#create-part-right").append(selectedItem);
}

function createMoveParticipantLeft()
{
	var selectedItem = $("#create-part-right option:selected");
	$("#create-part-left").append(selectedItem);
}

function createInviteNewParticipantModule()
{
	$('#create-participant-modal').modal('show');
	document.getElementById("create-participants-first-name").value = "";
	document.getElementById("create-participants-last-name").value = "";
	document.getElementById("create-participants-email").value = "";
}

function createAddInviteParticipant()
{
	var fname = document.getElementById("create-participants-first-name");
	var lname = document.getElementById("create-participants-last-name");
	var email = document.getElementById("create-participants-email");
	
	if(fname.value != '' && lname.value != '' && email.value != '')
	{
		var option = document.createElement("option");
		option.text = fname.value +" "+ lname.value;
		$("#create-part-right").append(option);
	}
	else
	{
		alert("All fields are required!");
	}
}

//routes
function createMoveRouteRight()
{
	var selectedItem = $("#create-routes-left option:selected");
	$("#create-routes-right").append(selectedItem);
}

function createMoveRouteLeft()
{
	var selectedItem = $("#create-routes-right option:selected");
	$("#create-routes-left").append(selectedItem);
}


function submitCreateTeam()
{
	var teamName;
	var teamCaptain;
	var members;
	var route;
	
	window.location.href="participants.html";
}

//=============================
//	edit participants page
//=============================

function populateEditFields()
{
	document.getElementById("team-captain").innerHTML = "Joe Don";
	var option = document.createElement("option");
	option.text = "person 1";
	document.getElementById("edit-part-left").add(option);
	var option = document.createElement("option");
	option.text = "person 2";
	document.getElementById("edit-part-right").add(option);
	
	var option = document.createElement("option");
	option.text = "route 1";
	document.getElementById("edit-routes-left").add(option);
	var option = document.createElement("option");
	option.text = "route 2";
	document.getElementById("edit-routes-right").add(option);
}

//captain
function editRemoveTeamCaptain()
{
	document.getElementById("team-captain").innerHTML = "";
	document.getElementsByClassName("edit-show-captain")[0].style.display = "none";
	document.getElementsByClassName("edit-no-captain")[0].style.display = "block";
}

function editInviteNewTeamCapModule()
{
	$('#edit-captain-modal').modal('show');
	document.getElementById("edit-captain-first-name").value = "";
	document.getElementById("edit-captain-last-name").value = "";
	document.getElementById("edit-captain-edit").value = "";
}

function editAddNewTeamCaptain()
{
	var fname = document.getElementById("edit-captain-first-name");
	var lname = document.getElementById("edit-captain-last-name");
	var email = document.getElementById("edit-captain-email");
	
	if(fname.value != '' && lname.value != '' && email.value != '')
	{
		var newCaptain = fname.value +" "+ lname.value;
		document.getElementsByClassName("edit-show-captain")[0].style.display = "block";
		document.getElementsByClassName("edit-no-captain")[0].style.display = "none";
		document.getElementById("team-captain").innerHTML = newCaptain;
	}
	else
	{
		alert("All fields are required!");
	}
}

//members
function editMoveParticipantRight()
{
	var selectedItem = $("#edit-part-left option:selected");
	$("#edit-part-right").append(selectedItem);
}

function editMoveParticipantLeft()
{
	var selectedItem = $("#edit-part-right option:selected");
	$("#edit-part-left").append(selectedItem);
}

function editInviteNewParticipantModule()
{
	$('#edit-participant-modal').modal('show');
	document.getElementById("edit-participants-first-name").value = "";
	document.getElementById("edit-participants-last-name").value = "";
	document.getElementById("edit-participants-email").value = "";
}

function editAddInviteParticipant()
{
	var fname = document.getElementById("edit-participants-first-name");
	var lname = document.getElementById("edit-participants-last-name");
	var email = document.getElementById("edit-participants-email");
	
	if(fname.value != '' && lname.value != '' && email.value != '')
	{
		var option = document.createElement("option");
		option.text = fname.value +" "+ lname.value;
		$("#edit-part-right").append(option);
	}
	else
	{
		alert("All fields are required!");
	}
}

//routes
function editMoveRouteRight()
{
	var selectedItem = $("#edit-routes-left option:selected");
	$("#edit-routes-right").append(selectedItem);
}

function editMoveRouteLeft()
{
	var selectedItem = $("#edit-routes-right option:selected");
	$("#edit-routes-left").append(selectedItem);
}


function submitEditTeam()
{
	var teamName = document.getElementById("edit-select-team").value;
	var teamCaptain = document.getElementById("team-captain").innerHTML;
	var members;
	var route;
	
	window.location.href="participants.html";
}


