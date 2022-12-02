import React from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';

function FilterContent({
    filters,
    onChange,
    increase,
    decrease,
    filterCounter,
    filterNames,
    showLengthEachLabel,
    onCheckedFilters,
    filterCount

}) {
    return (
        <div className='filter-parent-container'>
            <Filter
                filters={filters}
                onChange={onChange}
                increase={increase}
                decrease={decrease}
                filterCounter={filterCounter}
                filterNames={filterNames}
                showLengthEachLabel={showLengthEachLabel}
                onCheckedFilters={onCheckedFilters}
                filterCount={filterCount}
            />
        </div>
    );
}

export default FilterContent;
