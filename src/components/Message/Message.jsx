import React from "react";
import "./Message.css";

const Message = (props) => {
    return(
        <div className='message'>
            <p>{props.children || props.text}</p>
        </div>
    )
}


export default Message;
import React, { useState } from 'react';
import "./Message.css";

//вступительные сообщения с приветствием 
//и объяснением использования
const messages = [
    "Привет, Я мышь-помощница!",
    "Я оцениваю твой код и \n помогаю его исправить!",
    "Нажми 'Проверь мой код!' \n чтобы получить комментарий"
];

//циклический вывод сообщений списка по нажатию кнопки "далее"
const Message = () => {
    const [index, setIndex] = useState(0);
    
    const handleNextClick = () => {
        if (index == messages.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    return (
        <div className="message">
            <p>{ messages[index] }</p>
            <button onClick={handleNextClick}>
                далее
            </button>
        </div>
    )
}

export default Message;
