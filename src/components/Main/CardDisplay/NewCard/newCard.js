import React from 'react';
import SubmitNewCard from '../NewCard/submitNewCard';





    class NewCardForm extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            word: null,
            definition: null
        }

      
          this.handleChange = this.handleWordChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleWordChange(event) {
          this.setState({value: event.target.value});
        }
      
        handleSubmit(event) {
          alert('A new word was submitted to this Collection' + this.state.value);
          event.preventDefault();
        }
      
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Word - 
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
               Definition - 
                <input type="text" value={this.state.word} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" onclick={SubmitNewCard}/>
            </form>
          );
        }
      }

export default NewCardForm