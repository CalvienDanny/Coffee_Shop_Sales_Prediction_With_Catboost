import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handlePredictClick = () => {
    // Redirect ke URL tertentu
    window.location.href = "http://localhost:3000/"; // Gunakan ini untuk URL absolut
    // navigate("/"); // Gunakan ini untuk navigasi dalam aplikasi React Router
  };

  return (
    <div className="home-container">
      {/* Bagian Teks */}
      <div className="home-text">
        <p className="home-welcome">WELCOME TO KOPICAST</p>
        <h1 className="home-title">Elevate Your Profit With Data.</h1>
        <p className="home-price">Start Your Prediction</p>
        <button className="home-button" onClick={handlePredictClick}>
          Predict Now
        </button>
      </div>

      <div className="home-images">
        {/* Gambar Utama */}
        <img
          src="https://images.unsplash.com/photo-1502045856-4882464b27a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ceramic Product 1"
          className="image-main"
        />
        
        {/* Gambar Sekunder */}
        <img
          src="https://images.unsplash.com/photo-1504465117220-78098ba506d5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Ceramic Product 2"
          className="image-secondary"
        />
      </div>
    </div>
  );
};

export default Home;
