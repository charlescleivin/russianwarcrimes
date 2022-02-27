import React, {useContext, createContext} from 'react'
import Test1 from '../assets/images/test1.png'

const DisplayableDataContext = createContext()

export const useDisplayableDataContext = () => {
       return useContext(DisplayableDataContext)
}

export const DisplayableDataContextProvider = (props) => {

  let fetchedDataArray = [
      {
          "mode": "small",
          "thumbnail": Test1,
          "title": "Massacre in the Philippines",
          "description":"Massive attack on Ukraine by the US military forces in the Philippines",
          "location":"Kiev",
          "warCrime": "Attacking Citizens"         
    },
    {
        "mode": "small",
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {
        "mode": "small",
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {
        "mode": "small",
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {
        "mode": "small",
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
    ,
    {
        "mode": "small",
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital"
    }
      ] 

  const value={
    fetchedDataArray
  }

    return(
        <DisplayableDataContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </DisplayableDataContext.Provider>
    )
}

