import React from 'react';
import axios from 'axios';
import Main from '../../../Main/main';



function SubmitNewCard(props){
        axios.post('http://localhost:5000/api/collections',{
        word: null,
        definition: null
        })
      
}

export default SubmitNewCard