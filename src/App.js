import React, { Component } from 'react';
import Search from './components/Search';
import MyList from './components/MyList';
import { AppBg } from './appStyles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import IconSymbol from './modules/atoms/IconSymbol/IconSymbol.js';
import { faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

const API1 = "https://opentable.herokuapp.com/api/restaurants?city=";

class App extends Component {
  state = {
    cityQuery: "Toronto",
    restaurantData: [],
    favs: [],
    favRestaurantData: []
  };

  // Grab home page restaurant data
  componentDidMount = async () => {
    let data = await axios.get(`${API1}${this.state.cityQuery}`)
    this.setState({ restaurantData: data.data.restaurants });
  }

  // search for a restaurant based on location
  handleSearch = event => {
    this.setState({ cityQuery: event.target.value });
    axios
      .get(`${API1}${this.state.cityQuery}`)
      .then(data => {
        this.setState({
          restaurantData: data.data.restaurants
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  // check if restaurant is in the favs list to be added : remove it
  favourites = (restaurant) => {
    const { favs } = this.state;
    favs.includes(restaurant.id) ? this.removeFav(restaurant) : this.addFav(restaurant);
  }

  // If in favs list return : add

  addFav = (restaurant) => {
    const { favs } = this.state;

    if (favs.includes(restaurant.id)) {
      return;
    } else {
      this.setState(prevState => ({
        favs: [...prevState.favs, restaurant.id]
      }))
      this.setState(prevState => ({
        favRestaurantData: [...prevState.favRestaurantData, restaurant]
      }))
    }
  }

  // remove fav from list
  removeFav = (restaurant) => {
    const { favs, favRestaurantData } = this.state;

    let newFavs = favs.filter(x => x !== restaurant.id);
    let newFavsData = favRestaurantData.filter(x => x.id !== restaurant.id);

    this.setState({ favs: [...newFavs] });

    this.setState({ favRestaurantData: [...newFavsData] })
    // console.log(newFavsData)

  }

  // render check icon if the restaurant is favourited
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
    const { cityQuery, restaurantData, favRestaurantData } = this.state;
    const { handleSearch, favourites, savedRestaurant } = this;


    return (
      <Router>
        <AppBg>
          <Switch>
            <Route exact path="/"
              render={() =>
                <Search
                  city={cityQuery}
                  handleSearch={handleSearch}

                  savedRestaurant={savedRestaurant}
                  restaurantData={restaurantData}
                  favourites={favourites}
                />
              }
            />

            <Route exact path="/myList"
              render={() =>
                <MyList
                  favRestaurantData={favRestaurantData}
                  savedRestaurant={savedRestaurant}
                  favourites={favourites}
                />
              }
            />
          </Switch>
        </AppBg>
      </Router>
    );
  }
}

export default App;
