import React from 'react';
import './App.css';

class App extends React.Component {

	state = {
		showHome: false,
		oauthToken: null,
		oauthVerifier: null
	};

	loginClicked = () => {
		fetch("http://localhost:8080/sessions/connect") 
		.then(response => response.json()) 
		.then(data => {
			window.location.href = data.redirectUrl;
		}); 
	};

	saveToken = () => {
		console.log(this.state.oauthToken, this.state.oauthVerifier);

		fetch(`http://localhost:8080/sessions/saveAccessTokens?oauth_token=${this.state.oauthToken}&oauth_verifier=${this.state.oauthVerifier}`) 
		.then(response => response.json()) 
		.then(data => {
			console.log(data);
			// window.location.href = data.redirectUrl;
		}); 
	};


	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const oauthToken = urlParams.get('oauth_token');
		const oauthVerifier = urlParams.get('oauth_verifier');
		// console.log(oauthToken, oauthVerifier);

		if (oauthToken && oauthVerifier) {
			this.setState({
				showHome: true,
				oauthToken,
				oauthVerifier
			});
		}
	}

	render() {

		const login = (
			<div>
				<button className="login" onClick={this.loginClicked}>Login with Twitter</button>
			</div>
		);

		const home = (
			<div>
				Home
				
				<button onClick={this.saveToken}>Boom</button>
			</div>
		)

		return (
			<div className="App">
				<h1>The Twitter App</h1>

				{ this.state.showHome ? home : login }
				
			</div>
		);
	}
}

export default App;
