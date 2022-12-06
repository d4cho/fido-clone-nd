import Title from '../Atoms/Title/Title';
import BreadCrumbsContent from '../Organisms/BreadCrumbsContent/BreadCrumbsContent';
import { MainContext } from '../../Context/MainContext';
import { useContext, useState } from 'react';
import { breadCrumbsLabelsForPlans } from '../../Utils/NavbarLabel';
import ListDivider from '../Organisms/ListDivider/ListDivider';
import { dividerLabelItems } from '../../Utils/DividerLabels';

function BuildAPlanPage() {
    const { matches } = useContext(MainContext);
    const [activeStep, setActiveStep] = useState(0);
    const [open, setOpen] = useState(true);


    const nextStep = () => {
        if (activeStep < 2) {
            setActiveStep((currentStep) => currentStep + 1);
        }
        setOpen(false)
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
                <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }}>
                    <ListDivider
                        minWidth='750px'
                        listItems={dividerLabelItems}
                        activeStep={activeStep}
                        open={open}
                    />
                    {/* <ListDivider width='600px' stepper={['hello', 'welcome', 'welcome']} /> */}
                </div>
                <button onClick={nextStep}>Continue</button>
            </div>
        </>
    );
}

export default BuildAPlanPage;
