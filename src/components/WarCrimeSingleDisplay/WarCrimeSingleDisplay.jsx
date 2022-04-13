import React from 'react'
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import gsap from 'gsap'
import {useAPIContext} from '../../contexts/APIContext'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import { useNavigate } from 'react-router-dom';



////////////// Ui Related /////////////////

const SingleDisplayMenuOption = ({optionText, optionIcon, onClick, mode}) =>{
    return (
     <>
     {/* default mode */}
        <>
                {
                mode === 'default' || !mode &&
                        <div onClick={()=>{onClick()}} className={``}>
                            <div className={`flex flex-col cursor-pointer hover:bg-gray-500 transition-all  ease-in-out duration-150 gap-2 items-center justify-center w-full h-24 p-2 bg-gray-600 shadow-lg rounded-lg`}>
                            <div className={`flex  items-center justify-center w-full`}>
                                {optionIcon}
                            </div>
                            <div className={`w-full h-auto flex items-center text-center justify-center text-base font-thin text-gray-200`}>{optionText}
                            </div>
                            </div>
                        </div>
                }
        </>
    {/* horizontal mode */}
        <>
                {
                mode === 'horizontal' &&
                        <div onClick={()=>{onClick()}} className={``}>
                            <div className={`flex flex-col cursor-pointer hover:bg-gray-500 transition-all ease-in-out duration-150 items-center  justify-center h-full lg:h-20 lg:w-20 w-full p-4 bg-gray-600 shadow-lg rounded-lg`}>
                                <div className={`flex  items-center justify-center w-full`}>
                                    {optionIcon}
                                </div>
                                <div className={`w-full h-auto flex items-center text-center justify-center text-sm font-thin text-gray-200`}>{optionText}
                                </div>
                            </div>
                        </div>
                }
        </>
     </>
    )
}

const SingleDisplayMenu = ({closingFunction, warcrimeId, mode}) => {

    const navigate = useNavigate()

    const arrayOfSingleDisplayMenuOptions = useRef([
        {
            id:1,
            optionText: 'Testimonials',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        },        
        
        {
            id:2,
            optionText: 'Credibility',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
          </svg>

        },{
            id:3,
            optionText: 'Coverage',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        },
        {
            id:4,
            optionText: 'Document',
            onClick: ()=>{          
                navigate(`/warcrimes/document/${warcrimeId}`)
                window.scrollTo(0, 0)
            },           
            optionIcon:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        }, {
            id:5,
            optionText: 'Download',
            optionIcon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>,
        },{
            id:6,
            optionText: "Report",
            optionIcon:<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
        }
    ]);

    return (

   <>

        {/*default mode */}
        <>
                {
                mode === 'default' || !mode &&
                        <div className={`w-64 h-full pt-14 bg-gray-900`}>
                            <div onClick={()=>{closingFunction()}} className={`absolute cursor-pointer top-2 right-2`}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                
                            <div className={`grid w-full grid-cols-2 gap-2 p-2 justify-items-stretch`}>
                                    {
                                    arrayOfSingleDisplayMenuOptions.current.map((element)=>{
                                        return (
                                            <SingleDisplayMenuOption
                                            onClick={element.onClick}     
                                            warcrimeId = {warcrimeId}                       
                                            key={element.id}
                                            optionText={element.optionText}
                                            optionIcon={element.optionIcon} />
                                        )
                                    })
                
                                    }
                            </div>
                
                        </div>
                }
        </>
        {/* horizontal mode */}
        <>
                {
                mode === 'horizontal' &&
                <div className={`w-full h-auto bg-gray-900`}>            
                
                            <div className={`w-full grid lg:grid-cols-6 grid-cols-3 place-items-stretch gap-2`}>
                                    {
                                    arrayOfSingleDisplayMenuOptions.current.map((element)=>{
                                        return (
                                            <SingleDisplayMenuOption
                                            mode={mode}
                                            onClick={element.onClick}     
                                            warcrimeId = {warcrimeId}                       
                                            key={element.id}
                                            optionText={element.optionText}
                                            optionIcon={element.optionIcon} />
                                        )
                                    })
                
                                    }
                            </div>
                
                        </div>
                }
        </>

   </>
  
    )
}

const SlideArrowElement = ({children, direction}) =>{
    return (
        <div className={`absolute cursor-pointer top-1/2 transform -translate-y-1/2 ${direction === 'right' ? 'left-4' : 'right-4' } z-20 opacity-70 hover:opacity-100 transition-opacity duration-300 ease-in-out`}>
            {children ? children :
            <>
                {direction === 'right' && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                      </svg>}
                {direction === 'left' && <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>}

              {direction !== 'right' && direction !== 'left' && "Change direction prop on this component to either 'right' or 'left'"}
            </>
            }
        </div>
    )
}

const EvidenceSlide = ({
    typeOfEvidence,
    id,
    description,
    uploadedFileId,
    numberOfEvidences,
    ifVideoOrAudioLink,
    sourceOrigin,
    customSourceOrigin,
})=>{
   
    
    const [isImageLoading, setisImageLoading] = useState(true)
    const [isVideoLoading, setisVideoLoading] = useState(true)

    return(
 <div style={{height:"calc(100vh - 2.5rem)"}} className={`relative w-full bg-gray-800`}>

       {/* overlay */}
       <div className={`w-full absolute  min-h-screen inset-0 bg-black opacity-40 z-10`}>
       </div>



    { typeOfEvidence === "image" &&
    <>
            {
            isImageLoading &&
                <div  className={`flex h-full w-full items-center justify-center`}>
                    <svg role="status" className="mr-2 w-16 h-16 text-white animate-spin fill-blue-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
            }
         <img  onLoad={()=>{setisImageLoading(false)}} className={`absolute w-full h-full inset-0 z-0`} src={'imageURL'} alt=""/>
    </>
    }
     <div className={`absolute flex flex-col items-end justify-center top-16 right-5 z-30`}>
            
          <div className={`p-2 gap-2 bg-gray-800 bg-opacity-80 rounded-lg flex flex-col items-center justify-center`}>      
               <span className={`text-gray-100 font-sans text-sm font-light`}>{id} of {numberOfEvidences}</span>          
          </div>
     </div>

     <div className={`absolute flex flex-col items-end justify-center bottom-5 right-5 z-40`}>
      <div>
            <span className={`text-gray-100 font-sans text-base font-light`}>{description}</span>            
      </div>
     </div>


       {
       typeOfEvidence === "video" &&
        <>
           {
            isVideoLoading &&
                <div className={`flex  w-full  items-center justify-center`}>
                    <svg role="status" className="mr-2 w-16 h-16 text-white animate-spin fill-blue-800" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
            }
            <div className={`absolute text-white top-32 left-0 min-h-screen w-full z-20`}>
                  <iframe onLoad={()=>{setisVideoLoading(true)}} id="reddit-embed" src={ifVideoOrAudioLink} sandbox="allow-scripts allow-same-origin allow-popups"
                   style={{border:"none"}}
                   height={409} width={"100%"} scrolling="no"></iframe>
             </div>
        </>
        }

        {
        typeOfEvidence === "audio" &&
       <div>
        b
        </div>
        }

        {
        typeOfEvidence === "text" &&
       <div>
        c
        </div>
        }

     </div>
   )

}

const TextTitle = ({children}) => {
    return (
        <div className={`border-b pb-2`}>
            <span className={`text-lg font-bold`}>{children}</span>
        </div>
    )
}

const Text = ({children}) => {
    return (
        <div className={``}>
            <span className={`text-base font-extralight`}>{children}</span>
        </div>
    )
}

const LocationResolver = ({location}) => {

    const [solvedLocation, setsolvedLocation] = useState(null)

    useEffect(() => {
        if(location[`city`].length >= 1){
            setsolvedLocation(location['city'].map((city, index)=>{
                return (
                    <span>{city}{index+1===location['city'].length ? '.' : ','} </span>
                )
            }))
        }
        else {
            if(location[`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]){
                setsolvedLocation(location[`if-no-option-satisfy-say-which-option-should-be-highlighted-here`])
            } else {
                setsolvedLocation('Unknown')
            }           
        }       
  

        // <Text>{location[`if-more-than-1-city-was-selected-which-one-should-be-displayed`]}</Text>   
        // <Text>{location[`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]}</Text>  
        // <Text>{location[`city`]}</Text>      
    }, [])
    
    
    return (
        <span>{solvedLocation}</span>
    )
}


///////////////////////////////

export default function WarCrimeSingleDisplay(
    {
     mode,
     id,
     title,
     longDescription,
     shortDescription,
     date,
     testimonials,
     credibleAgenciesThatChecked,
     location,
     warCrime,
     evidences,
     buttonOnClickFunction
    }
    ) {

    /// Build the array of images to be displayed in the slides.
    const [evidencesOrganizedArray, setevidencesOrganizedsArray] = useState([])
    const [thumbnailImage, setthumbnailImage] = useState('https://images.unsplash.com/photo-1623018035782-b269248df916?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')

    const {
        setfetchedFromApiArray,   
        setAPIeffectArgs,
        getImageURLByIdRef,
       } = useAPIContext()
 

        // evidence logs
        useEffect(() => {   

            if (evidences){
                let filteredImageEvidences = evidences.filter((evidence)=>{
                    return evidence['type-of-evidence'] === 'image'
                })
                let filteredVideoEvidences = evidences.filter((evidence)=>{
                    return evidence['type-of-evidence'] === 'video'
                })
                let filteredSoundEvidences = evidences.filter((evidence)=>{
                    return evidence['type-of-evidence'] === 'sound'
                })
                let filteredPDFEvidences = evidences.filter((evidence)=>{
                    return evidence['type-of-evidence'] === 'pdf'
                })

                let imageURLArray = []
                let i = 0

                const getImageURLs = (data)=>{
                    if (i === 1){
                        setthumbnailImage(imageURLArray[0])
                    }                
                    imageURLArray.push(data)
                    i++
                }

                filteredImageEvidences.map((image)=>{     
                    getImageURLByIdRef.current(image['uploaded-evidence'], getImageURLs)                
                })

                let filteredEvidences=[                   
                    ...filteredVideoEvidences,
                    ...filteredImageEvidences,
                    ...filteredSoundEvidences,
                    ...filteredPDFEvidences
                ]
           }

           


        }, [evidences])
        
        useEffect(() => {
          console.log('thumbnailImage:', thumbnailImage)
        }, [thumbnailImage])
        

    const singleDisplayInternalMenuWrapper = useRef(null)
    const openOrCloseSingleDisplayInternalMenuTl = gsap.timeline({paused: true});

    const openOrCloseInternalMenu = () => {
        if(openOrCloseSingleDisplayInternalMenuTl.progress() === 1)  {
            openOrCloseSingleDisplayInternalMenuTl.reverse();
        } else {
            openOrCloseSingleDisplayInternalMenuTl.play();
        }

    }


// Useffect that handle closing or opening the internal menu
    useEffect(() => {
        openOrCloseSingleDisplayInternalMenuTl.to(singleDisplayInternalMenuWrapper.current, 0.3, {
        x: 0,
        ease: 'power3.inOut'
        })
   }, [openOrCloseSingleDisplayInternalMenuTl])


    // function that is invoked to check which icon should be displayed in the Chip
   const checkWhichChipIconToBeDisplayed = useRef(
    (iconType) => {        
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
            if (iconType === "confirmed") {
                return (
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )
            }
            if (iconType === "warning") {
                return (
            <div className={`relative`}>
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-ping" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                   <div className={`absolute inset-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                         </svg>
                   </div>
            </div>
                )
            }



    }
   )

   const checkWhichLocationToBeDisplayed = useRef(
       (location)=>{
         
        let toBeDisplayed = null

        if (location[0] && location[0][0][0][`city`].length > 1) {
            // this means the user selected more than 1 city.
            if (location[0][0][0][`if-more-than-1-city-was-selected-which-one-should-be-displayed`] === "Unkown") {  

                if (location[0][0][0][`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]) {
                     toBeDisplayed = location[0][0][0][`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]
                } else {
                     toBeDisplayed = location[0][0][0][`city`][0] + '*'
                }
              

            } else {
                toBeDisplayed = location[0][0][0][`if-more-than-1-city-was-selected-which-one-should-be-displayed`]
            }
            
        } else {
            if (location[0][0][0][`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]) {
                toBeDisplayed = location[0][0][0][`if-no-option-satisfy-say-which-option-should-be-highlighted-here`]
           } else {
                toBeDisplayed = toBeDisplayed = location[0] && location[0][0][0][`city`][0]
           }
  
        }  
        return toBeDisplayed
       }
   )
   

    return (

             <>

                {   
                mode === "skeleton" &&
                <div className={`relative  overflow-hidden flex flex-col items-center justify-center gap-2`}>
          

                        <div className={`w-64 h-96 flex flex-col items-center justify-start overflow-hidden shadow-2xl rounded-lg`}>

                        {/*  thumbnail and upper space */}
                        <div className={`w-full bg-gray-500 h-full p-2 relative`}>

                              <div className={`absolute inset-0 w-full h-full bg-black opacity-30 z-0`}></div>


                            {/* Chip Holder Wrapper */}

                            <div className={`z-20 relative w-full flex items-center justify-between `}>
                                <div className={`h-8 w-8 animate-pulse rounded-full bg-gray-500`}></div>

                                 

                            </div>

                            <div className={`absolute z-20 w-full flex items-center justify-between bottom-0 left-0 p-2`}>
                             
                            <div className={`h-8 w-8 animate-pulse rounded-full bg-gray-500`}></div>

                            </div>

                        </div>

                        <div className={`bg-gray-700 text-gray-100 flex flex-col items-stretch justify-start p-2 relative w-full gap-2 h-full`}>
                            <div className={`p-2 flex items-start justify-center gap-2 flex-col`}>
                                   <div className={`h-2 w-full animate-pulse rounded-lg bg-gray-500`}></div>
                                   <div className={`h-2 w-full animate-pulse rounded-lg bg-gray-500`}></div>
                                   <div className={`h-2 w-full animate-pulse rounded-lg bg-gray-500`}></div>
                                   <div className={`h-2 w-1/2  animate-pulse rounded-lg bg-gray-500`}></div>
                            </div>
                            <div className={`flex absolute bottom-0 h-16 w-full px-2 left-0 gap-2 items-center justify-around`}>
                   

                          </div>
                        </div>




                        </div>
                </div>
                }

                { mode === "small" &&
                  <div className={`relative overflow-hidden flex flex-col items-center justify-center gap-2`}>

                        <div ref={singleDisplayInternalMenuWrapper} className={`transform translate-x-full  absolute inset-0 z-40`}>
                                <SingleDisplayMenu warcrimeId={id} closingFunction={openOrCloseInternalMenu} />
                        </div>

                        <div className={`w-64 min-h-[24rem] h-auto flex flex-col items-center justify-start overflow-hidden shadow-2xl rounded-lg`}>

                        {/*  thumbnail and upper space */}
                        <div style={{backgroundImage:`url(${thumbnailImage})`, backgroundSize:"cover"}} className={`w-full bg-red-500 h-52 p-2 relative`}>

                              <div className={`absolute inset-0 w-full h-full bg-black opacity-30 z-0`}></div>


                            {/* Chip Holder Wrapper */}

                            <div className={`z-20 relative w-full flex items-center justify-between `}>
                                    <div className={`cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-150 ease-in-out`}>
                                         <Chip
                                          className={`pointer-events-none`}
                                          icon={checkWhichChipIconToBeDisplayed.current("warCrime")}
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
                                        icon={checkWhichChipIconToBeDisplayed.current("location")}
                                        label={checkWhichLocationToBeDisplayed.current(location)}
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
                      
                        <div className={`bg-gray-700 text-gray-100 flex flex-col items-stretch justify-start p-2 pb-16 rounded-b-lg relative w-full gap-2 h-full`}>
                            <div className={`p-2 flex items-start justify-center gap-2 flex-col`}>    
                                <div className={`font-ligh text-gray-100 text-base`}>{title}</div> 
                                <div className={`w-6 h-[0.05rem] bg-gray-400`}></div>                           
                                <div className={`font-light text-base`}>{shortDescription}</div>                   
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
                <div style={{height:"calc(100vh - 2.5rem)"}} className={`grid grid-cols-1 justify-items-center lg:grid-cols-2 mt-10 overflow-y-scroll lg:overflow-auto w-full bg-black-800 relative`}>
                
                   {/* absolute X button */}
                    <div onClick={()=>{buttonOnClickFunction(id)}} className={`fixed lg:absolute bg-gray-700 rounded-full h-12 w-12 z-40 bottom-5 lg:top-5 right-5`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 cursor-pointer text-gray-200 hover:text-white transition-color duration-150 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <div style={{height:"calc(100vh - 2.5rem)"}} className={`relative overflow-y-auto bg-gray-800 w-full`}>
                        <div className={`absolute top-16 left-5 z-40 text-white`}>

                        {
                            credibleAgenciesThatChecked ?

                                        <div onClick={()=>{}} className={`transition-opacity duration-150 ease-in-out cursor-pointer opacity-90 hover:opacity-100`}>
                                            <Chip
                                                        className={`pointer-events-none`}
                                                        icon={checkWhichChipIconToBeDisplayed.current("confirmed")}
                                                        label={"Warcrime Confirmed"}
                                                        color="success"
                                            />
                                        </div>
                            :
                                        <Chip
                                        className={`pointer-events-none`}
                                        icon={checkWhichChipIconToBeDisplayed.current("warning")}
                                        label={"Under Investigation"}
                                        color="warning"
                                        />

                        }
                        </div>
                        <Carousel
                        swiping={true}
                        swipeOn={0.05}
                        show={1}
                        rightArrow={<SlideArrowElement direction={'right'}/>}
                        leftArrow={<SlideArrowElement direction={'left'}/>}
                        >
                        {                        
                        evidences !== undefined && evidences.map((element, index) => {
                            return (
                                     <EvidenceSlide
                                     key={element}
                                     id={index+1}                                 
                                     numberOfEvidences={evidences.length}
                                     description={element['evidence-description']}
                                     uploadedFileId={element['uploaded-evidence']}
                                     ifVideoOrAudioLink={element['if-video-or-audio-link-for-it-here']}
                                     sourceOrigin={element['how-was-this-evidence-acquired']}   
                                     customSourceOrigin={element['if-other-was-selected-how-we-acquired-it']}                                  
                                     typeOfEvidence={element['type-of-evidence']}                                   
                                     />                           
                                )

                        })
                        }
                        </Carousel>
                    </div>

                    <div style={{height:"calc(100vh - 2.5rem)"}} className={`w-full text-gray-200 overflow-y-scroll p-8 py-16`}>
                        <div className={`grid grid-cols-1 place-items-stretch gap-2`}>
                                    <div className={`pb-4`}><SingleDisplayMenu warcrimeId={id} mode='horizontal' />   </div>
                                    <TextTitle>Title</TextTitle>   
                                    <Text>{title}</Text>     
                                    <TextTitle>Date</TextTitle>   
                                    <Text>{date}</Text>     
                                    <TextTitle>Description</TextTitle>
                                    <Text>{longDescription}</Text>        
                                    <TextTitle>Location</TextTitle>
                                    <Text><LocationResolver location={location}/></Text>                    
                              
                                            
                               
                                    <p>{credibleAgenciesThatChecked && "checked"}</p>

                        </div> 
                   </div>


                </div>
                }

             </>

  )
}
