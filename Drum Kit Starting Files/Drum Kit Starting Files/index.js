for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document
    .querySelectorAll("button")
    [i].addEventListener("mouseenter", function () {
      let butt = (this.style.color = "white");
    });
  document
    .querySelectorAll("button")
    [i].addEventListener("mouseleave", function () {
      let butt = (this.style.color = "#DA0463");
    });
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    let butt = this.innerHTML;
    let song;

    switch (butt) {
      case "w":
        song = new Audio("./sounds/crash.mp3");
        song.play();
        break;

      case "a":
        song = new Audio("./sounds/kick-bass.mp3");
        song.play();
        break;

      case "s":
        song = new Audio("./sounds/snare.mp3");
        song.play();
        break;
      case "d":
        song = new Audio("./sounds/tom-1.mp3");
        song.play();
        break;
      case "j":
        song = new Audio("./sounds/tom-2.mp3");
        song.play();
        break;
      case "k":
        song = new Audio("./sounds/tom-3.mp3");
        song.play();
        break;
      case "l":
        song = new Audio("./sounds/tom-4.mp3");
        song.play();
        break;
      default:
    }
  });
  document.addEventListener("keyup", (event) => {
    let matt = event.target;
    matt.style.color = "#DA0463";
  });

  document.addEventListener("keydown", (event) => {
    let buttt = event.target.style;
    buttt.color = "white";
  });

  document.addEventListener("keydown", (event) => {
    var mat = event.key;
    console.log(event);
    var myText = document.getElementById(mat);
    myText.style.color = "white"; /* Color to change to */
    
    setTimeout(function() {
      myText.style.color = '#DA0463'; /* Return to initial color */
    }, 1000);
    switch (mat) {
      case "w":
        song = new Audio("./sounds/crash.mp3");
        song.play();
        break;

      case "a":
        song = new Audio("./sounds/kick-bass.mp3");
        song.play();

        break;
      case "s":
        song = new Audio("./sounds/snare.mp3");
        song.play();
        break;
      case "d":
        song = new Audio("./sounds/tom-1.mp3");
        song.play();
        break;
      case "j":
        song = new Audio("./sounds/tom-2.mp3");
        song.play();
        break;
      case "k":
        song = new Audio("./sounds/tom-3.mp3");
        song.play();
        break;
      case "l":
        song = new Audio("./sounds/tom-4.mp3");
        song.play();
        break;
      default:
    }
  });
}
