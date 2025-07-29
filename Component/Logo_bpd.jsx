import React from 'react';
import Logo from '../src/assets/Logo.jpg'; // Adjust the path as necessary

const LogoBps = () => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            position: 'absolute',
            top: '15px',
            left: '15px',
        }}>
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
        </div>
    );
};

export default LogoBps;