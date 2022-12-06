import React from 'react';
import BreadCrumb from '../../Molecules/BreadCrumb/BreadCrumb';
import './BreadCrumbsContent.css';

function BreadCrumbsContent({ data }) {
    return (
        <div
            className='bread-crumb-container'
            style={{ backgroundColor: '#fff', borderBottom: '1px solid #ccc' }}
        >
            <div className='container'>
                <BreadCrumb data={data} />
            </div>
        </div>
    );
}

export default BreadCrumbsContent;
