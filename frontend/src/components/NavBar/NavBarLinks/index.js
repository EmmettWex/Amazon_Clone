import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchItems } from '../../../store/items';
import './NavBarLinks.css'

const NavBarLinks = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [cleanliness, setCleanliness] = useState('');

    // hard coding a database fetch and render of item index based on
    // item type (category). This can be hard coded as it does not
    // need to be dynamic

    const renderAll = e => {
        e.preventDefault();
        dispatch(fetchItems('',''))
        history.push('/items/index')
    }

    const renderArmor = e => {
        e.preventDefault();
        dispatch(fetchItems('','Armor'))
        history.push('/items/index')
    }

    const renderArrows = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Arrow'))
        history.push('/items/index')
    }

    const renderBones = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Bone'))
        history.push('/items/index')
    }

    const renderFood = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Food'))
        history.push('/items/index')
    }

    const renderMiscellaneous = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Miscellaneous'))
        history.push('/items/index')
    }

    const renderPotions = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Potions'))
        history.push('/items/index')
    }

    const renderRune = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Rune'))
        history.push('/items/index')
    }

    const renderWeapon = e => {
        e.preventDefault();
        dispatch(fetchItems('', 'Weapon'))
        history.push('/items/index')
    }

    return (
        <div className="navbarlinks-wrapper">
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderAll}>
                    All
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderArmor}>
                    Armor
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderArrows}>
                    Arrow
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderBones}>
                    Bones
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderFood}>
                    Food
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderMiscellaneous}>
                    Miscellaneous
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderPotions}>
                    Potion
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderRune}>
                    Rune
                </span>
            </div>
            <div className="navbarlinks-link-wrapper">
                <span className="navbarlinks-item-type" onClick={renderWeapon}>
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