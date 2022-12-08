import React, { Fragment, useEffect } from 'react';
import './Tabs.css';
import Tab from '../../Atoms/Tab/Tab';

function Tabs({ tabSwitcherLabels, selectedView, setSelectedView }) {
    console.log(tabSwitcherLabels)
    console.log(selectedView)
    useEffect(() => {
        switch (selectedView) {
            case 'Data,Talk & Text':
                setSelectedView('Data,Talk & Text');
                break;
            case 'Talk & Text':
                setSelectedView('Talk & Text');
                break;
            case 'Basic':
                setSelectedView('Basic');
                break;
            default:
                setSelectedView('Data,Talk & Text');
        }
    }, [selectedView, setSelectedView]);
    return (
        <ul
            style={{
                display: 'flex',
                flexDirection: 'row',
                listStyle: 'none',
                gap: '70px',
                borderBottom: '1px solid #ccc',
            }}
        >
            {tabSwitcherLabels.map((tab, idx) => {
                return (
                    <Fragment key={idx}>
                        <Tab
                            tabName={tab}
                            onClick={() => setSelectedView(tab)}
                            styleTab={
                                selectedView === tab ? (
                                    <div style={{ backgroundColor: 'black', height: '2px', marginTop:'10px' }} />
                                ) : null
                            }
                        />
                    </Fragment>
                );
            })}
        </ul>
    );
}

export default Tabs;
