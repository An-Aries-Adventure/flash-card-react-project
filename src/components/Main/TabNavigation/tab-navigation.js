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
          <Tab eventkey ="available tabs" title={this.collections[0].title[0]}>
            <h5>{tabItems}</h5>
          </Tab>
        </Tabs>
      </div>
    </container>
    );
  }
  
  export default TabNavigation;