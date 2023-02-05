import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import { SearchWrapper, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled';


import { useState } from 'react';
import toast from 'react-hot-toast';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const formatSearchQuery = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  const onSearchQuerySubmit = event => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      return toast('Please enter search name!', {
        icon: '😕',
      });
    }
    onSubmit(searchQuery);
    setSearchQuery('');

  };

  return (
    <SearchWrapper>
      <SearchForm onSubmit={onSearchQuerySubmit}>
        <SearchFormInput
          type='text'
          name='search'
          autoComplete='off'
          autoFocus
          placeholder='Search movie'
          value={searchQuery}
          onChange={formatSearchQuery}
        />
        <SearchFormBtn type='submit'>
          <FcSearch style={{ width: 30, height: 30 }} />
        </SearchFormBtn>
      </SearchForm>
    </SearchWrapper>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
