import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';
import cardText from './CardDisplay/ShowCards/cardText';



class Main extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            collections: [],
            currentTab: null,
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
            <TabNavigation collectionData={this.state.collections}></TabNavigation>
            <div class = "appTitle">Flash Card App</div>
            <h1>Number Of Available Collections: {this.state.collections.length}</h1>
            {/* <cardText cardText="Hello" ></cardText>    */}
        </div>);
        }else{
            return <h1>Loading data...</h1>;
        }
    }
}






export default Main