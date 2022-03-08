
import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Warcrimes from './pages/Warcrimes';
import {DisplayableDataContextProvider} from './contexts/DisplayableDataContext';
import NavBar from './components/NavBar/NavBar';
import About from './pages/About';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Home from './pages/Home';

export default function App() {



  return (    
    <div className="App flex pt-10 items-center justify-center w-full bg-gray-800">
     <div className={`max-w-screen-2xl flex flex-col items-center justify-center w-full`}>
   
        <DisplayableDataContextProvider>
        <Router>
        <NavBar/>
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
     </div>
    </div>
  );
}

