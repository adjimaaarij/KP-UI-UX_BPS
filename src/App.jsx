import React, { useEffect } from 'react';
import styles from './App_module.module.css';
import TelegramButton from './Component/telegram.jsx';
import LogoBps from './Component/Logo_bps.jsx';
import LogoSensus from './Component/logo_sensus.jsx';

function App() {
  const handleRedirect = () => {
    window.location.href = '/home';
  };

  useEffect(() => {
    const originalStyle = {
      background: document.body.style.background,
      backgroundSize: document.body.style.backgroundSize,
      margin: document.body.style.margin,
      padding: document.body.style.padding,
      fontFamily: document.body.style.fontFamily,
      display: document.body.style.display,
      alignItems: document.body.style.alignItems,
      justifyContent: document.body.style.justifyContent,
      minHeight: document.body.style.minHeight,
    };

    document.body.style.background = "url('/Petani.jpg') no-repeat center center fixed";
    document.body.style.backgroundSize = 'cover';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.fontFamily = "'Montserrat', sans-serif";
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
    document.body.style.minHeight = '100vh';

    return () => {
      Object.assign(document.body.style, originalStyle);
    };
  }, []);

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.logoSection} onClick={e => e.stopPropagation()}>
          <LogoBps />
          <LogoSensus />
        </div>

        <div className={styles.mainClickableArea} onClick={handleRedirect}>
          <h1 className={styles.mainTitle}>INDIKATOR MAKRO</h1>
          <h2 className={styles.subTitle}>KABUPATEN BARRU</h2>
          <div className={styles.infoCard}>
            <h2><strong>BARRU, MARET 2025</strong></h2>
          </div>
        </div>
      </div>

      {/* Tombol Telegram keluar dari container utama */}
      <div className={styles.telegramFixed}>
        <TelegramButton />
      </div>
    </>
  );
}

export default App;
