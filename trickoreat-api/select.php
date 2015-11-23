<?php
$servername = "localhost";
$username = "root";
$password = "PositiveFish";
$dbname = "cis3750";

// Create connection
$conn = mysql_connect($servername, $username, $password);
mysql_select_db($dbname, $conn);

$sql = $_POST['query'];

$result = mysql_query($sql, $conn );

while($row = mysql_fetch_assoc($result)){
 	$array[] = $row;
}

echo json_encode($array);

?>