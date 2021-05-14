import React from 'react';
import ShowCard from './ShowCard';
import notFound from '../../images/not-found.png';

const ShowGrid = ({ data }) => {
  return (
    <>
      {data.map(({ show }) => {
        return (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            image={show.image ? show.image.medium : notFound}
            summary={show.summary}
          />
        );
      })}
    </>
  );
};

export default ShowGrid;
