import React, { useContext } from 'react';
import ProductList from '../containers/ProductList';
import Header from '../components/Header';
import ProductDetailContext from '../context/ProductDetailContext';
import useStateProductDetail from '../hooks/useStateProductDetail';
import AppContext from '../context/AppContext';
import ProductDetail from '../containers/ProductDetail';

const Home = () => {

	const { toggleProductDetail, handleToggleProductDetail } = useContext(AppContext);
	const stateProductDetail = useStateProductDetail();

	return (
		<ProductDetailContext.Provider value = { stateProductDetail }>  
            <Header></Header>
			<ProductList/>
			{ toggleProductDetail ? <ProductDetail/> : null }
		</ProductDetailContext.Provider>
	);
}

export default Home;