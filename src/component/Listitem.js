import React from 'react';
import {Link} from 'react-router-dom';

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
	render() {
		return (
			<li>
				<Link className="nav-link" to={{pathname: `/detail/${this.props.id}`}}>
					<img src={this.props.image} alt="img list item"/>
					{this.props.title.substring(0, 34)}...
				</Link>
			</li>
		);
	}
};

export default ListSidebar;