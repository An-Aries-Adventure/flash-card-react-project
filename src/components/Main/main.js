import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';


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
        if(this.state.collections.length > 0){
            return ( <div class = "container">
            <TabNavigation collectionData={this.state.collections}></TabNavigation>
            <div class = "appTitle">Flash Card App</div>
            <h1>Number Of Collections: {this.state.collections.length}</h1>
        </div>);
        }else{
            return <h1>Loading data...</h1>;
        }
    }

}


export default Main;