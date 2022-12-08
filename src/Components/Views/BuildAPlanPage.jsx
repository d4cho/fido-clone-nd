import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { MainContext } from '../../Context/MainContext';
import { useContext, useState } from 'react';
import { breadCrumbsLabelsForPlans } from '../../Utils/NavbarLabel';
import ListDivider from '../Organisms/ListDivider/ListDivider';
import { dividerLabelItems } from '../../Utils/DividerLabels';
import Tabs from '../Molecules/Tabs/Tabs';
import Button from '../Atoms/Button/Button';
import { tabSwitcherLabels } from '../../Utils/DividerLabels';
import data from '../../Data/phone-data-options.json';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function BuildAPlanPage() {
    const { matches } = useContext(MainContext);
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(true);
    const [selectedView, setSelectedView] = useState('Data,Talk & Text');

    const nextStep = () => {
        if (activeStep < 2) {
            setActiveStep((currentStep) => currentStep + 2);
        }
        setOpen(false);
    };

    /// to show cards based on selecting a data option
    const renderSelectedView = (view) => {
        switch (view) {
            case 'Data,Talk & Text':
                const dataAndTalkText = data.data
                    ?.filter((phoneItem) => phoneItem.title === view)
                    .map((item) => (
                        <div className={view ? 'tab-card' : null}>
                            <p>{item.dataAmount}</p>
                            <p>{item.dataPlanType}</p>
                            <p>{item.dataPlanTypeCost}</p>
                        </div>
                    ));
                return dataAndTalkText;

            case 'Talk & Text':
                const talkAndText = data.data
                    ?.filter((phoneItem) => phoneItem.title === view)
                    .map((item) => (
                        <div className={view ? 'tab-card' : null}>
                            <p>{item.dataAmount}</p>
                            <p>{item.dataPlanType}</p>
                            <p>{item.dataPlanTypeCost}</p>
                        </div>
                    ));
                return talkAndText;

            case 'Basic':
                const basicPlan = data.data
                    ?.filter((phoneItem) => phoneItem.title === view)
                    .map((item) => (
                        <div className={view ? 'tab-card' : null}>
                            <p>{item.dataAmount}</p>
                            <p>{item.dataPlanType}</p>
                            <p>{item.dataPlanTypeCost}</p>
                        </div>
                    ));
                return basicPlan;

            default:
                return (
                    <div className={view ? 'tab-card' : null}>
                        <p>Data,Talk & Text</p>
                    </div>
                );
        }
    };

    /// to show the dropdown in the lis item
    const showDropDown = (subTitle, idx) => {
        switch (subTitle) {
            case 'Select DATA Option':
                return open ? (
                    <div className='list-divider-subtitle'>
                        <p style={{ fontWeight: '600' }}>
                            {idx + 1}. {subTitle}
                        </p>
                        <Tabs
                            tabSwitcherLabels={tabSwitcherLabels}
                            selectedView={selectedView}
                            setSelectedView={setSelectedView}
                        />
                        {renderSelectedView(selectedView)}
                        <Button
                            title='Continue'
                            backgroundColor='rgb(255, 230, 0)'
                            border='1px solid black'
                            onClick={nextStep}
                        />
                    </div>
                ) : null;
            case 'Addons':
                return !open ? (
                    <div className='list-divider-subtitle'>
                        <p style={{ fontWeight: '600' }}>
                            {idx + 1}. {subTitle}
                        </p>
                        <Tabs
                            tabSwitcherLabels={tabSwitcherLabels}
                            selectedView={selectedView}
                            setSelectedView={setSelectedView}
                        />
                        <Button
                            title='Continue'
                            backgroundColor='rgb(255, 230, 0)'
                            border='1px solid black'
                        />
                    </div>
                ) : null;
            default:
                return null;
        }
    };
    return (
        <>
            <BreadCrumbsContent data={breadCrumbsLabelsForPlans} />
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
                <Title
                    title='BUILD YOUR PLAN'
                    fontSize='2.4rem'
                    fontWeight='900'
                    textTransform='uppercase'
                    marginTop='50px'
                    marginLeft={!matches ? '20px' : null}
                />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: matches ? 'row' : 'column',
                        gap: '30px',
                        marginLeft: '20px',
                        marginRight: '20px',
                    }}
                >
                    <ListDivider
                        minWidth='750px'
                        listItems={dividerLabelItems}
                        activeStep={activeStep}
                        open={open}
                        showDropDown={showDropDown}
                    />
                    <ListDivider
                        minWidth='450px'
                        height='500px'
                        title='Cart Summary'
                        listItems={[{ title: 'Monthly Fees' }, { title: 'One-time fees' }]}
                        shoppingIcon={<ShoppingCartOutlinedIcon />}
                    />
                </div>
            </div>
        </>
    );
}

export default BuildAPlanPage;
