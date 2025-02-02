import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([

    {
        path: "/", 
        element: <Home />
    }

])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
