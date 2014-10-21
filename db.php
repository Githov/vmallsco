
    <?php
    
$brandname = $_POST["brandname"];
$password = $_POST["password"];
$con = mysqli_connect("localhost", "root", "admin", "dbbrand");
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$result = mysqli_query($con, "SELECT * FROM admin WHERE brandname = '$brandname' AND password = '$password'");
$row = mysqli_fetch_array($result);
echo $row['brandname'];

   ?>