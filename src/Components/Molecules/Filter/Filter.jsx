import React from 'react';
import './Filter.css';
import { Fragment } from 'react';
import Label from '../../Atoms/Label/Label';

function Filter({ filters }) {
    return (
        <>
            {filters.map((filter, idx) => (
                <Fragment key={idx}>
                    <h3 className='filter-type'>{filter.type}</h3>
                    {filter.filter?.map((filterItem, idx) => (
                        <div className='filter-container' key={idx}>
                            <input type='checkbox' name='' id='' />
                            <Label Label={filterItem} fontSize='1rem' fontWeight='600' />
                        </div>
                    ))}
                </Fragment>
            ))}
        </>
    );
}

export default Filter;
