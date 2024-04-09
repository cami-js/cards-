import React, { createContext, useEffect, useState } from "react";

const CardContext = createContext();

function CardContextProvider(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await fetch('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster');
        const data = await response.json();
        setCards(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchAPI(); 
  }, []);

  return (
    <CardContext.Provider value={{ cards }}>
      {props.children}
    </CardContext.Provider>
  );
}

export { CardContext, CardContextProvider };