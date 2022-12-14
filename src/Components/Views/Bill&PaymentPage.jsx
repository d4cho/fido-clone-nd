import React from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForBillAndPayment } from '../../Utils/NavbarLabel';
import BillAndPaymentContent from '../Organisms/Bill&PaymentContent/Bill&PaymentContent';
import { accountOverviewLabels } from '../../Utils/AccountOverviewLabels';

function BillAndPaymentPage() {
    const { matches } = useContext(MainContext);
    return (
        <div style={{ backgroundColor: '#e9e9e9', paddingBottom: '90px' }}>
            <BreadCrumbsContent data={breadCrumbsLabelsForBillAndPayment} />
            <div className='build-plan-container'>
                <Title
                    title='YOUR BILL AND ACCOUNT BALANCE'
                    subTitle='Account: 886898097'
                    fontSize='2.2rem'
                    fontWeight='700'
                    marginTop='50px'
                    marginLeft={!matches ? '20px' : null}
                />
                <BillAndPaymentContent accountOverviewLabel={accountOverviewLabels} />
            </div>
        </div>
    );
}

export default BillAndPaymentPage;
