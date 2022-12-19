import React from 'react';
import './DataPlanCard.css';

function DataPlanCard({
    selected,
    onClick,
    item,
    dataPlanType,
    dataAmount,
    dataPlanTypeCost,
}) {
    return (
        <>
            <div
                style={{ position: 'relative' }}
                onClick={() => onClick(item)}
                className={`${selected === item ? 'tab-card-selected' : ''} tab-card`}
            >
                <p style={{ fontWeight: '700' }}>{dataPlanType}</p>
                <p style={{ paddingRight: '150px' }}>{dataAmount}</p>

                <p className='data-plan-cost'>${dataPlanTypeCost}.00/mo.</p>
            </div>
        </>
    );
}

export default DataPlanCard;
