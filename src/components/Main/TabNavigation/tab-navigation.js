import React from 'react';
import{Tab, Tabs} from 'react-bootstrap'


function TabNavigation(props) {

    const tabItems = props.collectionData.map((collection) => {
      return <Tabs eventKey = {collection.title} title={collection.title}></Tabs>
      });
      
    return (
    <container>
      <div>
        <button class = "navbutton">
          {props.collectionData[0].title}
        </button>  
        <button class = "navbutton">
        {props.collectionData[1].title}
        </button> 
      </div>
    </container>
    );
  }
  
  export default TabNavigation;