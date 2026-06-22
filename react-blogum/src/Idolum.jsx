function Idolum() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20px', maxWidth: '900px', margin: '0 auto' }}>
      <h1 className="animated-title" style={{ display: 'inline-block' }}>İdolüm</h1>
      <h2 style={{ color: 'var(--text-h)', marginBottom: '30px', fontSize: '24px' }}>
        İdol olarak aldığım adam: Abim
      </h2>
      
      <p style={{ color: 'var(--text)', marginBottom: '15px' }}>
        Aşağıdaki fotoğrafa tıklayarak web sitesine gidebilirsin 👇
      </p>

      <a href="https://www.lukascakici.dev/" target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        <img 
          src="/idol.png" 
          alt="Lukas Cakici Portfolio" 
          style={{
            width: '100%', 
            borderRadius: '16px', 
            boxShadow: 'var(--shadow)',
            border: '2px solid var(--border)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-8px) scale(1.01)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.4)'
            e.currentTarget.style.borderColor = '#8b5cf6'
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = 'var(--shadow)'
            e.currentTarget.style.borderColor = 'var(--border)'
          }}
        />
      </a>
    </div>
  )
}

export default Idolum
