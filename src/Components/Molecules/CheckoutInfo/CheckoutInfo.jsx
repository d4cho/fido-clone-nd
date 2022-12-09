import React, { Fragment } from 'react';
import './CheckoutInfo.css';

function CheckoutInfo({ checkOutInfo, mainTitle, content }) {
    return (
        <>
            <div
                style={{
                    height: '268px',
                    borderTop: '1px solid rgb(204, 204, 204)',
                    backgroundColor: '#f5f5f5',
                    paddingLeft: '15px',
                    paddingRight: '15px',
                }}
            >
                <h2 style={{ marginLeft: '15px' }}>{mainTitle}</h2>
                <ul>
                    {checkOutInfo.map((item, idx) => {
                        return (
                            <Fragment key={idx}>
                                <li style={{ marginTop: '10px', fontSize: '0.9rem' }}>
                                    {item.title}
                                </li>
                            </Fragment>
                        );
                    })}
                </ul>
                <br />
                <p className='content-cart'>{content}</p>
            </div>{' '}
        </>
    );
}

export default CheckoutInfo;
