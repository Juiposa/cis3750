

function testSelect() {
	console.log ("selecting parts");
	
	//POST request
	var jqXHR = $.ajax({
		method : "POST",
		url : 'trickoreat-api/select.php',

		//put your query here
		data : { query : "SELECT username,firstName,surName,email  FROM accountTable WHERE role=\"part\" AND eventName=\"trickguelph\"" },

		datatype : 'json',
		async : false
	});


	//return values (processed or un-processed) to caller here
	console.log(jqXHR.responseText);
}

function testInsert() {

	//POST request
	$.ajax({
		method : "POST",
		url : 'trickoreat-api/insert.php',

		//put your query here
		data : { query : "INSERT INTO fuckthisshit (asshole) VALUES ('bashit')" },

		success : function() {
			console.log("Insert success");
		}
	});
}

testSelect ();
