import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import RecoveryPassword from '../pages/RecoveryPassword';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import useMenuState from '../hooks/useMenuState';
import '@styles/global.css';

const App = () => {
	const initialState = useInitialState();
	const menuState = useMenuState();
	return (
		<AppContext.Provider value={ {...initialState, ...menuState} }>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/recovery-password" component={RecoveryPassword}/>
						<Route exact path="/send-email" component={SendEmail} />
						<Route exact path="/new-password" component={NewPassword}/>
						<Route exact path="/account" component={MyAccount}/>	
						<Route exact path="/signup" component={CreateAccount} />
						<Route exact path="/checkout" component={Checkout} />
						<Route exact path="/orders" component={Orders} />
						<Route path="*" component={NotFound}/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;