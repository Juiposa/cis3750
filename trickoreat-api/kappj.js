
//checks given username matchs the password
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

authenticate("meal@exchange.ca", "password");
