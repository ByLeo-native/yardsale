import { useState } from 'react';

const useMenuState = () => {
    const [toggleOrders, setToggleOrders] = useState(false);
    const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
    const [toggleAccountMenu, setToggleAccountMenu] = useState(false);
    const [toggleProductDetail, setToggleProductDetail ] = useState(false);

    const handleToggleOrders = () => {
        setToggleOrders(!toggleOrders);
    }
    const handleToggleMobileMenu = () => {
        setToggleMobileMenu(!toggleMobileMenu);
    }

    const handleToggleAccountMenu = () => {
        setToggleAccountMenu(!toggleAccountMenu);
    }

    const handleToggleProductDetail = () => {
        console.log("Entro");
        setToggleProductDetail(!toggleProductDetail);
    }

    return {
        toggleOrders,
        toggleMobileMenu,
        toggleAccountMenu,
        toggleProductDetail,
        handleToggleOrders,
        handleToggleMobileMenu,
        handleToggleAccountMenu,
        handleToggleProductDetail
    }
}

export default useMenuState;