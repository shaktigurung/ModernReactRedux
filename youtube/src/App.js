import React from 'react';
import youtube from './api/youtube'
import SearchBar from './components/SearchBar';

class App extends React.Component {
  
 state={videos: []};

 onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    })
    this.setState({videos: response.data.items})
  };

  render(){
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;
