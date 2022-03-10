import React, { useRef, useEffect, useState } from 'react'
import WarCrimeSingleDisplay from '../components/WarCrimeSingleDisplay/WarCrimeSingleDisplay'
import {useDisplayableDataContext} from '../contexts/DisplayableDataContext'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'

export default function Warcrimes() {
  
  const params = useParams()
  const navigate = useNavigate()

  const {fetchedDataArray} = useDisplayableDataContext()

  const [fullViewSingleDisplayPanelArray, setfullViewSingleDisplayPanelArray] = useState([])

  const openSingleDisplayTl = useRef(gsap.timeline({paused:true}))

  const fullViewSingleDisplayPanel = useRef(null)

  useEffect(() => {
    openSingleDisplayTl.current.to(fullViewSingleDisplayPanel.current, 0.4,{
      ease: "Sine.inOut",
      y:0
    })

    if (fetchedDataArray.length > 0) {
      if (params.id) {      
        openFullViewSingleDisplayPanel(params.id)    

      }
    }
    
  }, [])
  

  const openFullViewSingleDisplayPanel = (id)=>{
    
    if (openSingleDisplayTl.current.progress() === 1) {
      openSingleDisplayTl.current.reverse().then(()=>{
             setfullViewSingleDisplayPanelArray([])
             navigate(`/warcrimes/`, { replace: true })}
   ) 
 
    } else {
      
      let arrayToBeDisplayed = fetchedDataArray.filter((element)=>{
        return element.id === parseInt(id)
      })   

      if (arrayToBeDisplayed.length === 0) {       
        navigate('/warcrimes/')      
      }
      else {
        setfullViewSingleDisplayPanelArray(arrayToBeDisplayed)
        navigate(`/warcrimes/${id}`, { replace: true })
        openSingleDisplayTl.current.play()
      }
      

    }
   
  }

  return (
    <div className={`w-full relative`}>
 
          <div ref={fullViewSingleDisplayPanel} className={`fixed max-w-screen-2xl transform -translate-y-full -translate-x-1/2 top-0 left-1/2 w-full min-h-screen bg-black z-40`}>
            { 
              fullViewSingleDisplayPanelArray.map(
                (element)=>{
                  return(
                    <WarCrimeSingleDisplay
                    key={element.id}
                    mode={"large"}
                    id={element.id}
                    thumbnail={element.thumbnail}
                    fullImage={element.fullImage}
                    title={element.title}
                    description={element.description}
                    date={element.date}
                    innitialSourcePlatform={element.innitialSourcePlatform}
                    parallelSources={element.parallelSources}
                    testimonials={element.testimonials}
                    isFactCheckedByCredibleAgency={element.isFactCheckedByCredibleAgency}   
                    howManyCredibleAgenciesChecked={element.howManyCredibleAgenciesChecked}
                    credibleAgenciesThatChecked={element.credibleAgenciesThatChecked}                    
                    location={element.location}
                    warCrime={element.warCrime}                    
                    evidences={element.evidences}
                    buttonOnClickFunction={openFullViewSingleDisplayPanel}
                    />
                  )
                }
              )
            }
          </div>

      

        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                { 
                fetchedDataArray.map((element, index) => {
                  return(
                  <WarCrimeSingleDisplay
                  key={element.id}
                  mode={"small"}
                  id={element.id}
                  thumbnail={element.thumbnail}
                  fullImage={element.fullImage}
                  title={element.title}
                  description={element.description}
                  date={element.date}
                  innitialSourcePlatform={element.innitialSourcePlatform}
                  parallelSources={element.parallelSources}
                  testimonials={element.testimonials}
                  isFactCheckedByCredibleAgency={element.isFactCheckedByCredibleAgency}   
                  howManyCredibleAgenciesChecked={element.howManyCredibleAgenciesChecked}
                  credibleAgenciesThatChecked={element.credibleAgenciesThatChecked}                    
                  location={element.location}          
                  warCrime={element.warCrime}                    
                  evidences={element.evidences}
                  buttonOnClickFunction={openFullViewSingleDisplayPanel}
                  />
                  )
                })
                }        
        </div >       
    </div>
  )
}
