import React from 'react';
import Card from '../../Molecules/Card/Card';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext} from 'react';
import { MainContext } from '../../../Context/MainContext';
import Link from '../../Atoms/Link/Link';

import data from '../../../Data/phone-data.json';

function PhoneCardContent() {
    const { matches } = useContext(MainContext);
    console.log(matches);
    return (
        <>
            <div
                style={{
                    gridTemplateColumns: matches ? 'repeat(3,225px)' : null,
                    display: 'grid',
                    gridAutoRows: 'auto',
                    gridGap: '30px',
                    marginLeft: matches ? '220px' : null,
                    position: matches ? 'relative' : null,
                    bottom: matches ? '130px' : null,
                }}
            >
                {data.data?.map((phone, idx) => (
                    <div key={idx}>
                        <Card
                            banner={
                                <div
                                    style={{
                                        backgroundColor: '#33bfbc',
                                        paddingBottom: '5px',
                                        paddingTop: '5px',
                                        marginBottom: '30px',
                                        paddingLeft: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {phone.banner.toUpperCase()}
                                </div>
                            }
                            subTitle={phone.name}
                            subTitleFontSize='0.9rem'
                            image={<img src={phone.image} alt='' />}
                            price={phone.properties.cost.standard}
                            priceSign={phone.properties.cost.priceSign}
                            zero={phone.properties.cost.zero}
                            month={phone.properties.cost.down}
                            fullPrice={
                                <p style={{ fontWeight: 'bold' }}>
                                    Full Price: ${phone.fullPrice}.00
                                </p>
                            }
                            content={phone.content}
                            Link={
                                <Link href='/' title='VIEW DETAILS' icon={<ChevronRightIcon />} />
                            }
                            width=' 230px'
                            matches={matches}
                            height='100%'
                        />
                    </div>
                ))}
            </div>
        </>
    );
}

export default PhoneCardContent;
