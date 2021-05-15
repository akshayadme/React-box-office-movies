import React, { useState,useCallback } from 'react';
import ActorGrid from '../actors/ActorGrid';
import MainPageLayout from '../MainPageLayout';
import { apiGet } from '../misc/Config';
import { useLastQuery } from '../misc/custom-hooks';
import ShowGrid from '../shows/ShowGrid';
import CustomRadio from './CustomRadio';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const renderResults = (results) => {
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


const Home = () => {
  const [input, setInput] = useLastQuery();
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

 

  const onInputChange = useCallback(e=>{setInput(e.target.value)},[setInput])

  const onRadioChange = useCallback(e=>{
    setSearchOptions(e.target.value);
  },[])


  return (
    <MainPageLayout>
      <SearchInput
        type="text"
        value={input}
        onChange={onInputChange}
        onKeyDown={onKeyDown}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio 
          label="Shows"
          id="shows-search"
          value="shows"
          checked={isShowSearch}
          onChange={onRadioChange}
          />
          
        </div>
          
        <div>  
        <CustomRadio 
          label="Actors"
          id="actors-search"
          value="people"
          checked={!isShowSearch}
          onChange={onRadioChange}
          />
         
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
      {renderResults(results)}
    </MainPageLayout>
  );
};

export default Home;
