import './SearchIcon.css';

function SearchIcon({
    handleMouseEnter,
    handleMouseLeave,
    isHover,
    backGroundColor,
    borderRadius,
    boxShadow,
    height,
    width,
    position,
}) {
    return (
        <>
            <span
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='search-link'
                style={{
                    backgroundColor: isHover ? backGroundColor : null,
                    borderRadius: isHover ? borderRadius : null,
                    boxShadow: isHover ? boxShadow : null,
                    height: height ? height : null,
                    width: width ? width : null,
                    position: position? position: null
                }}
            >
                <span className='search-icon'></span>
            </span>
        </>
    );
}

export default SearchIcon;
