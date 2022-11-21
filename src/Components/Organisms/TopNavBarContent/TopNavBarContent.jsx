import React from 'react';
import TopNavBar from '../../Molecules/TopNavBar/TopNavBar';

function TopNavBarContent({data}) {
    return (
        <>
            <TopNavBar data={data} height='45px' backgroundColor='#ffe600' />
        </>
    );
}

export default TopNavBarContent;
