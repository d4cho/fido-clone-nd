import React, { Fragment } from 'react';
import './ListDivider.css';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Tabs from '../../Molecules/Tabs/Tabs';

function ListDivider({ minWidth, activeStep, listItems, open }) {
    console.log(open);

    //  const leftNavBarSwitchLabel = (menuTitle) => {
    //     switch (menuTitle) {
    //         case 'SHOP':
    //             setMenuTitle('SHOP');
    //             setOpen(!open);
    //             break;
    //         case 'MY ACCOUNT':
    //             setMenuTitle('MY ACCOUNT');
    //             break;
    //         case 'SUPPORT':
    //             setMenuTitle('SUPPORT');
    //             break;
    //         default:
    //             setMenuTitle('SHOP');
    //     }
    // };
    return (
        <div style={{ minWidth: minWidth }} className='list-divider-container'>
            {listItems.map((label, idx) => {
                return (
                    <Fragment key={idx}>
                        <p
                            className='list-divider-item '
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
                                            color: activeStep >= idx ? 'black' : 'grey',
                                        }}
                                    >
                                        {idx + 1}. {label.title}
                                    </span>
                                </>
                            )}
                        </p>
                        {open && activeStep >= idx && label.subTitle  ? (
                            <div className='list-divider-subtitle '>
                                <p>
                                    {idx + 1}. {label.subTitle}
                                </p>
                                <Tabs />
                            </div>
                        ) : null}
                    </Fragment>
                );
            })}
        </div>
    );
}

export default ListDivider;
