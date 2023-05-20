import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function UserDetail() {
  const { idUser } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState({});

  useEffect(() => {
    setIsLoading(true);
    const getUser = async () => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${idUser}`);
      const data = await response.json();
      setCharacter(data);
      setIsLoading(false)
    }
    getUser();
  }, [idUser]);

  return (
    <div>
      {isLoading ? <p>Cargando...</p> : <>
        <p>Name: {character.name}</p>
        <img src={character.image} alt="img-profile"/>
      </>}
    </div>
  )
}
