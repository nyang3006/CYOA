$(document).ready(function(){

  //Type first part of story
  const app = document.getElementById('head_text');
  const typewriter = new Typewriter(app, {
    loop: false,
    delay: "natural"
  });
  typewriter.typeString("Hello.")
    .pauseFor(3000)
    .deleteAll()
    .typeString("You will be playing as our hero, x")
    .start();
});