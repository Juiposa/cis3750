


function getAllParts() {
	console.log ("selecting parts");
	
	//POST request
	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT firstName,surName,email,teamName FROM accountTable WHERE role=\"part\" AND eventName=\"trickguelph\"" },

		datatype : 'json',
		async : false
	});

    var  json= JSON.parse (jqXHR.responseText);
   	var count=Object.keys(json).length ;
   	for (i=0;i< (count); i++){
   		firstname= json[i].firstName;
   		surname=json[i].surName;
   		email=json[i].email;
   		teamname=json[i].teamName;
   		if (teamname==null || teamname==undefined){
   			teamname="No Team"
   		}
   	//	console.log ("First Name: " + firstname + " Surname: " +surname + " Email Address " + email + " Team Name " + teamname);

   	}

    

	//return values (processed or un-processed) to caller here
	console.log(jqXHR.responseText);
}

function addEvent() {

		eventName="Super Happy Fun Time The Sequel2.0"
		eLocation="Guelph"

		scheduledTime="2015-11-12"

	//depends on values from the html file, using dummy values until you decide how you're going to put data in. 
	if (eventName==undefined){
		eventName="Super Happy Fun Time The Sequel2.0"
	}
	if (location==undefined){
		eLocation="Guelph"
	}
	if (scheduledTime==undefined){
		scheduledTime="2015-11-12";
	}

	insertString="INSERT IGNORE INTO eventTable (eventName,eventLocation,scheduledTime) VALUES" 
	valueString= "(\"" +eventName +"\"," + "\"" +eLocation + "\",\"" + scheduledTime + "\")"
	queryString=insertString +valueString;
	console.log ("Creating event string: " + queryString);
	//POST request
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',

		//put your query here
		data : { query :  queryString },

		success : function() {
		
		}
	});
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
   		scheduledTime=json[i].scheduledTime;
   		teamCount=json[i].teamCount;
   		
   		console.log ("Event Name: " + eventName + " Location: " +eventLocation + " Time " + scheduledTime + " Team Count " + teamCount);

   	}

		   
}

addEvent ();

