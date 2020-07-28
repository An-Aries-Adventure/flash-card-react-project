import React, { Component } from 'react';
import '../../../../../src/App.css';
import axios from 'axios';


class ShowCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards: props.cardChoices,
            currentCard: props.cardChoices[0]
    }
   }

   render(){
        return ( <div class = 'card-grid'>
        <ShowCard currentQuestion ={this.state.currentCard}></ShowCard>
    </div>);
   }
}

export default ShowCard;