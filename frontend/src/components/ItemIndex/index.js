import React, { useState, useEffect } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './ItemIndex.css';
import * as itemsActions from '../../store/items';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items';

const ItemIndex = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const items = useSelector(getItems);

    console.log(items);
    if (!items[1]) {
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

                <div className="index-item-component-wrapper"></div>
            </div>
        </div>
    )
}

export default ItemIndex;