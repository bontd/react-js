import React from 'react';

class ListSidebar extends React.Component {
	render() {
		const getdata = this.props.sides;
        const dataSide = getdata.map(data => {
            return(
                <ItemListSidebar key={data.id} id={data.id} title={data.title} image={data.image} />
            )
        });
		return (
			<ul className="item-sidebar">
				{dataSide}
			</ul>
		);
	}
};

class ItemListSidebar extends React.Component{
	detailProduct() {
		console.log(this.props.id);
    }   
	render() {
		return (
			<li>
				<a onClick={this.detailProduct} href="#">
					<img src={this.props.image} alt="img list item"/>
					{this.props.title}
				</a>
			</li>
		);
	}
};

export default ListSidebar;