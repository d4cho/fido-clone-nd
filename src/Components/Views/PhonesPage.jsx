import Title from '../Atoms/Title/Title';
import React from 'react';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { breadCrumbsLabels } from '../../Utils/NavbarLabel';
import PhoneCardContent from '../Organisms/PhoneCardContent/PhoneCardContent';
import { MainContext } from '../../Context/MainContext';
import { useContext } from 'react';
import { filterLabels } from '../../Utils/Filter';
import FilterContent from '../Organisms/FilterContent/FilterContent';

function PhonesPage() {
    const { matches } = useContext(MainContext);

    return (
        <div>
            <BreadCrumbsContent data={breadCrumbsLabels} />
            <div
                style={{
                    width: '100%',
                    paddingRight: matches ? '24px' : null,
                    paddingLeft: matches ? '24px' : null,
                    marginRight: matches ? 'auto' : null,
                    marginLeft: matches ? 'auto' : null,
                    maxWidth: matches ? '1100px' : null,
                }}
            >
                {' '}
                <Title
                    title='Phones'
                    fontSize='2.4rem'
                    fontWeight='900'
                    textTransform='uppercase'
                    marginTop='50px'
                />
                {/* the filter for the cards */}
                <FilterContent filters={filterLabels} />
                <PhoneCardContent />
            </div>
        </div>
    );
}

export default PhonesPage;
