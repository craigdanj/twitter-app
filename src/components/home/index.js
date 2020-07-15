import React from 'react';

class Home extends React.Component {

	state = {
        loading: true,
		posts: []
	};

	componentDidMount() {
        fetch(`http://localhost:8080/sessions/getPosts?oauthAccessToken=${localStorage.getItem('oauthAccessToken')}&oauthAccessTokenSecret=${localStorage.getItem('oauthAccessTokenSecret')}`) 
            .then(response => response.json()) 
            .then(data => {
                if (data.success) {
                    this.setState({
                        posts: data.posts
                    });
                }

                this.setState({loading : false});
            })
            .catch(data => {
                console.error('something went wrong');
                this.setState({loading : false});
            }); 
	}

	render() {

		return (
			<div>
				<button onClick={this.logout}>logout</button>

				<ul className="tweetList">
				{this.state.posts.length ?
					this.state.posts.map(post => {
						return <li key={post.id}>{post.text}</li>
                    })
                    : this.state.loading ? null : <li>No posts with urls exist</li>
				}
				</ul>
			</div>
		);
	}
}

export default Home;
