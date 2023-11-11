import React, { useState } from 'react';
import Lottie from "lottie-react";
import ProjectAnimation from "../assets/projects.json";
import './styles/page4.css'

const ClickableCard = () => {
  const openNewTab = (link) => {
    window.open(link, '_blank');
  };

  const firstSetOfCards = [
    { title: 'Hotell_App', link: 'https://example.com/page1' },
    { title: 'Card 2', link: 'https://example.com/page2' },
    { title: 'Card 3', link: 'https://example.com/page3' },
    { title: 'Card 4', link: 'https://example.com/page4' },
    { title: 'Card 5', link: 'https://example.com/page5' },
    { title: 'Card 6', link: 'https://example.com/page6' },
    { title: 'Card 7', link: 'https://example.com/page7' },
    { title: 'Card 7', link: 'https://example.com/page7' },
    { title: 'Scroll Down', action: 'scroll' },
  ];

  const secondSetOfCards = [
    { title: 'Scroll Up', action: 'scroll' },
    { title: 'Card 9', link: 'https://example.com/page7' },
    { title: 'Card 10', link: 'https://example.com/page7' },
    { title: 'Card 11', link: 'https://example.com/page7' },
    { title: 'Card 12', link: 'https://example.com/page7' },
    { title: 'Card 13', link: 'https://example.com/page7' },
    { title: 'Card 14', link: 'https://example.com/page7' },
    { title: 'Card 15', link: 'https://example.com/page7' },
    { title: 'Card 16', link: 'https://example.com/page7' },
    
    
  ];

  const [showFirstSet, setShowFirstSet] = useState(true);

  const handleCardClick = (action, link) => {
    if (action === 'scroll') {
      setShowFirstSet(!showFirstSet);
    } else {
      window.open(link, '_blank');
    }
  };

  return (
    <div className='page4maincontainer'>
    <div className='myprojects'>My Projects...</div>
    <div className='Page4Container'>
    
    <div className="animationpage1">
        <Lottie animationData={ProjectAnimation} />
    </div>
    <div>
      {showFirstSet ? (
        <div id="first-set" className="cardscontainer">
          {firstSetOfCards.map((card, index) => (
            <div key={index} onClick={() => handleCardClick(card.action, card.link)}>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div id="second-set" className="cardscontainer2">
          {secondSetOfCards.map((card, index) => (
            <div key={index} onClick={() => handleCardClick(card.action, card.link)}>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
    </div>
  );
};

export default ClickableCard;
