import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { fetchCartItems } from '../../store/cart';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [itemType, setItemType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = e => {
        dispatch(fetchCartItems(searchTerm, itemType));
        history.push(`/items/index`)
    }

    return (
        <div className="searchbar-wrapper">
            <select
                value={itemType}
                className="searchbar-select"
                onChange={(e) => {
                    e.preventDefault();
                    setItemType(e.target.value);
                }}>
                <option type="hidden">All</option>
                <option>All Departments</option>
            </select>
            <input
                className="searchbar-input-field"
                type="text"
                placeholder='Search Amazon OSRS'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
                className="searchbar-submit-button"
                onClick={handleSearch}
            ></button>
        </div>
    )
}

export default SearchBar;