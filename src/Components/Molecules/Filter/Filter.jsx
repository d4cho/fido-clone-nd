import React from 'react';
import './Filter.css';
import { Fragment } from 'react';
import Label from '../../Atoms/Label/Label';
import CheckBox from '../../Atoms/CheckBox/CheckBox';

function Filter({
    filters,
    onChange,
    filterCounter,
    filterNames,
    showLengthEachLabel,
    onCheckedFilters,
    filterCount,
    width,
}) {
    return (
        <>
            {filters.map((filter, idx) => (
                <Fragment key={idx}>
                    <p className='filter-type'>
                        {filter.type}
                        {filter.type === 'FILTER BY' ? (
                            <Fragment> ({filterCounter})</Fragment>
                        ) : null}
                    </p>
                    {filter.filter?.map((filterItem, idx) => (
                        <div className='filter-container' style={{ width: width }} key={idx}>
                            <CheckBox
                                Label={filterItem}
                                onChange={onChange}
                                checked={filterNames.includes(filterItem)}
                            />
                            <Label
                                Label={filterItem}
                                fontSize='0.92rem'
                                fontWeight='600'
                                filterCounter={filterCounter}
                                filterNames={filterNames}
                                showLengthEachLabel={showLengthEachLabel}
                                onCheckedFilters={onCheckedFilters}
                                filterCount={filterCount[filterItem]}
                            />
                        </div>
                    ))}
                </Fragment>
            ))}
        </>
    );
}

export default Filter;
