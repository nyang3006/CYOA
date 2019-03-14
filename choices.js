const abc123 = {
  msg: "1. Welcome. Chose your options",
  options:{
    a:{
      msg:"2. You chose A. Choose again",
      info:"Choose option A 1",
      options:{
        a:{
          msg:"3. Again. The end.",
          info:"Choose option A 2",
        },
        b:{
          msg:"3The end.",
          info:"Choose option B 2",
        }
      }
    },
    b:{
      msg:"2. you chose B. Choose again",
      info:"Choose option B 1",
      options:{
        a:{
          msg:"3. The end.",
          info:"Choose option A 2",
        },
        b:{
          msg:"3. Again!, The end.",
          info:"Choose option B 3",
        }
      }
    }
  }
}
