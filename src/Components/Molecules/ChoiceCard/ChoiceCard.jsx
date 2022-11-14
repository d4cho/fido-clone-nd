import './ChoiceCard.css';

function ChoiceCard({ mainTitle, subTitle, priceContent, content, Link, price, width, matches }) {
    return (
        <div
            style={{ width: matches ? width : null, margin: !matches ? '20px' : null }}
            className='card-container-outline'
        >
            {/* this will be the star icon top */}
            <div className='banner' />
            <div className='inner-card-container'>
                <p className='main-title'>{mainTitle}</p>
                <p className='sub-title'>{subTitle}</p>
                <p className='price-content'>{priceContent}</p>
                <p className='price'>{price}</p>
                <p className='content'>{content}</p>
                {Link}
            </div>
        </div>
    );
}

export default ChoiceCard;
