import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';
import ShowCard from '../Main/CardDisplay/ShowCards/ShowCard';



class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections: []

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
        return(
        <div class = 'card-grid'>
            
            <TabNavigation>cardData={this.state.collections}</TabNavigation>
            <h1>Number Of Collections: {this.state.collections.length}</h1>
        </div>
        <div>
            <ShowCard>{this.state.currentQuestion}</ShowCard>
        </div>
        );
    }
         
}
      






export default Main;