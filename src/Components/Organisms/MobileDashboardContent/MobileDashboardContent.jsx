import React, { Fragment } from 'react';
import './MobileDashboardContent.css';
import Card from '../../Molecules/Card/Card';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import Title from '../../Atoms/Title/Title';
import Link from '../../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function MobileDashboardContent() {
    const { matches } = useContext(MainContext);

    return (
        <>
            <Card
                mainContent={
                    <>
                        <div className='mobile-dashboard-container'>
                            <span style={{ fontSize: '3.3rem', fontWeight: '700' }}>
                                4.66
                                <span style={{ fontSize: '1.8rem', fontWeight: '500' }}>GB</span>
                            </span>

                            <img
                                src='https://www.fido.ca/self-serve/assets/i/usage/overage-protection.svg'
                                alt=''
                            />

                            {matches ? (
                                <>
                                    <div className='total-plan-and-GB-container'>
                                        <span>Total Data(plan included)</span>
                                        <span style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                                            5.00 GB
                                        </span>
                                    </div>

                                    {/* horizontal line */}
                                    <div
                                        style={{
                                            height: '40px',
                                            backgroundColor: '#f4f4f4',
                                            padding: ' 0.5px',
                                        }}
                                    />

                                    <div className='add-data-container'>
                                        <div className='add-data-mobile-dashboard'>
                                            <span className='plus-button-mobile-dashboard'>+</span>
                                        </div>
                                        <span style={{ paddingLeft: '10px', fontWeight: '700' }}>
                                            Add Data
                                        </span>
                                    </div>
                                </>
                            ) : null}
                        </div>

                        <span>Remaining data</span>

                        <div
                            className='mobile-data-meter'
                            style={{ width: matches ? '28%' : '100%' }}
                        >
                            <div
                                className='mobile-data-inner-meter'
                                style={{ width: matches ? '85%' : '85%' }}
                            />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                position: 'relative',
                            }}
                        >
                            <span>0GB</span>{' '}
                            <span
                                style={{ position: 'absolute', right: matches ? '580px' : '0px' }}
                            >
                                5.00GB
                            </span>
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <span>2 days remaining in bill cycle</span>
                        </div>
                    </>
                }
                backgroundColor='white'
                paddingBottom='0px !important'
                width='830px'
                matches={matches}
                paddingLeft='20px'
            />

            <div
                style={{ display: 'flex', flexDirection: matches ? 'row' : 'column', gap: '30px' }}
            >
                <div>
                    <Title
                        title='MY MOBILE PLAN'
                        fontSize='1.2rem'
                        fontWeight='800'
                        marginTop='50px'
                        marginLeft={!matches ? '20px' : null}
                    />
                    <Card
                        mainContent={
                            <>
                                <div
                                    style={{
                                        borderBottom: ' 1px solid #a8a8a8',
                                    }}
                                >
                                    <div className='fiverGB-And-cost-container'>
                                        <span style={{ fontSize: '2.2rem', fontWeight: '700' }}>
                                            5GB
                                        </span>

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                position: 'absolute',
                                                right: '5px',
                                            }}
                                        >
                                            <span>$ 50.00 /mo.</span>
                                        </div>
                                    </div>
                                    <Link
                                        title='UPGRADE PLAN'
                                        icon={<ChevronRightIcon />}
                                        width='200px'
                                        matches={matches}
                                        cursor='pointer'
                                        marginTop='10px'
                                    />
                                </div>
                                <p>Talk: Unlimited Canada-Wide Minutes</p>
                                <p>
                                    Text: Unlimited Text, Picture and Video Messages from Canada to
                                    U.S. & Intl Mobile Numbers
                                </p>
                            </>
                        }
                        backgroundColor='white'
                        width='500px'
                        matches={matches}
                        marginTop='20px'
                        border='1px solid black'
                        borderRadius='5px'
                    />
                </div>

                <div>
                    <Title
                        title='MY DEVICE'
                        fontSize='1.2rem'
                        fontWeight='800'
                        marginTop='50px'
                        marginLeft={!matches ? '20px' : null}
                    />
                    <Card
                        mainContent={
                            <div
                                style={{
                                    borderBottom: ' 1px solid #a8a8a8',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        marginTop: '10px',
                                        position: 'relative',
                                        borderBottom: ' 1px solid #a8a8a8',
                                        paddingBottom: '20px',
                                    }}
                                >
                                    <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>
                                        Samsung Galaxy A20 32GB Black
                                    </span>

                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            position: 'absolute',
                                            right: '5px',
                                        }}
                                    >
                                        <span>$ 0.00 /mo.</span>
                                        <span>Device Balance</span>
                                    </div>
                                </div>
                                <Link
                                    title='UPGRADE MY DEVICE'
                                    icon={<ChevronRightIcon />}
                                    width='250px'
                                    matches={matches}
                                    cursor='pointer'
                                    marginTop='10px'
                                />
                            </div>
                        }
                        backgroundColor='white'
                        width='500px'
                        matches={matches}
                        marginTop='20px'
                        border='1px solid black'
                        borderRadius='5px'
                        maxHeight='160px'
                    />
                </div>
            </div>
        </>
    );
}

export default MobileDashboardContent;
