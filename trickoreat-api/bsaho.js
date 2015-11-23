


function testSelect() {
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

    var  json= JSON.parse (jqXHR.responseText);

    username=json[0].username;
    console.log (username);

	//return values (processed or un-processed) to caller here
	console.log(jqXHR.responseText);
}

function testInsert() {


	//depends on values from the html file, using dummy values until you decide how you're going to put data in. 
	if (eventName==undefined){
		eventName="Super Happy Fun Time The Sequel"
	}
	if (location==undefined){
		location="Guelph"
	}
	if (scheduledTime==undefined){
		scheduledTime="2015-11-12"
	}

	insertString="INSERT IGNORE INTO eventTable (eventName,location,scheduledTime) VALUES" 
	valueString= "(\"" +eventName +"\"," + "\"" +location + "\",\"" + scheduledTime + "\")"
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

testSelect ();

