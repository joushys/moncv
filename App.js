import React from "react";
import "./App.css";

function App() {
  return (
    <div className="cv-container">
        <img src="user.jpg" alt="Jessy SM" className="profile-pic" />
      <h1>Mon CV</h1>
      <h2>Jessy SM</h2>
      <h3>Développeur Web | Passionné de Tech</h3>

      <h3>Contact</h3>
      <p>📧 Email : jessysm@example.com</p>
      <p>📍 Localisation : Israel, Tel Aviv 🇮🇱</p>
      <p>🔗 Portfolio : <a href="https://monportfolio.com" target="_blank" rel="noopener noreferrer">monportfolio.com</a></p>

      <h3>À propos de moi</h3>
      <p>
        Développeur web spécialisé en création d'interfaces modernes et performantes. <br />
        Expérience en développement. Passionné par les nouvelles technologies. <br />
        Toujours à la recherche de nouveaux défis pour améliorer mes compétences.
      </p>

      <h3>Expérience</h3>
      <ul>
        <li>Développeur chez Webscool (2024 - présent)</li>
        <li>Création de pages dynamiques avec HTML, CSS et JavaScript.</li>
        <li>Participation aux réunions/cours </li>
      </ul>

      <h3>Compétences</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js</li>
        <li>Git, GitHub</li>
      </ul>

      <h3>Mes projets</h3>
      <ul>
        <li>Projet Japon (html & css)</li>
        <li>Bijoux Élégance(html, css & JavaScript) </li>
      </ul> 

     </div>
  );
}

export default App;

