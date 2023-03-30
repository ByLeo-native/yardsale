import { useState } from 'react';

const useStateProductDetail = () => {
    const [product, setProductDetail] = useState(null);

    const updateProduct = (newProduct) => {
        setProductDetail(newProduct);
    }

    return {
        product,
        updateProduct
    }
}

export default useStateProductDetail;
