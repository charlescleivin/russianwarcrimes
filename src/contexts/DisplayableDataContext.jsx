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
          "warCrime": "Attacking Citizens"         
    },
    {  
        id: 2,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {     
        id: 3,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {        
        id: 4,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {   
        id: 5,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {       
        id: 6,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
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

