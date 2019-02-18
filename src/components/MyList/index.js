import React, { Fragment } from "react";
import Header from '../../modules/molecules/Header/Header.js';
import Results from '../../modules/molecules/Results/Results';


const MyList = (props) => {
    return (
        <Fragment>
            <Header
                placeHolder={`Revisit...`}
                handleSearch={props.searchMyFavs}
            />
            <Results
                restaurantData={props.favRestaurantData}
                savedRestaurant={props.savedRestaurant}
                favourites={props.favourites}
            />
        </Fragment>
    )
}

export default MyList;