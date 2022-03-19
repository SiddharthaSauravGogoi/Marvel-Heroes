import React from 'react';
import { debounce } from 'lodash';
import { getHeroMatches } from '../../services/dataService';
import { formatHeroName } from '../../services/helper';

export default function Search({
  setHeroes
}) {

  /**
   * Function is debounced and only runs if search term is not empty.
   * Accepts any number, string and '-'. 
   * Hero names are awkward and I think they can start from anything (special characters)
   * So the regex validation should be very tricky imo. For now
   * it's just a basic one
   */
  const handleHeroSearch = debounce((event) => {
    if (
      event.target.value.length
      && event.target.value.match(/^[a-zA-Z0-9._-]+$/)
    ) {
      let heroMatchResults = getHeroMatches(event.target.value)
      heroMatchResults
        .then((response) => {
          let heroesWithFormattedName = response.data.results.map((hero) => {
            return formatHeroName(hero)
          })
          setHeroes(heroesWithFormattedName)
        })
    }
  }, 300)

  return (
    <input
      name='search'
      type="text"
      placeholder='THO..'
      onChange={(event) => handleHeroSearch(event)}
    />
  )
}
