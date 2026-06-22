import { useState } from "react"

function Iletisim() {
  const [ad, setAd] = useState("")
  const [mesaj, setMesaj] = useState("")
  const [gonderildi, setGonderildi] = useState(false)

  function gonder() {
    if (ad === "" || mesaj === "") return
    setGonderildi(true)
    setAd("")
    setMesaj("")
  }

  return (
    <div style={{maxWidth: '500px', margin: '0 auto'}}>
      <h1 style={{color: '#8b5cf6'}}>İletişim</h1>
      <p>Benimle iletişime geç!</p>
      <p>📧 Mail: arascakici@gmail.com</p>
<p>📸 Instagram: @arascakici</p>
<p>📱 Telefon: 0551 947 71 99</p>

      <br/>

      {gonderildi && (
        <div style={{backgroundColor: '#22c55e', color: 'white', padding: '15px', borderRadius: '10px', marginBottom: '20px'}}>
          ✅ Mesajın gönderildi!
        </div>
      )}

      <input 
        value={ad} 
        onChange={(e) => setAd(e.target.value)} 
        placeholder="Adın ne?" 
        style={{width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #8b5cf6', marginBottom: '10px', fontSize: '16px'}}
      />
      <input 
        value={mesaj} 
        onChange={(e) => setMesaj(e.target.value)} 
        placeholder="Mesajın ne?" 
        style={{width: '100%', padding: '12px', borderRadius: '10px', border: '2px solid #8b5cf6', marginBottom: '10px', fontSize: '16px'}}
      />
      <button 
        onClick={gonder} 
        style={{width: '100%', padding: '12px', backgroundColor: '#8b5cf6', color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'}}>
        Gönder! 🚀
      </button>
    </div>
  )
}

export default Iletisim