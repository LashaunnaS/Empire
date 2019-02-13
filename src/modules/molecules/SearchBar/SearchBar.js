import React from 'react';
import { Link } from 'react-router-dom';

import { Navigation } from "./searchBarStyles";

import { faMapMarkerAlt, faConciergeBell } from '@fortawesome/free-solid-svg-icons'

import IconSymbol from '../../atoms/IconSymbol/IconSymbol.js'
import SearchForm from '../../atoms/SearchForm/SearchForm.js';

const SearchBar = (props) => (
  <Navigation>
    <Link to="/" style={{ paddingTop: '5px' }}>
        <IconSymbol style={{ padding: '6px 0em 6px 1em' }}  icon={faMapMarkerAlt}  size={`2x`}  />
    </Link>
    <SearchForm handleSearch={props.handleSearch} cityQuery= {props.cityQuery} placeHolder={props.placeHolder} />
    <Link to="/myList" style={{ padding: '14px 0em 0px 1em' }} >
        <IconSymbol 
            style={{ display: 'flex', alignSelf: 'center' }} 
            icon={faConciergeBell} 
            size={`lg`} 
        />
    </Link>
  </Navigation>
)


export default SearchBar;