import React, { useState } from 'react';
import cyberImg from "./assets/cyber-squeak.png"
import Message from './components/Message/Message';


const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Давай я помогу!"
];

//основной элемент (мышь)
const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  //генерация рандомного ответа
  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  //блок страницы
  return (

    <div>
      <div className='message-list'>
        <Message />
        <button onClick={getRandomPhrase}>Проверь мой код!</button>  
      </div>
      
      <div>
        <img
          src={cyberImg}
          alt="CyberSqueak"
          onClick={getRandomPhrase}
          style={{ cursor: 'pointer' }}
        />
      </div>
      
      {randomPhrase && <p>{randomPhrase}</p>}

    </div>
  );
};

export default CyberSqueak;