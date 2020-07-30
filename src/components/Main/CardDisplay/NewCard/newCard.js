import React from 'react';
import SubmitNewCard from '../NewCard/submitNewCard';





    class NewCardForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            word: '',
            definition: ''
        }

      
          this.handleChange = this.handleWordChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleWordChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A new word was submitted to this Collection');
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Word - 
                <input type="text" word ={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
               Definition - 
                <input type="text" definition ={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" onclick={SubmitNewCard()}/>
            </form>
          );
        }
      }

export default NewCardForm