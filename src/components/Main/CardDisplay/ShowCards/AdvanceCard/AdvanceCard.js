import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';


class AdvanceCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardChoices,
            currentCard: props.cardChoices[i],
            nextCard: props.cardChoices[i] + 1 
    }
   }

   render(){
        return ( <button class = 'arrowforward'>
        onClick={() => this.props.onClick()}
        </button>);
   }
}

export default AdvanceCard;