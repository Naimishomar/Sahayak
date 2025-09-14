import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout"
import LandingPage from "./components/LandingPage"
import Dashboard from "./components/Dashboard"

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage/>} />
        <Route path="about" element={<h1>About</h1>} />
        <Route path="dashboard" element={<Dashboard/>} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
