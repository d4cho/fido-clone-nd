import './CardContent.css';
import Card from '../../Molecules/Card/Card';
import Title from '../../Atoms/Title/Title';
import Link from '../../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import StarIcon from '@mui/icons-material/Star';

function CardContent() {
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
                    mainTitle='ALREADY HAVE A PHONE?'
                    subTitle='PLAN ONLY'
                    priceContent='Talk & Text plans starting at'
                    price='20'
                    priceSign='$'
                    zero='.00'
                    month='/mo.'
                    content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
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
                    mainTitle='NEED A NEW PHONE?'
                    subTitle='PLAN + PHONE'
                    priceContent='Phones starting at'
                    price='0'
                    priceSign='$'
                    zero='.00'
                    month='/down.'
                    content='Finance a new phone with Fido Payment Program4 then choose one of our plan options to match!'
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

export default CardContent;
