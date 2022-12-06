import Title from '../Atoms/Title/Title';
import React from 'react';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { breadCrumbsLabels } from '../../Utils/NavbarLabel';
import PhoneCardContent from '../Organisms/PhoneCardContent/PhoneCardContent';
import { MainContext } from '../../Context/MainContext';
import { useContext } from 'react';
import { filterLabels } from '../../Utils/Filter';
import FilterContent from '../Organisms/FilterContent/FilterContent';
import data from '../../Data/phone-data.json';
import SideBarDrawer from '../Organisms/SideBarDrawer/SideBarDrawer';
import Button from '../Atoms/Button/Button';
import FilterListIcon from '@mui/icons-material/FilterList';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { FilterContext } from '../../Context/FilterContext';

function PhonesPage() {
    const { matches, filterToggleChange } = useContext(MainContext);
    const { setIsChecked, filterNames, setFilterNames } = useContext(FilterContext);

    const handleFilterChange = (label) => {
        if (filterNames.includes(label)) {
            setFilterNames((prev) => prev.filter((filter) => filter !== label));
        } else {
            setFilterNames((prev) => [...prev, label]);
        }
    };

    // reset all filters
    const resetFilters = () => {
        setFilterNames([]);
        setIsChecked(false);
    };

    // show the filtered phones on the UI
    const filteredPhones =
        filterNames.length > 0
            ? data.data.filter((phone) => {
                  if (
                      filterNames.includes(phone.vendor) ||
                      filterNames.includes(phone.certifiedPreOwned) ||
                      filterNames.includes(phone.banner) ||
                      filterNames.includes(phone.smartPhone) ||
                      filterNames.includes(phone.basicPhones) ||
                      filterNames.includes(phone.new)
                  ) {
                      return true;
                  }
                  return false;
              })
            : data.data;

    const filterCount = filteredPhones.reduce(
        (acc, phone) => {
            if (phone.vendor === 'Apple') {
                acc.Apple += 1;
            }
            if (phone.vendor === 'Samsung') {
                acc.Samsung += 1;
            }
            if (phone.vendor === 'Google') {
                acc.Google += 1;
            }
            if (phone.vendor === 'Motorola') {
                acc.Motorola += 1;
            }
            if (phone.vendor === 'TCL') {
                acc.TCL += 1;
            }
            if (phone.vendor === 'Alcatel') {
                acc.Alcatel += 1;
            }
            if (phone.banner === 'Clearance') {
                acc.Clearance += 1;
            }
            if (phone.smartPhone === 'Smartphone') {
                acc.Smartphone += 1;
            }
            if (phone.basicPhones === 'Basic Phones') {
                acc['Basic Phones'] += 1;
            }
            if (phone.new === 'New') {
                acc['New'] += 1;
            }

            if (phone.certifiedPreOwned === 'Certified Pre-Owned') {
                acc['Certified Pre-Owned'] += 1;
            }
            return acc;
        },
        {
            New: 0,
            'Certified Pre-Owned': 0,
            Samsung: 0,
            Apple: 0,
            Google: 0,
            Motorola: 0,
            TCL: 0,
            Alcatel: 0,
            Clearance: 0,
            Smartphone: 0,
            'Basic Phones': 0,
        }
    );

    /// find length of label before filtering
    const showLengthEachLabel = (label) => {
        switch (label) {
            case label:
                const beforeFilterPhonesLength = data.data?.filter(
                    (item) =>
                        item.vendor === label ||
                        item.banner === label ||
                        item.certifiedPreOwned === label ||
                        item.certifiedPreOwned === label ||
                        item.smartPhone === label ||
                        item.basicPhones === label ||
                        item.new === label
                );
                return beforeFilterPhonesLength.length;
            default:
                return beforeFilterPhonesLength.length;
        }
    };

    return (
        <div>
            <BreadCrumbsContent data={breadCrumbsLabels} />
            <SideBarDrawer
                filterContentContainer={
                    <FilterContent
                        filters={filterLabels}
                        onChange={handleFilterChange}
                        filterCounter={filterNames.length}
                        filterNames={filterNames}
                        showLengthEachLabel={showLengthEachLabel}
                        filterCount={filterCount}
                        position='relative'
                        bottom='120px'
                        left='10px'
                        paddingRight='30px'
                        resetFilters={resetFilters}
                    />
                }
                buttonFilter={
                    <span
                        style={{
                            cursor: 'pointer',
                            position: 'absolute',
                            top: '-90px',
                            right: '2px',
                        }}
                    >
                        <HighlightOffOutlinedIcon onClick={filterToggleChange} />
                    </span>
                }
            />
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
                    marginLeft={!matches ? '20px' : null}
                />
                <Button
                    onClick={filterToggleChange}
                    title='Filters'
                    filterCounter={filterNames.length}
                    matches={matches}
                    filterIcon={<FilterListIcon />}
                    width='210px'
                    marginLeft='20px'
                />
                {/* the filter for the cards */}
                {matches && (
                    <FilterContent
                        filters={filterLabels}
                        onChange={handleFilterChange}
                        filterCounter={filterNames.length}
                        filterNames={filterNames}
                        showLengthEachLabel={showLengthEachLabel}
                        filterCount={filterCount}
                        width='210px'
                        resetFilters={resetFilters}
                    />
                )}
                <PhoneCardContent
                    filteredPhones={filteredPhones}
                    position='relative'
                    bottom='680px'
                    marginLeft='220px'
                />
            </div>
        </div>
    );
}

export default PhonesPage;
