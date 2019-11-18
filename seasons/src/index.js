import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = { lat: null, errorMessage: ''}
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                })
            }
        );
    }
    render(){
        const {lat, errorMessage} = this.state;
        if (!lat && errorMessage){
            return <div> Error: {errorMessage} </div>
        }
        if (lat && !errorMessage){
            return <div> Lattitude: {lat} </div>
        }
        return <div> Loading... </div>
    }   
}
ReactDOM.render(
    <App />,
    document.querySelector("#root")
);