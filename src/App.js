
import './App.css';
import SongOverview from './components/SongOverview.js';
import { Link,  Route, Routes } from "react-router-dom"
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {NotFound} from "./pages/NotFound"


function App() {
  return (
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              

           <li>
           <Link to="/about">aboutt</Link>
           </li>
           </li>

           <li>
              <Link to="/notfound">notfounddd</Link>
           </li>

          </ul>
      </nav>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" elememt ={<About />} />
        <Route path="/notfound" element={<NotFound />}/>

      </Routes>
    



    <div className="App">

     <h1>SongSaver oct
       2022</h1>
     <h1><SongOverview /></h1>
     
    </div>
    </div>
  );//return
}//App

export default App;
