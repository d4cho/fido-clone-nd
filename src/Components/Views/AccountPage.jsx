import React from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForAccount } from '../../Utils/NavbarLabel';
import Card from '../Molecules/Card/Card';
import Link from '../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SmartphoneIcon from '@mui/icons-material/Smartphone';

function AccountPage() {
    const { matches } = useContext(MainContext);
    return (
        <div style={{ backgroundColor: '#e9e9e9', paddingBottom:'20px' }}>
            <BreadCrumbsContent data={breadCrumbsLabelsForAccount} />
            <div className='build-plan-container'>
                <Title
                    title='Welcome'
                    fontSize='2.4rem'
                    fontWeight='900'
                    textTransform='uppercase'
                    marginTop='50px'
                    marginLeft={!matches ? '20px' : null}
                />
                <div>
                    <Card
                        mainTitle='Mobile Account'
                        textAlign='left'
                        color='black'
                        subTitle='Account: 888455886'
                        fontSize='0.9rem'
                        backgroundColor='white'
                        SmartphoneIcon={<SmartphoneIcon fontSize='large' />}
                        costText={
                            <div>
                                <h2>Total Balance</h2>
                                <p>$ 0 .00</p>
                                <p>Payment not required</p>
                                <Link
                                    title='VIEW & MANAGE BILL'
                                    icon={<ChevronRightIcon />}
                                    width='280px'
                                    matches={matches}
                                />
                                <Link
                                    title='MAKE A PAYMENT'
                                    icon={<ChevronRightIcon />}
                                    width=' 280px'
                                    matches={matches}
                                    backgroundColor='white'
                                />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default AccountPage;
