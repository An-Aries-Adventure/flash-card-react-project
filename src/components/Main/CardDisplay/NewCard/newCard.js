import React from 'react';
import SubmitNewCard from '../NewCard/submitNewCard';
import axios from 'axios';




    class NewCardForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            word: '',
            definition: ''
            }  
        }
        SubmitNewCard=(word, definition)=>{
            axios.post('http://localhost:5000/api/collections',{
            "word": document.getElementById("Word").value,
            "definition":  document.getElementById("Definition").value
            })
         
    }
        render() {
          return (
            <form >
              <label>
                Word - 
                <input id = "Word" type="text"/>
              </label>
              <label>
               Definition - 
                <input id="Definition" type="text"/>
              </label>
              <input type="submit" value="Submit" onClick={SubmitNewCard()}/>
            </form>
          );
        }
    }

export default NewCardForm







