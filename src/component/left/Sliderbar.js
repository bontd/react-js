import React from 'react';
import classnames from 'classnames';

class Sliderbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false};
    }

    toggle() {
        this.setState({addClass: !this.state.addClass});
    }
    render() {
        let boxClass = ["box"];
        if(this.state.addClass) {
            boxClass.push(' active');
        }
        return (
            <div>
                <ul id="accordion" className="nav--left">
                    <li className={boxClass.join('')}>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            HTML
                            <i className="fa fa-chevron-right"></i>
                        </a>
                        <ul id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <li><a href="">HTML Basic</a></li>
                            <li><a href="">HTML Headings</a></li>
                            <li><a href="">HTML Style</a></li>
                        </ul>
                    </li>
                    <li><a href="">PHP</a></li>
                    <li className={boxClass.join('')}>
                        <a href="javascript:void(0)" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">Javascript</a>
                        <i className="fa fa-chevron-right"></i>
                        <ul id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <li><a href="">JAVASCIRPT Basic</a></li>
                            <li><a href="">JAVASCIRPT Event</a></li>
                            <li><a href="">JAVASCIRPT Router</a></li>
                        </ul>
                    </li>
                    <li><a href="">Reactjs</a></li>
                    <li><a href="">Wordpress</a></li>
                </ul>
            </div>
        );
    }
}
export default Sliderbar;