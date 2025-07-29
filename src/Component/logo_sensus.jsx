import React from 'react';
import { Link } from 'react-router-dom'; // Perbaikan di sini
import Logo from '../assets/Logo_sensus.jpg'; // Sesuaikan path jika perlu

const LogoSensus = () => {
  return (
    <Link
    //   to="/"
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '10px',
        position: 'absolute',
        top: '15px',
        right: '15px',
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <img
        src={Logo}
        alt="Logo BPS Barru"
        style={{ width: 200, height: 65, marginRight: 10 }}
      />
    </Link>
  );
};

export default LogoSensus;
