import React, { useState } from 'react';
import ActorGrid from '../actors/ActorGrid';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import ShowGrid from '../shows/ShowGrid';
import CustomRadio from './CustomRadio';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

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
      <SearchInput
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={onKeyDown}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio 
          label="Shows"
          id="shows-search"
          value="shows"
          checked={isShowSearch}
          onChange={e => setSearchOptions(e.target.value)}
          />
          
        </div>
          
        <div>  
        <CustomRadio 
          label="Actors"
          id="actors-search"
          value="people"
          checked={!isShowSearch}
          onChange={e => setSearchOptions(e.target.value)}
          />
          {/* <label htmlFor="actors-search">Actors
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={e => setSearchOptions(e.target.value)}
            />
            </label> */}
        </div> 
      </RadioInputsWrapper>
      <SearchButtonWrapper>
      <button
        type="button"
        placeholder="Search for Something..."
        onClick={onSearch}
        >
        Search
      </button>
        </SearchButtonWrapper>
      {renderResults()}
    </MainPageLayout>
  );
};

export default Home;
