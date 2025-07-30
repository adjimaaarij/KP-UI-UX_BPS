import React from "react";
import { Link } from "react-router-dom";
import LogoBps from "./Component/Logo_bps";
import LogoSensus from "./Component/logo_sensus";
import TelegramButton from "./Component/telegram";
import { DataLinks } from "./Link";
import Card from "react-bootstrap/Card";
import { FaChartLine } from "react-icons/fa";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-800 via-red-600 to-red-50 text-gray-900 font-sans antialiased flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-12">
        <div className="flex justify-center items-center gap-4 mb-6">
          <LogoBps className="h-16 w-auto sm:h-20" />
          <LogoSensus className="h-16 w-auto sm:h-20" />
        </div>
        <h1
          className="text-red-700 font-extrabold text-6xl text-center mb-2"
          style={{
            color: "#DC143C",
            fontWeight: 800,
            fontSize: "4.8rem",
            textAlign: "center",
            marginBottom: "0.5rem",
            textShadow: "1px 1px 3px rgba(0, 0, 0, 0.08)",
            letterSpacing: "2px",
          }}
        >
          KERANGKA PAPARAN
        </h1>
        <p className="text-xl text-red-700 font-medium max-w-2xl mx-auto">
          Sumber data resmi dan terpercaya dari Badan Pusat Statistik Indonesia.
        </p>
      </header>

      {/* Card Grid */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
        {DataLinks.map((file, idx) => (
          <Card
            key={idx}
            style={{
              width: "100%",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              background: "orangered",
              border: "1px solid orangered",
              borderRadius: "15px",
              overflow: "hidden",
            }}
            className="rounded-xl shadow-md hover:scale-[1.02] hover:shadow-2xl transition duration-300 mb-1"
          >
            <Card.Body className="flex flex-col items-center text-center p-6">
              <FaChartLine className="text-red-600 text-3xl mb-2" />
              <Card.Title className=" Light text-xl font-bold text-red-800">
                {file.name}
              </Card.Title>
              <Card.Text className="text-gray-700 text-sm">
                Data {file.name.toLowerCase()} resmi dan terpercaya dari BPS
                Indonesia.
              </Card.Text>
              <Card.Link
                as={Link}
                to={file.path}
                className="text-red-600 hover:text-white-800 text-sm mt-2 inline-block"
              >
                Lihat Data →
              </Card.Link>
            </Card.Body>
          </Card>
        ))}
      </main>

      {/* Call to Action / Telegram Button */}
      <div className="mt-16 text-center">
        <TelegramButton />
      </div>
    </div>
  );
};

export default Homepage;
