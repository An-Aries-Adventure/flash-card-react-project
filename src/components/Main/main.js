import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import NewCardForm from '../Main/CardDisplay/NewCard/newCard';
import CardText from './CardDisplay/ShowCards/CardText/cardText';
import CardDefinition from '../Main/CardDisplay/ShowCards/CardText/cardDefinition';


class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections: [],
            currentTab: null,
            activeCards: [],
            currentCollectionIndex: null,
            side1: null, 
            side2: null

        };
    };

   getAllCollections(){
        axios.get('http://localhost:5000/api/collections')
        .then((res) =>{
            console.log(res);
            const collections = res.data;
            this.setState({collections: collections, currentCollectionIndex: 0});
        })

    }

    componentDidMount(){
        this.getAllCollections()
    }

    

    SubmitNewCard(){
        let word = document.getElementById("word").value;
        let definition =  document.getElementById("definition").value;

        alert('word ' + word);
        alert('definition', definition);

        
        axios.post('http://localhost:5000/api/collections/'+ this.state.collections[this.state.currentCollectionIndex]._id +'/cards',{
        "word": word,
        "definition":  definition
        }).then((res) => {
            console.log('res', res);
        }).catch((err) => {
            console.log('err', err);
        });

        // axios.post('http://localhost:5000/api/collections/'+ this.state.collections[this.state.currentCollectionIndex]._id +'/cards',{
        // "word": document.getElementById("word").value,
        // "definition":  document.getElementById("definition").value
        // })
        this.getAllCollections()    
        }
            

    render(){
        if(this.state.collections.length > 0){
            return ( <div class = "container">
            <br />
            <TabNavigation collectionData={this.state.collections}></TabNavigation>
            <br />
            <div class = "appTitle">
            <h1>Flash Card App</h1></div>
            <h1>Number Of Available Collections: {this.state.collections.length}</h1>
            <div>
            <h3>The word is:<CardText currentSideOne = {this.state.collections[0].cards[0].word}></CardText></h3>
            </div>
            <div>
            <h3>The definition is:<CardDefinition currentSideTwo = {this.state.collections[0].cards[0].definition}></CardDefinition></h3>
            </div> 
            
            <form >
          <label>
            Word - 
            <input id ="word" type="text"/>
          </label>
          <label>
            Definition - 
            <input id = "definition" type="text"/>
          </label>
            <input type="submit" value="Submit" onClick={() => this.SubmitNewCard()}/>
          </form>
            );
        </div>);
        }else{
            return <h1>Loading data...</h1>;
        }
    }
}






export default Main