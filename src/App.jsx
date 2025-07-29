import './App.css'
import Homepage from './Homepage.jsx'
import LinkList from './Link.jsx'
import TelegramButton from '../Component/telegram.jsx'
import LogoBps from '../Component/Logo_bpd.jsx'

function App() {
  // Handler to redirect to homepage
  const handleRedirect = () => {
    window.location.href = '/home'; // Adjust this path as necessary, e.g., '/homepage'
  };

  return (
    <>
      {/* Logo, tidak bisa diklik */}
      <div
        style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
        onClick={e => e.stopPropagation()}
      >
        <LogoBps />
      </div>
      {/* Semua area lain, klik akan redirect */}
      <div
        onClick={handleRedirect}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <h1 style={{ color: 'darkred', fontWeight: 'bold', fontSize: '4.5rem', textAlign: 'center' }}>
          INDIKATOR MAKRO
        </h1>
        <h2 style={{ fontWeight: 'bold', fontSize: '2rem', textAlign: 'center' }}>
          KABUPATEN BARRU
        </h2>
        <div
          className="card"
          style={{
            padding: '20px',
            textAlign: 'center',
            background: 'linear-gradient(to left, red, darkred)',
            fontFamily: 'Arial, sans-serif',
            color: 'white',
            margin: '1rem auto',
            maxWidth: '400px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        >
          <h2><strong>BARRU, MARET 2025</strong></h2>
        </div>
        {/* Telegram button, tetap bisa diklik tanpa redirect */}
        <div onClick={e => e.stopPropagation()} style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <TelegramButton />
        </div>
      </div>
    </>
  )
}

export default App
