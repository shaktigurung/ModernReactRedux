import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  
    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude }),
            (error) => this.setState({errorMessage: error.message})
        );
    }

    renderContent(){
        const {lat, errorMessage} = this.state;
        if (!lat && errorMessage){
            return <div> Error: {errorMessage} </div>
        }
        if (lat && !errorMessage){
            return <SeasonDisplay lat={lat} />
        }
        return  <Spinner message = "Please accept location request" />
    }

    render(){
        return(
            <div className="border red">
                {this.renderContent()}
            </div>
        )
    }   
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);