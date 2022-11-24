import React from 'react';
import TopNavBar from '../../Molecules/TopNavBar/TopNavBar';

function TopNavBarContent({ data, dropNav }) {
    return (
        <>
            <TopNavBar data={data} height='45px' backgroundColor='#ffe600' dropNavContent={dropNav} />
        </>
    );
}

export default TopNavBarContent;
