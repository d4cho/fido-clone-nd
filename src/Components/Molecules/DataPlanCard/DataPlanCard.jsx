import React, { Fragment } from 'react';
import './DataPlanCard.css';

function DataPlanCard({ data, selected, onClick, view }) {
    return (
        <>
            {data
                ?.filter((phoneItem) => phoneItem.title === view)
                .map((item, i) => (
                    <div
                        key={i}
                        style={{ position: 'relative' }}
                        onClick={() => onClick(item.id)}
                        className={`${selected === item.id ? 'tab-card-selected' : ''} tab-card`}
                    >
                        <p style={{ fontWeight: '700' }}>{item.dataPlanType}</p>
                        <p style={{ paddingRight: '150px' }}>{item.dataAmount}</p>

                        <p className='data-plan-cost'>${item.dataPlanTypeCost}.00/mo.</p>
                    </div>
                ))}
        </>
    );
}

export default DataPlanCard;
