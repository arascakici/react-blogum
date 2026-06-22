function BlogKarti({ yazi, onSil }) {
  return (
    <div style={{border: '1px solid gray', margin: '10px', padding: '20px', borderRadius: '10px'}}>
      <h3>{yazi.baslik}</h3>
      <p>{yazi.icerik}</p>
      <button onClick={() => onSil(yazi.id)} style={{backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '8px', padding: '5px 10px', cursor: 'pointer'}}>
        Sil
      </button>
    </div>
  )
}

export default BlogKarti