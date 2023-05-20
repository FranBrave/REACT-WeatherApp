import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Users() {
  const [isLoading, setIsLoading] = useState(false);
  const [numPage, setNumPage] = useState(1);
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const getUsers = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${numPage}`);
      const { results } = await response.json();
      setCharacterList(results);
      setIsLoading(false)
    }
    getUsers();
  }, [numPage]);

  const handlePrev = () => {
    setNumPage(numPage => numPage - 1);
  }

  const handleNext = () => {
    setNumPage(numPage => numPage + 1);
  }

  return (
    <div>
      <h3>Listado de personajes</h3>
      {isLoading ? <p>Cargando...</p> :
      <ul>
        {characterList?.length > 0 ? characterList.map(({ id, name }) =>
          <li key={id}>
            <Link to={`${id}`}>{name}</Link>
          </li>
        ) : <p>El listado está vacío</p>}
      </ul>}
      <div>
        <button onClick={handlePrev}>Prev</button>
        <span>{numPage}</span>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  )
}
