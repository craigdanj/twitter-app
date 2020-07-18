import React from 'react';

class Header extends React.Component {

	state = {
		searchString: '',
		searchParam: 'hashtag'
	};

	handleOnChange = (e) => {
		this.setState({
			searchString: e.target.value
		})
		this.props.triggerSearch(e.target.value);
	}

	handleOnOptionChange = (e) => {
		this.setState({
			searchParam: e.target.value
		})
		this.props.triggerSearchParamChange(e.target.value);
	}

	render() {

		return (
			<div className="header">
				<h1>
					The Twitter App

					{
						this.props.showSearch && (
							<>
								<input type="text" className="search" placeholder="Search" onChange={this.handleOnChange} value={this.state.searchString}/>

								<span className="filterOptions">
									<input type="radio" id="hashtag" name="searchParam" value="hashtag" checked={this.state.searchParam === 'hashtag'} onChange={this.handleOnOptionChange}/>
									<label for="hashtag">By Hashtag</label>

									<input type="radio" id="location" name="searchParam" value="location" onChange={this.handleOnOptionChange}
									checked={this.state.searchParam === 'location'}/>
									<label for="location">By Location</label>
								</span>
							</>
						)
					}
				</h1>
			</div>	
		);
	}
}

export default Header;
