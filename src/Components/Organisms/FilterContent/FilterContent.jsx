import React from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';

function FilterContent({ filters, onChange, increase, decrease, filterCounter }) {
    return (
        <div className='filter-parent-container'>
            <Filter
                filters={filters}
                onChange={onChange}
                increase={increase}
                decrease={decrease}
                filterCounter={filterCounter}
            />
        </div>
    );
}

export default FilterContent;
