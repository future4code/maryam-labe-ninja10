import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import Servicos from './components/Servicos/Servicos';
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
			switch (this.state.currentPage) {
				case 'home':
					return <Home changePage={this.changePage} />
				case 'carrinho':
					return <Carrinho changePage={this.changePage}/>
				case 'servicos':
					return <Servicos />
				case 'register':
					return <Register />
			}
		}


		return (
			<div>
				<Header changePage={this.changePage} />
				{renderCurrentPage()}
				<Footer changePage={this.changePage} />
				
			</div>
		)
	}
}
