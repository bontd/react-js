import React from 'react';
import Sliderbar from './left/Sliderbar';
import Slider from './slider/slider';
import image from '../public/img/todo.jpg';
import image2 from '../public/img/create-router.png';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                {
                    'id': 1,
                    'title': 'Tilte 1',
                    'content': 'Instantly make your website pop with vector icons and social logos. Turn it up to 11 when you upgrade to Pro.',
                    'icon': 'glyphicon-dashboard',
                    'img': image
                },
                {
                    'id': 2,
                    'title': 'Tilte 2',
                    'content': 'Instantly make your website pop with vector icons and social logos. Turn it up to 11 when you upgrade to Pro.',
                    'icon': 'glyphicon-heart-empty',
                    'img': image2
                },
                {
                    'id': 3,
                    'title': 'Tilte 3',
                    'content': 'Instantly make your website pop with vector icons and social logos. Turn it up to 11 when you upgrade to Pro.',
                    'icon': 'glyphicon-thumbs-up',
                    'img': image
                },
                {
                    'id': 4,
                    'title': 'Tilte 4',
                    'content': 'Instantly make your website pop with vector icons and social logos. Turn it up to 11 when you upgrade to Pro.',
                    'icon': 'glyphicon-thumbs-up',
                    'img': image2
                }
            ]
        }
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {/*<Slider />*/}
                    </div>
                    <div className="col-xl-2 col-lg-3 col-md-4">
                        <Sliderbar />
                    </div>
                    <div className="col-xl-10 col-lg-9 col-md-8">
                        <div className="card-group">
                            {this.state.data.map((person, i) => <DivRow key={i} data={person}/>)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class DivRow extends React.Component {
    render() {
        return (
            <div className="col-xl-3 mr-bt-30">
                <div className="card height-100">
                    <img src={this.props.data.img} className="card-img-top" alt="col div"/>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.data.title}</h4>
                        <p className="card-text">{this.props.data.content}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;