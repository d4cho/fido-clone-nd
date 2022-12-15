import React, { Fragment } from 'react';
import './MyAccountContent.css';
import Card from '../../Molecules/Card/Card';
import Link from '../../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';

function MyAccountContent({ accountOverviewLabel }) {
    const { matches } = useContext(MainContext);

    // check for each one add bold
    const hasBalanceOrZero = (type) => {
        return ['TOTAL BALANCE', '$0.00'].includes(type);
    };
    return (
        <>
            <Card
                mainContent={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: matches ? 'row' : 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div className='mobile-icon-text-container'>
                            <SmartphoneIcon style={{ fontSize: '40px' }} />

                            <span style={{ fontWeight: '700', fontSize: '1.2rem' }}>
                                Mobile Account <br />
                                Account: 888455886
                            </span>
                        </div>

                        <div className='total-balance-button-links-container'>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                {accountOverviewLabel.map((item, idx) => {
                                    return (
                                        <Fragment key={idx}>
                                            <span>{hasBalanceOrZero(item) ? <b>{item}</b> : item}</span>
                                        </Fragment>
                                    );
                                })}
                            </div>
                            <div
                                style={{
                                    display: !matches ? 'flex' : null,
                                    flexDirection: !matches ? 'column' : null,
                                }}
                            >
                                <Link
                                    title='VIEW & MANAGE BILL'
                                    icon={<ChevronRightIcon />}
                                    width='250px'
                                    matches={matches}
                                    href='/Bill-And-Payment'
                                    cursor='pointer'
                                />
                                <Link
                                    title='MAKE A PAYMENT'
                                    icon={<ChevronRightIcon />}
                                    width=' 250px'
                                    matches={matches}
                                    backgroundColor='white'
                                />
                            </div>
                        </div>
                    </div>
                }
                backgroundColor='white'
                subTitle={
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: matches ? '160px' : null,
                            paddingRight: matches ? '190px' : null,
                        }}
                    >
                        <div>
                            <p className='payment-rec-account-page'>
                                Last payment received: <b>December 2, 2022</b> for <b> $107.35</b>
                            </p>
                            <span className='contact-info-button-container'>
                                <p>
                                    <b>Navdeep Dhamrait</b> 647 985-3080{' '}
                                </p>
                                <Link
                                    title='View Usage & Manage'
                                    icon={<ChevronRightIcon />}
                                    width={matches ? '220px' : '310px'}
                                    matches={matches}
                                    href='/'
                                    cursor='pointer'
                                    backgroundColor='white'
                                    border='none'
                                    color='teal'
                                />
                            </span>
                        </div>
                    </div>
                }
            />
        </>
    );
}

export default MyAccountContent;
