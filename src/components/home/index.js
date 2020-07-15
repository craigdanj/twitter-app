import React from 'react';


const urlRegex = new RegExp('([a-zA-Z\d]+://)?((\w+:\w+@)?([a-zA-Z\d.-]+\.[A-Za-z]{2,4})(:\d+)?(/.*)?)', 'i');

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
                    const filteredPosts = data.posts.filter(post => {
                        
                        console.log(urlRegex.exec(post.text)[1]);
                        if (urlRegex.exec(post.text)[1]) {
                            return true;
                        }
                        return false;
                    })

                    this.setState({
                        posts: filteredPosts
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
				<button onClick={this.logout} className="logout">logout</button>

				<ul className="tweetList">
				{this.state.posts.length ?
					this.state.posts.map(post => {
						return <li key={post.id}>{post.text}</li>
                    })
                    : this.state.loading ? null : <li>No tweets with urls exist.</li>
				}
				</ul>
			</div>
		);
	}
}

export default Home;
