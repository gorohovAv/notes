import React, {useState, useEffect, useRef} from 'react';
import "./NotesApp.scss";
import Note from './Note';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormGroup } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Button } from '@mui/base/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Masonry from '@mui/lab/Masonry';
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";

const makeAiQuery = async(code) => {
    const options = {
      method: 'POST',
      headers: {Authorization: 'Bearer <token>', 'Content-Type': 'application/json'},
      body: '{"query":"<string>","conversationId":"<string>","visitorId":"<string>","temperature":123,"streaming":true,"modelName":"gpt_3_5_turbo","maxTokens":123,"presencePenalty":123,"frequencyPenalty":123,"topP":123,"filters":{"custom_ids":["<string>"],"datasource_ids":["<string>"]},"systemPrompt":"<string>","userPrompt":"<string>","promptType":"raw","promptTemplate":"<string>"}'
    };
    
    let aiResponse = await fetch('https://app.chaindesk.ai/agents/{id}/query', options);
      if (aiResponse.ok){
        let aiAnswer = await aiResponse.answer;
      }
    
      /*
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
    */
      return aiAnswer;
  }

const noteList = [
    {name: "Разведение калифорнийских червей", textContent: "Как разводить калифорнийских червей в домашних условиях", tag: "черви"},
    {name: "Полезные свойства червей", textContent: "Полезные свойства и применение калифорнийских червей", tag: "черви"},
    {name: "Уход за червями", textContent: "Основные моменты ухода за калифорнийскими червями", tag: "черви"},
    {name: "Выбор контейнера для червей", textContent: "Как выбрать подходящий контейнер для разведения червей", tag: "контейнер"},
    {name: "Продажа червей и их продуктов", textContent: "Возможности заработка на продаже червей и их продуктов", tag: "черви"}
];


const NotesApp = () => {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
      

    const [notes, setNotes] = useState(noteList);
    const [tags, setTags] = useState([...new Set(notes.map((item, i) => {return(item.tag)}))]);

    const [open, setOpen] = useState(false); 
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [noteText, setNoteText] = useState();
    const [noteTag, setNoteTag] = useState();
    const [noteName, setNoteName] = useState();

    const [activeTag, setActiveTag] = useState(notes[0].tag);

    //const inputTag = useRef();
    //const inputText = useRef();
    //const inputName = useRef();

    const handleSubmitNote = () => {
        handleClose();
        setTags(prevTags => {
            console.log([...prevTags, noteTag]);
            //return [...prevTags, noteTag];
            return [...new Set([...prevTags, noteTag])];
        });
        setNotes(prev => {
            return [...prev, {name: noteName, textContent: noteText, tag: noteTag}];
        });
    }

    const handleChangeActiveTag = (event) => {
        setActiveTag(event.target.value);
    }

    return (
            <div id = "page">
            
                
                <header id ="header">
                    {/*<Avatar alt = 'fedya' className="logo" src = "src\assets\fedya.png" sx = {{width:126, height:126}} variant='circle'></Avatar>*/}
                
                
                    <Button variant="contained" color="success" className="buttonNewNote" onClick={handleOpen}> Новая заметка </Button>
                    <Modal open={open} onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                        <Box sx={style}>
                            <Stack>
                                <TextField label='Тег' margin ="normal" value={noteTag} onChange = {(event) => {setNoteTag(event.target.value);}}>

                                </TextField>
                                <TextField label='Имя' margin ="normal" value={noteName} onChange = {(event) => {setNoteName(event.target.value);}}>

                                </TextField>
                                <TextField multiline margin ="normal" value={noteText} onChange = {(event) => {setNoteText(event.target.value);}}>

                                </TextField>
                                <Button variant="contained" color="success" onClick={handleSubmitNote}>Добавить</Button>
                            </Stack>
                        </Box>
                    </Modal>
                
                
                    <Avatar alt = 'user' className="avatar" sx = {{width:64, height:64}}></Avatar>
                </header>
    
                <nav id = "nav">
                    <RadioGroup value = {activeTag} onChange = { handleChangeActiveTag } className="radioGroup">
                       {
                       tags.map((item, i) => {
                            return(
                                <FormControlLabel control={<Radio />} label={item} value={item} className="radio"/>
                            );
                       })}
                    </RadioGroup>
                </nav>

                <main id = "main">
                    <Box >
                    <Masonry columns = {3} spacing = {2}>
                    { notes.map((item, i)=>{
                        if( item.tag === activeTag ){ 
                            return(
                                <Note name = {item.name}  text = {item.textContent}/>
                            );
                        }
                    }) }
                    </Masonry>
                    </Box>
                </main>
                <footer id = "footer">
                <Breadcrumbs>
                    <Link to="/">Основная</Link>
                    <Link to="/settings">Настройки</Link>
                </Breadcrumbs>
                </footer>
            
            </div>
    )
};

export default NotesApp;