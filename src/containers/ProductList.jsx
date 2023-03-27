import React, { useEffect, useState } from 'react';
import ProductCard from '@components/ProductCard';
import '@styles/ProductList.scss';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetProducts(`${API}?limit=20&&offset=0`);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map( (product) => {
					return <ProductCard product={product} key={product.id} />
				})}
			</div>
		</section>
	);
}

export default ProductList;