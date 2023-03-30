import React, {useContext} from 'react';
import '@styles/ProductCard.scss';
import AppContext from '../context/AppContext';
import ProductDetailContext from '../context/ProductDetailContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductCard = ({product}) => {

	const { addToCart, handleToggleProductDetail } = useContext(AppContext);

	const handleCart = (item) => {
		addToCart(item);
	}

	const { updateProduct } = useContext(ProductDetailContext);

    return (
        <div className="ProductCard">
            <img className='pointer'
			src={product.images[0]} alt={product.title} 
			onClick={() => { updateProduct(product); handleToggleProductDetail() }}/>
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