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

    return (
        <div className="front-page-index-wrapper">
            <div className="GE-image">
                <div className="front-page-image-mask">
                    <img src="https://amazonosrs-seeds.s3.amazonaws.com/osrs_ge_frontpage.jpeg" />
                </div>
            </div>
            <div className="front-page-items-wrapper">
                <div className="front-page-items-container">
                    <FrontPageItem item={items[0]} />
                    <FrontPageItem item={items[1]} />
                    <FrontPageItem item={items[2]} />
                    <FrontPageItem item={items[3]} />
                </div>
                <div className="front-page-items-container">
                    <FrontPageItem item={items[4]} />
                    <FrontPageItem item={items[5]} />
                    <FrontPageItem item={items[6]} />
                    <FrontPageItem item={items[7]} />
                </div>
                <div className="front-page-items-container">
                    <FrontPageItem item={items[8]} />
                    <FrontPageItem item={items[9]} />
                    <FrontPageItem item={items[10]} />
                    <FrontPageItem item={items[11]} />
                </div>
                <div className="front-page-items-container">
                    <FrontPageItem item={items[12]} />
                    <FrontPageItem item={items[13]} />
                    <FrontPageItem item={items[14]} />
                    <FrontPageItem item={items[15]} />
                </div>
                <div className="front-page-items-container">
                    <FrontPageItem item={items[16]} />
                    <FrontPageItem item={items[17]} />
                    <FrontPageItem item={items[18]} />
                    <FrontPageItem item={items[19]} />
                </div>
                <div className="front-page-items-container">
                    <FrontPageItem item={items[20]} />
                    <FrontPageItem item={items[21]} />
                    <FrontPageItem item={items[22]} />
                    <FrontPageItem item={items[23]} />
                </div>
            </div>
        </div>
    )
}

export default FrontPageItemIndex;