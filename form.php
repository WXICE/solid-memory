<?php
    $conn = mysqli_connect('localhost','iceuser','invalid','Andrew')
 
    // Check connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);
}
  echo "Connected successfully";


?>