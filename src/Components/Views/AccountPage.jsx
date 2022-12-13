import React from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForAccount } from '../../Utils/NavbarLabel';
import MyAccountContent from '../Organisms/MyAccountContent/MyAccountContent';
import { accountOverviewLabels } from '../../Utils/AccountOverviewLabels';

function AccountPage() {
    const { matches } = useContext(MainContext);
    return (
        <div style={{ backgroundColor: '#e9e9e9', paddingBottom: '90px' }}>
            <BreadCrumbsContent data={breadCrumbsLabelsForAccount} />
            <div className='build-plan-container'>
                <Title
                    title='Welcome'
                    fontSize='1.2rem'
                    fontWeight='700'
                    marginTop='50px'
                    marginLeft={!matches ? '20px' : null}
                />
                <MyAccountContent accountOverviewLabel={accountOverviewLabels} />
            </div>
        </div>
    );
}

export default AccountPage;
