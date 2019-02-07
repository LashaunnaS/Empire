import React, { Component, Fragment } from "react";
import Header from '../../modules/molecules/Header/Header.js';
import Results from '../../modules/molecules/Results/Results.js';
import IconSymbol from '../../modules/atoms/IconSymbol/IconSymbol.js';

import axios from "axios";

import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const API = "https://opentable.herokuapp.com/api/restaurants?city=";


class Search extends Component {
  state = {
    cityQuery: "Toronto",
    restaurantData: [],
    favs: []
  };

  componentDidMount() {
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
  }

  handleSearch = event => {
    this.setState({ cityQuery: event.target.value });
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
      (
        <IconSymbol style={{ marginLeft: '0.5em' }}
          icon={faCheckCircle}
          size={`lg`}
        />
      )
      :
      (
        <IconSymbol style={{ marginLeft: '0.5em' }}
          icon={faPlusCircle}
          size={`lg`}
        />
      )
  );

  render() {
    return (
      <Fragment>
        <Header
          cityQuery={this.state.cityQuery}
          handleSearch={this.handleSearch}
        />
        <Results
          restaurantData={this.state.restaurantData}
          savedRestaurant={this.savedRestaurant}
          favourites={this.favourites}
        />
      </Fragment>
    );
  }
}

export default Search;
