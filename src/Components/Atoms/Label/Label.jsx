import React from 'react';
import './Label.css';

function Label({ Label, fontSize, fontWeight, paddingTop }) {
    return (
        <>
            <label style={{ fontSize: fontSize, fontWeight: fontWeight, paddingTop: paddingTop }}>
                {Label}
            </label>
        </>
    );
}

export default Label;
