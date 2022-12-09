import React, { Fragment } from 'react';
import './ListDivider.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

function ListDivider({
    minWidth,
    activeStep,
    listItems,
    open,
    showDropDown,
    height,
    title,
    shoppingIcon,
    onClick,
    openCheckout,
    CheckoutInfo,
    arrowUp,
    arrowDown,
}) {
    return (
        <div style={{ minWidth: minWidth, height: height }} className='list-divider-container'>
            {title && (
                <p
                    onClick={onClick}
                    className='list-divider-item'
                    style={{
                        borderBottom: '1px solid #ccc',
                        cursor: 'pointer',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                    }}
                >
                    {shoppingIcon}
                    {title}
                    <span className='icon-open-close'> {openCheckout ? arrowUp : arrowDown}</span>
                </p>
            )}
            {listItems.map((label, idx) => {
                return (
                    <Fragment key={idx}>
                        <p
                            className='list-divider-item'
                            style={{
                                borderBottom:
                                    (label.subTitle === 'Select DATA Option' && open) ||
                                    label.subTitle === 'Addons' ||
                                    (label.title === 'Monthly Fees' && openCheckout) ||
                                    label.title === 'One-time fees'
                                        ? null
                                        : '1px solid #ccc',
                            }}
                        >
                            {activeStep >= idx ? (
                                <>
                                    <span style={{ color: 'green' }}>
                                        <CheckCircleOutlineOutlinedIcon />
                                    </span>
                                    {label.title}
                                </>
                            ) : (
                                <>
                                    <span
                                        style={{
                                            fontWeight: '400',
                                            color: activeStep === label.id ? 'black' : 'grey',
                                        }}
                                    >
                                        {label.id ? <span>{label.id}.</span> : null} {label.title}
                                    </span>
                                </>
                            )}
                        </p>
                        {showDropDown(label.subTitle, idx)}
                    </Fragment>
                );
            })}
            {CheckoutInfo}
        </div>
    );
}

export default ListDivider;
