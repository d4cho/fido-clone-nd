import React, { useState } from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForAccount } from '../../Utils/NavbarLabel';
import MyAccountContent from '../Organisms/MyAccountContent/MyAccountContent';
import { accountOverviewLabels } from '../../Utils/AccountOverviewLabels';
import AlertContent from '../Molecules/AlertContent/AlertContent';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';

function AccountPage() {
    const { matches } = useContext(MainContext);
    const [showAlert, setShowAlert] = useState(true);
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
                <AlertContent
                    backgroundColor='#effdff'
                    marginBottom='20px'
                    content={
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                flexDirection: 'column',
                                gap: '5px',
                                marginLeft: '20px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}
                            >
                                <ErrorOutlineIcon />
                                <b> Psst. Exclusive offer right here</b>
                            </div>
                            Get a new phone today & save with this extra special deal. Just for you.
                        </div>
                    }
                    closeIcon={
                        <div
                            style={{
                                position: 'absolute',
                                bottom: '30px',
                                right: '20px',
                                top: '10px',
                                cursor: 'pointer',
                            }}
                        >
                            <CloseIcon onClick={() => setShowAlert(false)} />
                        </div>
                    }
                    show={showAlert}
                />
                <MyAccountContent accountOverviewLabel={accountOverviewLabels} />
            </div>
        </div>
    );
}

export default AccountPage;
