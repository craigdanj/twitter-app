import React from 'react';
import {serverUrl} from '../../constants'

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
                    this.setState({
                        posts: data.posts
                    });

                    //Get posts with urls for data in sidebar.
                    const filteredPosts = data.posts.filter(post => {
                        console.log(post)
                        // if (post.user.entities.url.urls.length) {
                        //     return true;
                        // }
                        return false;
                    });

                    const userMap = {};

                    filteredPosts.forEach( post => {
                        userMap[post.user.name] = userMap[post.user.name] ? userMap[post.user.name] + 1 : 1;
                    });

                    console.log(filteredPosts)
                    console.log(userMap)
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
