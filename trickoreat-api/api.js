//======================================================================================================================================
//FUNCTION: authenticate
//======================================================================================================================================
/*PARAMETERS:
username - A string containing inputted username
password - A string containing inputted password

RETURNS:
TRUE if password matches the username's account, FALSE otherwise
*/
function authenticate(username, password) {

	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT password FROM accountTable WHERE email='" + username + "'"},

		datatype : 'json',
		async : false
	});
	var json = JSON.parse(jqXHR.responseText);

	if( json == null ) {
		console.log("User not found")
		return false;
	} else {
		if( password == json[0].password ) {
			console.log("Login successful");
			return true;
		} else {
			console.log("Passwords do not match");
			return false;
		}
	}

}

/* =========================================================== */
/* GETCONTENT() FUNCTION:

PARAMETERS:
TYPE (INTEGER) 
	3 Possible Vals for Type:
	1: FAQ page content
	2: contact us page content
	3: news page content

RETURNS:
STRING containing content for a given section
*/

function getContent(type,theContent){
	var qString = "";

	qString = "SELECT content FROM webContent WHRERE type='" + type + "'"; 
	console.log("The query string is " + qString);
	
    //POST request
    response = $.ajax({
       	method : "POST",
      	url : 'trickoreat-api/select.php',
       	//put your query here
       	data : { query : qString },
    });

    var json = JSON.parse(response.responseText);
    return json[0].content;
}

// END EDITCONTENT() FUNCTION 
/* =========================================================== */


/* =========================================================== */
/* EDITCONTENT() FUNCTION:

PARAMETERS:
TYPE (INTEGER) 
	3 Possible Vals for Type:
	1: FAQ page content
	2: contact us page content
	3: news page content
CONTENT (TEXT) - the content of the particular page (FAQ, CONTACT US, ETC)

RETURNS:
TRUE IF SUCCESSFUL, FALSE OTHERWISE
*/

function editContent(type,theContent){
	var qString = "";
	if(type==1){
		qString = "UPDATE webContent SET type='1',content='" + theContent + "' WHERE type='1'";					
	}
	else if(type==2){
                qString = "UPDATE webContent SET type='2',content='" + theContent + "' WHERE type='2'";
	}
	else if(type==3){
                qString = "UPDATE webContent SET type='3',content='" + theContent + "' WHERE type='3'";
	}
	else{
		console.log("Invalid type specified!");
		return(false);
	}
	console.log("The query string is " + qString);
	
        //POST request
        $.ajax({
               	method : "POST",
               	url : 'trickoreat-api/insert.php',
               	//put your query here
               	data : { query : qString },

               	success : function() {
                       	console.log("Insert success");
               	}
        });
	return(true);
}

// END EDITCONTENT() FUNCTION 
/* =========================================================== */

/* =========================================================== */
/*SEARCHPART() FUNCTION:

PARAMETERS:
FIRST NAME
SURNAME
TEAM NAME

RETURNS:
JSON with info on given participant(s), FALSE if no participant is found
*/

function searchPart(fName,sName,tName){ // first name, last name, team name
	var qString = "";

	if(fName==null && sName!=null && tName==null){
		qString = "SELECT firstName,surName,userName FROM accountTable WHERE surName = '" + sName + "'";
	}
	else if(fName!=null && sName==null && tName==null){
		qString = "SELECT firstName,surName,userName FROM accountTable WHERE firstName = '" + fName + "'";
	}
	else if(fName!=null && sName!=null && tName==null){
		qString = "SELECT firstName,surName,userName FROM accountTable WHERE firstName = '" + fName
      		+ "' AND surName = '" + sName + "'";
	}


	else{
		console.log("lName and fName are both null");
		return(false);
	}

	console.log("qString is " + qString);

        var result = $.ajax({
               	method : "POST",
               	url : 'trickoreat-api/select.php',

               	//put your query here
               	data : { query : qString },

               	datatype : 'json',
               	async : false
       	});

	var json = JSON.parse(result.responseText);

	if(json!=null){
		console.log("Returning: " + json[0].surName);
		return json;
        }
	else{
		console.log("Error. No content found.");
		return(false);
	}
}

//END SEARCHPART() FUNCTION 
/* =========================================================== */


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
result - A json object with all columns in the team table for the given team
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
	
	return JSON.parse(result);
}



//======================================================================================================================================
//FUNCTION: List all participants
//======================================================================================================================================
/*
PARAMETERS:
NONE

RETURN:
JSON with all registered participants
*/
function listAllParticipants() {
	console.log ("selecting parts");
	
	//POST request
	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT username,firstName,surName,email,teamName FROM accountTable WHERE role=\"part\" AND eventName=\"trickguelph\"" },

		datatype : 'json',
		async : false
	});

    var json = JSON.parse (jqXHR.responseText);
    return json;
}


//======================================================================================================================================
//FUNCTION: Create event
//======================================================================================================================================
/*
PARAMETERS:
eventName - string of desired event name
location - string containing locations of event
scheduledTime - date of event, in format YYYY-MM-DD

RETURN:
NOTHING
*/
function createEvent(eventName,eventLocation,scheduledStart,scheduledEnd,scheduledDate) {


	//depends on values from the html file, using dummy values until you decide how you're going to put data in. 
	if (eventName==undefined){
		eventName="Super Happy Fun Time The Sequel Check"
	}
	if (eventLocation==undefined){
		eventLocation="Guelph"
	}
	if (scheduledTime==undefined){
		scheduledTime="2015-11-12"
	}

	insertString="INSERT IGNORE INTO eventTable (eventName,eventLocation,scheduledDate,scheduledTime) VALUES" 
	valueString= "(\"" +eventName +"\"," + "\"" +eventLocation + "\",\"" + scheduledDate + "\",\"" + scheduledStart + "\",\" + scheduledEnd + "\")"
	queryString=insertString +valueString;
	console.log ("Creating event string: " + queryString);
	//POST request
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',

		//put your query here
		data : { query :  queryString },

		success : function() {
			console.log("Insert success");
		}
	});

}

function getAllEvents (){
	checkString="SELECT * FROM eventTable" 
	var checkJSON = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : checkString },

		datatype : 'json',
		async : false
	});

    var  json= JSON.parse (checkJSON.responseText);
    var count=Object.keys(json).length ;
   	for (i=0;i< (count); i++){
   		eventName= json[i].eventName;
   		eventLocation=json[i].eventLocation;
   		scheduledStart=json[i].scheduledStart;
   		scheduledEnd=json[i].scheduledEnd;
   		scheduledDate=json[i].scheduledDate;
   		participantCount=json[i].participantCount;
   		teamCount=json[i].teamCount;
   		eventID=json[i].eventID;

   		teamCount=json[i].teamCount;
   		
   		console.log ("Event Name: " + eventName + " Location: " +eventLocation + " Time " + scheduledStart + " Team Count " + teamCount);

   	}
}

function searchEvent (eventName){


	checkString="SELECT * FROM eventTable WHERE eventName LIKE \"" + "\"" 
	var checkJSON = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : checkString },

		datatype : 'json',
		async : false
	});

    var  json= JSON.parse (checkJSON.responseText);
    var count=Object.keys(json).length ;
   	for (i=0;i< (count); i++){
   		eventName= json[i].eventName;
   		eventLocation=json[i].eventLocation;
   		scheduledStart=json[i].scheduledStart;
   		scheduledEnd=json[i].scheduledEnd;
   		scheduledDate=json[i].scheduledDate;
   		participantCount=json[i].participantCount;
   		teamCount=json[i].teamCount;
   		eventID=json[i].eventID;

   		teamCount=json[i].teamCount;
   		
   		console.log ("Event Name: " + eventName + " Location: " +eventLocation + " Time " + scheduledStart + " Team Count " + teamCount);

   	}


}