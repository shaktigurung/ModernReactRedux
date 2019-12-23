import React from 'react';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import useLocation from './useLocation';

//Functional component
const App = () => {
     
    const [lat, errorMessage] = useLocation();
    let content;

    if(errorMessage){
        content = <div> Error: {errorMessage} </div>
    } else if (lat) {
        content = <SeasonDisplay lat={lat} />
    } else {
        content = <Spinner message = "Please accept location request" />
    }

    return (
        <div className="border red">
            {content}
        </div>
    );
}

// Class based component
// class App extends React.Component {
  
//     state = { lat: null, errorMessage: ''};

//     componentDidMount(){
//         window.navigator.geolocation.getCurrentPosition(
//             (position) => this.setState({lat: position.coords.latitude }),
//             (error) => this.setState({errorMessage: error.message})
//         );
//     }

//     renderContent(){
//         const {lat, errorMessage} = this.state;
//         if (!lat && errorMessage){
//             return <div> Error: {errorMessage} </div>
//         }
//         if (lat && !errorMessage){
//             return <SeasonDisplay lat={lat} />
//         }
//         return  <Spinner message = "Please accept location request" />
//     }

//     render(){
//         return(
//             <div className="border red">
//                 {this.renderContent()}
//             </div>
//         )
//     }   
// }

export default App;