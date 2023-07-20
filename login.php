<?php
include('connection.php');
header("Content-Type: application/json");
$info = json_decode(file_get_contents('php://input'), true);

$email=$info['email'];
$password=$info['password'];

$query=$mysqli->prepare('select name,email,password from users where email=?');
$query->bind_param('s',$email);
$query->execute();

$query->store_result();
$query->bind_result($name,$email,$hashed_password);
$query->fetch();
// echo(password_verify($password,$hashed_password));
$num_rows=$query->num_rows();
if($num_rows==0){
  $response['status']="user not found";
}else
{
  if(password_verify($password,$hashed_password)){
    $response['status']='logged in';
    $response['name']=$name;
    $response['email']=$email;
  }else{
    $response['status']="wrong password";
  }
}
echo json_encode($response);