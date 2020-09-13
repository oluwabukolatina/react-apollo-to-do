import React from 'react';
import './App.css';
import AddPerson from './components/AddPerson';
// import Launches from './Launches';
import Query from './components/Query';

function App() {
  return (
    <div className="App">
      {/* <ExchangeRates/> */}
      {/* <Launches/> */}
      <Query />
      <AddPerson/>
      </div>
  );
}

export default App;
