import React from 'react';
import{Tab, Tabs} from 'react-bootstrap'


function TabNavigation(props) {

    const tabItems = props.collectionData.map((collection) => {
      return <Tab eventKey = {collection.title} title={collection.title}></Tab>
      });
      
    return (
    <container>
      <div>
        <Tabs 
          defaultActiveKey={props.collectionData[0].title}
          onSelect={"C#"}
        >
          {tabItems}
        </Tabs>
      </div>
    </container>
    );
  }
  
  export default TabNavigation;