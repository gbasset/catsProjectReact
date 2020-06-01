import React, { useState, useEffect } from 'react';
// import logo from './IconeTwitch.svg'
import logo from './cat-154642.svg'
import menuIco from './Menuico.svg'
import croix from './Croix.svg'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
export default function Header() {

    const [menu, showMenu] = useState(false);
    const [smallScreen, setSmallScreen] = useState(false);
    const [searchInput, setSearch] = useState('');

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 900px)");
        // addlistener c'est comme addeventlisterner pour les medias queries en JS
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        }

    })

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setSmallScreen(true);
        } else {
            setSmallScreen(false);
        }
    }

    const toggleNavRes = () => {
        showMenu(!menu);
    }

    const hideMenu = () => {

        if (menu === true) {
            showMenu(!menu);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleKeyPress = (e) => {
        setSearch(e.target.value);
    }


    return (
        <div >
            <nav className="headerTop">
                {(menu || !smallScreen) && (


                    <ul className="listeMenu">

                        <li onClick={hideMenu} className="lienNav">
                            <NavLink activeStyle={{ color: "#ffffff" }} className="lien" exact to="/">
                                <img src={logo} alt="logo twitch" className="logo" />
                            </NavLink>
                        </li>
                        <li onClick={hideMenu} className="lienNav">
                            <NavLink activeStyle={{ color: "#ffffff" }} className="lien" exact to="/infinityScroll">
                                Infinity Scroll Cats
                        </NavLink>
                        </li>
                        <li onClick={hideMenu} className="lienNav">
                            <NavLink activeStyle={{ color: "#ffffff" }} className="lien" exact to="/searchCat">
                                Search My Cat
                         </NavLink>
                        </li>
                        <li onClick={hideMenu} className="lienNav">
                            <NavLink activeStyle={{ color: "#ffffff" }} className="lien" exact to="/casinoCats">
                                Casino Cats
                         </NavLink>
                        </li>

                    </ul>

                )}

            </nav>

            <div className="menuResBtn">
                <img onClick={toggleNavRes} src={!menu ? menuIco : croix} alt="icone menu responsive" className="menuIco" />
            </div>

        </div>
    )
}

