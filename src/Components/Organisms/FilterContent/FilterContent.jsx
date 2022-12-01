import React from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';

function FilterContent({ filters,onChange}) {
    return (
        <div className='filter-parent-container'>
            <Filter
                filters={filters}
                onChange={onChange}
            />
        </div>
    );
}

export default FilterContent;
