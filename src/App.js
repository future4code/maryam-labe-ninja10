import React from "react";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import { Servicos } from './components/Servicos/Servicos';
import Carrinho from './components/Servicos/Carrinho/Carrinho';
import DetalhesServicos from './components/Servicos/DetalhesServicos';


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
					return <Carrinho servicesInCart={this.state.servicesInCart} changePage={this.changePage} />
				case 'servicos':
					return <Servicos changePage={this.changePage} />
				case 'register':
					return <Register />
				case 'detalhes':
					return <DetalhesServicos changePage={this.changePage}/>
			}
		}


		return (
			<div>
				<Header changePage={this.changePage} />
				{renderCurrentPage()}
			</div>
		)
	}
}
