import React, { Component } from 'react';
import '../../../../src/App.css';
import axios from 'axios';




function advanceCard(){
        return ( <button class = 'arrowforward'>
        onClick={() => this.props.nextCard}
        </button>);
   }

export default advanceCard;