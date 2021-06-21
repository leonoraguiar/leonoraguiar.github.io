var today = new Date(21);
var hourNow = today.getHours(20:00);
var greeting;

if (hourNow < 12){
  greeting = "Good Morning";
}
else if (hourNow < 20){
  greeting = 'Good afternoon!';
}
else if (hourNow < 24){
  greeting = "Good evening"
}
else {
  greeting = "Welcome";
}
