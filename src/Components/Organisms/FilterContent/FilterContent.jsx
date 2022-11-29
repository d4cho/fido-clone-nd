import React from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';

function FilterContent({ filters }) {
    return (
        <div className='filter-parent-container'>
            <Filter filters={filters} />
        </div>
    );
}

export default FilterContent;
