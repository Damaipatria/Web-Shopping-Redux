import { Routes, Route } from "react-router-dom"
import Header from "./layouts/Header"
import Beranda from "./pages/Beranda"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' Component={Beranda} />
      </Routes>
    </>
  )
}

export default App
