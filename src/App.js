import React from 'react'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import Carrinho from './components/Carrinho/Carrinho';


export default class App extends React.Component {
	state = {
		currentPage: 'home'
	}

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage })
	}

	render() {

		const renderCurrentPage = () => {
			if (this.state.currentPage === 'home') {
				return <Home />
			} else if (this.state.currentPage === 'carrinho') {
				return <Carrinho />
			}
		};


		return (
			<div>
				<Header changePage={this.changePage} />
				{renderCurrentPage()}
			</div>
		)
	}
}

