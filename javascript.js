let date = new Date();
let hours = date.getHours();

greeting = document.getElementById('greetings');

console.log(greeting);

console.log(hours);

if (hours < 12){
  greeting.textContent = "good morning";
} else if (hours < 20){
  greeting.textContent = 'good afternoon';
} else if (hours < 24){
  greeting.textContent = "good evening"
} else {
  greeting.textContent = "hello";
}
