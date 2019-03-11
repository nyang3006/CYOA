$(document).ready(()=>{
  //Constants
  const userIn = $("#user");
  const app = document.getElementById('output');
  
  //Story variables
  let chose = [];
  let canEnter = false;
  let story1 = new Story(chose);
  let getInfo = (x)=>{
    return story1.getChoiceInfo(x);
  }
  //Type first part of story
  const typewriter = new Typewriter(app, {
    loop: false,
    delay: 20
  });
  typewriter.typeString(story1.getStory())
    .pauseFor(200)
    .callFunction(()=>{
      canEnter = true;
      let optionString = buildOptions(getInfo("a"),getInfo("b"));
      $("#options").html(optionString);
    })
    .start();
    
  //On enter, type out the story
  $(this).keypress((event) =>{
    if(event.which == 13){
      event.preventDefault();
      //Is the story fully typed out
      if(canEnter){
        //Disable enter
        canEnter = false;

        //User input
        let userInVal = userIn.val().toLowerCase();
        $("#output .Typewriter__wrapper").first().append("<br>>"+userInVal+"<br>");
        console.log(userInVal!=="e")
        if(!(userInVal=="a"||userInVal=="b")){
          //User didn't choose a or b
          console.log("CHOOSE SOMETHING ELSE ")
          typewriter.typeString("Choose an option from above.")
            .pauseFor(200)
            .callFunction(()=>{
              canEnter = true;
              userIn.val("");
            })
            .start();
        }else{
          console.log("yay")
          story1.addChose(userInVal);
  
          //Clear all texts
          userIn.val("");
          $('#options').html("");
          typewriter.typeString(story1.getStory())
            .pauseFor(200)
            .callFunction(()=>{
              canEnter = true;
              console.log(story1.getChoiceInfo("a"));
              let optionString = buildOptions(getInfo("a"),getInfo("b"));
              $("#options").html(optionString);
            })
            .start();
        }
      }
    }
  });
});