import React, {useContext, useRef, createContext, useEffect, useState} from 'react'
import Test1 from '../assets/images/test1.png'

const APIContext = createContext() 

export const useAPIContext = () => {
       return useContext(APIContext)
}

export const APIContextProvider = (props) => { 

const [fetchedFromApiArray, setfetchedFromApiArray] = useState([])
const [isFirstTimeLoaded, setisFirstTimeLoaded] = useState(true)
const [APIeffectArgs, setAPIeffectArgs] = useState({})

//API//
//////////////////////////////////////////////
 // API end point = https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/image=$id
 // Returns a image URL based on the ID of said upload
 const getImageURLByIdRef = useRef(
        async (id,functionToDoSomethingWithData,callback) => {
        console.log('Attempting to find image URL with Id:'+ id)
        fetch('https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/image='+id)
        .then(response => response.json())
        .then(data => {
            console.log('Url Retrieved from id:'+ id,'URL:'+data)
            if (functionToDoSomethingWithData) {
                functionToDoSomethingWithData(data)            
            } 
            if (callback) {
                callback()
            }        
            if(!functionToDoSomethingWithData && !callback){
                return data
            }      
        })
        .catch(error => {
            console.log('Error retrieving image url from id:'+ id)
            return false
        })
    }
 )
// API end point = https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/id=$id
// Returns a warcrime based on the id
 const getWarcrimeByIdRef = useRef(
    async (id,functionToDoSomethingWithData,callback) => {
    console.log('Attempting to Retrieve warcrime with Id:'+ id)
    fetch('https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/id='+id)
    .then(response => response.json())
    .then(data => {
        console.log('Retrieved warcrime with Id:'+ id,'warcrime:',data)
        if (functionToDoSomethingWithData) {
            functionToDoSomethingWithData(data)            
        } 
        if (callback) {
            callback()
        }        
        if(!functionToDoSomethingWithData && !callback){
            return data
        }      
    })
    .catch(error => {
        console.log('Error retrieving warcrime with Id:'+ id)
        return false
    })
}
)
 // API end point = https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/numberofwarcrimes=$numberA&skip=$numberB
 // Returns an array of warcrime based on $numberA and skip as many as $numberB. If both are 0, returns all the warcrimes

 const getWarcrimesRef = useRef(
    async (number,skip,functionToDoSomethingWithData,callback) => {
    console.log('Attempting to retrieve '+number+' warcrimes while skiping the first '+skip)
    fetch('https://api.russianwarcrimes.com/wp-json/warcrimesapi/v1/warcrimes/numberofwarcrimes='+number+'&skip='+skip)
    .then(response => response.json())
    .then(data => {
        console.log('Retrieved warcrimes', data)
        if (functionToDoSomethingWithData) {
            functionToDoSomethingWithData(data)            
        } 
        if (callback) {
            callback()
        }        
        if(!functionToDoSomethingWithData && !callback){
            return data
        }      
    })
    .catch(error => {
        console.log('Error retrieving warcrimes')
        return false
    })
}
)

////////////////////////////////////////////////
/// API EFFECTS ///

useEffect(() => {
    //Don`t do anything on first load
    if (!isFirstTimeLoaded){

        if(APIeffectArgs.method === `getImageURLById`){
            getImageURLByIdRef.current(APIeffectArgs.id, APIeffectArgs.functionToDoSomethingWithData,APIeffectArgs.callback)          
        }
        if(APIeffectArgs.method === `getWarcrimeById`){
            getWarcrimeByIdRef.current(APIeffectArgs.id, APIeffectArgs.functionToDoSomethingWithData,APIeffectArgs.callback)          
        }
        if(APIeffectArgs.method === `getWarcrimes`){
            getWarcrimesRef.current(APIeffectArgs.number, APIeffectArgs.skip,APIeffectArgs.functionToDoSomethingWithData,APIeffectArgs.callback)          
        }               
 
    }
    setisFirstTimeLoaded(false)
}, [APIeffectArgs])


  const value={
    //Common state for storing data gathered from the API  
    fetchedFromApiArray, 
    setfetchedFromApiArray,
    //API Ref functions
    getImageURLByIdRef,
    getWarcrimeByIdRef,
    getWarcrimesRef,
    // API state for activating useEffect through updating Args
    APIeffectArgs,
    setAPIeffectArgs
  }

    return(
        <APIContext.Provider value={value}>
        <div>
            {props.children}
        </div>
        </APIContext.Provider>
    )
}

