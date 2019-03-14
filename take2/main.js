let onDocReady = ()=>{
  const buttons = $(".option");
  const headText = document.getElementById('head_text');
  
  let chose = [];
  let story1 = new Story(chose);
  let backIndex = 0;
  //Type background part of story
  let typewriterConfig = {
    strings: back,
    autoStart:true,
    loop:false
  }
  let JamiePullThatUp = ()=>{
    $("#head_background").css("top","0vh")
  }
  const typewriter = new Typewriter(headText, typewriterConfig).callFunction(JamiePullThatUp);
  let typeNext = story1.getStory();
  let callFunc = ()=>{
    typeNext = story1.getStory()
    $("#head_background").css("top","-55vh")
    $("#head_cont").css("top","-27.5vh")
    $("#head").toggleClass("user story")
    for(let i = 0;i<=buttons.length;i++){
      $(buttons[i]).html(story1.getChoiceInfo("a"))
    }
    $("#head").css({
      animationName:"head-min"
    });
  }
  typewriter.typeString(typeNext).callFunction(callFunc);
}
$(document).ready(onDocReady);