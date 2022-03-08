import React, {useContext, useRef, createContext, useEffect, useState} from 'react'
import Test1 from '../assets/images/test1.png'

const DisplayableDataContext = createContext()

export const useDisplayableDataContext = () => {
       return useContext(DisplayableDataContext)
}

export const DisplayableDataContextProvider = (props) => {

 const [fetchedArray, setfetchedArray] = useState([])


    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((answer)=>{ return answer.json()}) 
    //     .then((data)=>{ setfetchedArray(data)})   
    //     .catch((err)=>{console.log("Error:", err)})
    // }, [])
    
   
  let fetchedDataArray = [
      {          
          id: 1,
          "thumbnail": Test1,
          "title": "Massacre in the Philippines",
          "description":"Massive attack on Ukraine by the US military forces in the Philippines",
          "location":"Kiev",
          "warCrime": "Attacking Citizens",      
          visualEvidences:[
              {
                  typeOfEvidence: "image",
                  id: 1,
                  media:"",                  
                  description:'',
                  sources:'',
            },
            {
                typeOfEvidence: "video",
                id:2,
                media:"",                  
                description:'',
                sources:'',
            },
            {
                typeOfEvidence: "audio",
                id:3,
                media:"",                  
                description:'',
                sources:'',
            },
            {
                typeOfEvidence: "galleryOfImages",
                id:4,
                media:"",                  
                description:'',
                sources:'',
            },
            {
                typeOfEvidence: "text",
                id:5,
                media:"",                  
                description:'',
                sources:'',
            },
          ]   
    },
    {  
        id: 2,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        visualEvidences:[]
    }
    ,
    {     
        id: 3,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        visualEvidences:[]
    }
    ,
    {        
        id: 4,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        visualEvidences:[]
    }
    ,
    {   
        id: 5,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        visualEvidences:[]
    }
    ,
    {       
        id: 6,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        visualEvidences:[]
    }
      ] 

  const value={
    fetchedDataArray,
    fetchedArray, 
  }

    return(
        <DisplayableDataContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </DisplayableDataContext.Provider>
    )
}

