import React from 'react';
import '../../../App.css';
import axios from 'axios';
import {Tabs, Tab} from 'react-bootstrap' 




class GetData extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            collections: []

        }
    }

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
        return (
        <div>
            <h4>List of Collections: {this.state.collections.length}</h4>
        </div>
    )


}
}

export default GetData; 
