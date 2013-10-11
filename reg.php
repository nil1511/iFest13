<?php
$link = mysql_connect('localhost', 'root', '');
if (!$link) {
    die('Could not connect: ' . mysql_error());
}
$db_selected = mysql_select_db('ifest', $link);
if (!$db_selected) {
    die('Can\'t use ifest : ' . mysql_error());
}
if (empty($_POST) || empty($_POST['name']) || empty($_POST['email']) || empty($_POST['institute']) || empty($_POST['phoneno']))
    die('Invalid Request');
$name      = htmlspecialchars($_POST['name']);
$email     = htmlspecialchars($_POST['email']);
$institute = htmlspecialchars($_POST['institute']);
$phoneno   = $_POST['phoneno'];
$sex       = htmlspecialchars($_POST['sex']);
$ieee      = htmlspecialchars($_POST['ieee']);
$ieeeno    = htmlspecialchars($_POST['ieeeno']);
$address   = htmlspecialchars($_POST['address']);
$city      = htmlspecialchars($_POST['city']);
$pin       = htmlspecialchars($_POST['pin']);
$cevent    = '';
foreach ($_POST['cevent'] as $a) {
    $cevent .= $a . ' ';
}
$cevent = substr($cevent, 0, strlen($cevent) - 1);
$sql    = "INSERT INTO `ifest`.`registration` (`name`, `email`, `institute`, `phoneno`, `sex`, `ieeeno`, `address`, `city`, `pin`, `event`) VALUES ('$name','$email','$institute','$phoneno','$sex','$ieeeno','$address','$city','$pin','$cevent');";
$q      = mysql_query($sql);
if ($q) {
    echo 'done';
} else {
    die('Could not execute query ' . mysql_error() . ' with query ' . $sql);
}
mysql_close($link);
?>