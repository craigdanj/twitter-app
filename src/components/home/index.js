import React from 'react';
import {serverUrl} from '../../constants'

class Home extends React.Component {

	state = {
        loading: true,
        posts: [],
        topUrlSharer: null,
        mostSharedDomains: []
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

                    let urlList = [];

                    //Get posts with urls for data in sidebar.
                    const filteredPosts = data.posts.filter(post => {
                        if (post.entities.urls.length) {
                            //Also push urls onto an array to calculate most popular websites.
                            urlList = urlList.concat(post.entities.urls);
                            return true;
                        }
                        return false;
                    });

                    if (filteredPosts.length) {
                        
                        //-------------------------------------
                        //Logic to find author with highest post count with links.
                        
                        const userPostCountMap = {};

                        //Store post count per user in map.
                        filteredPosts.forEach( post => {
                            userPostCountMap[post.user.name] = userPostCountMap[post.user.name] ? userPostCountMap[post.user.name] + 1 : 1;
                        });

                        //Find object values.
                        const countArray = Object.values(userPostCountMap);

                        //Pull the highest count.
                        const maxCount = Math.max(...countArray);
                        //Find index of highest count.
                        const indexOfMaxCount = countArray.indexOf(maxCount);
                        const userArray = Object.keys(userPostCountMap);
                        //You can use index to pull corresponding username from map.


                        //-------------------------------------
                        //Logic to find most popular websites.

                        const urlMap = {};

                        urlList = urlList.map(url => {
                            //Pull only the domain from the url.
                            return url.expanded_url.split('/').slice(0, 3).join('/');
                        });

                        urlList.forEach( url => {
                            urlMap[url] = urlMap[url] ? urlMap[url] + 1 : 1;
                        });

                        //Push top 3 domains on mostSharedDomains.

                        const topDomains = [];

                        for ( let i = 0; i < Object.values(urlMap).length ; i++) {

                            const urlCountArray = Object.values(urlMap);
                            const maxURLCount = Math.max(...urlCountArray);
                            const indexOfMaxURLCount = urlCountArray.indexOf(maxURLCount);
                            const urlArray = Object.keys(urlMap);

                            topDomains.push(urlArray[indexOfMaxURLCount]);
                            delete urlMap[urlArray[indexOfMaxURLCount]];

                            if (topDomains.length >= 3) break;
                        }

                        this.setState({
                            topUrlSharer: userArray[indexOfMaxCount],
                            mostSharedDomains: topDomains
                        });
                    }


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
                        : this.state.loading ? null : <li>No posts exist.</li>
                    }
                    </ul>
                </div>
                <div className="sidebar">
                    <button onClick={this.logout} className="logout">logout</button>

                    {this.state.topUrlSharer ?
                        (
                            <>
                                <p>Top URL Sharer: </p>
                                <p className="info">{this.state.topUrlSharer}</p>
                                <p>Most popular websites:</p>
                                <ul className="info">
                                    {
                                        this.state.mostSharedDomains.map( domain => (
                                            <li key={domain}>{domain}</li>
                                        ))
                                    }
                                </ul>
                            </>
                        ) : (
                            <p>No posts with urls exist</p>
                        )
                    }
                    
                </div>
            </>
		);
	}
}

export default Home;
