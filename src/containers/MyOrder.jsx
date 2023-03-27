import React, { useContext } from 'react';
import '@styles/MyOrder.scss';
import AppContext from '@context/AppContext';
import OrderItem from '@components/OrderItem';
import backIcon from '@icons/flechita.svg';

const MyOrder = () => {
    const {state} = useContext(AppContext);

    const sumaTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <aside className="MyOrder">
            <div className="title-container">
                <img src={backIcon} alt="arrow"/>
                    <p className="title">My order</p>
            </div>

            <div className="my-order-content">
                
                <div className="seccion-scroll">
					{
						state.cart.map( product => (
							<OrderItem 
								key={ `orderItem-${ product.id }` } 
								product={ product } 
							/>
						) )
					}
				</div>
                <div className="order">
                    <p>
                        <span>Total</span>
                    </p>
                    <p>${sumaTotal()}</p>
                </div>

                <button className="primary-button">
                    Checkout
                </button>
            </div>    
    </aside >
    )
}

export default MyOrder;