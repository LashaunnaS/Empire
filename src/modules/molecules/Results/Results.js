import React from 'react';
import IconSymbol from '../../atoms/IconSymbol/IconSymbol.js'
import {
    SearchBottom,
    SearchResults,
    Restaurant,
    RestaurantName,
    RestaurantDetails,
    ReserveTable,
    RestaurantPic,
    ConnectText,
    ConnectLink,
    RestaurantDesc,
} from "./resultsStyle";

import { faMobileAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const noDataStyle = {
    padding: "0px 0.5em 13em",
    color: "#c7cad3",
    textAlign: "center"
};

const Results = (props) => (
    <SearchBottom>
        <SearchResults>
            {props.restaurantData.length > 0 ? (
                props.restaurantData.map(food => {
                    return (
                        <Restaurant key={food.id}>
                            <RestaurantName>{food.name}</RestaurantName>
                            <RestaurantDetails>
                                <span style={{ padding: "0px 0.5em", color: "#c7cad3" }}>
                                    {food.price}/5 star rating
                                </span>
                                •
                                <span onClick={() => props.favourites(food)}>
                                    {props.savedRestaurant(food.id)}
                                </span>
                                <br />
                                <br />
                                <RestaurantDesc>
                                    {food.address}, {food.city}, {food.country}
                                </RestaurantDesc>
                            </RestaurantDetails>

                            <ReserveTable>
                                <ConnectText>Phone:</ConnectText>
                                <ConnectLink href={`tel:${food.phone}`}>
                                    <IconSymbol
                                        style={{ marginRight: '2em' }}
                                        icon={faMobileAlt} size={`lg`} />
                                </ConnectLink>

                                <ConnectText> Website:</ConnectText>
                                <ConnectLink href={`${food.reserve_url}`}>
                                    <IconSymbol
                                        icon={faGlobeAmericas}
                                        size={`lg`}
                                    />
                                </ConnectLink>
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

export default Results;
