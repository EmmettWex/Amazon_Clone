import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SearchBar.css';
import { fetchItems } from '../../store/items';

const SearchBar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [itemType, setItemType] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = e => {
        // dispatch(fetchItems(searchTerm, itemType));
        // history.push(`/items/index/${searchTerm}/${itemType}`)
        history.push({
            pathname: `/items/index`,
            search: `item_type=${itemType}&search_terms=${searchTerm}`
        })
    }

    return (
        <div className="searchbar-wrapper">
            <select
                value={itemType}
                className="searchbar-select"
                onChange={(e) => {
                    e.preventDefault();
                    if (e.target.value === 'All') {
                        setItemType('');
                    } else {
                        setItemType(e.target.value);
                    }
                }}>
                <option type="hidden">All</option>
                <option>Armor</option>
                <option>Arrow</option>
                <option>Bones</option>
                <option>Food</option>
                <option>Miscellaneous</option>
                <option>Potion</option>
                <option>Rune</option>
                <option>Weapon</option>
            </select>
            <input
                className="searchbar-input-field"
                type="text"
                placeholder='Search Amazon OSRS'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        handleSearch(e);
                    }
                }}
            />
            <button
                className="searchbar-submit-button"
                onClick={handleSearch}
            ></button>
        </div>
    )
}

export default SearchBar;