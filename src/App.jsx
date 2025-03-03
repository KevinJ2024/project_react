import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { NotFound } from "./pages/NotFound/NotFound"
import { Header } from "./layouts/Header/Header"
import { Footer } from "./layouts/Footer/Footer"
import { Class1 } from "./pages/Class1/Class1"


export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Class1' element={<Class1 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  ) 
}