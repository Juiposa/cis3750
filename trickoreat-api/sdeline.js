//======================================================================================================================================
//FUNCTION: Create Team
//======================================================================================================================================
/*
PARAMETERS:
newTeamName - A string containing the team name
teamSize- An integer containing the # of team members
teamMembers - A string containing all the names of the team members delimited by commas
privacy - A string containing the words 'public' or 'private'
route - A string containing the name of the route
eventName - A string containg the name of the event 
*/

function createTeam(newTeamName,teamSize,teamMembers,privacy,route,eventName) 
{
	var newValues= newTeamName + "\'," + teamSize + ",\'" + teamMembers + "\',\'" + privacy + "\',\'" + route +"\',\'" + eventName;
	var newQuery="INSERT INTO teamTable (teamName,teamSize,teamMembers,privacyStatus,routes,eventName) VALUES (\'"+newValues+"\');";

		$.ajax({
			method : "POST",
			url : 'trickoreat-api/insert.php',
			data : { query : newQuery },

			success : function() {
				console.log("Team Create success");
			}
		});
}


//======================================================================================================================================
//FUNCTION: Edit Team Name 
//======================================================================================================================================
/*
PARAMETERS:
teamName - A string containing current the team name
newTeamName - A string containing new team name
*/

function editTeamName(teamName,newTeamName) 
{
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET teamName=" + "'" + newTeamName + "'" + " WHERE teamName=" + "'" + teamName +"'" },

		success : function() {
			console.log("Name Edit success");
		}
	});	
}


//======================================================================================================================================
//FUNCTION: Edit Team Members
//======================================================================================================================================
/*PARAMETERS:
teamName - A string containing current the team name
newMembers- A string containing the new full list of team members dlimited by commas
*/

function editTeamMembers(teamName,newMembers) 
{
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET teamMembers=" + "'" + newMembers + "'" + " WHERE teamName=" + "'" + teamName +"'"  },

		success : function() {
			console.log("Members Edit success");
		}
	});	
}


//======================================================================================================================================
//FUNCTION: Edit Team Size
//======================================================================================================================================
/*
PARAMETERS:
teamName - A string containing current the team name
newSize- An integer containing the new team size
*/
function editTeamSize(teamName,newSize) 
{
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET teamSize=" + "'" + newSize + "'" + " WHERE teamName=" + "'" + teamName +"'"  },

		success : function() {
			console.log("Size Edit success");
		}
	});	
}


//======================================================================================================================================
//FUNCTION: Edit Team Privacy
//======================================================================================================================================
/*
PARAMETERS:
teamName - A string containing current the team name
newPrivacy- An string containing the either 'public' or 'private'
*/
function editTeamPrivacy(teamName,newPrivacy) 
{
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET privacyStatus=" + "'" + newPrivacy + "'" + " WHERE teamName=" + "'" + teamName +"'"  },

		success : function() {
			console.log("Privacy Edit success");
		}
	});	
}


//======================================================================================================================================
//FUNCTION: Edit Team Route
//======================================================================================================================================
/*
PARAMETERS:
teamName - A string containing current the team name
newRoute- An string containing the new route name
*/
function editTeamRoute(teamName,newRoute) 
{
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET routes=" + "'" + newRoute + "'" + " WHERE teamName=" + "'" + teamName +"'"  },

		success : function() {
			console.log("Route Edit success");
		}
	});	
}


//======================================================================================================================================
//FUNCTION: Retrive Team Info
//======================================================================================================================================
/*
PARAMETERS:
teamName - A string containing the team name
RETURNS:
result - A json object with all columns in the team table
*/
function retriveTeamInfo(teamName) 
{
	var result = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',
		data : { query : "SELECT * FROM teamTable WHERE teamName=" + "'" + teamName + "'" },

		success : function() {
			console.log("Retrive Team Info success");
		}
	});

	console.log(result.teamName);
	
	return result;
}


//======================================================================================================================================
//FUNCTION EXAMPLES
//======================================================================================================================================


//createTeam("Team1",2,"Eric,Carla","public","Route 222","TrickOrEatGuelph");

//editTeamName("Team1","ARR!");

//editTeamMembers("Team1","James,Alex,Carl,Steve");

//editTeamSize("Team1",4);

//editTeamPrivacy("Team1","public");

//editTeamRoute("Team1","Route 17")

//retriveTeamInfo("Team1");