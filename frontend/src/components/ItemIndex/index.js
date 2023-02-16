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

    useEffect(() => {
        dispatch(itemsActions.fetchItems())
    }, [dispatch]);

    return (
        <div className="index-wrapper">
            
        </div>
    )
}

export default ItemIndex;