import React from 'react';

export default function Header(props) {

		function handleOnChange(e) {
			props.triggerSearch(e.target.value);
		}

		return (
			<div className="header">
				<h1>
					The Twitter App
					<input type="text" className="search" placeholder="Search" onChange={handleOnChange}/>
				</h1>
			</div>	
		);

}
