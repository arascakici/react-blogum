import { useState, useEffect } from "react"
import BlogKarti from "./BlogKarti"

function AnaSayfa() {
  const [baslik, setBaslik] = useState("")
  const [icerik, setIcerik] = useState("")
  const [yazilar, setYazilar] = useState(() => {
    const kayitli = localStorage.getItem('yazilar')
    return kayitli ? JSON.parse(kayitli) : [
      { id: 1, baslik: "İlk Blog Yazım", icerik: "Bugün web öğrenmeye başladım!" },
      { id: 2, baslik: "React Öğreniyorum", icerik: "React çok güzelmiş!" },
    ]
  })

  useEffect(() => {
    localStorage.setItem('yazilar', JSON.stringify(yazilar))
  }, [yazilar])

  function yaziEkle() {
    if (baslik === "" || icerik === "") return
    setYazilar([...yazilar, { id: Date.now(), baslik, icerik }])
    setBaslik("")
    setIcerik("")
  }

  return (
    <div>
<h1 style={{color: '#8b5cf6'}}>Blog Yazıları</h1>
      <input value={baslik} onChange={(e) => setBaslik(e.target.value)} placeholder="Başlık yaz..." />
      <br/>
      <input value={icerik} onChange={(e) => setIcerik(e.target.value)} placeholder="İçerik yaz..." />
      <br/>
      <button onClick={yaziEkle} className="btn btn-green">Ekle!</button>

      {yazilar.map(yazi => (
        <BlogKarti key={yazi.id} yazi={yazi} onSil={(id) => setYazilar(yazilar.filter(y => y.id !== id))} />
      ))}
    </div>
  )
}

export default AnaSayfa