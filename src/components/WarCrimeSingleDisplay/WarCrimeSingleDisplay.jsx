import React from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import gsap from 'gsap'
import { useRef } from 'react';
import { useEffect } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';

const SingleDisplayMenuOption = ({optionText, optionIcon}) =>{
    return (
        <div className={``}>
            <div className={`flex flex-col cursor-pointer hover:bg-gray-500 transition-all  ease-in-out duration-150 gap-2 items-center justify-center w-full h-24 p-2 bg-gray-600 shadow-lg rounded-lg`}>
              <div className={`flex  items-center justify-center w-full`}>
                  {optionIcon}              
              </div>
              <div className={`w-full h-auto flex items-center text-center justify-center text-base font-thin text-gray-200`}>{optionText}
              </div>
            </div>          
        </div>
    )
}

const SlideArrowElement = ({children, direction}) =>{
    return (
        <div className={`absolute cursor-pointer top-1/2 transform -translate-y-1/2 ${direction === 'right' ? 'left-4' : 'right-4' } z-20 opacity-50 hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
            {children ? children :
            <>
                {direction === 'right' && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                      </svg>}
                {direction === 'left' && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}

              {direction !== 'right' && direction !== 'left' && "Change direction prop on this component to either 'right' or 'left'"}
            </>
            }
        </div>
    )
}

const Slide = ({children})=>{
    return(
     <div className={`min-h-screen pt-10 pointer-events-none w-full h-full bg-red-500`}>
        {children}
     </div>
    )

}

const SingleDisplayMenu = ({closingFunction}) => {

    const arrayOfSingleDisplayMenuOptions = useRef([
        {
            optionText: 'Known Info',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        },
        {
            optionText: 'Sources',
            optionIcon:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        },
        {
            optionText: 'Credibility',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
          </svg>
            
        },{
            optionText: 'Coverage',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        },{
            optionText: 'Download',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>,
        },{
            optionText: "Report",
            optionIcon:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
        }
    ]);

    return (
        <div className={`w-64 h-96 pt-14 bg-gray-900`}>
            <div onClick={()=>{closingFunction()}} className={`absolute cursor-pointer top-2 right-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div className={`grid w-full grid-cols-2 gap-2 p-2 justify-items-stretch`}>
                    { 
                    arrayOfSingleDisplayMenuOptions.current.map((element, index)=>{
                        return (
                            <SingleDisplayMenuOption
                             optionText={element.optionText}
                             optionIcon={element.optionIcon} />
                        )
                    })
        
                    }
            </div> 

        </div>
    )
}

export default function WarCrimeSingleDisplay(
    {   
     mode,
     id,
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
     visualEvidences,
     buttonOnClickFunction
    }
    ) {

  
 

    const singleDisplayInternalMenuWrapper = useRef(null)

    const openOrCloseInternalMenu = () => {
        if(openOrCloseSingleDisplayInternalMenuTl.progress() === 1)  {
            openOrCloseSingleDisplayInternalMenuTl.reverse();
        } else {
            openOrCloseSingleDisplayInternalMenuTl.play();
        }

    }

    const openOrCloseSingleDisplayInternalMenuTl = gsap.timeline({paused: true});

    useEffect(() => {


        openOrCloseSingleDisplayInternalMenuTl.to(singleDisplayInternalMenuWrapper.current, 0.3, {            
            x: 0,
            ease: 'sine.out'
        })
  
    }, [openOrCloseSingleDisplayInternalMenuTl])
    

    // function that is invoked to check which icon should be displayed in the Chip
    const checkWhichChipIconToBeDisplayed = (iconType) => {
       
            if (iconType === "location") {
                return (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
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
       
             <>
                { mode === "small" && 
                  <div className={`relative overflow-hidden flex flex-col items-center justify-center gap-2`}>  
    
               <div ref={singleDisplayInternalMenuWrapper} className={`transform translate-x-full  absolute inset-0 z-40`}>
                    <SingleDisplayMenu closingFunction={openOrCloseInternalMenu} />     
               </div>    
    
                        <div className={`w-64 h-96 flex flex-col items-center justify-start overflow-hidden shadow-2xl rounded-lg`}>
                                       
                        {/*  thumbnail and upper space */}
                        <div style={{backgroundImage:`url(${thumbnail})`, backgroundSize:"cover"}} className={`w-full bg-red-500 h-full p-2 relative`}>
    
                              <div className={`absolute inset-0 w-full h-full bg-black opacity-30 z-0`}></div>
    
                          
                            {/* Chip Holder Wrapper */}
    
                            <div className={`z-20 relative w-full flex items-center justify-between `}>
                                    <div className={`cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in-out`}>
                                         <Chip
                                          className={`pointer-events-none`}
                                          icon={checkWhichChipIconToBeDisplayed("warCrime")}     
                                          label={warCrime}                                  
                                          color="error"     
                                          />  
                                    </div>        
    
                                    <IconButton onClick={()=>{openOrCloseInternalMenu()}}>
                                         <Badge badgeContent={0} color="primary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                            </svg>
                                         </Badge>
                                    </IconButton>       
                            
                            </div>
    
                            <div className={`absolute z-20 w-full flex items-center justify-between bottom-0 left-0 p-2`}>                                
                                <div className={`cursor-pointer  relative opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in-out`}>     
                                    <Chip
                                        className={`pointer-events-none`}
                                        icon={checkWhichChipIconToBeDisplayed("location")}     
                                        label={location}                                        
                                        color="error" 
                                    />
                                </div>
    
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
                                <Button onClick={()=>{buttonOnClickFunction(id)}} color="primary" variant="contained">See More</Button>
                          </div>
                        </div>
    
    
                          
                    
                        </div>
                </div>
                }

                { mode === "large" && 
                <div className={`min-h-screen w-full bg-yellow-800 flex items-stretch justify-center flex-col lg:flex-row relative`}>
                   {/* absolute X button */}
                    <div onClick={()=>{buttonOnClickFunction(id)}} className={`absolute top-5 right-5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="mt-10 h-12 w-12 cursor-pointer text-gray-200 hover:text-white transition-color duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>                     
                    </div>
                    <div className={`relative bg-gray-800 lg:w-1/2`}>
                        <Carousel
                        swiping={true}
                        swipeOn={0.1}
                        show={1}
                        dynamic={true}
                        rightArrow={<SlideArrowElement direction={'right'}/>}
                        leftArrow={<SlideArrowElement direction={'left'}/>}
                        >
                        {
                        visualEvidences &&
                        visualEvidences.map((visualEvidence, index) => {
                            return (
                                <Slide
                                 key={visualEvidence.id}>
                                a
                                </Slide> 
                                )                                

                        })
                        }  
                        
                      

                        </Carousel>                    
                    </div>
                    <div className={`pt-10 lg:w-1/2`}>
                        <p>{id}</p>
                        <p>{title}</p>
                        <p>{description}</p>
                   </div>
                  
                     
                </div>
                }

             </>
      
  )
}
