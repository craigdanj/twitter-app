import React from 'react';
import './App.css';
import Home from './components/home';
import Login from './components/login';

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

	stripUrlParams(urlParams) {
		let url = new URL(window.location.href);

		urlParams.delete('oauth_token');
		urlParams.delete('oauth_verifier');
		url.search = urlParams;

		url = url.toString();
		window.history.replaceState({ url: url }, null, url)

	}

	componentDidMount() {

		//If redirected from twitter authorisation page then fetch access tokens with oauthToken.
		const urlParams = new URLSearchParams(window.location.search);
		const oauthToken = urlParams.get('oauth_token');
		const oauthVerifier = urlParams.get('oauth_verifier');

		//Strip url params after being redirected from twitter app. Can be move to another function.
		this.stripUrlParams(urlParams);

		if(!localStorage.getItem('oauthAccessToken')) {


			if (oauthToken && oauthVerifier) {

				//Get access tokens. Store them in local storage to be used with subsequent requests.
				fetch(`http://localhost:8080/sessions/getAccessTokens?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`) 
					.then(response => response.json()) 
					.then(data => {

						if(data.success) {
							localStorage.setItem('oauthAccessToken', data.oauthAccessToken);
							localStorage.setItem('oauthAccessTokenSecret', data.oauthAccessTokenSecret);

							this.setState({
								showHome: true
							});

						} else {
							//Send back to login page if token has expired or is invalid.
							this.setState({
								showHome: false
							});

							console.error('Token invalid');
						}
					});
			}
		} else {
			this.setState({
				showHome: true
			});
		}
	}

	render() {

		return (
			<div className="App">
				<h1>The Twitter App</h1>

				{ this.state.showHome ? <Home /> : <Login loginClicked={this.loginClicked}/> }
				
			</div>
		);
	}
}

export default App;
