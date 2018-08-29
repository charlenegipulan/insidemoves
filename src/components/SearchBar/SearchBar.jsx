import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {

  handleSearch(evt) {
    this.props.handleSearchResults(evt.target.value)
  }

  render(props) {
    return (
        <div className="SearchBar">
            {/* <input
              placeholder="search"
              type="text"
              onChange={this.handleSearch.bind(this)}
            /> */}
        </div>
    )
  }
}

export default SearchBar;