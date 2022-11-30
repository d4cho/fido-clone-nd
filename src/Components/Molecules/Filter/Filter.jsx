import React from 'react';
import './Filter.css';
import { Fragment } from 'react';
import Label from '../../Atoms/Label/Label';
import CheckBox from '../../Atoms/CheckBox/CheckBox';

function Filter({ filters }) {
    return (
        <>
            {filters.map((filter, idx) => (
                <Fragment key={idx}>
                    <p className='filter-type'>{filter.type}</p>
                    {filter.filter?.map((filterItem, idx) => (
                        <div className='filter-container' key={idx}>
                            <CheckBox />
                            <Label Label={filterItem} fontSize='0.92rem' fontWeight='600' />
                        </div>
                    ))}
                </Fragment>
            ))}
        </>
    );
}

export default Filter;
