// first button it will listen when it click by the mouse it will do the function.
// document.querySelector("button").addEventListener("click",handleClick);
// function handleClick(){
//   alert("clicked");
// }

// anonymous function ( does not have name); this is just for the first button
// document.querySelector("button").addEventListener("click",function () {
//   alert("clicked");
// });

// all buttons.
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // u will see the button that have clicked
    // console.log(this);
    // console.log(this.innerHTML);
    // change the color to white
    // this.style.color = "white";
    // here holding the whole names of the button
    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    // switch (buttonInnerHTML) {
    //   case "w":
    //     var tom1 = new Audio('sounds/tom-1.mp3');
    //     tom1.play();
    //     break;
    //
    //   case "a":
    //     var tom2 = new Audio('sounds/tom-2.mp3');
    //     tom2.play();
    //     break;
    //
    //   case "s":
    //     var tom3 = new Audio('sounds/tom-3.mp3');
    //     tom3.play();
    //     break;
    //
    //   case "d":
    //     var tom4 = new Audio('sounds/tom-4.mp3');
    //     tom4.play();
    //     break;
    //
    //   case "j":
    //     var snare = new Audio('sounds/snare.mp3');
    //     snare.play();
    //     break;
    //
    //   case "k":
    //     var kickBass = new Audio('sounds/kick-bass.mp3');
    //     kickBass.play();
    //     break;
    //
    //   case "l":
    //     var crash = new Audio('sounds/crash.mp3');
    //     crash.play();
    //     break;
    //     // will never happen
    //   default:
    //     console.log(buttonInnerHTML);
    //
    // }


  });

}

// for the keyboard.
document.addEventListener("keydown", function(event) {
  // here we can see the hey that pressed.
  // console.log(event);
  makesound(event.key);

  buttonAnimation(event.key);



})


// custome function to make the sound
function makesound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    case "l":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
      // will never happen
    default:
      console.log(buttonInnerHTML);

  }

}



function buttonAnimation(currentKey) {

  // to target the classes
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  // here the first is the function that running then the time.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);


}
