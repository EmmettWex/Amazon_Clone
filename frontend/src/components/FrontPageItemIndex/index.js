import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './FrontPageItemIndex.css';
import * as itemsActions from '../../store/items';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../../store/items';
import FrontPageItem from './FrontPageItem';

const FrontPageItemIndex = () => {
    const dispatch = useDispatch();
    const items = useSelector(getItems);

    useEffect(() => {
        dispatch(itemsActions.fetchItems('',''))
    }, [dispatch]);

    if (!items) {
        return (
            <div></div>
        )
    }

    const item1 = items[0];
    const item2 = items[1];
    const item3 = items[2];
    const item4 = items[3];
    const item5 = items[4];
    const item6 = items[5];

    return (
        <div className="front-page-index-wrapper">
            <div className="GE-image">
                <img id="front-page-image" src="https://amazonosrs-seeds.s3.amazonaws.com/osrs_ge_frontpage.jpeg"></img>
            </div>
                <div id="front-page-wrapper-top" className="front-page-items-wrapper">
                    <FrontPageItem item={item1} />
                    <FrontPageItem item={item2} />
                    <FrontPageItem item={item3} />
                </div>
            <div id="front-page-wrapper-bottom" className="front-page-items-wrapper">
                    <FrontPageItem item={item4} />
                    <FrontPageItem item={item5} />
                    <FrontPageItem item={item6} />
                </div>
        </div>
    )
}

export default FrontPageItemIndex;