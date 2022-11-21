import './SearchIcon.css';

function SearchIcon({
    handleMouseEnter,
    handleMouseLeave,
    isHover,
    backGroundColor,
    borderRadius,
   boxShadow
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
                    boxShadow: isHover? boxShadow: null
                }}
            >
                <span className='search-icon'></span>
            </span>
        </>
    );
}

export default SearchIcon;
