import React from 'react';
import './BreadCrumb.css';
function BreadCrumb({ data }) {
    return (
        <>
            <nav>
                <ul className='bread-crumb-container'>
                    {data.map((breadCrumbItem, idx) => (
                        <div key={idx}>
                            <li className='bread-crumb-item-list'>
                                {' '}
                                <a
                                    style={{
                                        color: breadCrumbItem.color,
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                    }}
                                    href={breadCrumbItem.href}
                                >
                                    {breadCrumbItem.title}
                                    <span style={{ color: 'black', paddingLeft:'5px' }}>{breadCrumbItem.slash}</span>
                                </a>
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default BreadCrumb;
