import React from 'react';
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
    "word": document.getElementById("word").value,
    "definition":  document.getElementById("definition").value
    })    
  }
        
  render() {
    return (
      <form >
      <label>
        Word - 
        <input id ="word" type="text"/>
      </label>
      <label>
        Definition - 
        <input id = "definition" type="text"/>
      </label>
        <input type="submit" value="Submit" onClick={SubmitNewCard()}/>
      </form>
        );
  }
}

export default NewCardForm







