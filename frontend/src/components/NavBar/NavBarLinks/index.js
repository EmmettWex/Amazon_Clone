import React from 'react';
import { useDispatch } from 'react-redux';
import { clearItems } from '../../../store/items'
import { useHistory } from 'react-router-dom';
import './NavBarLinks.css'

const NavBarLinks = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const renderItems = e => {
        dispatch(clearItems());
        let itemType = e.target.innerText;
        itemType = itemType === 'All' ? '' : itemType ;

        history.push({
            pathname: `/items/index`,
            search: `itemType=${itemType}&search_terms=`
        })
    }

    // hard coding a database fetch and render of item index based on
    // item type (category). This can be hard coded as it does not
    // need to be dynamic

    // I figured out a way to make it dynamic and that's what the above code is.

    // const renderAll = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('',''))
    //     // history.push('/items/index')
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=&search_terms=`
    //     })
    // }

    // const renderArmor = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('','Armor'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Armor&search_terms=`
    //     })
    // }

    // const renderArrows = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Arrow'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Arrow&search_terms=`
    //     })
    // }

    // const renderBones = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Bone'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Bone&search_terms=`
    //     })
    // }

    // const renderFood = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Food'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Food&search_terms=`
    //     })
    // }

    // const renderMiscellaneous = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Miscellaneous'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Miscellaneous&search_terms=`
    //     })
    // }

    // const renderPotions = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Potion'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Potion&search_terms=`
    //     })
    // }

    // const renderRune = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Rune'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Rune&search_terms=`
    //     })
    // }

    // const renderWeapon = e => {
    //     e.preventDefault();
    //     // dispatch(fetchItems('', 'Weapon'));
    //     // history.push('/items/index');
    //     history.push({
    //         pathname: `/items/index`,
    //         search: `item_type=Weapon&search_terms=`
    //     })
    // }

    return (
        <div className="navbarlinks-wrapper">
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    All
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Armor
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Arrow
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Bones
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Food
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Miscellaneous
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Potion
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Rune
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderItems}>
                    Weapon
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <a className="navbarlinks-item-type" href="https://github.com/EmmettWex" target="_blank">Github</a>
            </div>
            <div className="navbarlinks-link-wrapper">
                <a className="navbarlinks-item-type" href="https://www.linkedin.com/in/emmett-wechsler-3477a9266/" target="_blank">LinkedIn</a>
            </div>
        </div>
    )
}

export default NavBarLinks;