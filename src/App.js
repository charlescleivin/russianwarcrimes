
import './App.css';
 import { Routes, Route, useLocation} from "react-router-dom";
import Warcrimes from './pages/Warcrimes';
import {APIContextProvider} from './contexts/APIContext';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Home from './pages/Home';
import AnnoucementBar from './components/AnnoucementBar/AnnoucementBar';
import PDFcomponent from './components/PDFcomponent/PDFcomponent';

export default function App() {

  const location = useLocation();



  return (    
    <div className={`App flex ${location.pathname.includes(`warcrimes/document/`) ? null : 'pt-10'} justify-center w-full bg-gray-800`}>
     <div className={`max-w-screen-2xl flex flex-col items-stretch justify-center w-full`}>
        <span className={`hidden`}></span>
        <APIContextProvider> 
        {window.location.hostname === "localhost" &&  
          <>
              <NavBar/>
              <AnnoucementBar annoucementElement={<span>This project is under daily attack. Help us making the truth accessible. <strong>Donate.</strong></span>} path={"/donate"}/>
                <Routes>  
                  <Route path="/" element={<Home />} />         
                  <Route path="/warcrimes" element={<Warcrimes />} />      
                  <Route path="/warcrimes/:id" element={<Warcrimes />} />      
                  <Route path="/warcrimes/document/:id" element={  
                  <PDFcomponent
                    id={1}
                    location={"xablau"} 
                    warcrime={'Massacre of civilians'}
                    description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus harum, possimus dolorum fugiat perspiciatis nemo deleniti nulla aperiam incidunt, perferendis ea maxime nostrum mollitia temporibus corrupti fugit cum voluptatibus. Distinctio tempora facilis modi voluptate commodi saepe, cum sequi facere ad architecto autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus harum, possimus dolorum fugiat perspiciatis nemo deleniti nulla aperiam incidunt, perferendis ea maxime nostrum mollitia temporibus corrupti fugit cum voluptatibus. Distinctio tempora facilis modi voluptate commodi saepe, cum sequi facere ad architecto autem?`}
                    date={'2020-01-01'}
                  />
                  }/>      
                  <Route path="/donate" element={<Donation />} />      
                  <Route path="/about" element={<About />} />      
                  <Route path="/contact" element={<Contact />} />   
      
                </Routes>
          </>
        }    
        </APIContextProvider>
       
   <div className={`fixed ${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? 'hidden' : null} flex items-center justify-center text-4xl w-screen h-screen bg-white top-0 left-0 z-50`}>
     In Construction    
   </div>
   
     </div>
    </div>
  );
}

