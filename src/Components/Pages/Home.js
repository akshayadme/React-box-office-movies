import React, { useState } from 'react';
import ActorGrid from '../actors/ActorGrid';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import ShowGrid from '../shows/ShowGrid';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchOptions, setSearchOptions] = useState('shows');

  const isShowSearch = searchOptions === 'shows';

  const onSearch = async () => {
    const result = await apiGet(`/search/${searchOptions}?q=${input}`);
    setResults(result);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) onSearch();
  };

  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Results Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };
  return (
    <MainPageLayout>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="shows-search">Shows</label>
        <input
          type="radio"
          id="shows-search"
          value="shows"
          checked={isShowSearch}
          onChange={e => setSearchOptions(e.target.value)}
        />
        <label htmlFor="actors-search">Actors</label>
        <input
          type="radio"
          id="actors-search"
          value="people"
          checked={!isShowSearch}
          onChange={e => setSearchOptions(e.target.value)}
        />
      </div>
      <button
        type="button"
        placeholder="Search for Something..."
        onClick={onSearch}
      >
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
