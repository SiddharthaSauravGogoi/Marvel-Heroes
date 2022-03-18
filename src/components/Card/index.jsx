import React from 'react';

export default function Card({ heroes }) {
  return (
    <ul className='grid'>
      {heroes.map((character) => (
        <li key={character.id} className="card">
          <div className="thumbnail">
            <figure className="img__wrapper">
              <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
            </figure>
          </div>
          <div className="card-body">
            <p className="card-body__heading">
              {character.newName ? character.newName : character.name}
            </p>
            <p className="card-body__alt-name">
              {character.altName}
            </p>
          </div>
        </li>
      ))}
    </ul>
  )
}
