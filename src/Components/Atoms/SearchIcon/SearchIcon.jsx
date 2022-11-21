import './SearchIcon.css';

function SearchIcon({
    handleMouseEnter,
    handleMouseLeave,
    isHover,
    backGroundColor,
    borderRadius,
    border
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
                    border: isHover? border: null
                }}
            >
                <span className='search-icon'></span>
            </span>
        </>
    );
}

export default SearchIcon;
