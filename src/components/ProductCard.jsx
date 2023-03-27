import React, {useContext} from 'react';
import '@styles/ProductCard.scss';
import AppContext from '../context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductCard = ({product}) => {

	const { addToCart } = useContext(AppContext);

	const handleCart = (item) => {
		addToCart(item);
	}

    return (
        <div className="ProductCard">
            <img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>$ {product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=> {handleCart(product)}}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
        </div>
    )
}

export default ProductCard;