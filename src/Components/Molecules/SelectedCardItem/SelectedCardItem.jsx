import React, { Fragment } from 'react';
// import './SelectedCardItem.css';

function SelectedCardItem({ data, selected, onClick, view }) {
    return (
        <>
            {data
                ?.filter((phoneItem) => phoneItem.title === view)
                .map((item, i) => (
                    <div
                        key={i}
                        onClick={() => onClick(item.id)}
                        className={`${selected === item.id ? 'tab-card-selected' : ''} tab-card`}
                    >
                        <p>{item.dataAmount}</p>
                        <p>{item.dataPlanType}</p>
                        <p>{item.dataPlanTypeCost}</p>
                    </div>
                ))}
        </>
    );
}

export default SelectedCardItem;
