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
    <div>
      <h1 className="animated-title">Blog Yazıları</h1>
      <input value={baslik} onChange={(e) => setBaslik(e.target.value)} placeholder="Başlık yaz..." />
      <br/>
      <input value={icerik} onChange={(e) => setIcerik(e.target.value)} placeholder="İçerik yaz..." />
      <br/>
      <button onClick={yaziEkle} className="btn btn-green">Ekle!</button>

      {yazilar.map(yazi => (
        <BlogKarti key={yazi.id} yazi={yazi} onSil={yaziSil} />
      ))}
    </div>
  )
}

export default AnaSayfa