import React, { Fragment } from "react";
import Header from '../../modules/molecules/Header/Header.js';
import Results from '../../modules/molecules/Results/Results.js';

const Search = (props) => {

  return (
    <Fragment>
      <Header
        cityQuery={props.city}
        handleSearch={props.handleSearch}
        placeHolder={`Location ...`}
      />
      <Results
        restaurantData={props.restaurantData}
        savedRestaurant={props.savedRestaurant}
        favourites={props.favourites}
      />
    </Fragment>
  );
}

export default Search;
