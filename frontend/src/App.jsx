
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Navbar from './components/shared/Navbar'
import Home from './components/Home'
import Login from './components/auth/Login'
import SignUp from './components/auth/SignUp'
import { Toaster } from "@/components/ui/sonner"
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'

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
    },
    {
      path: "jobs",
      element: <Jobs />

    },
    {
      path: "browse",
      element: <Browse />

    },
    {
      path: "profile",
      element: <Profile />
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
