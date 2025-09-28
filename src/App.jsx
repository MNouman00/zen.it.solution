
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './assets/components/About'
import Home  from  './assets/components/Home'
import Services from './assets/components/Services';
import Portfolio from './assets/components/Portfolio';


const router = createBrowserRouter(
[

{  path : "/",

   element:<Home/>

},
{ path: "About",

   element: <About/>

},

{ path: "Services",

   element: <Services/>

},
 {
   path : "Portfolio",

      element:<Portfolio/>

 },




]
);

function App() {
  

  return (
    <div>

    <RouterProvider router={router}/>

    </div>
  )
}

export default App
