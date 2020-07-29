import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';

import CardText from './CardDisplay/ShowCards/CardText/cardText';



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
            <CardText currentFlashCard = {this.state.collections[0].cards[0].word}></CardText>
        </div>);
        }else{
            return <h1>Loading data...</h1>;
        }
    }
}






export default Main