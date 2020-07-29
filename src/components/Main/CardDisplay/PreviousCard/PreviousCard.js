import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';


class PreviousCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardChoices,
            currentCard: null,
            previousCard: null
    }
   }

   render(){
        return ( <button class = 'arrowback'>
        onClick={() => this.props.previousCard}
        </button>);
   }
}

export default PreviousCard;