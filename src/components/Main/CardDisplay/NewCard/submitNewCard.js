import React from 'react';
import axios from 'axios';
import Main from '../../../Main/main';



function SubmitNewCard(word, definition){
        axios.post('http://localhost:5000/api/collections',{
        "word": '',
        "definition": ''
        })
        return(<div></div>);
}

export default SubmitNewCard