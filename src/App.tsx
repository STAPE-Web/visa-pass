import { BrowserRouter } from "react-router-dom"
import AppRouter from "./components/AppRouter"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollTop"
import Modal from "./components/Modal"

function App() {
  return (
    <BrowserRouter>
      <Modal />
      <AppRouter />
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  )
}

export default App