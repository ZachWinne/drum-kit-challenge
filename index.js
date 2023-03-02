
// Creates a listener for each button.
// Does so via a for loop which iterates for as many buttons with class="drum".
// Then when an event is triggered, the target's innertext of the event object is passed into the makeSound function
for (var i = 0; i < document.querySelectorAll("button.drum").length; i++) {
  document.querySelectorAll("button.drum")[i].addEventListener("click", (event) => {
    makeSound(event.target.innerText);
    console.log(event)
    highlightDrum(event.target.innerText)
  }
)}

// Creates a listener on the entire document
// Document listens for all key values pressed and passes all event object key values into the makeSound function
document.addEventListener("keydown", (event) => {
  makeSound(event.key);
  highlightDrum(event.key)
})

// switch is created to play the sound for the character passed in.
// in the instance of a keydown event, it will only play a sound if the character passed in matches one of the switch cases
function makeSound(keyValue) {    
  switch (keyValue) {
    case "w":
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('./sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('./sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('./sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      break;
  }
}

function highlightDrum(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  // makes it so browser does not throw error
  if (activeButton !== null) {
    activeButton.classList.toggle("pressed");

    setTimeout(
      () => {activeButton.classList.toggle("pressed")}, 100
    )
  }
}