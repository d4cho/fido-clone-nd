import React, { Fragment } from 'react';
import './Label.css';

function Label({
    Label,
    fontSize,
    fontWeight,
    paddingTop,
    showLengthEachLabel,
    filterCount

}) {
    return (
        <>
            <label style={{ fontSize: fontSize, fontWeight: fontWeight, paddingTop: paddingTop }}>
                {Label} {showLengthEachLabel ? <span>({filterCount || 0})</span> : null}
            </label>
        </>
    );
}

export default Label;
