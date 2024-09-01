
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { Toaster } from "@/components/ui/sonner"

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

    },
    {
      path: "login",
      element: <Login />
    },
    {
      path: "sign-up",
      element: <SignUp />
    }
  ])

  return (
    <>
      <RouterProvider router={appRouter} />
      <Toaster />


    </>
  )
}

export default App
