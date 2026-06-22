import { useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AnaSayfa from "./AnaSayfa"
import Hakkimda from "./Hakkimda"
import Iletisim from "./Iletisim"
import './App.css'

function App() {
  const [karanlik, setKaranlik] = useState(() => {
    return localStorage.getItem('karanlik') === 'true'
  })

  return (
    <BrowserRouter>
      <nav style={{textAlign: 'center', padding: '20px', backgroundColor: '#1a1a1a'}}>
        <Link to="/" style={{color: 'white', margin: '10px', textDecoration: 'none'}}>Ana Sayfa</Link>
        <Link to="/hakkimda" style={{color: 'white', margin: '10px', textDecoration: 'none'}}>Hakkımda</Link>
        <Link to="/iletisim" style={{color: 'white', margin: '10px', textDecoration: 'none'}}>İletişim</Link>
        <button onClick={() => {
          setKaranlik(!karanlik)
          localStorage.setItem('karanlik', !karanlik)
        }} style={{marginLeft: '20px', padding: '5px 15px', borderRadius: '8px', border: 'none', cursor: 'pointer'}}>
          {karanlik ? "☀️ Aydınlık" : "🌙 Karanlık"}
        </button>
      </nav>

      <div style={{
        backgroundColor: karanlik ? '#1a1a1a' : 'white',
        color: karanlik ? 'white' : 'black',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center'
      }}>
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/hakkimda" element={<Hakkimda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App