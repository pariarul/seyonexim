import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import ThreeBackground from "./components/ThreeBackground"

import AboutPage from "./pages/AboutPage"
import ProductsPage from "./pages/ProductsPage"
import CertificatesPage from "./pages/Certificates/CertificatesPage"

import HomePage from "./pages/Home/HomePage"
import ContactBox from "./components/ContectBox"


function App() {
  return (
    <div className="min-h-screen animated-gradient">
      <Router>
        <ThreeBackground />
        <Sidebar />
<ContactBox />
        <main className="lg:ml-80  z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/certificates" element={<CertificatesPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
