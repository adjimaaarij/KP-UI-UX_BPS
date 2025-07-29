import React from 'react';
import { Link } from 'react-router-dom'; // Perbaikan di sini
import Logo from '../assets/Logo.jpg'; // Sesuaikan path jika perlu

const LogoBps = () => {
  return (
    <Link
      to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        position: 'absolute',
        top: '15px',
        left: '15px',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <img
        src={Logo}
        alt="Logo BPS Barru"
        style={{ width: 50, height: 50, marginRight: 12 }}
      />
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <div style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 16 }}>
          BADAN PUSAT STATISTIK
        </div>
        <div style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 16 }}>
          KABUPATEN BARRU
        </div>
      </div>
    </Link>
  );
};

export default LogoBps;
