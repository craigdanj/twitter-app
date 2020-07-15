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

	getPosts = () => {

		fetch(`http://localhost:8080/sessions/getPosts?oauthAccessToken=${localStorage.getItem('oauthAccessToken')}&oauthAccessTokenSecret=${localStorage.getItem('oauthAccessTokenSecret')}`) 
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

		//If redirected from twitter authorisation page then fetch access tokens with oauthToken.
		const urlParams = new URLSearchParams(window.location.search);
		const oauthToken = urlParams.get('oauth_token');
		const oauthVerifier = urlParams.get('oauth_verifier');

		if (oauthToken && oauthVerifier) {

			this.setState({
				showHome: true
			});

			//Get access tokens. Store them in local storage to be used with subsequent requests.
			fetch(`http://localhost:8080/sessions/getAccessTokens?oauth_token=${oauthToken}&oauth_verifier=${oauthVerifier}`) 
				.then(response => response.json()) 
				.then(data => {

					if(data.success) {
						localStorage.setItem('oauthAccessToken', data.oauthAccessToken);
						localStorage.setItem('oauthAccessTokenSecret', data.oauthAccessTokenSecret);
					} else {
						//Send back to login page if token has expired or is invalid.
						this.setState({
							showHome: false
						});
						console.error('Token invalid');
					}
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

				<button onClick={this.getPosts}>fetch</button>
				<button onClick={this.logout}>logout</button>
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
