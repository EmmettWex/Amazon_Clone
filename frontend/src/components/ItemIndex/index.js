import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './ItemIndex.css';
import * as itemsActions from '../../store/items';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items';

const ItemIndex = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

    useEffect(() => {
        dispatch(itemsActions.fetchItems())
    }, [dispatch]);

    return (
        <div className="index-wrapper">
            <div className="GE-image">image of the runescape GE goes here</div>
            {items.map((item) => {
                return (
                    <div>
                        <Link to={`/items/${item.id}`}>{item.name}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemIndex;