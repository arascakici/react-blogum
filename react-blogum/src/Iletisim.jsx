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
    setTimeout(() => setGonderildi(false), 3000)
  }

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="animated-title" style={{ display: 'inline-block', marginBottom: '10px' }}>Bana Ulaş</h1>
        <p style={{ color: 'var(--text)', fontSize: '18px' }}>Projelerin, fikirlerin veya sadece merhaba demek için buradayım.</p>
      </div>

      <div style={{ 
        display: 'flex', 
        gap: '30px', 
        flexWrap: 'wrap' 
      }}>
        {/* Sol Taraf: İletişim Bilgileri */}
        <div style={{
          flex: '1',
          minWidth: '300px',
          backgroundColor: 'var(--code-bg)',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: 'var(--shadow)',
          display: 'flex',
          flexDirection: 'column',
          gap: '25px'
        }}>
          <h2 style={{ fontSize: '24px', margin: '0 0 10px 0', color: 'var(--text-h)' }}>İletişim Bilgileri</h2>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              📧
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '14px', color: 'var(--text)', opacity: '0.8' }}>E-Posta Adresim</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--text-h)' }}>arascakici@gmail.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #ec4899, #f43f5e)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              📸
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '14px', color: 'var(--text)', opacity: '0.8' }}>Instagram</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--text-h)' }}>@arascakici</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px' }}>
              📱
            </div>
            <div>
              <p style={{ margin: '0', fontSize: '14px', color: 'var(--text)', opacity: '0.8' }}>Telefon Numarası</p>
              <p style={{ margin: '5px 0 0 0', fontSize: '16px', fontWeight: 'bold', color: 'var(--text-h)' }}>0551 947 71 99</p>
            </div>
          </div>
        </div>

        {/* Sağ Taraf: İletişim Formu */}
        <div style={{
          flex: '1.5',
          minWidth: '300px',
          backgroundColor: 'var(--bg)',
          padding: '40px',
          borderRadius: '16px',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}>
          <h2 style={{ fontSize: '24px', margin: '0 0 25px 0', color: 'var(--text-h)' }}>Mesaj Gönder</h2>
          
          {gonderildi && (
            <div style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', padding: '15px', borderRadius: '8px', border: '1px solid rgba(34, 197, 94, 0.3)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>✅</span> Harika! Mesajın başarıyla iletildi.
            </div>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <input 
              value={ad} 
              onChange={(e) => setAd(e.target.value)} 
              placeholder="Adın Soyadın" 
              style={{
                width: '100%', padding: '15px', borderRadius: '8px', 
                border: '1px solid var(--border)', backgroundColor: 'var(--code-bg)', 
                color: 'var(--text-h)', fontSize: '16px', boxSizing: 'border-box'
              }}
            />
            
            <textarea 
              value={mesaj} 
              onChange={(e) => setMesaj(e.target.value)} 
              placeholder="Buraya mesajını yaz..." 
              rows="5"
              style={{
                width: '100%', padding: '15px', borderRadius: '8px', 
                border: '1px solid var(--border)', backgroundColor: 'var(--code-bg)', 
                color: 'var(--text-h)', fontSize: '16px', resize: 'vertical', boxSizing: 'border-box'
              }}
            />
            
            <button 
              onClick={gonder} 
              style={{
                background: 'linear-gradient(270deg, #8b5cf6, #ec4899)', color: 'white',
                border: 'none', padding: '15px 30px', borderRadius: '8px',
                fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s', alignSelf: 'flex-start',
                boxShadow: '0 4px 15px rgba(139, 92, 246, 0.4)'
              }}
              onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.6)'; }}
              onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 4px 15px rgba(139, 92, 246, 0.4)'; }}
            >
              Gönder! 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Iletisim