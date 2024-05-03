import FetchData from "./components/FetchData"
import Home from "./components/Home"
import Login from "./components/Login"
import NavBar from "./components/NavBar"
import { RouterProvider,createBrowserRouter,BrowserRouter } from "react-router-dom"
import Success from "./components/success"
import Failed from "./components/Failed"





function App() {
  const router=createBrowserRouter([
    {path:'/' ,element: <><NavBar/><Home/></>},
    {path:'/fetchdata' , element:<><NavBar/><FetchData/></>},
    {path:'/login' ,element:<><NavBar/><Login/></>},
    {path:'/success' ,element:<><NavBar/><Success/></>},
    {path:'/failed' ,element:<><NavBar/><Failed/></>},
 
  ])
  
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )

}
export default App
