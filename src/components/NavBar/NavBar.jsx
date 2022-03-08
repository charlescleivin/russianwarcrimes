import React, {useRef,useState,useEffect} from 'react'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom';


const MenuOption = ({title, link, functionThatOperatesMenu}) => {

    const navigate = useNavigate()

    return (
        <div onClick={()=>{
            navigate(link)
            functionThatOperatesMenu()
        }}  className={`font-sans border-opacity-0 hover:border-opacity-100 cursor-pointer transition duration-150 ease-in-out hover:text-gray-100 w-full pb-2  text-2xl md:text-5xl border-b border-gray-100 font-bold text-gray-200`}
        >{title}
        </div >
    )
}

const MenuContent = ({functionThatOperatesMenu}) => {

    let menuArray = [
        {title:"Home",link:"/"},
        {title:"War Crimes",link:"/warcrimes"},
        {title:"About",link:"/about"},   
        {title:"FAQ",link:"/faq"},      
        {title:"Donate",link:"/donate"},     
        {title:"Contact",link:"/contact"},  
    ]


    return(
        <div className={`w-full h-full text-right p-8 gap-4 flex items-center justify-start flex-col`}>
            { menuArray.map((item,index) => {
            return(
                   <MenuOption functionThatOperatesMenu={functionThatOperatesMenu} link={item.link} title={item.title} />
                   )
            })
            }
        
        </div>
    )
}


export default function NavBar() {

const [isOpen, setisOpen] = useState(false)

const hamburguerMenuTl = useRef(gsap.timeline({paused:true}))
const hamburguerMenuTl2 = useRef(gsap.timeline({paused:true}))


const hamburguerBarTop = useRef(null)
const hamburguerBarMiddle = useRef(null)
const hamburguerBarBottom = useRef(null)

const expansiveNavBarThatBecomeTheMenu = useRef(null)

useEffect(() => {
    hamburguerMenuTl.current.to(hamburguerBarTop.current, 0.5, {
        rotate:45,
        y:8,
        ease:"power3.inOut"
    })
    .to(hamburguerBarMiddle.current, 0.5, {
        opacity:0,
        ease:"power3.inOut"
    },"-=0.5")
    .to(hamburguerBarBottom.current, 0.5, {
        rotate:-45,
        y:-8,
        ease:"power3.inOut"
    },"-=0.5")
      .to(expansiveNavBarThatBecomeTheMenu.current, 0.5, {
        height: "100vh",
        ease:"power3.inOut"
    },"-=0.5")



    hamburguerMenuTl2.current.to(expansiveNavBarThatBecomeTheMenu.current, 0.5, {
        height: "2.5rem",
        ease:"power3.inOut"
    })

}, [])



const openOrCloseMenu = () => {

    if(isOpen){          
        hamburguerMenuTl.current.reverse()
        setisOpen(false)    
     
    } else {
        setisOpen(true)    
        hamburguerMenuTl.current.play()
    }  

}    

  return (
    <div ref={expansiveNavBarThatBecomeTheMenu} className={`w-full overflow-hidden h-10  fixed max-w-screen-2xl transform -translate-x-1/2 top-0 left-1/2 bg-gray-800 z-50`}>
      <div className={`absolute w-full z-40 bg-gray-800 top-0 h-10 left-0 flex px-8 items-center justify-between`}>
                <div className={`font-sans font-bold text-gray-100 text-lg`}>Russian War Crimes</div>
                <div onClick={()=>{openOrCloseMenu()}} className={`flex cursor-pointer w-6 items-center justify-center gap-1 flex-col`}>
                    <div ref={hamburguerBarTop} className={`w-6 h-1 bg-gray-100`}></div>
                    <div ref={hamburguerBarMiddle} className={`w-6 h-1 bg-gray-100`}></div>
                    <div ref={hamburguerBarBottom} className={`w-6 h-1 bg-gray-100`}></div>
                </div>
      </div>
      
      <div className={`absolute pt-10 flex z-10 items-stretch justify-center top-0 left-0 w-full h-screen`}>
                
                <div className={`hidden lg:block lg:w-1/2 bg-black`}>                   
                </div>
                
                <div className={`w-full lg:w-1/2 transition-all duration-300 ease-in-out ${!isOpen && "opacity-0"}`}>
                    <MenuContent functionThatOperatesMenu={openOrCloseMenu}/>
                </div>
       
        
        </div>      
  
    </div>
  )
}
