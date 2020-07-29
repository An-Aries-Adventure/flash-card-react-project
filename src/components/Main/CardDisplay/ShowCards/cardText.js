import React, { Component } from 'react';
import '../../../../../src/App.css';
import axios from 'axios';



  
function cardText(props){
        return ( 
        <div class = 'card-grid'>
        <h1>{props.text}</h1>
         </div>
        );
}
{/* <cardText cardText="Hello" ></cardText>    */}

export default cardText;