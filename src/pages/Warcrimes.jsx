import React, { useRef, useEffect, useState } from 'react'
import WarCrimeSingleDisplay from '../components/WarCrimeSingleDisplay/WarCrimeSingleDisplay'
import {useAPIContext} from '../contexts/APIContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function Warcrimes() {
  
  const params = useParams()
  const navigate = useNavigate()

  const {fetchedFromApiArray,
    setfetchedFromApiArray,   
    getWarcrimesRef,
    setAPIeffectArgs,
    LoadWarcrimesFromTheApi} = useAPIContext()

  const [fullViewSingleDisplayPanelArray, setfullViewSingleDisplayPanelArray] = useState([])
  const [isFullViewOpen, setisFullViewOpen] = useState(false)
  const openSingleDisplayTl = useRef(gsap.timeline({paused:true}))

  if(isFullViewOpen){
    document.body.style.overflow = 'hidden'
  }else{
    document.body.style.overflow = 'auto'
  }

    // make sure the scroll is returned to work if warcrimes is closed
    useEffect(() => {      
      return () => {
        document.body.style.overflow = 'auto'
      }
    }, [])
    

  // Ref for the whole big panel
  const fullViewSingleDisplayPanel = useRef(null)
 

  useEffect(() => {    
    
    setAPIeffectArgs({
      method: `getWarcrimes`,
      number: 8,
      skip: 0,
      functionToDoSomethingWithData: setfetchedFromApiArray
    })
 
    openSingleDisplayTl.current.to(fullViewSingleDisplayPanel.current, 0.4,{
      ease: "Sine.inOut",
      y:0
    })   
    if (params.id) {      
      openFullViewSingleDisplayPanel(params.id)    
    }
  }, [])


  
// function that enable the individual component to open the full view version of it
// this function is passed to the children so the button receives this as a functionality

 const openFullViewSingleDisplayPanel = async (id)=>{

  let temporaryArray = []
  // If already open, this function will also close the panel

  console.log('openFullViewSingleDisplayPane:Starting openFullViewSingleDisplayPanel function with id: ',id)
  console.log('openFullViewSingleDisplayPane:Checking if panel is already opened');
  console.log('openFullViewSingleDisplayPane:Status of the panel:', openSingleDisplayTl.current.progress());
  console.log('openFullViewSingleDisplayPane:Is panel already opened?', openSingleDisplayTl.current.progress() === 1);

    if (openSingleDisplayTl.current.progress() === 1) {      

      openSingleDisplayTl.current.reverse().then(()=>{
             setisFullViewOpen(false)
             console.log('openFullViewSingleDisplayPane:Panel is being closed now');
             temporaryArray = []
             setfullViewSingleDisplayPanelArray(temporaryArray)
             console.log('openFullViewSingleDisplayPane:Cleaning the fullViewSingleDisplayPanelArray making it an empty array');
             console.log(`openFullViewSingleDisplayPane:Changing the URL to the default one`);
             navigate(`/warcrimes/`, { replace: true })}
   )
 // If not open the code will open the panel after gathering the data necessary
    }
  // if the panel is not open, the code will gather the data necessary and then open the panel
  // I starts by trying to find the ID of the current element among the already in storage data
    else {      
      console.log(`openFullViewSingleDisplayPane:The panel is not open`);
      console.log(`openFullViewSingleDisplayPane:Trying to find the ID of the current element among the already in storage data`);
       // I filter the fetchedFromApiArray to find the element with the ID of the desired element
      temporaryArray = fetchedFromApiArray.filter((element)=>{
        return element.id === parseInt(id)
      })
  
    // After the filtering is done either temporaryArray is an empty arry or not    
    // If it's an empty array the element was not found hence need to be retrieved from the API

   if (temporaryArray.length === 0) {      
    console.log(`openFullViewSingleDisplayPane:The element was not found in the fullViewSingleDisplayPanelArray`)
    console.log(`openFullViewSingleDisplayPane:fetching the element from the API`)     
  
    await fetch("https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/id="+id)
    .then((answer)=>{
      console.log('openFullViewSingleDisplayPane:received a response from the API');
       return answer.json()
      })
    .then(data => {
      console.log(`openFullViewSingleDisplayPane:A data was fetched with success!`);
      console.log(`openFullViewSingleDisplayPane:data: `, data);
      // If data is not false, add the item to the state array, change url and open the panel
      if(data) {
      console.log(`openFullViewSingleDisplayPane:The data was not false`);
      console.log(`openFullViewSingleDisplayPane:Adding the data to the fullViewSingleDisplayPanelArray`) 
      temporaryArray = data
      setfullViewSingleDisplayPanelArray(temporaryArray)
      console.log(`openFullViewSingleDisplayPane:Changing the URL to the element respective one`);	
      navigate(`/warcrimes/${parseInt(id)}`, { replace: true })
      console.log(`openFullViewSingleDisplayPane:Opening the panel`);
      openSingleDisplayTl.current.play()
      setisFullViewOpen(true)

      }
    })
    .catch(error => {
      console.log(`openFullViewSingleDisplayPane:There was an error fetching the data`);	
      navigate('/warcrimes/')
      console.log(error)
    })
  }     
  // If the data is already in the state array, change url and open the panel
  // There is no need to fetch the data from the API  
  else {       
    console.log(`openFullViewSingleDisplayPane:The data was found in the fullViewSingleDisplayPanelArray`);
    setfullViewSingleDisplayPanelArray(temporaryArray)
    navigate(`/warcrimes/${parseInt(id)}`, { replace: true })
    console.log(`openFullViewSingleDisplayPane:Changing the URL to the element respective one`);
    console.log(`openFullViewSingleDisplayPane:Opening the panel`);
    openSingleDisplayTl.current.play()
    setisFullViewOpen(true)
  }   

    }  
   

  }

  return (
    <div className={`w-full max-w-screen-2xl py-8 flex items-center m-auto justify-center flex-col relative`}>   


          <div ref={fullViewSingleDisplayPanel} className={`fixed max-w-screen-2xl transform -translate-y-full -translate-x-1/2 top-0 left-1/2 w-full min-h-screen bg-black z-40`}>
            { 
              fullViewSingleDisplayPanelArray.map(              
                (element)=>{            
                  return(        
                      <WarCrimeSingleDisplay
                        key={element.id}
                        mode={"large"}
                        title={element.title}
                        date={element.date}
                        longDescription={element['description-group'] && element['description-group'][0] && element['description-group'][0][0][0] && element['description-group'][0][0][0]['long-description']}
                        shortDescription={element['description-group'] && element['description-group'][0] && element['description-group'][0][0][0] && element['description-group'][0][0][0]['short-description']}
                        id={element.id}     
                        location={element[`location-and-time-of-warcrime`] && element[`location-and-time-of-warcrime`][0] && element[`location-and-time-of-warcrime`][0][0] && element[`location-and-time-of-warcrime`][0][0][0]}  
                        evidences={element['evidence-group'] && element['evidence-group'][0] && element['evidence-group'][0][0]}         
                        buttonOnClickFunction={openFullViewSingleDisplayPanel}
                        />               
                  )
                }
              )
            }
          </div>

          <div className={`grid place-items-start grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>

  {/* skeleton logic   */}
  { fetchedFromApiArray.length >  0 ?                  
    <>  
                { 
                fetchedFromApiArray.map((element) => {
                  return(     
                      <WarCrimeSingleDisplay
                      key={element.id}
                      mode={"small"}
                      id={element.id}
                      thumbnail={element.thumbnail}
                      fullImage={element.fullImage}
                      title={element.title}
                      longDescription={element['description-group'] && element['description-group'][0] && element['description-group'][0][0][0] && element['description-group'][0][0][0]['long-description']}
                      shortDescription={element['description-group'] && element['description-group'][0] && element['description-group'][0][0][0] && element['description-group'][0][0][0]['short-description']}
                      date={element.date}
                      innitialSourcePlatform={element.innitialSourcePlatform}
                      parallelSources={element.parallelSources}
                      testimonials={element.testimonials}  
                      credibleAgenciesThatChecked={element.credibleAgenciesThatChecked}                    
                      location={element['location-and-time-of-warcrime']}          
                      warCrime={element.warCrime}                    
                      evidences={element['evidence-group'] && element['evidence-group'][0] && element['evidence-group'][0][0]}         
                      buttonOnClickFunction={openFullViewSingleDisplayPanel}
                      />                        
                  )
                })
                }  
    </>  :
    <>
 
      {
      [1,2,3,4,5,6,7,8].map((element)=>{
        return(
         <WarCrimeSingleDisplay
         key={element}
         mode={"skeleton"} 
         />
        )
      })
      }
   
    </>
}
  

         
   </div >       

    </div>
  )
}
