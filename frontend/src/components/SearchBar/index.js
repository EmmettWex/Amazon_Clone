import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {

    const [search, setSearch] = useState('')
    return (
        <div className="searchbar-wrapper">
            <select value="All" className="searchbar-select">
                <option>All</option>
                <option>All Departments</option>
            </select>
            <input
                className="searchbar-input-field"
                type="text"
                placeholder='Search Amazon OSRS'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className="searchbar-submit-button"></button>
        </div>
    )
}

export default SearchBar;