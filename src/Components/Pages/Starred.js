import React, { useState, useEffect } from 'react';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import { useShows } from '../misc/custom-hooks';
import ShowGrid from '../shows/ShowGrid';

const Starred = () => {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));
      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [starred]);

  return (
    <MainPageLayout>
      {loading && <div>Shows are still Loading...</div>}
      {error && <div>Error occured : {error}</div>}
      {!loading && !shows && <div> No Shows are added for starred </div>}
      {!loading && !error && shows && <ShowGrid data={shows} />}
    </MainPageLayout>
  );
};

export default Starred;
