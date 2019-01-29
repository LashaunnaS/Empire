import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { SearchTop, Form, SearchInput, SearchHeader, SearchBottom, SearchResults, SearchSlogan, Restaurant, RestaurantName, RestaurantDesc, ReserveTable, RestaurantPic, IconStyle, IconStyleDesc } from './searchStyle';

const API = 'https://opentable.herokuapp.com/api/restaurants?city=';

class Search extends Component {
    state = {
        cityQuery: 'Toronto',
        restaurantData: []
    }

    async componentDidMount() {
        await axios.get(`${API}${this.state.cityQuery}`)
        .then(data => {
            this.setState({
                restaurantData: data.data.restaurants
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    handleSearch = (event) => {
        this.setState({ cityQuery: event.target.value }, () => {
            if (this.state.query && this.state.query.length > 1) {
                if (this.state.query.length % 2 === 0) {
                    this.getInfo()
                }
            }
        })

        axios.get(`${API}${this.state.cityQuery}`)
            .then(data => {
                this.setState({
                    restaurantData: data.data.restaurants
                })
            })
            .catch(error => {
                console.log(error)
            })
    }


    render() {
        return (
            <Fragment>
                <SearchTop>
                    <SearchHeader>EMPIRE</SearchHeader>
                    <SearchSlogan>BOOK YOUR NEXT RESERVATION TODAY!</SearchSlogan>
                    <Form onSubmit={(e) => e.preventDefault()}>
                        <SearchInput
                            type='text'
                            placeholder="Location..."
                            value={this.state.cityQuery}
                            onChange={this.handleSearch}
                        />
                    </Form>
                </SearchTop>
                <SearchBottom>
                    <SearchResults>
                        {this.state.restaurantData.map(food => {
                            return (
                                <Restaurant key={food.id}>
                                    <RestaurantName>{food.name}</RestaurantName>
                                    <RestaurantDesc>
                                        <span style={{ padding: '0px 0.5em', color: '#c7cad3' }}>
                                        {food.price}/5 star rating
                                        </span>
                                        •
                                        <IconStyle>
                                        <i class="far fa-star fa-lg"></i>
                                        </IconStyle>
                                        <br /><br />
                                        <IconStyleDesc>
                                            {food.address}, {food.city}, {food.country}
                                        </IconStyleDesc>
                                    </RestaurantDesc>
                                    <ReserveTable>
                                        <a href={`tel:${food.phone}`}>
                                            <IconStyle>
                                                <i class="fas fa-mobile-alt fa-lg"></i>
                                            </IconStyle>
                                        </a>
                                        <a href={`${food.reserve_url}`} >
                                            <IconStyle>
                                                <i class="fas fa-globe-americas fa-lg"></i>
                                            </IconStyle>
                                        </a>
                                    </ReserveTable>
                                    <RestaurantPic picture={food.image_url} />
                                </Restaurant>
                            )
                        })}
                    </SearchResults>
                </SearchBottom>
            </Fragment>
        );
    }
}

export default Search;