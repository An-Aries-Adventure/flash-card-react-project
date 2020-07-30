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
            currentCardNumber: 1,
            side1: null, 
            side2: null

        };
    };

    getAllCollections(){
        axios.get('http://localhost:5000/api/collections')
        .then((res) =>{
            console.log(res);
            const collections = res.data;
            this.setState({collections: collections});
        })
    }

    componentDidMount(){
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
            
            <NewCardForm></NewCardForm>
        </div>);
        }else{
            return <h1>Loading data...</h1>;
        }
    }
}






export default Main