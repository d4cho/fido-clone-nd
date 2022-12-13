import './Card.css';

function Card({
    mainTitle,
    subTitle,
    textContent,
    content,
    Link,
    width,
    matches,
    priceContent,
    starIcon,
    banner,
    image,
    fullPrice,
    height,
    discountPrice,
    taxes,
    certifiedPreOwned,
    backgroundColor,
    marginTop,
    marginLeft,
}) {
    return (
        <div
            style={{
                width: matches ? width : null,
                height: height,
                backgroundColor: backgroundColor,
                marginTop: !matches ? marginTop : null,
                marginLeft: !matches ? marginLeft : null,
                
            }}
            className='card-container-outline'
        >
            {banner}
            {starIcon}
            {image}
            <div className='inner-card-container'>
                {mainTitle}
                {subTitle}
                {textContent}
                {priceContent}
                {discountPrice}
                {taxes}
                {fullPrice}
                {content}
                {certifiedPreOwned}
                {Link}
            </div>
        </div>
    );
}

export default Card;
