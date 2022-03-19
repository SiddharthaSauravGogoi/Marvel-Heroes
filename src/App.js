import React, { useEffect, useState } from 'react';
import { getData } from './services/dataService';
import { formatHeroName } from './services/helper';
import { Search, Card } from './components';
import './main.css';

function App() {

  const [heroes, setHeroes] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false)

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
      .catch((error) => {
        setLoader(false)
        setError(true)
      })
  }, [])

  if (loader) return (
    <div className="container">
      Loading ...
    </div>
  )

  if (error) return (
    <div className="container">
      An error occurred. Please refresh the page or try again.
    </div>
  )

  return (
    <div className="container">
      <Search
        setHeroes={setHeroes}
      />
      <Card
        heroes={heroes}
      />
    </div>
  );
}

export default App;
