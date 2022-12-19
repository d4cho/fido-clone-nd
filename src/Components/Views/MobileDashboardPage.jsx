import React, { useState } from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForAccount } from '../../Utils/NavbarLabel';
import MobileDashboardContent from '../Organisms/MobileDashboardContent/MobileDashboardContent';

function MobileDashboardPage() {
    const { matches } = useContext(MainContext);

    return (
        <div style={{ backgroundColor: '#e9e9e9', paddingBottom: '90px' }}>
            <BreadCrumbsContent data={breadCrumbsLabelsForAccount} />
            <div className='build-plan-container'>
                <Title
                    title="NAVDEEP'S MOBILE DASHBOARD"
                    fontSize='1.5rem'
                    fontWeight='800'
                    marginTop='50px'
                    marginLeft={!matches ? '20px' : null}
                />
                <p style={{ marginLeft: !matches ? '20px' : null }}>
                    Account: 88566664455 - 647 444-3585
                </p>

                <Title
                    title='DATA'
                    fontSize='1.1rem'
                    fontWeight='800'
                    marginLeft={!matches ? '20px' : null}
                />
                <MobileDashboardContent/>
            </div>
        </div>
    );
}

export default MobileDashboardPage;
