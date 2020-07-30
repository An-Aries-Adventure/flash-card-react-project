import React from 'react';
import axios from 'axios';
import Main from '../../../Main/main';



function SubmitNewCard(id, word, definition){
        axios.post('http://localhost:5000/api/collections',{
        word: '',
        definition: ''
        })
        .then( 
            (response) => { 
                let result = response.data; 
                console.log(result); 
            }, 
            (error) => { 
                console.log(error); 
            } 
        ); 
}

export default SubmitNewCard