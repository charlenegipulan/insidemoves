import React from 'react';

const SearchBar = () => {
    return (
        <div className="SearchBar">
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}

export default SearchBar;