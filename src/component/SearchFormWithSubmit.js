import React from 'react';

class SearchForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			searchText: ''
		}
	}

	submitForm(e){
		e.preventDefault();

		this.props.onSubmit(this.state.searchText);
	}

	updateSearchInput(e) {
		const val = e.target.value;
		this.setState({
		  searchText: val
		});
	}

	showSearch(){
		this.setState({
			searchVisible: !this.state.searchVisible
		})
	}

	render(){
		let searchInputClasses = ["searchInput"];

		if(this.state.searchVisible) {
			searchInputClasses.push('active');
		}

		const {searchVisible} = this.state;
		let searchClasses = ['searchInput']

		if(searchVisible) {
			searchClasses.push('active')
		}

		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<input 
					type="search"
					className={searchClasses.join(' ')}
					onChange={this.updateSearchInput.bind(this)}
					placeholder="search .." />
				<div onClick={this.showSearch.bind(this)} className="fa fa-search"></div>
			</form>
		)
	}
}

export default SearchForm;