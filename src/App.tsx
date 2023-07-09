import { Route, Routes } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { NotFound } from "./pages/notfound/NotFound"

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
