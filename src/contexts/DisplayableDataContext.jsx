import React, {useContext, useRef, createContext, useEffect, useState} from 'react'
import Test1 from '../assets/images/test1.png'

const DisplayableDataContext = createContext()

export const useDisplayableDataContext = () => {
       return useContext(DisplayableDataContext)
}

export const DisplayableDataContextProvider = (props) => {

 const [fetchedFromApiArray, setfetchedFromApiArray] = useState([])

     useEffect(() => {
        fetch("https://api.russianwarcrimes.com/wp-json/wp/v2/posts")
        .then((answer)=>{ return answer.json()}) 
        .then((data)=>{ 
            console.log(data);
            setfetchedFromApiArray(data)})   
        .catch((err)=>{console.log("Error:", err)})
    }, [])
    
   
  let fetchedDataArray = [
      {          
          id: 1,
          "thumbnail": Test1,
          "title": "Massacre in the Philippines",
          "description":"Massive attack on Ukraine by the US military forces in the Philippines",
          "location":"Kiev",
          "warCrime": "Attacking Citizens",      
          credibleAgenciesThatChecked: [
              {
               nameOfAgency:"FBI",
               agencyLink:"https://www.fbi.gov/",              
               source:"www.google.com",
               dateOfConfirmation: "2022-january-01",
              },            
          ],
          evidences:[
              {
                  typeOfEvidence: "image",
                  id: 1,
                  media:"https://picsum.photos/id/1/500/500",                  
                  description:'',
                  sources:'',
                  
            },
            {
                typeOfEvidence: "video",
                id:2,
                media:"https://www.redditmedia.com/r/ukraine/comments/tau3tl/incoming_russian_convoy_got_smashed_at_eastern/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark&amp;showedits=false&amp;created=2022-03-10T14%3A29%3A04.483Z",         
                description:'Example Description',
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
                typeOfEvidence: "text",
                id:4,
                media:"",                  
                description:'',
                sources:'',
            },
            {
                typeOfEvidence: "image",
                id: 5,
                media:"https://picsum.photos/id/2/500/500",                  
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
        evidences:[
            {
                typeOfEvidence: "image",
                id: 1,
                media:"https://picsum.photos/id/5/500/500",                  
                description:'',
                sources:'',
          },
               {
                typeOfEvidence: "image",
                id: 2,
                media:"https://picsum.photos/id/6/500/500",                  
                description:'Example Description',
                sources:'Example Source',
          },
        ]
    }
    ,
    {     
        id: 3,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        evidences:[]
    }
    ,
    {        
        id: 4,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        evidences:[]
    }
    ,
    {   
        id: 5,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        evidences:[]
    }
    ,
    {       
        id: 6,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        evidences:[]
    },
    {       
        id: 7,
        "thumbnail": Test1,
        "title": "Massacre in the Philippines",
        "description":"Massive attack on Ukraine by the US military forces in the Philippines",
        "location":"Bilhorod-Dnistrovskyi",
        "warCrime":"Bombing Hospital",
        evidences:[]
    }
      ] 

  const value={
    fetchedDataArray,
    fetchedFromApiArray, 
  }

    return(
        <DisplayableDataContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </DisplayableDataContext.Provider>
    )
}

