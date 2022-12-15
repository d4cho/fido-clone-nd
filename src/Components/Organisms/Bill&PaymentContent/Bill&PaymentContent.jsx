import React, { Fragment } from 'react';
import './Bill&PaymentContent.css';
import Card from '../../Molecules/Card/Card';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from '../../Atoms/Link/Link';

function BillAndPaymentContent({ accountOverviewLabel }) {
    const { matches } = useContext(MainContext);

    // check for each one add bold
    const hasBalanceOrZero = (type) => {
        return ['TOTAL BALANCE', '$0.00'].includes(type);
    };
    return (
        <>
            <Card
                mainContent={
                    <>
                        {' '}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {accountOverviewLabel.map((item, idx) => {
                                return (
                                    <Fragment key={idx}>
                                        <span>{hasBalanceOrZero(item) ? <b>{item}</b> : item}</span>
                                    </Fragment>
                                );
                            })}
                        </div>
                        <div className='bill-payment-button-container'>
                            <div className='position-buttons-bills-page'>
                                <Link
                                    title='VIEW & MANAGE BILL'
                                    icon={<ChevronRightIcon />}
                                    width='220px'
                                    matches={matches}
                                    href='/Bill-And-Payment'
                                    cursor='pointer'
                                />
                                <Link
                                    title='MAKE A PAYMENT'
                                    icon={<ChevronRightIcon />}
                                    width=' 220px'
                                    matches={matches}
                                    backgroundColor='white'
                                />
                            </div>
                        </div>
                    </>
                }
                backgroundColor='white'
                paddingTop='30px'
                subTitle={
                    <p>
                        Last payment received: <b>December 2, 2022 </b> for <b>$107.35</b>
                    </p>
                }
            />
        </>
    );
}

export default BillAndPaymentContent;
