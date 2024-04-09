import React, { useContext } from 'react';
import { CardContext } from '../context/cardContext';
import './Card.css'; // Importa tus estilos CSS personalizados

export default function Card() {
    const { cards } = useContext(CardContext);

    // Seleccionar solo los primeros tres elementos de la matriz cards
    const slicedCards = cards.slice(0, 3);
    
    return (
        <div className="card-container">
            <h1>Top 3 Cards</h1>
            <div className="card-list">
                {slicedCards.map((card, index) => (
                    <div key={index} className="card">
                        <h2>{card.name}</h2>
                        <img src={card.card_images[0].image_url} alt={card.name} />
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
