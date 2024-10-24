import Home from "./Component/Pages/Home/Home.jsx";
import Login from './Component/Pages/Home/Home.jsx';
import List from './Component/Pages/List/List.jsx';
import Singlepge from './Component/Pages/Singlepge/Singlepge.jsx';
import Newpge from './Component/Pages/Newpge/Newpge.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from "./formSource.js";
import "./Style/dark.scss";
import { useContext } from "react";
// import { DarkModeContext } from "./Context/darkModeReducer.js";
import { DarkModeContext } from "./Context/darkModeContext.js";

function App() {

  const {darkMode} = useContext (DarkModeContext);
  
  return (
    <div className= {darkMode ? "app dark" : "app"}>  
       
        <BrowserRouter>
          <Routes>
              <Route path='/'> 
                 <Route index element={<Home/>} />
                 <Route path='login' element={<Login/>} />
                 <Route path='users'>
                   <Route index element= {<List/>} />
                   <Route path=':userId' element={<Singlepge/>}/>
                   <Route path='new' element={<Newpge inputs={userInputs} title= "Add New User" />}/>
                 </Route>

                 <Route path='product'>
                   <Route index element= {<List/>} />
                   <Route path=':productId' element={<Singlepge/>}/>
                   <Route path='new' element={<Newpge inputs={productInputs} title= "Add New Product" />}/>
                 </Route>

              </Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
