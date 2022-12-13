import './ChoiceCardContent.css';
import Card from '../../Molecules/Card/Card';
import Title from '../../Atoms/Title/Title';
import Link from '../../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import StarIcon from '@mui/icons-material/Star';

function ChoiceCardContent() {
    const { matches } = useContext(MainContext);
    return (
        <>
            <Title
                title='Plans'
                textAlign='center'
                fontSize='2.4rem'
                fontWeight='900'
                textTransform='uppercase'
            />
            <div className='card-container'>
                <Card
                    mainTitle={
                        <h1 style={{ textAlign: 'center' }} className='main-title'>
                            ALREADY HAVE A PHONE?
                        </h1>
                    }
                    subTitle={<h1 className='sub-title'>Plan Only?</h1>}
                    textContent={<p className='price-content'>Talk & Text plans starting at</p>}
                    priceContent={
                        <div className='price-container'>
                            <p>$</p>
                            <p style={{ fontSize: '2.2rem', fontWeight: '700' }}>20</p>
                            <p>.00</p>
                            <p>/mo.</p>
                        </div>
                    }
                    content={
                        <p className='content'>
                            We’ve also got you covered with value-packed plans that give you all the
                            data, talk and text you need!
                        </p>
                    }
                    Link={
                        <Link href='/Build-A-Plan' title='View Plans' icon={<ChevronRightIcon />} />
                    }
                    width=' 330px'
                    matches={matches}
                    starIcon={
                        <StarIcon
                            style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-1px',
                                color: 'white',
                            }}
                        />
                    }
                    banner={<div className='banner' />}
                />
                <Card
                    mainTitle={
                        <h1 style={{ textAlign: 'center' }} className='main-title'>
                            NEED A PHONE?
                        </h1>
                    }
                    subTitle={<h1 className='sub-title'>PlAN + PHONE?</h1>}
                    textContent={<p className='price-content'>Phones starting at</p>}
                    priceContent={
                        <div className='price-container'>
                            <p>$</p>
                            <p style={{ fontSize: '2.2rem', fontWeight: '700' }}>0</p>
                            <p>.00</p>
                            <p>/mo.</p>
                        </div>
                    }
                    content={
                        <p className='content'>
                            Finance a new phone with Fido Payment Program4 then choose one of our //
                            plan options to match!
                        </p>
                    }
                    Link={<Link href='/Phones' title='View Phones' icon={<ChevronRightIcon />} />}
                    width=' 330px'
                    matches={matches}
                    starIcon={
                        <StarIcon
                            style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-1px',
                                color: 'white',
                            }}
                        />
                    }
                    banner={<div className='banner' />}
                />
            </div>
        </>
    );
}

export default ChoiceCardContent;
