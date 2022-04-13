import React from 'react'
import QRCode from "react-qr-code";

export default function PDFcomponent({warcrime, id, location,description, date, dateOfIssue, mostRecentUpdateDate}) {

  return (
    <div className={`p-8 bg-white flex items-start justify-center flex-col`}>   

      <div className={`flex items-center py-4 justify-center w-full border-b`}>
            <div className={`flex flex-col gap-2 justify-center items-start w-full`}>              
                <span className={`text-4xl font-bold`}>ID: {id}</span> 
                <span className={`text-4xl font-bold`}>Warcrime: {warcrime}</span>   
                <span className={`text-3xl font-light`}>Location: {location}</span>  
                <span className={`text-3xl font-light`}>Date of occurence: {date}</span>  
                <span className={`text-3xl font-light`}>Status: No Investigation Yet</span>          
     
           <div className={`border p-4  flex flex-col items-start justify-center`}>
                        <span className={`text-sm font-light`}>Issued by: russianwarcrimes.com</span> 
                        <span className={`text-sm font-light`}>Date of issue:{dateOfIssue} </span> 
                        <span className={`text-sm font-light`}>Date of addition of the warcrime:{dateOfIssue} </span> 
                        <span className={`text-sm font-light`}>Most recent update: {mostRecentUpdateDate}</span> 
                   
           </div>      
            </div>     
            <div className={`flex items-end gap-2 justify-center flex-col`}>
                <QRCode size={150} value={`https://www.russianwarcrimes.com/warcrimes/${id}`}/>          
            </div>
      </div>

        <div className={`flex flex-col gap-2 border-b py-4 justify-center items-start w-full`}>
            <span className={`text-2xl font-light`}>Description</span>  
            <span className={`text-base font-light`}>{description}</span>
        </div>     
        
        <div className={`flex flex-col gap-2 border-b py-4 justify-center items-start w-full`}>
            <span className={`text-2xl font-light`}>Visual or Auditory Evidences</span>  
            <span className={`text-base font-light`}>{description}</span>
        </div>    

            
        <div className={`flex flex-col gap-2 border-b py-4 justify-center items-start w-full`}>
            <span className={`text-2xl font-light`}>Text Evidences</span>  
            <span className={`text-base font-light`}>{description}</span>
        </div>     


        <div className={`flex flex-col gap-2 border-b py-4 justify-center items-start w-full`}>
            <span className={`text-2xl font-light`}>Testimonials</span>  
            <span className={`text-base font-light`}>{description}</span>
        </div>     

      
    
   
    </div>
  )
}
