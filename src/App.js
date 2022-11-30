
import './App.css';

import { Link,  Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {SongOverview} from './components/SongOverview.js';
import {NotFound} from "./pages/NotFound"




function App() {
  return (
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
           <Link to="/about">about</Link>
           </li>
           
           <li>
           <Link to="/songoverview">songoverview</Link>
           </li>
           


          </ul>
      </nav>
    
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/songoverview" element ={<SongOverview />} />
        <Route path="/*" element={<NotFound />}/>

      </Routes>
    



   
    </div>
  );
}

export default App;
