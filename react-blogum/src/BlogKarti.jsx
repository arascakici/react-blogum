function BlogKarti({ yazi, onSil }) {
  // Firestore'dan gelen tarihi formatla
  const tarihFormat = yazi.tarih 
    ? yazi.tarih.toDate().toLocaleString('tr-TR', {
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit'
      }) 
    : 'Az önce';

  return (
    <div style={{
      backgroundColor: 'var(--code-bg)',
      margin: '0',
      padding: '25px',
      borderRadius: '16px',
      boxShadow: 'var(--shadow)',
      textAlign: 'left',
      position: 'relative',
      borderLeft: '4px solid #8b5cf6',
      transition: 'transform 0.2s',
    }}
    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'baseline',
        borderBottom: '1px solid var(--border)',
        marginBottom: '15px',
        paddingBottom: '10px'
      }}>
        <h3 style={{ margin: '0', fontSize: '22px', color: 'var(--text-h)' }}>
          {yazi.baslik}
        </h3>
        <span style={{ fontSize: '13px', color: 'var(--text)', opacity: '0.8' }}>
          🕒 {tarihFormat}
        </span>
      </div>
      
      <p style={{ 
        margin: '0 0 20px 0', 
        color: 'var(--text)', 
        lineHeight: '1.6',
        fontSize: '16px',
        whiteSpace: 'pre-wrap'
      }}>
        {yazi.icerik}
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button 
          onClick={() => onSil(yazi.id)} 
          style={{
            backgroundColor: 'transparent',
            color: '#f43f5e',
            border: '1px solid rgba(244, 63, 94, 0.3)',
            borderRadius: '8px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'rgba(244, 63, 94, 0.1)';
            e.target.style.borderColor = '#f43f5e';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.borderColor = 'rgba(244, 63, 94, 0.3)';
          }}
        >
          🗑️ Sil
        </button>
      </div>
    </div>
  )
}

export default BlogKarti