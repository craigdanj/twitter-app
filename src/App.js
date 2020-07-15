import React from 'react';
import './App.css';

class App extends React.Component {

	loginClicked = () => {
		fetch("http://localhost:8080/sessions/connect") 
		.then(response => response.json()) 
		.then(data => {
			window.location.href = data.redirectUrl;
		}); 
	};

	render() {

		return (
			<div className="App">
				<h1>The Twitter App</h1>
				<button className="login" onClick={this.loginClicked}>Login with Twitter</button>
			</div>
		);
	}
}

export default App;
