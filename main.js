const choices = {
  msg: "Welcome. Chose your options",
  options:{
    a:{
      msg:"You chose A. Chose again",
      options:{
        a:{
          msg:"Again. The end."
        },
        b:{
          msg:"The end."
        }
      }
    },
    b:{
      msg:"you chose B. Chose again",
      options:{
        a:{
          msg:"aaThe end."
        },
        b:{
          msg:"Again!, The end."
        }
      }
    }
  }
}
$(document).ready(()=>{
  const output = $("#output");
  var app = document.getElementById('output');
  
  const typewriter = new Typewriter(app, {
    loop: false,
    delay: 5
  });
  
  var x = JSON.parse(JSON.stringify(choices));
  let chose = [];
  let typeStory = ()=>{
    for(let i in chose){
      console.log(x)
      x = x.options;
      x = x[chose[i]];
    }
    return x.msg;
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
        chose[chose.length]=$("#user").val().toLowerCase();
        $("#user").val("");
        
        typewriter.typeString(typeStory())
          .pauseFor(1000)
          .callFunction(()=>{
            canEnter = true;
          })
          .start();
      }
    }
  });
});