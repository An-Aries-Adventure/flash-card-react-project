import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';
import cardText from '../Main/CardDisplay/ShowCards/cardText';
import { Container } from 'react-bootstrap';


axios.post('https:sample-endpoint.com/user', {
    Name: 'Fred',
    Age: '23'
  })
  .then(function (response) {
    console.log(response);
  })


    function submitNewCard(props){
        axios.post('http://localhost:5000/api/collections')
        .then( getAllCollections())
    }

    // componentDidMount(){
    //     this.postNewCard()
    // }
    function newCardForm(props){
        <container class = "newform">
            <form>
                <div>
                    <li>{sideOneInput = prompt ("Please type the information you would like displayed on side 1.")}</li>
                </div>
                <br />
                <div>
                    <li>{sideTwoInput = prompt ("Please type the information you would like displayed on side 2.")}</li>
                </div>

            </form>
            <button class = "submit">Submit
                onclick {() => submitNewCard()}
            </button>
        </container>
    }

export default newCardForm