import React from 'react';
import './App.css';

class App extends React.Component {

	state = {
		showHome: false
	};

	loginClicked = () => {
		fetch("http://localhost:8080/sessions/connect") 
		.then(response => response.json()) 
		.then(data => {
			window.location.href = data.redirectUrl;
		}); 
	};


	componentDidMount() {
		const urlParams = new URLSearchParams(window.location.search);
		const oauthToken = urlParams.get('oauth_token');
		const oauthVerifier = urlParams.get('oauth_verifier');
		console.log(oauthToken, oauthVerifier);

		if (oauthToken && oauthVerifier) {
			this.setState({
				showHome: true
			});
		}
	}

	render() {

		const login = (
			<div>
				<button className="login" onClick={this.loginClicked}>Login with Twitter</button>
			</div>
		);

		const home = (<div>Home</div>)

		return (
			<div className="App">
				<h1>The Twitter App</h1>

				{ this.state.showHome ? home : login }
				
			</div>
		);
	}
}

export default App;
