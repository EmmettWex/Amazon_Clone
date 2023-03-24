import React, { useState, useEffect } from 'react';
import './ItemIndex.css';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, fetchItemsWithQueryString, clearItems } from '../../store/items';
import SingleItem from './SingleItem';

const ItemIndex = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const items = useSelector(getItems);

    useEffect(() => {
        dispatch(fetchItemsWithQueryString(location.search))
    }, [dispatch, location.search])

    if (!items[0]) {
        return (
            <div className="item-index-wrapper">
                <div className="no-search-made">
                    <p>Please search using the search bar</p>
                    <p>There are no items to be found here</p>
                </div>
            </div>
        )
    }

    return (
        <div className="item-index-wrapper">
            <div className="item-index-inner-wrapper">
                <p id="item-index-results">RESULTS</p>
                {items.map((item) => {
                    return <SingleItem key={item.id} item={item} />
                })}
            </div>
        </div>
    )
}

export default ItemIndex;