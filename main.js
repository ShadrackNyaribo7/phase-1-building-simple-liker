// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!



document.getElementById("modal").value.style.visibility = "hidden";



EMPTY_HEART.addEventListener('click', mimicServerCall(url="http://mimicServer.example.com")){ 
  fetch('http://mimicServer.example.com',{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(EMPTY_HEART)
})
.then(res =>{
return res.json();})
const error = document.querySelector("modal").value;
try {
  mimicServerCall();
} catch (error) {
  console.error("failed");
  document.getElementById("modal").value.style.visibility = "visible";
}
setTimeout(function(error){
 return error.style.visibility = "hidden";
},3);
if (mimicServerCall == success){
  toggle.EMPTY_HEART = FULL_HEART.activated-heart;
}


FULL_HEART.addEventListener('click', mimicServerCall(url="http://mimicServer.example.com")){ 
  fetch('http://mimicServer.example.com',{
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(FULL_HEART)
})
.then(res =>{
  toggle.FULL_HEART = EMPTY_HEART;
return res.json();})





























//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
