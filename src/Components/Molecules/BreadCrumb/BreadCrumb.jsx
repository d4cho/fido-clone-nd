import React from 'react';

function BreadCrumb({ data }) {
    return (
        <>
            <nav>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '5px',
                        listStyle: 'none',
                        paddingLeft: '40px',
                        paddingTop: '18px',
                        paddingBottom: '15px',
                    }}
                >
                    {data.map((breadCrumbItem, idx) => (
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
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}

export default BreadCrumb;
