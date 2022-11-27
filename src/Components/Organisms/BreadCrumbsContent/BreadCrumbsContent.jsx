import React from 'react';
import BreadCrumb from '../../Molecules/BreadCrumb/BreadCrumb';

function BreadCrumbsContent({ data }) {
    return (
        <div
            className='bread-crumb-container'
            style={{ backgroundColor: '#fff', borderBottom: '1px solid #ccc' }}
        >
            <BreadCrumb data={data} />
        </div>
    );
}

export default BreadCrumbsContent;
