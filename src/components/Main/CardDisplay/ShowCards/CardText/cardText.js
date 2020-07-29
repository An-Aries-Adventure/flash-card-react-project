import React from 'react';
import '../../../../../../src/App.css';



  
function CardText(props){
        return ( 
        <div class = 'card-grid'>
        {props.currentFlashCard}
         </div>
        );
}


export default CardText;