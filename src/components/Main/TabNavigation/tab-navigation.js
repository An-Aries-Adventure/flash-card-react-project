import React from 'react';
import{Tab, Tabs} from 'react-bootstrap'


function TabNavigation(props) {

    const tabItems = props.collectionData.map((collection) => {
      return <Tab>{collection.title}</Tab>
      });
      
    return (
    <container>
      <div>
          <Tabs>
            {tabItems}
          </Tabs>
      </div>
    </container>
    );
  }
  
  export default TabNavigation;