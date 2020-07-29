import React, { Component } from 'react';
import '../../../../../src/App.css';
import axios from 'axios';



  
function cardText(){
        return ( 
        <div class = 'card-grid'>
        <h1>{this.props.cardText}</h1>
         </div>
        );
}

export default cardText();