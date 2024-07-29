

import About from './Components/About';
import Home from './Components/Home';
import {createBrowserRouter ,RouterProvider} from 'react-router-dom';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import Work from './Components/Work';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/about",
    element:<About/>,
  },
  {
    path:"/services",
    element:<Services/>,
  },
  {
    path:"/contact",
    element:<Contact/>
  },
  {
    path:"/resume",
    element:<Resume/>
  },
  {
    path:"/work",
    element:<Work/>
  }
]);

 

function App() {
  return (
    <div className="max-sm:h-full text-white xl:bg-cover xl:bg-no-repeat xl:h-screen xl:w-screen" style={{ backgroundImage: "url('/image.png')" }}>
     
      <RouterProvider router={router} />
     
    </div>
  );
}

export default App;
