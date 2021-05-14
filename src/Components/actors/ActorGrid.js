import React from 'react';
import ActorCard from './ActorCard';
import notFound from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <>
      {data.map(({ person }) => {
        return (
          <ActorCard
            key={person.id}
            name={person.name}
            country={person.country ? person.country.name : null}
            birthday={person.birthday}
            deathday={person.deathday}
            gender={person.gender}
            image={person.image ? person.image.medium : notFound}
          />
        );
      })}
    </>
  );
};

export default ActorGrid;
