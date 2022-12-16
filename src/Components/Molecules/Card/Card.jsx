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
    mainContent,
    paddingTop,
    paddingBottom,
    paddingLeft,
    display,
    justifyContent,
    border,
    borderRadius,
    maxHeight,
}) {
    return (
        <div
            style={{
                width: matches ? width : null,
                height: height,
                backgroundColor: backgroundColor,
                marginTop: !matches ? marginTop : marginTop,
                marginLeft: !matches ? marginLeft : null,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
                paddingLeft: paddingLeft,
                justifyContent: justifyContent,
                flexDirection: display,
                borderRadius: borderRadius,
                border: border,
                maxHeight: maxHeight,
            }}
            className='card-container-outline'
        >
            {banner}
            {starIcon}
            {image}
            <div className='inner-card-container'>
                {mainContent}
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
