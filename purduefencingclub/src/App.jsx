import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectSource from './components/SelectSource/index';


/* class App extends React.PureComponent {
  componentDidMount() {

      gapi.client.init({
      apiKey: process.env.REACT_APP_GOOGLE_DRIVE_API_KEY, 
      clientId: process.env.REACT_APP_GOOGLE_DRIVE_CLIENT_ID  
    });
    
  }

  render () {
    return (
      <div className="App">
        <CarouselComponent />
      </div>
    );
  }

} 

export default App; */


function App() {
  return (
    <div className="App">
      <SelectSource />
    </div>
  );
}

export default App;