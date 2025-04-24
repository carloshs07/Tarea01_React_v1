import React from "react";
import "./Heroes.css";
import spidermanImage from "./assets/spiderman.jpg";
import batmanImage from "./assets/batman.jpg";
import wonderWomanImage from "./assets/wonderwoman.jpg";
import ironManImage from "./assets/ironman.jpg";
import supermanImage from "./assets/superman.jpg";
import thorImage from "./assets/thor.jpg";  

const heroesarray = [
    {
        name: "Spider Man",
        image: spidermanImage,
        power: 85,
        superPowers: ["Trepa Paredes", "Spider-Sense", "Super Fuerza"],
        universe: "Marvel",
    },
    {
        name: "Batman",
        image: batmanImage,
        power: 75,
        superPowers: ["Artes Marciales", "Armadura", "Dispositivos Tecnológicos"],
        universe: "DC",
    },
    {
        name: "Wonder Woman",
        image: wonderWomanImage,
        power: 90,
        superPowers: ["Super Fuerza", "Puede Volar", "Habilidades para el combate"],
        universe: "DC",
    },
    {
        name: "Iron Man",
        image: ironManImage,
        power: 80,
        superPowers: ["Inteligente", "Traje Armadura", "Puede volar"],
        universe: "Marvel",
    },
    {
        name: "Superman",
        image: supermanImage,
        power: 95,
        superPowers: ["Super Fuerza", "Puede Volar", "Vision de Laser"],
        universe: "DC",
    },
    {
        name: "Thor",
        image: thorImage,
        power: 92,
        superPowers: ["Dios del trueno", "Super Fuerza", "Martillo Mjolnir"],
        universe: "Marvel",
    },
];

const Heroes = () => {
    return (
        <div className="heroes-container">
            {heroesarray.map((hero) => ( 
                <div className="hero-card">
                    <div className="hero-card-inner">
                        <div className="hero-card-front">
                            <img src={hero.image} alt={hero.name} />
                            <h3>{hero.name}</h3>
                        </div>
                        <div className="hero-card-back">
                            <h3>{hero.name}</h3>
                            <p>Universo: {hero.universe}</p>
                            <p>Nivel de Poder: {hero.power}</p>
                            <p>Super Poderes:</p>
                            <ul>
                                {hero.superPowers.map((power, i) => (
                                    <li key={i}>{power}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Heroes;