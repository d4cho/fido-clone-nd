import Title from '../Atoms/Title/Title';
import React from 'react';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { breadCrumbsLabels } from '../../Utils/NavbarLabel';
import PhoneCardContent from '../Organisms/PhoneCardContent/PhoneCardContent';
import { MainContext } from '../../Context/MainContext';
import { useContext, useState } from 'react';
import { filterLabels } from '../../Utils/Filter';
import FilterContent from '../Organisms/FilterContent/FilterContent';
import data from '../../Data/phone-data.json';

function PhonesPage() {
    const { matches } = useContext(MainContext);
    const [filterNames, setFilterNames]= useState([])

    const handleFilterChange = (label) => {
        if (filterNames.includes(label)) {
          setFilterNames(prev => prev.filter((filter) => filter !== label ))  
        }
        else {
            setFilterNames(prev => [...prev, label])
        }
    }

    const filteredPhones =  filterNames.length > 0 ? data.data.filter((phone) => {
        if (filterNames.includes(phone.vendor) || filterNames.includes(phone.certifiedPreOwned)) {
            return true;
        }
        return false;
    })
        : data.data
    
    console.log(filterNames);
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
                <FilterContent
                    filters={filterLabels}
                    onChange={handleFilterChange}
                />
                <PhoneCardContent filteredPhones={filteredPhones} />
            </div>
        </div>
    );
}

export default PhonesPage;
