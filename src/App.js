import React from 'react';
import './App.css';
import Home from './components/home';

class App extends React.Component {

	state = {
		showHome: false,
		posts: []
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
				if (data.success) {
					this.setState({
						posts: data.posts
					});
				}
			})
			.catch(data => {
				console.error('something went wrong');
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
	}

	render() {

		const login = (
			<div>
				<button className="login" onClick={this.loginClicked}>Login with Twitter</button>
			</div>
		);

		const home = (
			<div>
				<button onClick={this.getPosts}>fetch</button>
				<button onClick={this.logout}>logout</button>

				<ul className="tweetList">
				{
					this.state.posts.map(post => {
						return <li key={post.id}>{post.text}</li>
					})
				}
				</ul>
			</div>
		)

		return (
			<div className="App">
				<h1>The Twitter App</h1>

				{ this.state.showHome ? <Home /> : login }
				
			</div>
		);
	}
}

export default App;
