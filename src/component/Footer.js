import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilter} from '../actions/index';

const Footer = () => (
    <div className="container-fluid">
        <div className="footer-link row">
            <div className="col-lg-4">
                <span>Item left</span>
            </div>
            <div className="col-lg-4">
                <FilterLink filter={VisibilityFilter.SHOW_ALL}>
                    ALL
                </FilterLink>
                <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>
                    Active
                </FilterLink>
                <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
                    Completed
                </FilterLink>
            </div>
        </div>
    </div>
)

export default Footer;