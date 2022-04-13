import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function AnnoucementBar({annoucementElement, path}) {

  const navigate = useNavigate()
  const location = useLocation()
 
  const handleClick = () => {
    navigate(`${path}`)
  }

  const handleClose = () =>{
  
  }

  return (
   <>
        { location.pathname === '/donate' || location.pathname.includes(`warcrimes/document/`) ? null :
        <div className={`p-4 w-full  flex items-center justify-center bg-red-500 text-white font-light font-sans`}>
            <div onClick={()=>{handleClick()}} className={`w-full flex items-center justify-center h-full cursor-pointer`}>{annoucementElement}</div>         
        </div>
        }
   </>
  )
}
