import React, {useState, useContext} from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import AppContext from '@context/AppContext';
import MyOrder from '@containers/MyOrder';
import MobileMenu from '@components/MobileMenu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';

const Header = () => {

    const { state,
        toggleOrders,
        toggleMobileMenu,
        toggleAccountMenu,
        toggleProductDetail,
        handleToggleOrders,
        handleToggleMobileMenu,
        handleToggleAccountMenu,
        handleToggleProductDetail } = useContext(AppContext);
    console.log(state);

    return (
        <nav>
            <img onClick={handleToggleMobileMenu}  src={menu} alt="menu" className="menu"/>
        
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo"/>
                <ul>
                    <li>
                    <a href="/">All</a>
                    </li>
                    <li>
                    <a href="/">Clothes</a>
                    </li>
                    <li>
                    <a href="/">Electronics</a>
                    </li>
                    <li>
                    <a href="/">Furnitures</a>
                    </li>
                    <li>
                    <a href="/">Toys</a>
                    </li>
                    <li>
                    <a href="/">Others</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggleAccountMenu}>
                        platzi@example.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={handleToggleOrders}>
                        <img src={shoppingCart} alt="shopping cart"/>
                        
                        {state.cart.length > 0 ? 
                        <div>{state.cart.length > 9 ? "+9" : state.cart.length }</div> 
                        : null
                        }
                    </li>
                </ul>
            </div>
            { toggleMobileMenu ? <MobileMenu/> : null}
            { toggleAccountMenu ? <Menu/> : null}
            {toggleOrders ? <MyOrder/> : null}
        </nav>
    )
}

export default Header;