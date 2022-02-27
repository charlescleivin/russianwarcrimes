
import './App.css';
 import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import {DisplayableDataContextProvider} from './contexts/DisplayableDataContext';

export default function App() {
  return (    
    <div className="App flex items-center justify-center w-full bg-gray-800">
     <div className={`max-w-screen-2xl flex flex-col items-center justify-center w-full`}>
        <DisplayableDataContextProvider>
        <Router>
          <Routes>        
            <Route path="/" element={<Home />} />      
          </Routes>
        </Router>
        </DisplayableDataContextProvider>
     </div>
    </div>
  );
}

