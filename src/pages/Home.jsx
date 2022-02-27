import React from 'react'
import WarCrimeSingleDisplay from '../components/WarCrimeSingleDisplay/WarCrimeSingleDisplay'
import {useDisplayableDataContext} from '../contexts/DisplayableDataContext'

export default function Home() {

  const {fetchedDataArray} = useDisplayableDataContext()

  return (
    <div className={`w-full`}>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                { 
                fetchedDataArray.map((element, index) => {
                  return(
                  <WarCrimeSingleDisplay
                  mode={element.mode}
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
                  />
                  )
                })
                }        
        </div >       
    </div>
  )
}
