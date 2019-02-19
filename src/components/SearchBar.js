import React, { Component } from 'react'

class SearchBar extends Component {

  state = { term: '' };

  onInputChange = event => {
    this.setState({term: event.target.value});
  }

  onFormSubmit = event => {
    event.preventDefault(); //Prevent page from refreshing when hitting enter

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className ="ui segment search-bar">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input 
              type="text" 
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
