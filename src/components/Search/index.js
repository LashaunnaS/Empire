import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  SearchTop,
  Form,
  SearchInput,
  SearchHeader,
  SearchBottom,
  SearchResults,
  SearchSlogan,
  Restaurant,
  RestaurantName,
  RestaurantDesc,
  ReserveTable,
  RestaurantPic,
  IconStyle,
  IconStyleDesc
} from "./searchStyle";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faCircle, faMobileAlt, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons'

const API = "https://opentable.herokuapp.com/api/restaurants?city=";

const noDataStyle = {
  padding: "0px 0.5em 13em",
  color: "#c7cad3",
  textAlign: "center"
};

class Search extends Component {
  state = {
    cityQuery: "Toronto",
    restaurantData: [],
    favs: []
  };

  async componentDidMount() {
    await axios
      .get(`${API}${this.state.cityQuery}`)
      .then(data => {
        this.setState({
          restaurantData: data.data.restaurants
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearch = event => {
    this.setState({ cityQuery: event.target.value }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getInfo();
        }
      }
    });

    axios
      .get(`${API}${this.state.cityQuery}`)
      .then(data => {
        this.setState({
          restaurantData: data.data.restaurants
        });
      })
      .catch(error => {
        console.log(error);
      });
  };


  favourites = (id) => {
    const { favs } = this.state;
    favs.includes(id) ? this.removeFav(id) : this.addFav(id);
  }

  addFav = (id) => {
    const { favs } = this.state;
    if (favs.includes(id)) {
      return;
    } else {
      this.setState(prevState => ({
        favs: [...prevState.favs, id]
      }))
    }
  }

  removeFav = (id) => {
    const { favs } = this.state;

    let newFavs = favs.filter(x => x !== id);


    this.setState(() => ({
      favs: [...newFavs]
    }))
  }

  savedRestaurant = (id) => (
    this.state.favs.includes(id) ?
      (<FontAwesomeIcon
        icon={faCheckCircle}
        size="lg"
      />)
      :
      (<FontAwesomeIcon
        icon={faCircle}
        size="lg"
      />)
  );

  render() {
    return (
      <Fragment>
        <SearchTop>
          <SearchHeader>EMPIRE</SearchHeader>
          <SearchSlogan>BOOK YOUR NEXT RESERVATION TODAY!</SearchSlogan>
          <Form onSubmit={e => e.preventDefault()}>
            <SearchInput
              type="text"
              placeholder="Location..."
              value={this.state.cityQuery}
              onChange={this.handleSearch}
            />
          </Form>
        </SearchTop>
        <SearchBottom>
          <SearchResults>
            {this.state.restaurantData.length > 0 ? (
              this.state.restaurantData.map(food => {
                return (
                  <Restaurant key={food.id}>
                    <RestaurantName>{food.name}</RestaurantName>
                    <RestaurantDesc>
                      <span style={{ padding: "0px 0.5em", color: "#c7cad3" }}>
                        {food.price}/5 star rating
                      </span>
                      •
                      <IconStyle onClick={() => this.favourites(food.id)}>
                        {this.savedRestaurant(food.id)}
                      </IconStyle>
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
      </Fragment>
    );
  }
}

export default Search;
