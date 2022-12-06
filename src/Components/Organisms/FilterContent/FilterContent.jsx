import React,{useContext} from 'react';
import './FilterContent.css';
import Filter from '../../Molecules/Filter/Filter';
import Button from '../../Atoms/Button/Button';
import { FilterContext } from '../../../Context/FilterContext';
import { MainContext } from '../../../Context/MainContext';

function FilterContent({
    filters,
    onChange,
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
}) {
    const { setFilterNames } = useContext(FilterContext)
    const { matches } = useContext(MainContext)
    
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
                width={!matches ? '100%' : null}
                position='relative'
                top='40px'
                border='1px solid black'
                textAlign={!matches ? "center" : null}
                display={!matches ? "flex" : null}
                flexDirection={!matches ? 'row' : null}
                justifyContent={!matches ? 'center' : null}
                alignItems={!matches ? 'center' : null}
            />
        </div>
    );
}

export default FilterContent;
