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
}) {
    return (
        <div style={{ minWidth: minWidth, height: height }} className='list-divider-container'>
            {title && (
                <p
                    className='list-divider-item'
                    style={{
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    {shoppingIcon}
                    {title}
                </p>
            )}
            {listItems.map((label, idx) => {
                return (
                    <Fragment key={idx}>
                        <p
                            className='list-divider-item'
                            style={{
                                borderBottom:
                                    (label.subTitle === 'Select DATA Option' && open === true) ||
                                    label.title === 'Addons'
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
                        {showDropDown && showDropDown(label.subTitle, idx)}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default ListDivider;
