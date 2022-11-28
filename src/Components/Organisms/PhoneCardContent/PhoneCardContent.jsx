import React from 'react';
import Card from '../../Molecules/Card/Card';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useContext } from 'react';
import { MainContext } from '../../../Context/MainContext';
import Link from '../../Atoms/Link/Link';
import data from '../../../Data/phone-data.json';
import './PhoneCardContent.css';

function PhoneCardContent() {
    const { matches } = useContext(MainContext);
    return (
        <>
            <div className='phone-card-content'>
                {data.data?.map((phone, idx) => (
                    <div key={idx}>
                        <Card
                            banner={
                                phone.banner.length > 0 ? (
                                    <div className='phone-banner'>{phone.banner.toUpperCase()}</div>
                                ) : (
                                    <div style={{marginTop:'30px'}}>{phone.banner.toUpperCase()}</div>
                                )
                            }
                            subTitle={phone.name}
                            discountPrice={
                                <>
                                    <span className='discount-price-line-through'>
                                        {phone.properties.cost.reducedPrice}
                                    </span>
                                    <span
                                        className='discount-price'
                                        style={{
                                            color: '#d22000',
                                        }}
                                    >
                                        {phone.properties.cost.reducedDiscount}
                                    </span>
                                    <span className='discount-price'>
                                        {phone.properties.cost.reduced}
                                    </span>
                                </>
                            }
                            subTitleFontSize='1.0rem'
                            image={<img src={phone.image} alt='' />}
                            price={phone.properties.cost.standard}
                            priceSign={phone.properties.cost.priceSign}
                            zero={phone.properties.cost.zero}
                            month={phone.properties.cost.down}
                            fullPrice={
                                <p className='phone-full-price'>
                                    Full Price: ${phone.fullPrice}
                                </p>
                            }
                            taxes={
                                <div className='calculation-content'>
                                    {phone.taxes.map((data) => (
                                        <p>{data} |</p>
                                    ))}
                                </div>
                            }
                            content={<p className='phone-bottom-content'>{phone.content}</p>}
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
