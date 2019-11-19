import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component{
    onFormSubmit =(term) => {
        console.log("From App"+ term)
    }
    render(){
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit = {this.onFormSubmit} />
            <ImageList/>
            </div>
        )
    }
}

export default App;