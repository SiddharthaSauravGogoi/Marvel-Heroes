import React, { useEffect } from 'react';
import { getData } from './services/dataService';
import './main.css';

function App() {

  useEffect(() => {
    let heroesData = getData();
    heroesData
      .then((data) => console.log(data))
  }, [])

  return (
    <div className="container">
      Marvel Heroes
    </div>
  );
}

export default App;
