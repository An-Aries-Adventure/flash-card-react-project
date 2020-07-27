import React from 'react';
import axios from 'axios';
import TabNavigation from './TabNavigation/tab-navigation';
import cardDisplay from './CardDisplay/cardDisplay.js';

class Main extends React.Component{
    state = {
        cardSet: []
    }

    componentDidMount(){
        axios.get('http://localhost:5000/api/collections')

    }
    render(){
        return(
            <div class = "container">
                <TabNavigation></TabNavigation>
                <div class = "appTitle">Flash Card App</div>
            </div>
            
            
      );
    }

}


export default Main;