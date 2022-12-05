import React,{useContext} from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';
import Button from '../../Atoms/Button/Button';
import { FilterContext } from '../../../Context/FilterContext';

function FilterContent({
    filters,
    onChange,
    increase,
    decrease,
    filterCounter,
    filterNames,
    showLengthEachLabel,
    onCheckedFilters,
    filterCount,
    position,
    bottom,
    left,
    width,
    paddingRight,
    resetFilters,
}) {
    const{ setFilterNames} = useContext(FilterContext)
    return (
        <div style={{ position: position, bottom: bottom, left: left, paddingRight: paddingRight }}>
            <Filter
                filters={filters}
                onChange={onChange}
                filterCounter={filterCounter}
                filterNames={filterNames}
                showLengthEachLabel={showLengthEachLabel}
                onCheckedFilters={onCheckedFilters}
                filterCount={filterCount}
                width={width}
            />
            <Button
                onClick={() => setFilterNames([])}
                title='Reset All Filters'
                width='180px'
                position='relative'
                top='40px'
                border='1px solid black'
            />
        </div>
    );
}

export default FilterContent;
