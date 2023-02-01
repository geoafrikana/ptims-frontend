import { Route, Routes } from "react-router-dom"
import Navbar from './pages/navbar/Navbar'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import WebMap from './pages/webMap/WebMap';
import TaxAssessment from './pages/taxAssessment/TaxAssessment';


function App() {
  return (
    <>

    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/web-map" element={<WebMap />} />
      <Route path="/tax-assessment" element={<TaxAssessment />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
