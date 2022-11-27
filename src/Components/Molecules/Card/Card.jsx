import './Card.css';


function Card({
    mainTitle,
    subTitle,
    priceContent,
    content,
    Link,
    width,
    matches,
    price,
    priceSign,
    zero,
    month,
    starIcon,
    banner
}) {
    return (
        <div
            style={{ width: matches ? width : null, margin: !matches ? '20px' : null }}
            className='card-container-outline'
        >
            {banner}
            {starIcon}
            <div className='inner-card-container'>
                <h1 className='main-title'>{mainTitle}</h1>
                <h1 className='sub-title'>{subTitle}</h1>
                <p className='price-content'>{priceContent}</p>
                <div className='price-container'>
                    <p>{priceSign}</p>
                    <h1 style={{ fontSize: '2.2rem', fontWeight: '700' }}>{price}</h1>
                    <p>{zero}</p>
                    <p>{month}</p>
                </div>
                <p className='content'>{content}</p>
                {Link}
            </div>
        </div>
    );
}

export default Card;
