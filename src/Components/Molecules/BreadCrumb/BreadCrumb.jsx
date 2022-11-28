import React from 'react';

function BreadCrumb({ data }) {
    return (
        <>
            <nav>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '2px',
                        listStyle: 'none',
                        paddingLeft: '40px',
                        paddingTop: '10px',
                        paddingBottom: '10px',
                    }}
                >
                    {data.map((breadCrumbItem, idx) => (
                        <div key={idx}>
                            <li className='bread-crumb-item-list'>
                                {' '}
                                <a
                                    style={{
                                        color: breadCrumbItem.title !== 'Phones' ? '#035d67' : null,
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                    }}
                                    href={breadCrumbItem.href}
                                >
                                    {breadCrumbItem.title}
                                    <span style={{ color: 'black' }}>{breadCrumbItem.slash}</span>
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
