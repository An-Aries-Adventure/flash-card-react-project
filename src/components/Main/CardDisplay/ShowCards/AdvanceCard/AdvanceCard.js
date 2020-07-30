import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';




function advanceCard(){
        return ( <button class = 'arrowforward'>
        onClick={() => this.props.nextCard}
        </button>);
   }

export default advanceCard;


incrementCount() {
    this.setState((state) => {
      // Important: read `state` instead of `this.state` when updating.
      return {count: state.count + 1}
    });
  }

export default CardText;