import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchBarHeader,
  SearchForm,
  SearchInput,
  SearchButton,
} from './Searchbar.styled';

export const SearchBar = ({ onSubmit }) => {
  const [searchItem, setSearchItem] = useState('');
  const [input, setInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchItem(input.trim());
    onSubmit(searchItem);

    e.target.reset();
  };
  const handleChange = e => {
    setInput(e.target.value);
  };

  return (
    <SearchBarHeader>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton>
          <BsSearch />
        </SearchButton>
        <SearchInput
          name="searchItem"
          type="text"
          id="search"
          value={input}
          onChange={handleChange}
        />
      </SearchForm>
    </SearchBarHeader>
  );
};