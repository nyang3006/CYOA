const choices = ["Welcome. Chose your options", [
  "You chose A. Chose again",["Again. The end."],["The end."]
],[
  "you chose B. Chose again",["The end2"],["again b, the end."]
]];

let optionIndex = 0;
let options = [];
$(document).ready(()=>{
  const output = $("#output");
  var app = document.getElementById('output');
  
  const typewriter = new Typewriter(app, {
    loop: false,
    delay: 5
  });

  let typeStory = ()=>{
    let a;
    for(let i=0;i<=options.length;i++){
      a=choices[i];
    }
    return a;
  }

  function isEqualIgnoreCase(a,b){
    return a.toLowerCase() == b.toLowerCase() ? false : true;
  }
  let canEnter = false;
  typewriter.typeString(typeStory())
    .pauseFor(1000)
    .callFunction(()=>{
      canEnter = true;

    })
    .start();

  $(document).keydown((event) =>{
    if(event.which == 13){
      event.preventDefault();
      if(canEnter){
        canEnter = false;
        $("#output .Typewriter__wrapper").first().append("<br>>"+$("#user").val()+"<br>");
        optionIndex++;
        console.log(optionIndex);
        $("#user").val("");
        typewriter.typeString(typeStory())
          .pauseFor(1000)
          .callFunction(()=>{
            canEnter = true;

          })
          .start();
        if(isEqualIgnoreCase($("#user").val(),"a")){
          options[optionIndex]=1;
          console.log("LA")
        }else if(isEqualIgnoreCase($("#user").val(),"b")){
          options[optionIndex]=2;
          console.log("LAA")
        }
      }
    }
  });
});