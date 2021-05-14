import React, { useState } from 'react';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';

const Home = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = async () => {
    const result = await apiGet(`/search/shows?q=${input}`);
    // console.log(result);
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
      return (
        <div>
          {results.map((data, index) => {
            return <div key={index}>{data.show.name}</div>;
          })}
        </div>
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
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
