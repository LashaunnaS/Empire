import React from 'react';

import {
    SearchBottom,
    SearchResults,
    Restaurant,
    RestaurantName,
    RestaurantDesc,
    ReserveTable,
    RestaurantPic,
    IconStyle,
    IconStyleDesc,
} from "./resultsStyle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const noDataStyle = {
    padding: "0px 0.5em 13em",
    color: "#c7cad3",
    textAlign: "center"
};

const Reasults = (props) => (
    <SearchBottom>
        <SearchResults>
            {props.restaurantData.length > 0 ? (
                props.restaurantData.map(food => {
                    return (
                        <Restaurant key={food.id}>
                            <RestaurantName>{food.name}</RestaurantName>
                            <RestaurantDesc>
                                <span style={{ padding: "0px 0.5em", color: "#c7cad3" }}>
                                    {food.price}/5 star rating
                                </span>
                                •

                                <span onClick={() => props.favourites(food.id)}>
                                    {props.savedRestaurant(food.id)}
                                </span>

                                <br />
                                <br />
                                <IconStyleDesc>
                                    {food.address}, {food.city}, {food.country}
                                </IconStyleDesc>
                            </RestaurantDesc>
                            <ReserveTable>
                                <a href={`tel:${food.phone}`}>
                                    <IconStyle>
                                        <FontAwesomeIcon
                                            icon={faMobileAlt}
                                            size="lg"
                                        />
                                    </IconStyle>
                                </a>
                                <a href={`${food.reserve_url}`}>
                                    <IconStyle>
                                        <FontAwesomeIcon
                                            icon={faGlobeAmericas}
                                            size="lg"
                                        />
                                    </IconStyle>
                                </a>
                            </ReserveTable>
                            <RestaurantPic picture={food.image_url} />
                        </Restaurant>
                    );
                })
            ) : (
                    <span style={noDataStyle}>
                        <h1>
                            Sorry, doesn't look like you have the right city. Please enter
                            a valid location in the search field above!
                </h1>
                    </span>
                )}
        </SearchResults>
    </SearchBottom>
);

export default Reasults;
