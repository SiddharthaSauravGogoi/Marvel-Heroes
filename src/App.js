import React, { useEffect, useState } from 'react';
import { getData } from './services/dataService';
import { formatHeroName } from './services/helper';
import Card from './components/Card';
import './main.css';

function App() {

  const [heroes, setHeroes] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    let heroesData = getData();
    heroesData
      .then((response) => {
        setLoader(false)
        let heroesWithFormattedName = response.data.results.map((hero) => {
          return formatHeroName(hero)
        })
        setHeroes(heroesWithFormattedName)
      })
  }, [])

  if (loader) return (
    <div className="container">
      Loading ...
    </div>
  )

  return (
    <div className="container">
      <Card heroes={heroes} />
    </div>
  );
}

export default App;
