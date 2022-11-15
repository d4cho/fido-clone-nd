import './ChoiceCardContent.css';
import ChoiceCard from '../../Molecules/ChoiceCard/ChoiceCard';
import Title from '../../Atoms/Title/Title';
import Link from '../../Atoms/Link/Link';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState, useEffect } from 'react';

function ChoiceCardContent() {
    const [matches, setMatches] = useState(window.matchMedia('(min-width: 1020px)').matches);

    useEffect(() => {
        window
            .matchMedia('(min-width: 1020px)')
            .addEventListener('change', (e) => setMatches(e.matches));
    }, []);
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
                <ChoiceCard
                    mainTitle='ALREADY HAVE A PHONE?'
                    subTitle='PLAN ONLY'
                    priceContent='Talk & Text plans starting at'
                    price='20'
                    priceSign='$'
                    zero='.00'
                    month='/mo.'
                    content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
                    Link={<Link href='/Phones' title='View Plans' icon={<ChevronRightIcon />} />}
                    width=' 330px'
                    matches={matches}
                />
                <ChoiceCard
                    mainTitle='NEED A NEW PHONE?'
                    subTitle='PLAN + PHONE'
                    priceContent='Phones starting at'
                    price='0'
                    priceSign='$'
                    zero='.00'
                    month='/down.'
                    content='Finance a new phone with Fido Payment Program4 then choose one of our plan options to match!'
                    Link={
                        <Link
                            href='/Build-A-Plan'
                            title='View Phones'
                            icon={<ChevronRightIcon />}
                        />
                    }
                    width=' 330px'
                    matches={matches}
                />
            </div>
        </>
    );
}

export default ChoiceCardContent;
