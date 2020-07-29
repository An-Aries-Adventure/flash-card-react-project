import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';


class AdvanceCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardChoices,
            currentCard: null,
            nextCard: null
    }
   }

   render(){
        return ( <button class = 'arrowforward'>
        onClick={() => this.props.nextCard}
        </button>);
   }
}

export default AdvanceCard;