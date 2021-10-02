import React from "react";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Register from './components/register/Register';
import { Servicos } from './components/Servicos/Servicos';
import { Carrinho } from './components/Carrinho/Carrinho';
import DetalhesServicos from './components/Servicos/DetalhesServicos';
import GlobalStyle from './styles/Global'


export default class App extends React.Component {
	state = {
		currentPage: 'home',
		servicoClicado: ""
	}

	changePage = (currentPage) => {
		this.setState({
			currentPage: currentPage
		})
	}

	goToDetailPage = (id) => {
		this.setState({ currentPage: 'detalhes', servicoClicado: id })
		console.log(id)
	}

	render() {

		const renderCurrentPage = () => {
			switch (this.state.currentPage) {
				case 'home':
					return <Home changePage={this.changePage} />
				case 'carrinho':
					return <Carrinho changePage={this.changePage} />
				case 'servicos':
					return <Servicos goToDetailPage={this.goToDetailPage} />
				case 'register':
					return <Register />
				case 'detalhes':
					return <DetalhesServicos changePage={this.changePage} id={this.state.servicoClicado} />
				default:
					return <Home changePage={this.changePage}/>
			}
		}


		return (
			<div>
				<GlobalStyle />
				<Header changePage={this.changePage} />
				{renderCurrentPage()}
				<Footer changePage={this.changePage} />
			</div>
		)
	}
}
