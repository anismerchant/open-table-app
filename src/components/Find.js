import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { Empty, Input } from 'antd';
import getResult from '../actions/result';
import Result from './Result';

const { Search } = Input;

const apiEndpoint = 'https://opentable.herokuapp.com/api/restaurants';
const queryString = '?city=';

const styles = {
  cardContaier: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItem: 'center',
  },
  resultContainer: {
    margin: 5
  },
  bodyContainer: {
    height: 'auto',
    position: 'relative', 
  },
  imgContainer: {
    margin: 'auto',
    width: '95%',
    maxHeight: '35rem',
    opacity: '0.7',
    filter: 'brightness(60%) contrast(90%)',
  },
  text: {
    fontSize: '4vh',
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    top: '25%',
    left: '8%',
    width: '80%',
    lineHeight: 1,
  },
  searchContainer: {
    width: '70%',
    height: 40,
    position: 'absolute',
    top: '60%',
    left: '16%',
  },
  resultHeading: {
    display: 'inline-block',
    fontSize: '3vh',
    city: {
      display: 'inline-block',
      paddingLeft: 10,
      fontWeight: 'bold',
      fontSize: '3vh',
    }
  }
}

class Find extends Component {
    state = {
      city: ''
    }

    // Capture city input
    onSearchResults = (e) => {
      const city = e.target.value;
      if (city) {
        this.setState(() => ({ city }))
      }
      if(!city) {
        this.setState(() => ({ city: '' }))
        return this.clearResult();
      }
    }

    // Api call
    onKeyUp = () => {
      try {
        if (this.state.city) {
          axios.get(`${apiEndpoint}${queryString}${this.state.city}`)
          .then(response => 
            this.props.dispatch(getResult({data: response.data})
          ));
        }
      }
      catch (error) {
        console.log(error.status())
      }
    }

    // Display results
    showResult = () => {
      const {restaurants} = this.props.result
      if (restaurants) {
        if(!restaurants.length) {
          return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No Restaurants Found.'/>
        }
        if(!this.state.city) {
          return <div></div>
        }
        return restaurants.map(restaurant => {
          return <Result style={styles.resultContainer} key={restaurant.id} {...restaurant} />
        })
      }  
    }

    // Clear results
    clearResult = () => {
      if(!this.state.city) {
        return this.showResult();
      }
    }

    render() {
        return (
            <div>   
                <form onKeyUp={this.onKeyUp} onSubmit={(e) => e.preventDefault()}>
                    <div style={styles.bodyContainer}>
                      <img style={styles.imgContainer} src='./assets/images/restaurant-large.jpg' alt="restaurant" />
                      <p style={styles.text}>Find your table for any occasion</p>
                      <Search
                        type="text"
                        placeholder="City"
                        autoFocus
                        onChange={this.onSearchResults}
                        style={styles.searchContainer}
                      />
                    </div>
                </form>
                <p style={styles.resultHeading}>Popular restaurants in</p>
                <div style={styles.resultHeading.city}>{this.state.city}</div>
                <div style={styles.cardContaier}>
                  {this.showResult()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      result: state.result
    }
}

export default connect(mapStateToProps)(Find);
