import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilter} from '../actions/index';

const Footer = () => (
    <div className="footer-link">
        <span>Show: </span>
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
)

export default Footer;