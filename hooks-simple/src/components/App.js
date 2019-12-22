//Class based Component
// import React, { Component } from 'react';
// import ResourceList from './ResourceList';

// export default class App extends Component {
//     state = { resourse: 'Resourse list' };
  
//     render() {
//         return (
//             <div>
//                 <div>
//                     <button onClick={()=> this.setState({resourse: 'posts'})}>Posts</button>
//                     <button onClick={()=> this.setState({resourse: 'Todos'})}>Todos</button>
//                 </div>
//                 <div>
//                     <ResourceList list={this.state.resourse} />
//                 </div>
//             </div>
//         )
//     }
// }

//Functional Component with hooks
import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
    const [resourse, setResourse] = useState('posts');

    return (
        <div>
             <UserList />
            <div>
                <button onClick={()=> setResourse('posts')}>Posts</button>
                <button onClick={()=> setResourse('todos')}>Todos</button>
            </div>
            <div>
               <ResourceList list = {resourse} />
            </div>
        </div>
    )
}


export default App;