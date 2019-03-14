let onDocReady = ()=>{
  const buttons = $(".option");
  const headText = document.getElementById('head_text');
  const headDiv = $("#head");
  const headCont = $("#head_cont");

  let chose = [];
  let story1 = new Story(chose);
  let typeNext = story1.getStory();

  let callFunc = ()=>{
    typeNext = story1.getStory()
    headCont.css("top","-27.5vh")
    headDiv.toggleClass("user story")
    headDiv.css("animation-name","head-min");
    $("#head_background").css("top","-55vh")
    for(let i = 0;i<=buttons.length;i++){
      $(buttons[i]).html(story1.getChoiceInfo("a"))
    }
  }

  let JamiePullThatUp = ()=>{
    $("#head_background").css("top","0vh")
  }

  //Type background part of story
  let typewriterConfig = {
    strings: back,
    autoStart:true,
    loop:false,
    delay: 150
  }
  const typewriter = new Typewriter(headText, typewriterConfig)
    .callFunction(JamiePullThatUp);

  typewriter.typeString(typeNext)
    .callFunction(callFunc);
  
  function clickedChoice(){
    JamiePullThatUp();
    headCont.css("top","0vh")
    headDiv.toggleClass("user story")
    headDiv.css("animation-name","head-max");

    let clickedButton = $(this).attr('id');
    console.log(clickedButton)
    if(clickedButton === "choice_a"){
      story1.addChose("a");
    }else{
      story1.addChose("b");
    }
    typeNext = story1.getStory();
    typewriter.deleteAll()
      .typeString(typeNext)
      .callFunction(callFunc)
      .start();

  };
  buttons.click(clickedChoice)
}
$(document).ready(onDocReady);