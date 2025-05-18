import './App.css'
import Navbar from '../components/navbar'
import Home from '../components/home'
import Paste from '../components/paste'
import ViewPaste from '../components/viewPaste'
import { createBrowserRouter, RouterProvider  } from 'react-router-dom'

const router=createBrowserRouter(
  [
    
    {
      path:"/",
      element:
        <div>
          <Navbar/>
          <Home/>
        </div>
    },
    {
      path:"/pastes",
      element:
        <div>
          <Navbar/>
          <Paste/>
        </div>
    },
    {
      path:"/pastes/:id",
      element:
        <div>
          <Navbar/>
          <ViewPaste/>
        </div>
    }
  ]
);
function App() {

  return (
    <>
      <div>
        <RouterProvider router={router}/>
        </div>
    </>
  )
}

export default App
