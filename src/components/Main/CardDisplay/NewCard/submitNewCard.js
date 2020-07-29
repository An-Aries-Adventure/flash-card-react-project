import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';
import newCardForm from '../../CardDisplay/NewCard/newCard';
import { Container } from 'react-bootstrap';


function submitNewCard(props){
    axios.post('http://localhost:5000/api/collections')
    .then( getAllCollections())
}