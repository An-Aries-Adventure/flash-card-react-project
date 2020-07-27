import React from 'react';
import{Tab, Tabs} from 'react-bootstrap'


function tabNavigation() {
    return (
    <container>
      <div>
          <Tabs>
                <Tab>React</Tab>
                <Tab>JQeary</Tab>
          </Tabs>
      </div>
    </container>
    );
  }
  
  export default tabNavigation;