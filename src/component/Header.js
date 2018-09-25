import React from 'react';
import SearchForm from './SearchFormWithSubmit';

class Header extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			searchVisible: false
		}
	}

	render(){
		let searchInputClasses = ["searchInput"];

		if(this.state.searchVisible) {
			searchInputClasses.push('active');
		}

		return (
			<div>
				<SearchForm searchVisible={this.state.searchVisible} onSubmit={this.props.onSubmit} />				
			</div>
		)
	}
}

export default Header;