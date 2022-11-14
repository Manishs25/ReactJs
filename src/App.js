//npm install react-router-dom//

import './App.css';
import Services from './reactrouter/Services';
import Home from './reactrouter/Home';
import HomeOne from './reactrouter/HomeOne';  
import About from './reactrouter/About';

import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
            
        <BrowserRouter>
      <ul>
        {/* <li><a href='/home'>Home</a></li>
        <li><a href='/About'>About</a></li>
        <li><a href='/Services'>Services</a></li> */}

        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/About'>About</Link></li>
        <li><Link to='/Services'>Services</Link></li>

      </ul>

    <Routes>
      <Route path='/home' element={<HomeOne/>}/>
      <Route path='/about/:message' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
   </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
