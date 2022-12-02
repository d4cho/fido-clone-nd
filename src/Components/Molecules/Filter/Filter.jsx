import React from 'react';
import './Filter.css';
import { Fragment } from 'react';
import Label from '../../Atoms/Label/Label';
import CheckBox from '../../Atoms/CheckBox/CheckBox';

function Filter({ filters, onChange, increase, decrease, filterCounter }) {
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
                        <div className='filter-container' key={idx}>
                            <CheckBox
                                Label={filterItem}
                                onChange={onChange}
                                increase={increase}
                                decrease={decrease}
                                filterCounter={filterCounter}
                            />
                            <Label
                                Label={filterItem}
                                fontSize='0.92rem'
                                fontWeight='600'
                                filterCounter={filterCounter}
                            />
                        </div>
                    ))}
                </Fragment>
            ))}
        </>
    );
}

export default Filter;
