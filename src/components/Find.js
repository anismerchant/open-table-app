import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BackTop, Empty, Input } from 'antd'
import getResult from '../actions/result'
import Result from './Result'
import { API_ENDPOINT, QUERY_STRING } from '../api'

const { Search } = Input

export class Find extends Component {
  state = {
    city: ''
  }

  // Capture city input
  onChange = (e) => {
    const city = e.target.value
    if(!city) {
      this.setState(() => ({ city: '' }))
      return this.clearResult()
    }
    this.setState(() => ({ city }))
  }

  // Api call
  onKeyUp = () => {
    if (this.state.city) {
      axios.get(`${API_ENDPOINT}${QUERY_STRING}${this.state.city}`)
      .then(response => 
        this.props.onKeyUp({data: response.data})
      )
      .catch(console.log)
    }
  }

  // Display results
  showResult = () => {
    const  {restaurants } = this.props.result
    if(!restaurants || !this.state.city) return
    if(!restaurants.length) {
      return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description='No Restaurants Found.'/>
    }
    return restaurants.map(restaurant => {
      return <Result key={restaurant.id} {...restaurant} />
    }) 
  }

  // Clear results
  clearResult = () => {
    if(!this.state.city) {
      return this.showResult()
    }
  }

  render()  {
    return (
      <div>   
        <form onKeyUp={this.onKeyUp} onSubmit={(e) => e.preventDefault()}>
          <div className="ant-search-container">
            <img src="./assets/images/restaurant-large.jpg" alt="restaurant" />
            <p>Find your table for any occasion</p>
            <Search
              type="text"
              placeholder="City"
              autoFocus
              onChange={this.onChange}
            />
          </div>
        </form>
        <p className="ant-input-search-heading">Popular restaurants in</p>
        <div className="ant-input-search-city-name">{this.state.city}</div>
        <div className="ant-card-container">
          {this.showResult()}
        </div>
        <div>
          <BackTop />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.result
  }
}

const mapDispatchToProps = (dispatch) => ({
  onKeyUp: (payload) => dispatch(getResult(payload)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(Find)
