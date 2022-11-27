import Title from '../Atoms/Title/Title';
import React from 'react';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { breadCrumbsLabels } from '../../Data/NavbarLabel';
import Card from '../Molecules/Card/Card';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext } from 'react';
import { MainContext } from '../../Context/MainContext';
import Link from '../Atoms/Link/Link';

function PhonesPage() {
    const { matches } = useContext(MainContext);
    return (
        <div>
            <BreadCrumbsContent data={breadCrumbsLabels} />
            <div
                style={{
                    width: '100%',
                    paddingRight: '24px',
                    paddingLeft: '24px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    maxWidth: '1100px',
                }}
            >
                {' '}
                <Title
                    title='Phones'
                    fontSize='2.4rem'
                    fontWeight='900'
                    textTransform='uppercase'
                    marginLeft='140px'
                    marginTop='50px'
                />
                <h3>Filtred By</h3>
                <ul style={{ border: '2px solid black', width: '150px' }}>
                    <li>Samsung</li>
                    <li>Apple</li>
                    <li>Google</li>
                    <li>TCL</li>
                    <li>Motorola</li>
                    <li>Apple</li>
                    <li>Google</li>
                    <li>TCL</li>
                    <li>Motorola</li>
                </ul>
                <div
                    style={{
                        gridTemplateColumns: 'repeat(3,225px)',
                        display: 'grid',
                        gridAutoRows: 'auto',
                        gridGap: '30px',
                        marginLeft: '220px',
                    }}
                >
                    <Card
                        subTitle='PLAN ONLY'
                        priceContent='Talk & Text plans starting at'
                        price='20'
                        priceSign='$'
                        zero='.00'
                        month='/mo.'
                        content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
                        Link={<Link href='/' title='VIEW DETAILS' icon={<ChevronRightIcon />} />}
                        width=' 230px'
                        matches={matches}
                    />
                    <Card
                        subTitle='PLAN ONLY'
                        priceContent='Talk & Text plans starting at'
                        price='20'
                        priceSign='$'
                        zero='.00'
                        month='/mo.'
                        content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
                        Link={<Link href='/' title='VIEW DETAILS' icon={<ChevronRightIcon />} />}
                        width=' 230px'
                        matches={matches}
                    />
                    <Card
                        subTitle='PLAN ONLY'
                        priceContent='Talk & Text plans starting at'
                        price='20'
                        priceSign='$'
                        zero='.00'
                        month='/mo.'
                        content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
                        Link={<Link href='/' title='VIEW DETAILS' icon={<ChevronRightIcon />} />}
                        width='230px'
                        matches={matches}
                    />
                    <Card
                        subTitle='PLAN ONLY'
                        priceContent='Talk & Text plans starting at'
                        price='20'
                        priceSign='$'
                        zero='.00'
                        month='/mo.'
                        content='We’ve also got you covered with value-packed plans that give you all the data, talk and text you need!'
                        Link={<Link href='/' title='VIEW DETAILS' icon={<ChevronRightIcon />} />}
                        width='230px'
                        matches={matches}
                    />
                </div>
            </div>
        </div>
    );
}

export default PhonesPage;
