const abc123 = {
  msg: "1Welcome. Chose your options",
  options:{
    a:{
      msg:"2You chose A. Chose again",
      info:"Chose option A 1",
      options:{
        a:{
          msg:"3Again. The end.",
          info:"Chose option A 2",
        },
        b:{
          msg:"3The end.",
          info:"Chose option B 2",
        }
      }
    },
    b:{
      msg:"2you chose B. Chose again",
      info:"Chose option B 1",
      options:{
        a:{
          msg:"3aaThe end.",
          info:"Chose option A 2",
        },
        b:{
          msg:"3Again!, The end.",
          info:"Chose option B 3",
        }
      }
    }
  }
}