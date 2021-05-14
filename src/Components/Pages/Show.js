import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/Config';

import ShowMainData from '../shows/ShowMainData';
import Seasons from '../shows/Seasons';
import Cast from '../shows/Cast';
import Details from '../shows/Details';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { ...prevState, loading: false, show: action.show, error: null };
    }
    case 'FETCH_FAILED': {
      return { ...prevState, loading: false, error: action.error };
    }

    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  loading: true,
  error: null,
};

const Show = () => {
  const { id } = useParams();

  const [{ show, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    let isMounted = true;
    apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`)
      .then(results => {
        if (isMounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: results });
        }
      })
      .catch(err => {
        if (isMounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
        }
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  if (loading) {
    return <div>Data is loading...</div>;
  }

  if (error) {
    return <div>Error Occured : {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainData
        image={show.image}
        name={show.name}
        rating={show.rating}
        summary={show.summary}
        tags={show.genres}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>
      <InfoBlock>
        <h2>Seasons</h2>
        <Seasons seasons={show._embedded.seasons} />
      </InfoBlock>
      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
