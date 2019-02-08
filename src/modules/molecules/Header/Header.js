import React from 'react';
import {
  SearchTop,
  SearchHeader,
  SearchSlogan,
} from "./headerStyles";

import SearchBar from '../SearchBar/SearchBar.js'

const Header = (props) => (
  <SearchTop>
    <SearchHeader>EMPIRE</SearchHeader>
    <SearchSlogan>BOOK YOUR NEXT RESERVATION TODAY!</SearchSlogan>
    <SearchBar props={props} placeHolder={props.placeHolder} />
  </SearchTop>
)

export default Header;
