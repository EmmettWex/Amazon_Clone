import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory, useParams } from 'react-router-dom';
import './ItemIndex.css';
import * as itemsActions from '../../store/items';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, fetchItems } from '../../store/items';
import SingleItem from './SingleItem';

const ItemIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector(getItems);

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