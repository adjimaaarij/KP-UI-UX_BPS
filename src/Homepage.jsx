import React from 'react';
import { Link } from 'react-router-dom';
import LogoBps from '../Component/Logo_bpd';
import { DataLinks } from './Link';

const Homepage = () => {
    return (
        <div className="flex flex-col items-center px-6 py-10 min-h-screen bg-gradient-to-br from-[#8B0000] via-[#D32F2F] to-[#f5f5f5] text-gray-900">
            {/* Logo */}
            <LogoBps />

            {/* Title */}
            <h2 className="text-4xl font-extrabold mt-10 mb-4 text-[#8B0000] text-center drop-shadow-lg">
                Daftar Data Statistik Indonesia
            </h2>
            <p className="text-lg text-[#D32F2F] mb-8 text-center font-medium">
                Sumber data resmi dari Badan Pusat Statistik Indonesia
            </p>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {DataLinks.map((file, idx) => (
                    <Link
                        key={idx}
                        to={file.path}
                        className="bg-white/90 rounded-2xl border border-[#D32F2F] p-6 shadow-lg hover:shadow-2xl transition-all duration-300 no-underline hover:border-[#8B0000] hover:scale-[1.03] relative overflow-hidden"
                    >
                        {/* BPS Accent Bar */}
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#8B0000] via-[#D32F2F] to-[#FFA07A]" />
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-[#8B0000] mb-2">
                                    {file.name}
                                </h3>
                                <p className="text-sm text-[#D32F2F]">
                                    Data {file.name.toLowerCase()} terkini dan terpercaya dari BPS.
                                </p>
                            </div>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-[#D32F2F] font-semibold text-sm hover:underline transition">
                                    Lihat Data →
                                </span>
                                {/* BPS Icon Accent */}
                                <span className="ml-2 inline-block w-6 h-6 bg-gradient-to-tr from-[#8B0000] to-[#D32F2F] rounded-full shadow" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
