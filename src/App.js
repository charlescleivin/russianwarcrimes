
import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Warcrimes from './pages/Warcrimes';
import {DisplayableDataContextProvider} from './contexts/DisplayableDataContext';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Home from './pages/Home';
import AnnoucementBar from './components/AnnoucementBar/AnnoucementBar';

export default function App() {

  <span className={`hidden`}></span>

  return (    
    <div className="App flex pt-10 items-center justify-center w-full bg-gray-800">
     <div className={`max-w-screen-2xl flex flex-col items-center justify-center w-full`}>
 
        <DisplayableDataContextProvider>
        <Router>
        <NavBar/>
        <AnnoucementBar annoucementElement={<span>Just like Ukraine, this project is under daily Russian attack. Help us making the truth accessible. <strong>Donate now</strong>!</span>} path={"/donate"}/>
          <Routes>  
            <Route path="/" element={<Home />} />         
            <Route path="/warcrimes" element={<Warcrimes />} />      
            <Route path="/warcrimes/:id" element={<Warcrimes />} />      
            <Route path="/donate" element={<Donation />} />      
            <Route path="/about" element={<About />} />      
            <Route path="/contact" element={<Contact />} />   

          </Routes>
        </Router>
        </DisplayableDataContextProvider>
       
   <div className={`fixed ${window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" ? 'hidden' : null} flex items-center justify-center text-4xl w-screen h-screen bg-white top-0 left-0 z-50`}>
     In Construction    
   </div>
   
     </div>
    </div>
  );
}

