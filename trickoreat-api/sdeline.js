//FUNCTION: changeTeamName 
//PARAMETERS:
//teamName - A string containing current the team name
//newTeamName - A string containing new team name

function changeTeamName(teamName,newTeamName) 
{

	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "UPDATE teamTable SET name='newTeamName' WHERE name='teamName'" },

		success : function() {
			console.log("Update success");
		}
	});
	
}


//FUNCTION: createTeam
//PARAMETERS:
//newTeamName - A string containing the team name
//teamSize- An integer containing the # of team members
//teamMembers - A string containing all the names of the team members delimited by commas
//privacy - A string containing the words 'public' or 'private'
//route - A string containing the name of the route
//eventName - A string containg the name of the event 

function createTeam(newTeamName,teamSize,teamMembers,privacy,route,eventName) 
{
	var newQuery="INSERT INTO teamTable (teamName,teamSize,teamMembers,privacyStatus,routes,eventName) VALUES ('"+newTeamName+"',"+teamSize+",'"+teamMembers+"','"+privacy+"','"+route"','"+eventName+"');"

		$.ajax({
			method : "POST",
			url : 'trickoreat-api/insert.php',
			data : { query : newQuery },

			success : function() {
				console.log("Insert success");
			}
		});
}


//FUNCTION: retriveTeamInfo
//PARAMETERS:
//teamName - A string containing the team name

function  retriveTeamInfo(teamName) 
{

	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',
		data : { query : "SELECT * FROM teamTable WHERE teamName='teamName'" },

		success : function() {
			console.log("Update success");
		}
	});

	return jqXHR;

}

createTeam("Team2",1,"Jake Blake","public","Route 222","TrickOrEatGuelph") 