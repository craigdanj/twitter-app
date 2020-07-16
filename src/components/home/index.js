import React from 'react';
import {serverUrl} from '../../constants'

const urlRegex = new RegExp('([a-zA-Z\d]+://)?((\w+:\w+@)?([a-zA-Z\d.-]+\.[A-Za-z]{2,4})(:\d+)?(/.*)?)', 'i');

class Home extends React.Component {

	state = {
        loading: true,
		posts: []
    };

    logout = () => {
        localStorage.removeItem('oauthAccessToken');
        localStorage.removeItem('oauthAccessTokenSecret');
        window.location.reload();
    };

	componentDidMount() {
        fetch(`${serverUrl}/sessions/getPosts?oauthAccessToken=${localStorage.getItem('oauthAccessToken')}&oauthAccessTokenSecret=${localStorage.getItem('oauthAccessTokenSecret')}`) 
            .then(response => response.json()) 
            .then(data => {
                if (data.success) {
                    const filteredPosts = data.posts.filter(post => {
                        if (urlRegex.exec(post.text)[1]) {
                            return true;
                        }
                        return false;
                    });

                    const userMap = {};

                    filteredPosts.forEach( post => {
                        userMap[post.user.id] = userMap[post.user.id] ? userMap[post.user.id]+1 : 1;
                    });

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
            <>
                <div className="main">
                    <ul className="tweetList">
                    {this.state.posts.length ?
                        this.state.posts.map(post => {
                            return (
                                <li className="tweet" key={post.id}>
                                    <p className="username">{post.user.name}: <span className="screenName">@{post.user.screen_name}</span></p>
                                    <p className="text">{post.text}</p>
                                </li>
                            )
                        })
                        : this.state.loading ? null : <li>No tweets with urls exist.</li>
                    }
                    </ul>
                </div>
                <div className="sidebar">
                    <button onClick={this.logout} className="logout">logout</button>

                    <p>Top URL Sharer: </p>
                    <p>Most popular website: </p>
                </div>
            </>
		);
	}
}

export default Home;
