import React, { useEffect, useState, useContext } from 'react';
import ProductCard from '@components/ProductCard';
import '@styles/ProductList.scss';
import AppContext from '../context/AppContext';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const { toggleMobileMenu } = useContext(AppContext);
	const products = useGetProducts(`${API}?limit=20&&offset=0`);

	return (
		<section className="main-container">
			<div className={ (toggleMobileMenu ? "hidden " : "" ) + "ProductList" }>
				{products.map( (product) => {
					return <ProductCard product={product} key={product.id} />
				})}
			</div>
		</section>
	);
}

export default ProductList;