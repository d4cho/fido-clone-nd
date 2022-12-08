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
                    paddingLeft: '10px',
                }}
            >
                <h2 style={{ marginLeft: '15px' }}>{mainTitle}</h2>
                <ul>
                    {checkOutInfo.map((item, idx) => {
                        return (
                            <Fragment key={idx}>
                                <li style={{ marginTop: '10px' }}>{item.title}</li>
                            </Fragment>
                        );
                    })}
                </ul>
                <br />
                <p>{content}</p>
            </div>{' '}
        </>
    );
}

export default CheckoutInfo;
