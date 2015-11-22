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
$array = mysql_fetch_row($result); 

echo json_encode($array);

?>