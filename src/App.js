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
		})
		.catch(data => {
			console.log('failed')
		}); 
	};

	componentDidMount() {

		//If redirected to from twitter authorisation page then fetch access tokens.
		const urlParams = new URLSearchParams(window.location.search);
		const oauthToken = urlParams.get('oauth_token');
		const oauthVerifier = urlParams.get('oauth_verifier');

		if (oauthToken && oauthVerifier) {
			//Store these in localStorage.
		}

		//Change condition to read from localStorage
		if (oauthToken && oauthVerifier) {

			this.setState({
				showHome: true,
				oauthToken,
				oauthVerifier
			});

			//Get access tokens. Store then in local storage to be used with subsequent requests.

			fetch(`http://localhost:8080/sessions/getAccessTokens?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`) 
				.then(response => response.json()) 
				.then(data => {

					if(data.success) {
						console.log(data);
					} else {
						console.error('something went wrong');
					}
					// window.location.href = data.redirectUrl;
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
