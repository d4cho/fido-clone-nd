import React from 'react';
import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { useContext, useState } from 'react';
import { MainContext } from '../../Context/MainContext';
import { breadCrumbsLabelsForBillAndPayment } from '../../Utils/NavbarLabel';
import BillAndPaymentContent from '../Organisms/Bill&PaymentContent/Bill&PaymentContent';
import { accountOverviewLabels } from '../../Utils/AccountOverviewLabels';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import Button from '../Atoms/Button/Button';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';


function BillAndPaymentPage() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [show, setShow] = useState(false);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    const showPdf = () => {
        if (show) {
            onDocumentLoadSuccess();
        }
        setShow(true);
    };

    function changePage(offSet) {
        setPageNumber((prevPageNumber) => prevPageNumber + offSet);
    }

    function changePageBack() {
        changePage(-1);
    }

    function changePageNext() {
        changePage(+1);
    }
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
                <Button
                    title='View Bill'
                    backgroundColor='#e9e9e9'
                    border='none'
                    marginTop='10px'
                    color='teal'
                    filterIcon={<PictureAsPdfOutlinedIcon />}
                    onClick={showPdf}
                />
                {show && matches ? (
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Document file='Fido-2022.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                            <Page height={600} pageNumber={pageNumber} />
                        </Document>
                    </div>
                ) : null}

                {pageNumber > 1 && matches && show ? (
                    <button onClick={changePageBack}>Previous Page</button>
                ) : null}
                {pageNumber < numPages && matches && show ? (
                    <button onClick={changePageNext}>Next Page</button>
                ) : null}

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    {show && matches ? (
                        <p>
                            Page {pageNumber} of {numPages}
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default BillAndPaymentPage;
