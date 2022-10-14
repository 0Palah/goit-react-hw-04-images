import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { SearchIcon } from './svg/icon';
import { useState } from 'react';

const Searchbar = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChangeInp = evt => setSearchValue(evt.target.value);

  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <SearchIcon />
        </button>

        <input
          onChange={handleChangeInp}
          name="serchInput"
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchValue}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
