
//Class Based Component
// import React, { Component } from 'react';
// import axios from 'axios';

// class ResourceList extends Component {
//     state = {resources: []};
  
//     async componentDidMount(){
//         const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.list}`);
//         this.setState({resources: response.data});
//     }

//     async componentDidUpdate(prevProps){
//         if(prevProps.list !== this.props.list) {
//             const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.list}`);
//             this.setState({resources: response.data});
//         }
//     }

//     render() {
//         return (
//             <div>
//                 {this.state.resources.length}
//             </div>
//         )
//     }
// }

// export default ResourceList;

//Functional Component
import React from 'react';
import {useResources} from './useResources';

const ResourceList = ({list}) => {
    const resources = useResources(list);
    return (
        <ul> 
            {resources.map(record => (
                <li key={record.id}> {record.title} </li>
                ))} 
        </ul> 
    );  
}

export default ResourceList;
