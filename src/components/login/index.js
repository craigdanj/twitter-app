import React from 'react';

export default function Login(props) {

        function loginClicked() {
            props.loginClicked();
        }

		return (
			<div class="main">
				<p>Hello welcome to the test application! Click on login below to log into the app</p>
				<button className="login" onClick={loginClicked}>Login with Twitter</button>
			</div>
		);

}
