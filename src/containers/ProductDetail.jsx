import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import ProductDetailContext from '../context/ProductDetailContext';
import '@styles/ProductDetail.scss';
import iconClose from '@icons/icon_close.png';
import addToCartImage from '@icons/bt_add_to_cart.svg'; 

const ProductDetail = () => {

    const { addToCart, handleToggleProductDetail } = useContext(AppContext);
    const { product } = useContext(ProductDetailContext)

    const handleCart = (item) => {
		addToCart(item);
	}

    return (
        <aside className="ProductDetail">
            <div className="product-detail-close" 
            onClick={handleToggleProductDetail}>
                <img src={iconClose} alt="close"/>
            </div>
            <img src={product.images[0]} alt={product.title}/>
                <div className="ProductDetail__product-info">
                    <p>$ {product.price}</p>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <button className="primary-button add-to-cart-button">
                        <img src={addToCartImage} alt="add to cart"/>
                            Add to cart
                    </button>
                </div>
        </aside>
    )
}

export default ProductDetail;
