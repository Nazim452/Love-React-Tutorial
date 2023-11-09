
import './App.css';
import {Route, Routes,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Support from './components/Support';
import NotFound from './components/NotFound';
import About from './components/About';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div >

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home1</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
         
        </ul>
      </nav>



     <Routes>
      <Route path="/" element={<MainHeader/>}>
        {/* This is our default route if nothing match path then this rendered */}
      <Route index element={<Home/>}/>        
      <Route path="/support" element={<Support/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Route>
      
     </Routes>
      
    </div>
  );
}

export default App;
