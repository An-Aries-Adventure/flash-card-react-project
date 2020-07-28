import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';
import GetData from './GetCardData/getData';


class Main extends React.Component{
    state = {
        cardCollection: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/collections')

        

    }
    render(){
        return(
            <div class = "container">
                <TabNavigation></TabNavigation>
                <div class = "appTitle">Flash Card App</div>
                <div><GetData></GetData></div>
            </div>
            
            
      );
    }

}


export default Main;