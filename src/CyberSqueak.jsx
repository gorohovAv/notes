import React, { useState } from 'react';
import cyberImg from "./assets/cyber-squeak.png"
import Message from './components/Message/Message';

const phrases = [
  "Всё плохо, переделывай",
  "Супер, молодец!",
  "Не огорчайся, у тебя всё получится!",
  "Выкинь комп"
];

const MESSAGES = [
  "Привет, я Мышь-Предсказатель!",
  "Я помогу тебе оценить код :)"
]

const CyberSqueak = () => {
  const [randomPhrase, setRandomPhrase] = useState("");

  const getRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setRandomPhrase(phrases[randomIndex]);
  };

  return (
    <div>
      <div className='message-list'>
        {MESSAGES.map((item, i) =>{
          return(<Message text={item}key={i}/>)
        })}
        <button onClick={getRandomPhrase}>Проверь мой код</button>
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
      {/* {randomPhrase} */}
    </div>
  );
};

export default CyberSqueak;