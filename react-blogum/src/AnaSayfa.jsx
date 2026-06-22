import { useState, useEffect } from "react"
import BlogKarti from "./BlogKarti"
import { db } from "./firebase"
import { collection, onSnapshot, addDoc, deleteDoc, doc, serverTimestamp, query, orderBy } from "firebase/firestore"

function AnaSayfa() {
  const [baslik, setBaslik] = useState("")
  const [icerik, setIcerik] = useState("")
  const [yazilar, setYazilar] = useState([])

  // Firestore referansı
  const yazilarCollectionRef = collection(db, "yazilar")

  useEffect(() => {
    // Verileri tarihe göre sıralayarak çekmek için query (sorgu)
    const q = query(yazilarCollectionRef, orderBy("tarih", "desc"))
    
    // onSnapshot ile real-time (eşzamanlı) dinleme
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dbYazilar = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setYazilar(dbYazilar)
    })

    // Component unmount olduğunda dinlemeyi durdur
    return () => unsubscribe()
  }, [])

  async function yaziEkle() {
    if (baslik === "" || icerik === "") return
    
    try {
      await addDoc(yazilarCollectionRef, {
        baslik: baslik,
        icerik: icerik,
        tarih: serverTimestamp()
      })
      setBaslik("")
      setIcerik("")
    } catch (error) {
      console.error("Yazı eklenirken hata oluştu: ", error)
    }
  }

  async function yaziSil(id) {
    try {
      const yaziDocRef = doc(db, "yazilar", id)
      await deleteDoc(yaziDocRef)
    } catch (error) {
      console.error("Yazı silinirken hata oluştu: ", error)
    }
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="animated-title" style={{ paddingBottom: '10px', display: 'inline-block' }}>Blog Yazıları</h1>
      
      {/* Blog Ekleme Kartı */}
      <div style={{
        backgroundColor: 'var(--code-bg)',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: 'var(--shadow)',
        marginBottom: '40px',
        textAlign: 'left'
      }}>
        <h2 style={{ marginBottom: '20px', fontSize: '20px' }}>Yeni Bir Şeyler Paylaş</h2>
        
        <input 
          value={baslik} 
          onChange={(e) => setBaslik(e.target.value)} 
          placeholder="Yazının başlığı..." 
          style={{
            width: '100%',
            padding: '12px 15px',
            marginBottom: '15px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
            color: 'var(--text-h)',
            fontSize: '16px',
            fontFamily: 'inherit',
            boxSizing: 'border-box'
          }}
        />
        
        <textarea 
          value={icerik} 
          onChange={(e) => setIcerik(e.target.value)} 
          placeholder="Neler düşünüyorsun?" 
          rows="4"
          style={{
            width: '100%',
            padding: '12px 15px',
            marginBottom: '20px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--bg)',
            color: 'var(--text-h)',
            fontSize: '16px',
            fontFamily: 'inherit',
            resize: 'vertical',
            boxSizing: 'border-box'
          }}
        />
        
        <button 
          onClick={yaziEkle} 
          style={{
            background: 'linear-gradient(270deg, #8b5cf6, #ec4899)',
            color: 'white',
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            width: '100%'
          }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Paylaş 🚀
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {yazilar.map(yazi => (
          <BlogKarti key={yazi.id} yazi={yazi} onSil={yaziSil} />
        ))}
      </div>
    </div>
  )
}

export default AnaSayfa