import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';


class PreviousCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardChoices,
            currentCard: props.cardChoices[i],
            previousCard: props.cardChoices[i] - 1
    }
   }

   render(){
        return ( <button class = 'arrowback'>
        onClick={() => this.props.previousCard}
        </button>);
   }
}

export default PreviousCard;