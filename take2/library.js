//Story
const choices = abc123;
const back = ["Welcome.","You are playing adsa askjd hmik"];
//Story class
class Story {
  constructor(chose) {
    //Choices that the user has made.
    this.chose = chose;
    //Deep clone of choices(story)
    this.x = JSON.parse(JSON.stringify(choices));
    //First choice is at 0
    this.i = -1;
  }

  //Return part of story you're on
  getStory(){
    if(this.chose.length > 0){
      this.x = this.x.options[this.chose[this.i]];
    }else{
      this.x = this.x;
    }
    this.i+=1;
    return this.x.msg;
  }

  //Return available choice.
  getChoiceInfo(choiceInfo){
    return this.x.options[choiceInfo].info;
  }
  //Add user choice
  addChose(a){
    this.chose[this.chose.length] = a;
  }
}
//Cleaner look to build choice string
let buildOptions = (a,b)=>{
  return "A)"+a+"<br>"+"B)"+b;
}