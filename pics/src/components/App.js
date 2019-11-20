import React, {Component} from 'react';
import unsplash from './../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends Component{

    state = { images: [] };

   onFormSubmit =  async (term) => {
       const response = await unsplash.get('/search/photos',{
           params: {query: term}
       });

       this.setState({images: response.data.results});
    }
    render(){
        const {images} = this.state;
        return (
            <div className="ui container" style={{marginTop: "10px"}}>
            <SearchBar onSubmit = {this.onFormSubmit} />
            <ImageList images={images} />
            </div>
        )
    }
}

export default App;