import { CssxObject } from "@react-cssx/core"

interface RewardStyleInterface {
  wrapper: CssxObject
  heading: CssxObject
  img: CssxObject
  p: CssxObject
  imgContainer:CssxObject
}

export const rewardStyle: RewardStyleInterface = {
  wrapper: {
    backgroundColor: "grey.dark",
    py: 40,
    "@mq":{
      desktop:{
        py:160
      }
    }
  },
  heading: {
    color: "indigo.light",
    textAlign: "center",
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 800,
    mb: 40,
    "@mq":{
      tablet:{
        fontSize:"48px",
        lineHeight: "56px",
        mb:80,
      }
      
    }
    
  },
  imgContainer:{
    pb:"3rem",
    "@mq":{
      desktop:{
        pb:"0"
      }
    }
  },
  img: {
    mx: "auto",
  },
  
  p: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: "32px",
    fontWeight: 600,
    color: "white",
    mt: "1.75rem",
    "@mq":{
    tablet:{
        mt:60
      }
    }  
  },
}
