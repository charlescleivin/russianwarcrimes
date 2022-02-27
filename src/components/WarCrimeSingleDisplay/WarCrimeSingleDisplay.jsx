import React from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';

export default function WarCrimeSingleDisplay(
    {
     mode,
     thumbnail,
     fullImage,
     title,
     description,
     date,
     innitialSourcePlatform,
     parallelSources,
     testimonials,
     isFactCheckedByCredibleAgency,   
     howManyCredibleAgenciesChecked,
     credibleAgenciesThatChecked,
     location,
     warCrime,
    }
    ) {

    // mode can be either small, medium, or full


    // function that is invoked to check which icon should be displayed in the Chip
    const checkWhichChipIconToBeDisplayed = (iconType) => {
       
            if (iconType === "location") {
                return (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
            }
            if (iconType === "warCrime") {
                return (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
            }
            
    }

  
    return (
            <div className={`relative flex flex-col items-center justify-center gap-2`}>                   
                
                    <div className={`w-64 h-96 flex flex-col items-center justify-start overflow-hidden shadow-2xl rounded-lg`}>
                                   
                    {/*  thumbnail and upper space */}
                    <div style={{backgroundImage:`url(${thumbnail})`, backgroundSize:"cover"}} className={`w-full bg-red-500 h-full p-2 relative`}>

                          <div className={`absolute inset-0 w-full h-full bg-black opacity-30 z-0`}></div>

                      
                        {/* Chip Holder Wrapper */}

                        <div className={`z-20 relative w-full flex items-center justify-between `}>
                                 <Chip
                                  icon={checkWhichChipIconToBeDisplayed("warCrime")}     
                                  label={warCrime}                                  
                                  color="error"     
                                  />          

                                <IconButton>
                                     <Badge badgeContent={0} color="primary">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                        </svg>
                                     </Badge>
                                </IconButton>       
                        
                        </div>

                        <div className={`absolute z-20 w-full flex items-center justify-between bottom-0 left-0 p-2`}>                                
                                 
                            <Chip
                                  icon={checkWhichChipIconToBeDisplayed("location")}     
                                  label={location}
                                    
                                  color="error" 
                            />

                            <IconButton>
                                <Badge badgeContent={0} color="primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white p-1 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>                             
                                </Badge>
                            </IconButton>
                        
                        </div>
                
                    </div>

                    <div className={`bg-gray-700 text-gray-100 flex flex-col items-stretch justify-start p-2 relative w-full gap-2 h-full`}>
                        <div className={`p-2 flex items-start justify-center gap-2 flex-col`}>
                            <div>{title}</div>
                            <div>{description}</div>
                        </div>
                        <div className={`flex absolute bottom-0 h-16 w-full px-2 left-0 gap-2 items-center justify-around`}>
                            <IconButton>
                                <Badge badgeContent={2} color="primary">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </Badge>
                            </IconButton>                       
                            <Button color="primary" variant="contained">Read More</Button>
                      </div>
                    </div>


                      
                
                    </div>
            </div>
  )
}
