/* LOGIN */
function verifyLogin() {
	var usrname = document.getElementById("login-username").value;
	var password = document.getElementById("login-password").value;
	if (usrname == '' || password == '') {
		$('#login-error').show();
		return;
	}
	var verify = authenticate(usrname, password);
	if (verify) {
		location.replace("home.html");
	}
	else {
		$('#login-error').show();
	}
}

function showLogin() {
	$('#login-modal').modal('show');
}

function showSignup() {
	$('#signup-modal').modal('show');
}

/* News */
function getNews() {
	
	/* SOME FUCTION TO get all news */
	/* Parse JSON and send to HTML */
}

function editNews() {
	document.getElementById("news-static").style.display = 'none';
	document.getElementById("news-not-static").style.display = 'block';
}

function submitEditNews() {
	var x = document.getElementById("editNews").value;
	if (x) {
		document.getElementById("news-static").style.display = 'block';
		document.getElementById("news-not-static").style.display = 'none';
		editContent(3, x);
	}
	else {
		editContent(3, 'No News');
	}
	getNews()
}

function addNews() {
	
	/* SOME FUCTION TO store news in DB */
	//Update news
	getNews();
}

function deleteNews() {
	
	/* SOME FUCTION TO delete news in DB */
	//Update news
	getNews();
}

/* Event */
function getEvent() {
	
	/* SOME FUCTION TO get event in DB */
	/* Parse and send to HTML */
}

function addEvent() {
	
	/* SOME FUCTION TO add event in DB */
	//Update event page
	getEvent();
}

function deleteEvent() {
	
	/* SOME FUCTION TO delete event in DB */
	//Update event page
	getEvent();
}

function editEvent() {
	
	/* SOME FUCTION TO add event in DB */
	//Update event page
	getEvent();
}


/* Contact Us */
function getContactUs() {
/* SOME FUCTION TO get event in DB */
	/* Parse and send to HTML */
}

function editContactUs() {
	
	/* SOME FUCTION TO edit contact in DB*/
	//Refresh the page
	getContactUs();
}






